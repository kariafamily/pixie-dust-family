#!/usr/bin/env python3
"""
mickey_face_cover.py
Detects faces in images and covers them with a Mickey Mouse head silhouette.

Usage:
    python3 mickey_face_cover.py <input_folder> <output_folder>
"""

import sys
import os
import cv2
import numpy as np
from PIL import Image, ImageDraw

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------
HEAD_SCALE       = 1.4    # head circle radius relative to detected face width
EAR_SCALE        = 0.55   # ear radius relative to head radius
EAR_OFFSET_X     = 0.72   # horizontal offset of ear center (fraction of head_r)
EAR_OFFSET_Y     = 0.82   # vertical offset of ear center upward (fraction of head_r)

FRONTAL_PARAMS   = dict(scaleFactor=1.05, minNeighbors=4, minSize=(25, 25))
PROFILE_PARAMS   = dict(scaleFactor=1.05, minNeighbors=4, minSize=(25, 25))

SUPPORTED_EXTS   = {".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tiff"}

# ---------------------------------------------------------------------------
# Mickey silhouette drawing
# ---------------------------------------------------------------------------

def draw_mickey(draw: ImageDraw.ImageDraw, cx: int, cy: int, face_w: int) -> None:
    """Draw a filled black Mickey Mouse head silhouette centred at (cx, cy)."""
    head_r = int(face_w * HEAD_SCALE / 2)
    ear_r  = int(head_r * EAR_SCALE)
    dx     = int(head_r * EAR_OFFSET_X)
    dy     = int(head_r * EAR_OFFSET_Y)

    def filled_circle(x, y, r):
        draw.ellipse([x - r, y - r, x + r, y + r], fill="black")

    # Ears first so the head covers the inner overlap
    filled_circle(cx - dx, cy - dy, ear_r)  # left ear
    filled_circle(cx + dx, cy - dy, ear_r)  # right ear
    filled_circle(cx, cy, head_r)            # head


# ---------------------------------------------------------------------------
# Face detection
# ---------------------------------------------------------------------------

def detect_faces(gray: np.ndarray,
                 frontal_cascade: cv2.CascadeClassifier,
                 profile_cascade: cv2.CascadeClassifier) -> list[tuple[int, int, int, int]]:
    """Return deduplicated list of (x, y, w, h) face rectangles."""

    frontal = frontal_cascade.detectMultiScale(gray, **FRONTAL_PARAMS)
    profile = profile_cascade.detectMultiScale(gray, **PROFILE_PARAMS)

    # Also try flipped image for profile faces facing the other way
    flipped      = cv2.flip(gray, 1)
    w_img        = gray.shape[1]
    profile_flip = profile_cascade.detectMultiScale(flipped, **PROFILE_PARAMS)

    faces = []
    if len(frontal) > 0:
        faces.extend(frontal.tolist())
    if len(profile) > 0:
        faces.extend(profile.tolist())
    if len(profile_flip) > 0:
        for (x, y, w, h) in profile_flip.tolist():
            faces.append([w_img - x - w, y, w, h])  # mirror back

    if not faces:
        return []

    # Deduplicate overlapping boxes (keep the larger one)
    faces.sort(key=lambda f: f[2] * f[3], reverse=True)
    kept = []
    for fx, fy, fw, fh in faces:
        overlap = False
        for kx, ky, kw, kh in kept:
            ix = max(fx, kx)
            iy = max(fy, ky)
            iw = min(fx + fw, kx + kw) - ix
            ih = min(fy + fh, ky + kh) - iy
            if iw > 0 and ih > 0:
                intersection = iw * ih
                union = fw * fh + kw * kh - intersection
                if intersection / union > 0.35:
                    overlap = True
                    break
        if not overlap:
            kept.append((fx, fy, fw, fh))

    return kept


# ---------------------------------------------------------------------------
# Main processing
# ---------------------------------------------------------------------------

def process_folder(input_folder: str, output_folder: str) -> None:
    input_folder  = os.path.expanduser(input_folder)
    output_folder = os.path.expanduser(output_folder)
    os.makedirs(output_folder, exist_ok=True)

    frontal_cascade = cv2.CascadeClassifier(
        cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
    )
    profile_cascade = cv2.CascadeClassifier(
        cv2.data.haarcascades + "haarcascade_profileface.xml"
    )

    image_files = sorted(
        f for f in os.listdir(input_folder)
        if os.path.splitext(f)[1].lower() in SUPPORTED_EXTS
    )

    if not image_files:
        print(f"No supported image files found in: {input_folder}")
        return

    total_processed = 0
    total_faces     = 0
    flagged         = []   # images where no face was detected

    print(f"\nProcessing {len(image_files)} image(s)...\n")

    for filename in image_files:
        in_path  = os.path.join(input_folder, filename)
        out_path = os.path.join(output_folder, filename)

        # Load with OpenCV for detection
        cv_img = cv2.imread(in_path)
        if cv_img is None:
            print(f"  [ERROR ] Could not read: {filename}")
            continue

        gray  = cv2.cvtColor(cv_img, cv2.COLOR_BGR2GRAY)
        faces = detect_faces(gray, frontal_cascade, profile_cascade)

        # Load with Pillow for drawing (preserves EXIF / quality better)
        pil_img = Image.open(in_path).convert("RGB")
        draw    = ImageDraw.Draw(pil_img)

        if faces:
            for (x, y, w, h) in faces:
                cx = x + w // 2
                cy = y + h // 2
                draw_mickey(draw, cx, cy, w)
            status = f"[OK    ] {len(faces)} face(s) covered"
            total_faces += len(faces)
        else:
            flagged.append(filename)
            status = "[FLAGGED] no face detected — saved unchanged"

        pil_img.save(out_path, quality=92, subsampling=0)
        total_processed += 1
        print(f"  {status}: {filename}")

    # ------------------------------------------------------------------
    # Report
    # ------------------------------------------------------------------
    print("\n" + "=" * 60)
    print("REPORT")
    print("=" * 60)
    print(f"  Images processed : {total_processed}")
    print(f"  Total faces found: {total_faces}")
    print(f"  Images flagged   : {len(flagged)} (no face detected)")
    if flagged:
        print("\n  Flagged images (review manually):")
        for f in flagged:
            print(f"    - {f}")
    print(f"\n  Output saved to  : {output_folder}")
    print("=" * 60)


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python3 mickey_face_cover.py <input_folder> <output_folder>")
        sys.exit(1)
    process_folder(sys.argv[1], sys.argv[2])

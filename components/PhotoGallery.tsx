import Image from "next/image";

interface PhotoGalleryProps {
  images?: string[];
  labels?: string[];
  resortName?: string;
}

const defaultLabels = [
  "Resort pool area",
  "Guest room",
  "Lobby and common areas",
  "Resort dining",
  "Resort view",
  "Balcony or outdoor space",
];

export default function PhotoGallery({ images, labels, resortName }: PhotoGalleryProps) {
  if (!images || images.length === 0) return null;

  const captions = labels || defaultLabels.map((l) => resortName ? `${resortName} — ${l}` : l);

  return (
    <div>
      <h2
        className="text-2xl font-bold text-[#0D1B2A] mb-6"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        Our Photos
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {images.slice(0, 6).map((src, i) => (
          <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={src}
              alt={captions[i] || `Photo ${i + 1}`}
              fill
              className="object-cover group-hover:opacity-90 transition-opacity"
              sizes="(max-width: 640px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

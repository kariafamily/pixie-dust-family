import PhotoPlaceholder from "./PhotoPlaceholder";

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
  const captions = labels || defaultLabels.map((l) => resortName ? `${resortName} — ${l}` : l);

  return (
    <div>
      <h2
        className="text-2xl font-bold text-[#0D1B2A] mb-6"
        style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
      >
        Our Photos
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {captions.slice(0, 6).map((caption, i) => (
          <div key={i} className="group">
            {/* PHOTO SLOT: add real vacation photo here */}
            <PhotoPlaceholder
              label={caption}
              aspectRatio="4/3"
              className="group-hover:opacity-90 transition-opacity"
            />
            <p className="text-[#4A5568] text-xs mt-1 text-center">{caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

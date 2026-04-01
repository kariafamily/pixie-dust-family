"use client";

interface PhotoPlaceholderProps {
  label: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/2" | "2/1";
  className?: string;
}

const aspectRatioClasses: Record<string, string> = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "3/2": "aspect-[3/2]",
  "2/1": "aspect-[2/1]",
};

export default function PhotoPlaceholder({
  label,
  aspectRatio = "16/9",
  className = "",
}: PhotoPlaceholderProps) {
  /* PHOTO SLOT: replace this entire component with a Next.js <Image> when real photos are ready */
  return (
    <div
      className={`${aspectRatioClasses[aspectRatio]} bg-gradient-to-br from-[#D1E3F5] to-[#E8F4FD] flex flex-col items-center justify-center rounded-lg overflow-hidden ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="text-[#0072CE] mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      </div>
      <span className="text-[#4A5568] text-sm font-medium text-center px-4 leading-tight">
        {label}
      </span>
      <span className="text-[#0072CE] text-xs mt-1 opacity-60">PHOTO SLOT</span>
    </div>
  );
}

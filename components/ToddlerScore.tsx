interface ToddlerScoreProps {
  score: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export default function ToddlerScore({ score, size = "md", showLabel = true }: ToddlerScoreProps) {
  const getColor = (s: number) => {
    if (s >= 9) return "text-[#0072CE] bg-[#E8F4FD] border-[#0072CE]";
    if (s >= 7) return "text-[#003D7A] bg-[#E8F4FD] border-[#003D7A]";
    return "text-[#4A5568] bg-[#F5F8FF] border-[#D1E3F5]";
  };

  const sizeClasses = {
    sm: "text-sm px-2 py-1",
    md: "text-base px-3 py-1.5",
    lg: "text-xl px-4 py-2",
  };

  return (
    <div className={`inline-flex items-center gap-1.5 rounded-full border font-semibold ${getColor(score)} ${sizeClasses[size]}`}>
      <span>👶</span>
      <span>{score}/10</span>
      {showLabel && <span className="font-normal text-sm opacity-80">Toddler Score</span>}
    </div>
  );
}

interface Props {
  type: "story" | "guide";
}

export default function PartDivider({ type }: Props) {
  const isStory = type === "story";
  return (
    <div className="relative flex items-center my-10">
      <div className="flex-1 border-t" style={{ borderColor: "#E2DDD6" }} />
      <span
        className="mx-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
        style={{
          backgroundColor: isStory ? "#C9963A" : "#003D7A",
          color: "#ffffff",
          letterSpacing: "0.12em",
        }}
      >
        {isStory ? "Part One — The Story" : "Part Two — The Guide"}
      </span>
      <div className="flex-1 border-t" style={{ borderColor: "#E2DDD6" }} />
    </div>
  );
}

interface ProConBoxProps {
  pros: string[];
  cons: string[];
}

export default function ProConBox({ pros, cons }: ProConBoxProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-[#E8F4FD] border border-[#D1E3F5] rounded-2xl p-5">
        <h3 className="font-semibold text-[#003D7A] mb-4 flex items-center gap-2">
          <span className="bg-[#0072CE] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">✓</span>
          What We Loved
        </h3>
        <ul className="space-y-2">
          {pros.map((pro, i) => (
            <li key={i} className="flex items-start gap-2 text-[#0D1B2A] text-sm">
              <span className="text-[#0072CE] mt-0.5 shrink-0">✓</span>
              {pro}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#F5F8FF] border border-[#D1E3F5] rounded-2xl p-5">
        <h3 className="font-semibold text-[#4A5568] mb-4 flex items-center gap-2">
          <span className="bg-[#D1E3F5] text-[#4A5568] rounded-full w-6 h-6 flex items-center justify-center text-xs">✕</span>
          Things to Know
        </h3>
        <ul className="space-y-2">
          {cons.map((con, i) => (
            <li key={i} className="flex items-start gap-2 text-[#4A5568] text-sm">
              <span className="text-[#4A5568] mt-0.5 shrink-0">✕</span>
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

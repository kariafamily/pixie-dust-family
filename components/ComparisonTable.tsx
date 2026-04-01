interface ComparisonRow {
  label: string;
  resort1: string | number;
  resort2: string | number;
  winner?: 1 | 2 | "tie";
}

interface ComparisonTableProps {
  resort1Name: string;
  resort2Name: string;
  rows: ComparisonRow[];
  ourPick?: 1 | 2;
  ourPickReason?: string;
}

export default function ComparisonTable({
  resort1Name,
  resort2Name,
  rows,
  ourPick,
  ourPickReason,
}: ComparisonTableProps) {
  return (
    <div>
      <div className="overflow-x-auto rounded-2xl border border-[#D1E3F5]">
        <table className="w-full">
          <thead>
            <tr className="bg-[#003D7A] text-white">
              <th className="text-left px-5 py-4 font-semibold text-sm w-1/3">Category</th>
              <th className="text-center px-5 py-4 font-semibold text-sm w-1/3">{resort1Name}</th>
              <th className="text-center px-5 py-4 font-semibold text-sm w-1/3">{resort2Name}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F8FF]"}>
                <td className="px-5 py-3.5 text-[#0D1B2A] font-medium text-sm">{row.label}</td>
                <td
                  className={`px-5 py-3.5 text-sm text-center ${
                    row.winner === 1 ? "bg-[#E8F4FD] text-[#003D7A] font-semibold" : "text-[#4A5568]"
                  }`}
                >
                  {row.winner === 1 && <span className="inline-block mr-1">🏆</span>}
                  {row.resort1}
                </td>
                <td
                  className={`px-5 py-3.5 text-sm text-center ${
                    row.winner === 2 ? "bg-[#E8F4FD] text-[#003D7A] font-semibold" : "text-[#4A5568]"
                  }`}
                >
                  {row.winner === 2 && <span className="inline-block mr-1">🏆</span>}
                  {row.resort2}
                </td>
              </tr>
            ))}
            {ourPick && (
              <tr className="bg-[#0072CE] text-white">
                <td className="px-5 py-4 font-bold text-sm">Our Pick</td>
                <td className={`px-5 py-4 text-sm text-center font-bold ${ourPick === 1 ? "" : "opacity-50"}`}>
                  {ourPick === 1 ? "✅ Winner" : "—"}
                </td>
                <td className={`px-5 py-4 text-sm text-center font-bold ${ourPick === 2 ? "" : "opacity-50"}`}>
                  {ourPick === 2 ? "✅ Winner" : "—"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {ourPickReason && (
        <p className="mt-3 text-[#4A5568] text-sm italic px-2">
          {ourPickReason}
        </p>
      )}
    </div>
  );
}

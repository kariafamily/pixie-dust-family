import { ReactNode } from "react";

export default function ProTip({ children }: { children: ReactNode }) {
  return (
    <div
      className="rounded-xl px-5 py-4 my-6 not-prose"
      style={{
        backgroundColor: "#E8F4FD",
        borderLeft: "4px solid #0072CE",
      }}
    >
      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#003D7A" }}>
        💡 Pro Tip
      </p>
      <div className="text-sm leading-relaxed" style={{ color: "#374151" }}>
        {children}
      </div>
    </div>
  );
}

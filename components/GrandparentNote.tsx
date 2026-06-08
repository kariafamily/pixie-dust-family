import { ReactNode } from "react";

export default function GrandparentNote({ children }: { children: ReactNode }) {
  return (
    <div
      className="rounded-xl p-5 my-6 not-prose"
      style={{ backgroundColor: "#f9f5ff", border: "1px solid #d8b4fe" }}
    >
      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#7c3aed" }}>
        👴👵 Grandparent Note
      </p>
      <div className="text-sm leading-relaxed" style={{ color: "#4b5563" }}>
        {children}
      </div>
    </div>
  );
}

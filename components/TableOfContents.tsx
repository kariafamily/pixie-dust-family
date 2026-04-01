"use client";

interface TOCItem {
  id: string;
  label: string;
  level: 2 | 3;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  if (items.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // header height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-[#F5F8FF] border border-[#D1E3F5] rounded-2xl p-5">
      <h3 className="font-semibold text-[#003D7A] mb-3 text-sm uppercase tracking-wider">
        In This Review
      </h3>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "pl-3" : ""}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className="text-[#0072CE] hover:text-[#003D7A] text-sm transition-colors hover:underline block"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

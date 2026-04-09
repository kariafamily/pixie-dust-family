import Link from "next/link";

interface TipCardProps {
  icon?: string;
  category: string;
  title: string;
  description: string;
  readTime?: string;
  href: string;
}

export default function TipCard({ icon, category, title, description, readTime, href }: TipCardProps) {
  return (
    <Link
      href={href}
      className="pixie-hover group flex gap-4 p-5 bg-white border border-[#E8DAD7] rounded-2xl hover:border-[#C4978F] transition-colors"
    >
      {icon && (
        <div className="shrink-0 w-12 h-12 bg-[#F5EDEB] rounded-xl flex items-center justify-center text-2xl">
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[#8B9E89] text-xs font-medium tracking-luxury uppercase">{category}</span>
          {readTime && <span className="text-[#6B5248] text-xs opacity-60">· {readTime}</span>}
        </div>
        <h3
          className="font-light text-[#2C1F1A] mb-1 group-hover:text-[#A67B73] transition-colors text-lg leading-snug"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          {title}
        </h3>
        <p className="text-[#6B5248] text-xs leading-relaxed line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}

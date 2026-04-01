import Link from "next/link";

interface BlogCardProps {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  href: string;
}

export default function BlogCard({ date, category, title, excerpt, href }: BlogCardProps) {
  return (
    <Link
      href={href}
      className="group block p-5 bg-white border border-[#D1E3F5] rounded-2xl hover:border-[#0072CE] hover:shadow-md transition-all"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-[#E8F4FD] text-[#0072CE] text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
        <span className="text-[#4A5568] text-xs">{date}</span>
      </div>
      <h3
        className="font-semibold text-[#0D1B2A] mb-2 group-hover:text-[#0072CE] transition-colors leading-snug"
        style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
      >
        {title}
      </h3>
      <p className="text-[#4A5568] text-sm line-clamp-2 mb-3">{excerpt}</p>
      <span className="text-[#0072CE] text-sm font-semibold group-hover:underline">
        Read More →
      </span>
    </Link>
  );
}

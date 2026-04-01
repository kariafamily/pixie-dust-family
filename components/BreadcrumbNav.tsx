import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  crumbs: Crumb[];
}

export default function BreadcrumbNav({ crumbs }: BreadcrumbNavProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: crumb.href
        ? `${process.env.NEXT_PUBLIC_SITE_URL || "https://pixiedustfamily.com"}${crumb.href}`
        : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-3">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-[#4A5568]">
          {crumbs.map((crumb, i) => (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <span className="text-[#D1E3F5]">/</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="text-[#0072CE] hover:underline">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#4A5568]">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

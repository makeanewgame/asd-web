"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Breadcrump() {
  const pathname = usePathname();
  const t = useTranslations('Breadcrumb');
  const pathParts = pathname
    .split("/")
    .filter(Boolean)
    .filter((part) => part !== "en" && part !== "tr");

  // Build breadcrumb items
  const crumbs = pathParts.map((part, idx) => {
    const href = "/" + pathParts.slice(0, idx + 1).join("/");

    // Map Turkish URL segments to English keys for translation lookup
    const segmentMap: { [key: string]: string } = {
      'hakkinda': 'about',
      'iletisim': 'contact',
      'cozumler': 'solutions',
      'hizmetler': 'services',
      'haberler': 'news',
      'dokumanlar': 'documents',
      'blog': 'blog',
      'gizlilik-politikasi': 'privacy-policy',
      'danismanlik-ve-egitim-servisleri': 'consultancy-and-training-services',
    };

    // Get translated label
    const translationKey = segmentMap[part.toLowerCase()] || part.toLowerCase();

    const label = t.has(translationKey) ? t(translationKey) : part.charAt(0).toUpperCase() + part.slice(1);
    return { href, label };
  });

  return (
    <nav aria-label="Breadcrumb " className="py-6 border-b border-gray-200">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/">{t('home')}</Link>
        </li>
        {crumbs.map((crumb, idx) => (
          <li key={crumb.href} className="flex items-center">
            <span className="mx-2">
              <Image
                src="/mini-chevron-right.svg"
                alt="Chevron Right"
                width={16}
                height={16}
              />
            </span>
            {idx === crumbs.length - 1 ? (
              <span className="font-bold uppercase">{crumb.label}</span>
            ) : (
              <Link href={crumb.href}>{crumb.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

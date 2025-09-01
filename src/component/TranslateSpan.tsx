"use client";
import { usePathname } from "next/navigation";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TDiv({ children }: { children: any }) {
    const pathname = usePathname();
    const pathParts = pathname.split("/");
    const currentLocale = pathParts[1] === "en" ? "en" : "tr";
    const text = children.replace(/^"|"$/g, "");
    const [tr, en] = text.split('":"');
    return currentLocale === "tr" ? tr : en;
}
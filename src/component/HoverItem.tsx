import { Link } from "@/i18n/navigation";

type HoverItemProps = {
    children: React.ReactNode;
    link: string;
    className?: string;
};

const HoverItem = ({ children, link, className }: HoverItemProps) => {
    return (
        <Link
            // @ts-expect-error: next-intl Link type is too restrictive for dynamic routes
            href={link}
            className={`scale-100 hover:scale-90 transition-transform duration-300 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
};

export default HoverItem;
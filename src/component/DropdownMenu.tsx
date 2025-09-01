import { Link } from "@/i18n/navigation";
import React, { useState, useRef, useEffect } from "react";

type DropdownItem = {
    name: string;
    href: string;
    description?: string;
};

type DropdownMenuProps = {
    title: string;
    items: DropdownItem[];
    className?: string;
};

const DropdownMenu = ({ title, items, className }: DropdownMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 200); // 200ms gecikme
    };

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <div
            className={`relative ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className="text-primary hover:text-secondary px-3 py-2 text-sm uppercase font-[15px] hover:border-b-2 hover:border-secondary transition duration-800 ease-in-out flex items-center gap-1"
                type="button"
            >
                {title}
                <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white shadow-xl border border-gray-200 rounded-lg z-50 overflow-hidden animate-fadeIn">
                    <div className="py-2  overflow-y-auto">
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                // @ts-expect-error: next-intl Link type is too restrictive for dynamic routes
                                href={item.href}
                                className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                                onClick={() => {
                                    setIsOpen(false);
                                    if (timeoutRef.current) {
                                        clearTimeout(timeoutRef.current);
                                    }
                                }}
                            >
                                <div className="font-medium text-gray-900">{item.name}</div>
                                {/* {item.description && (
                                    <div className="text-xs text-gray-500 mt-1">
                                        {item.description}
                                    </div>
                                )} */}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;

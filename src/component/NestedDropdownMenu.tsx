import { Link } from "@/i18n/navigation";
import React, { useState, useRef, useEffect } from "react";

type DropdownItem = {
    name: string;
    href: string;
    description?: string;
    subItems?: DropdownItem[];
};

type NestedDropdownMenuProps = {
    title: string;
    items: DropdownItem[];
    className?: string;
};

const NestedDropdownMenu = ({ title, items, className }: NestedDropdownMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const subTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
            setOpenSubMenu(null);
        }, 200);
    };

    const handleSubMenuEnter = (index: number) => {
        if (subTimeoutRef.current) {
            clearTimeout(subTimeoutRef.current);
            subTimeoutRef.current = null;
        }
        setOpenSubMenu(index);
    };

    const handleSubMenuLeave = () => {
        subTimeoutRef.current = setTimeout(() => {
            setOpenSubMenu(null);
        }, 200);
    };

    // Cleanup timeouts on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            if (subTimeoutRef.current) {
                clearTimeout(subTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div
            className={`relative ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ zIndex: 1000 }}
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
                <div className="absolute top-full left-0 mt-2 w-96 bg-white shadow-xl border border-gray-200 rounded-lg overflow-visible animate-fadeIn" style={{ zIndex: 1001 }}>
                    <div className="py-2">
                        {items.map((item, index) => (
                            <div key={index} className="relative">
                                {item.subItems ? (
                                    <div
                                        className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200 border-b border-gray-100 last:border-b-0 cursor-pointer"
                                        onMouseEnter={() => handleSubMenuEnter(index)}
                                        onMouseLeave={handleSubMenuLeave}
                                    >
                                        <div className="font-medium text-gray-900 flex items-center justify-between">
                                            {item.name}
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </div>


                                        {/* Sub Menu */}
                                        {openSubMenu === index && (
                                            <div className="absolute left-full top-0 ml-2 w-80 bg-white shadow-xl border border-gray-200 rounded-lg overflow-hidden animate-fadeIn" style={{ zIndex: 1002 }}>
                                                <div className="py-2">
                                                    {item.subItems.map((subItem, subIndex) => (
                                                        <Link
                                                            key={subIndex}
                                                            // @ts-expect-error: next-intl Link type is too restrictive for dynamic routes
                                                            href={subItem.href}
                                                            className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                                                            onClick={() => {
                                                                setIsOpen(false);
                                                                setOpenSubMenu(null);
                                                                if (timeoutRef.current) {
                                                                    clearTimeout(timeoutRef.current);
                                                                }
                                                                if (subTimeoutRef.current) {
                                                                    clearTimeout(subTimeoutRef.current);
                                                                }
                                                            }}
                                                        >
                                                            <div className="font-medium text-gray-900">{subItem.name}</div>

                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
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
                                        {item.description && (
                                            <div className="text-xs text-gray-500 mt-1">
                                                {item.description}
                                            </div>
                                        )}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default NestedDropdownMenu;

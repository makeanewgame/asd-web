
"use client";

import { siteNavigation } from "@/utils/site-navgation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import GlassButton from "./GlassButton";
import { Link } from "@/i18n/navigation";
import TDiv from "./TranslateSpan";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";

export default function Navbar() {
  const t = useTranslations("Menu")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null)

  return (

    <div className="w-full flex justify-center relative">
      <div className='h-[200px] w-full fixed top-0' style={{
        background: 'linear-gradient(180deg, #071329 10%, rgba(24, 66, 143, 0.00) 100%)',
      }}></div>

      <div className="GlassContainer fixed z-50 rounded-full mt-4  w-[95%]">
        <div className="GlassContent flex justify-between items-center px-2 md:px-10">
          <Link href="/">
            <Image src={"/logo.svg"} alt="Logo" width={152} height={45} priority className="p-4" />
          </Link>
          {/* Desktop Menu */}
          <div className="flex sm:gap-6 font-display py-2 items-center">

            {siteNavigation.map(navigation => {
              // Eğer alt menü varsa DropdownMenu kullan
              if (navigation.subMenus && navigation.subMenus.length > 0) {
                const dropdownItems = navigation.subMenus.map(subMenu => ({
                  name: t(subMenu.name),
                  href: subMenu.href
                }));

                return (
                  <DropdownMenu
                    key={navigation.name}
                    title={t(navigation.name)}
                    items={dropdownItems}
                    className="text-[#ADD2FF] hidden xl:flex uppercase my-4 tracking-widest"
                  />
                );
              }

              // Alt menü yoksa normal Link kullan
              return (
                <div key={navigation.name} className="text-[#ADD2FF] uppercase my-4 tracking-widest hidden xl:flex">
                  <Link href={navigation.href as "/" | "/about" | "/contact"}>
                    {t(navigation.name)}
                  </Link>
                </div>
              )
            })}

            <div className="flex gap-2">
              <GlassButton size="large">
                <Image src={"/phone.svg"} alt="Chevron Right" width={24} height={24} />
              </GlassButton>

              <GlassButton size="large">
                <TDiv>{'"Satışdaki Projeler":"Projects On Sale"'}</TDiv>
              </GlassButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg transition-colors duration-200 hover:bg-white/10"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <span className={`block w-6 h-0.5 bg-[#ADD2FF] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                  }`}></span>
                <span className={`block w-6 h-0.5 bg-[#ADD2FF] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                <span className={`block w-6 h-0.5 bg-[#ADD2FF] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                  }`}></span>
              </div>
            </button>
          </div>


        </div>
        <div className="GlassMaterial">
          <div className="GlassEdgeReflection"></div>
          <div className="GlassEmbossReflection"></div>
          <div className="GlassRefraction"></div>
          <div className="GlassBlur"></div>
          <div className="BlendLayers"></div>
          <div className="BlendEdge"></div>
          <div className="Highlight"></div>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div className={`fixed inset-0 z-50 xl:hidden ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Side Menu */}
        <div className={`absolute right-0 top-0 h-full w-80 bg-[#071329] transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          {/* Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <Image src={"/logo.svg"} alt="Logo" width={120} height={36} />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <svg className="w-6 h-6 text-[#ADD2FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Content */}
          <div className="p-6">
            <div className="flex flex-col space-y-6">
              {siteNavigation.map(navigation => {
                // Eğer alt menü varsa
                if (navigation.subMenus && navigation.subMenus.length > 0) {
                  const isExpanded = expandedSubmenu === navigation.name;

                  return (
                    <div key={navigation.name} className="text-[#ADD2FF]">
                      <button
                        onClick={() => setExpandedSubmenu(isExpanded ? null : navigation.name)}
                        className="w-full flex justify-between items-center uppercase tracking-widest font-semibold text-lg py-2 border-b border-white/5 hover:text-white transition-colors"
                      >
                        <span>{t(navigation.name)}</span>
                        <svg
                          className={`w-5 h-5 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                        <div className="pl-4 py-3 space-y-3">
                          {navigation.subMenus.map(subMenu => (
                            <Link
                              key={subMenu.name}
                              href={subMenu.href as "/" | "/about" | "/contact"}
                              className="block text-[#ADD2FF]/70 hover:text-[#ADD2FF] transition-colors py-1"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setExpandedSubmenu(null);
                              }}
                            >
                              {t(subMenu.name)}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                // Alt menü yoksa normal Link
                return (
                  <Link
                    key={navigation.name}
                    href={navigation.href as "/" | "/about" | "/contact"}
                    className="text-[#ADD2FF] uppercase tracking-widest hover:text-white transition-colors text-lg font-semibold py-2 border-b border-white/5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(navigation.name)}
                  </Link>
                )
              })}

              {/* Mobile Buttons */}
              <div className="flex flex-col gap-4 mt-8 pt-6 ">
                <div className="flex">
                  <GlassButton size="large">
                    <Image src={"/phone.svg"} alt="Phone" width={24} height={24} />
                    <span className="ml-2">İletişim</span>
                  </GlassButton>

                </div>

                <div className="flex">

                  <GlassButton size="large">
                    <TDiv>{'"Satışdaki Projeler":"Projects On Sale"'}</TDiv>
                  </GlassButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

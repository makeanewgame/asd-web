
"use client";

import { siteNavigation } from "@/utils/site-navgation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import GlassButton from "./GlassButton";
import { Link } from "@/i18n/navigation";
export default function Navbar() {
  const t = useTranslations("Menu")

  return (

    <div className="p-4 w-full flex justify-center">
      <div className="GlassContainer fixed container z-50 rounded-full">
        <div className="GlassContent flex justify-between items-center px-10">
          <Link href="/">
            <Image src={"/logo.svg"} alt="Logo" width={152} height={45} priority />
          </Link>
          <div className="flex gap-8 font-display py-2 items-center">

            {siteNavigation.map(navigation => {
              return (
                <div key={navigation.name} className="text-[#ADD2FF] uppercase my-4 tracking-widest">
                  <Link href={navigation.href}>
                    {t(navigation.name)}
                  </Link>
                </div>
              )
            })}

            <div className="flex gap-2">
              <GlassButton icon />
              <GlassButton name="ProjectOnSale" />
            </div>

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
    </div>
  );
}


"use client";

import { siteNavigation } from "@/utils/site-navgation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import GlassButton from "./GlassButton";


export default function Navbar() {


  const t = useTranslations("Menu")

  return (
    <div className="p-4 w-full">

      <div className="container flex items-center justify-between py-1 px-10 glass-card rounded-full fixed right-0 left-0"
      >

        <Image src={"/logo.svg"} alt="Logo" width={152} height={45} priority />
        <div className="flex gap-8 font-display py-2 items-center">

          {siteNavigation.map(navigation => {
            return (
              <div key={navigation.name} className="text-[#ADD2FF] uppercase my-4 tracking-widest">
                {t(navigation.name)}
              </div>
            )
          })}

          <div className="flex gap-2">
            <GlassButton icon />
            <GlassButton name="ProjectOnSale" />
          </div>

        </div>
        <svg style={{ "display": "none" }}>
          <filter id="displacementFilter">
            <feImage href="/glass.jpg" preserveAspectRatio="none" />

            <feDisplacementMap in="SourceGraphic"
              in2="turbulence"
              scale="200" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
      </div>
    </div>

  );
}

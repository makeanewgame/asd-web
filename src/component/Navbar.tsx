
"use client";

import { siteNavigation } from "@/utils/site-navgation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import GlassButton from "./GlassButton";
import { Link } from "@/i18n/navigation";
import TDiv from "./TranslateSpan";
export default function Navbar() {
  const t = useTranslations("Menu")

  return (

    <div className="w-full flex justify-center relative">


      <div className='h-[200px] w-full fixed top-0' style={{
        background: 'linear-gradient(180deg, #071329 10%, rgba(24, 66, 143, 0.00) 100%)',
      }}></div>

      <div className="GlassContainer fixed container z-50 rounded-full mt-4">
        <div className="GlassContent flex justify-between items-center px-10">
          <Link href="/">
            <Image src={"/logo.svg"} alt="Logo" width={152} height={45} priority />
          </Link>
          <div className="flex gap-8 font-display py-2 items-center">

            {siteNavigation.map(navigation => {
              return (
                <div key={navigation.name} className="text-[#ADD2FF] uppercase my-4 tracking-widest">
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

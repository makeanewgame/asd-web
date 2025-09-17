import Image from "next/image";
import LiquiedGlassCard from "./LiquiedGlassPage";
import TDiv from "./TranslateSpan";
import Link from "next/link";

export default function Footer() {

  const pages = [
    { id: 1, title: "Anasayfa", link: "/" },
    { id: 2, title: "Hakkımızda", link: "/about" },
    { id: 3, title: "Hizmetlerimiz", link: "/services" },
    { id: 4, title: "Projeler", link: "/projects" },
    { id: 5, title: "İletişim", link: "/contact" },
  ]

  const services = [
    { id: 1, title: <TDiv>"Endüstriyel Tesisler":"Industrial Facilities"</TDiv>, link: "/services#cephe" },
    { id: 2, title: <TDiv>"İnşaat":"Construction"</TDiv>, link: "/services#cambalkon" },
    { id: 3, title: <TDiv>"Yapı-Gayrimenkul":"Real Estate"</TDiv>, link: "/services#kışbahçesi" },
    { id: 4, title: <TDiv>"Cephe Sistemleri":"Facade Systems"</TDiv>, link: "/services#aluminyum" },
    { id: 5, title: <TDiv>"Alüminyum İşleme":"Aluminum Processing"</TDiv>, link: "/services#pvc" },
    { id: 6, title: <TDiv>"Metal İşleme":"Metal Processing"</TDiv>, link: "/services#panjur" },
  ]

  return (
    <footer className="" style={{
      background: 'url(/footer_bg.webp)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="container py-10 px-4 md:py-20">

        <LiquiedGlassCard className="flex flex-col relative w-full p-2 md:p-4" contentClassName="px-4 py-4 md:px-6 md:py-4 z-0" radius="14px">
          <div className="flex flex-col xl:flex-row justify-center md:justify-start">
            <Image src="/logo.svg" alt="logo" width={120} height={75} className="md:w-[160px] md:h-[100px]" />
          </div>

          <div className="flex flex-col xl:flex-row gap-8 md:gap-[40px] mt-6 md:mt-8">
            <div className="flex flex-col text-[#ADD2FF] md:basis-2/5">
              <div className="w-full text-sm md:text-base">
                <TDiv>"ASD Cephe Sistemleri tecrübe ve bilginin birbirini tamamladığı bir ortamda yeniliklere açık ve teknolojiyi sürekli takip eden düşünce yapısı ve seçkin kadrosu ile her geçen gün sürekli olarak yeni tasarımlar üzerinde çalışmaktadır.":"ASD Façade Systems operates in an environment where experience and knowledge complement each other, constantly working on new designs with an open-minded approach to innovation and a team of distinguished professionals who continuously follow technology."</TDiv>
              </div>
              <div className="mt-4 text-sm md:text-base">
                <strong><TDiv>"Çalışma Saatleri":"Working Hours:"</TDiv></strong>
                <br />
                Pazartesi-Cuma: 08.00 – 18.00
                <br />
                Cumartesi: 08.00 – 13.00
              </div>
            </div>

            <div className="md:basis-3/5 flex flex-col md:flex-row gap-8 md:gap-0">
              <div className="md:basis-1/3">
                <div className="font-semibold text-sm md:text-base"><TDiv>"SAYFALAR":"PAGES"</TDiv></div>
                <div className="mt-4 flex flex-col gap-2">
                  {pages.map(page => (
                    <Link key={page.id} href={page.link} className="text-[#ADD2FF] hover:scale-105 transition-transform duration-200 text-sm md:text-base">
                      {page.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="md:basis-1/3">
                <div className="font-semibold text-sm md:text-base"><TDiv>"HİZMETLERİMİZ":"SERVICES"</TDiv></div>
                <div className="mt-4 flex flex-col gap-2">
                  {services.map(service => (
                    <Link key={service.id} href={service.link} className="text-[#ADD2FF] hover:scale-105 transition-transform duration-200 text-sm md:text-base">
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="md:basis-1/3">
                <div className="font-semibold text-sm md:text-base"><TDiv>"İLETİŞİM":"CONTACT"</TDiv></div>
                <div className="text-[#ADD2FF] mt-4 text-sm md:text-base leading-relaxed">
                  Çerçiller Mah. Ankara Blv. ASD Plaza No:5/D Merkez / KARABÜK <br /><br />
                  <a href="mailto:info@asdcephesistemleri.com" className="hover:text-white transition-colors">
                    info@asdcephesistemleri.com
                  </a> <br /><br />
                  <a href="tel:+903704152667" className="hover:text-white transition-colors">
                    +90 (370) 415 26 67
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[#ADD2FF] mt-6 md:mt-8 border-t border-t-[#ADD2FF]/20 pt-4 text-xs md:text-sm text-center md:text-left">
            <TDiv>"© Copyright ASDGRUP 2025. Tüm Hakları Saklıdır..":"© Copyright ASDGRUP 2025. All Rights Reserved."</TDiv>
          </div>
        </LiquiedGlassCard>
      </div>

    </footer>
  );
}

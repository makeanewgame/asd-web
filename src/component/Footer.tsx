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
      <div className="container py-20">

        <LiquiedGlassCard className="flex flex-col relative w-fit p-4" contentClassName="px-6 py-4 z-0" radius="14px">
          <Image src="/logo.svg" alt="logo" width={160} height={100} />

          <div className="flex gap-[200px] mt-8">
            <div className="flex flex-col text-[#ADD2FF] basis-2/5">
              <div className=" w-[100%]">
                <TDiv>"ASD Cephe Sistemleri tecrübe ve bilginin birbirini tamamladığı bir ortamda yeniliklere açık ve teknolojiyi sürekli takip eden düşünce yapısı ve seçkin kadrosu ile her geçen gün sürekli olarak yeni tasarımlar üzerinde çalışmaktadır.":"ASD Façade Systems operates in an environment where experience and knowledge complement each other, constantly working on new designs with an open-minded approach to innovation and a team of distinguished professionals who continuously follow technology."</TDiv>
              </div>
              <div>
                <br />
                <strong><TDiv>"Çalışma Saatleri":"Working Hours:"</TDiv></strong>
                <br />
                Pazartesi-Cuma: 08.00 – 18.00
                <br />
                Cumartesi: 08.00 – 13.00
                <br />

              </div>
            </div>
            <div className="basis-3/5 flex">
              <div className="basis-1/3">
                <div><TDiv>"SAYFALAR":"PAGES"</TDiv></div>
                <br />
                <br />
                <div className="flex flex-col gap-2">
                  {pages.map(page => (
                    <Link key={page.id} href={page.link} className="text-[#ADD2FF] hover:scale-105 transition-transform duration-200">
                      {page.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="basis-1/3">
                <div><TDiv>"HİZMETLERİMİZ":"SERVICES"</TDiv></div>
                <br />
                <br />
                <div className="flex flex-col gap-2">
                  {services.map(service => (
                    <Link key={service.id} href={service.link} className="text-[#ADD2FF] hover:scale-105 transition-transform duration-200">
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="basis-1/3">
                <div><TDiv>"İLETİŞİM":"CONTACT"</TDiv></div>
                <br />
                <br />
                <div className="text-[#ADD2FF] ">
                  Çerçiller Mah. Ankara Blv. ASD Plaza No:5/D Merkez / KARABÜK <br /><br />
                  info@asdcephesistemleri.com <br /><br />
                  +90 (370) 415 26 67
                </div>
              </div>
            </div>




          </div>

          <div className="text-[#ADD2FF] mt-8 border-t border-t-[#ADD2FF]/20 pt-4 text-sm">
            <TDiv>"© Copyright ASDGRUP 2025. Tüm Hakları Saklıdır..":"© Copyright ASDGRUP 2025. All Rights Reserved."</TDiv>
          </div>
        </LiquiedGlassCard>
      </div>

    </footer>
  );
}

"use client";

import GlassMiniBox from "@/component/GlassMiniBox";
import LiquiedGlassCard from "@/component/LiquiedGlassPage";
import TDiv from "@/component/TranslateSpan";
import Image from "next/image";

export default function Contact() {

    const advantages = [
        {
            id: "1",
            title: <TDiv>"Yüksek dayanımlı, uzun ömürlü cephe sistemleri":"Long-lasting, high-strength facade systems"</TDiv>
        },
        {
            id: "2",
            title: <TDiv>"UV ve ısı yalıtımı ile enerji verimliliği":"UV and thermal insulation with energy efficiency"</TDiv>
        },
        {
            id: "3",
            title: <TDiv>"Hızlı montaj, düşük bakım maliyeti":"Fast installation, low maintenance cost"</TDiv>
        },
        {
            id: "4",
            title: <TDiv>"İşletmenizin marka değerini yükselten modern cephe çözümleri":"Modern facade solutions that enhance your business's brand value"</TDiv>
        },
        {
            id: "5",
            title: <TDiv>"Proje özelinde esnek mühendislik ve uzman ekip desteği":"Flexible engineering and expert team support for each project"</TDiv>
        },
    ]

    return (

        <>
            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[540px] bg-gradient-to-b from-transparent to-[#0057B3]" />
                <div
                    className="pointer-events-none absolute right-0 top-0 h-[540px] w-[1200px] bg-no-repeat"
                    style={{
                        backgroundImage: `url('/endustriyel_tesisler_banner.webp')`,
                        backgroundSize: "cover",
                    }}
                />

                <div className="container pt-[480px]">
                    <div className="flex flex-col">
                        <LiquiedGlassCard className="flex flex-col relative w-fit p-4" contentClassName="px-6 py-4 z-0" radius="14px">
                            <div className="text-4xl md:text-5xl font-extrabold tracking-tight">
                                <TDiv>"Endüstriyel Tesisler":"Industrial Facilities"</TDiv>
                            </div>
                            <div className="mt-2 flex items-center gap-2 text-sm text-white/90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 19V12.267C21 11.7245 20.8896 11.1876 20.6756 10.689C20.4616 10.1905 20.1483 9.74069 19.755 9.36701L13.378 3.31001C13.0063 2.9569 12.5132 2.76001 12.0005 2.76001C11.4878 2.76001 10.9947 2.9569 10.623 3.31001L4.245 9.36701C3.85165 9.74069 3.53844 10.1905 3.3244 10.689C3.11037 11.1876 3 11.7245 3 12.267V19C3 19.5304 3.21071 20.0392 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0392 21 19.5304 21 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="opacity-70">›</span>
                                <span className="opacity-80">
                                    <TDiv>"Anasayfa":"Home"</TDiv>
                                </span>
                                <span className="opacity-70">›</span>

                                <span className="opacity-80">
                                    <TDiv>"Faaliyet Alanları":"Field of Activity"</TDiv>
                                </span>
                                <span className="opacity-70">›</span>
                                <span className="opacity-100">
                                    <TDiv>"Endüstriyel Tesisler":"Industrial Facilities"</TDiv>
                                </span>
                            </div>
                        </LiquiedGlassCard>


                        <div className="flex pt-24">
                            {/* Left: Intro text */}
                            <div className="flex flex-col basis-1/2">
                                <p className="text-xl md:text-4xl leading-snug text-white/95">
                                    <TDiv>"Dayanıklılık, Estetik ve Mühendislik Gücü":"Durability, Aesthetics and Engineering Strength"</TDiv>
                                </p>
                                <p className="mt-10 max-w-2xl text-2xl text-white/90">
                                    <TDiv>"ASD olarak endüstriyel tesislerin dış cephelerinde, sektörün en ağır çalışma koşullarına ve çevresel etkilere dayanacak çözümler geliştiriyoruz. Üretim kapasitesi yüksek, yoğun faaliyet gösteren endüstriyel alanlarda cephe sistemlerinin yalnızca estetik değil, aynı zamanda uzun ömürlü ve güvenli olması gerektiğinin bilincindeyiz. Bu nedenle projelerimizde modern mühendislik yaklaşımı, dayanıklı malzeme seçimi ve enerji verimliliği ön planda tutulur.":"At ASD, we develop solutions for the exterior facades of industrial facilities that withstand the industry's harshest operating conditions and environmental impacts. We understand that in industrial spaces with high production capacity and intense activity, facade systems must not only be aesthetically pleasing but also durable and safe. Therefore, our projects prioritize modern engineering approaches, durable materials, and energy efficiency."</TDiv>

                                </p>
                                <br />

                                <p className="text-[#849DBC] leading-relaxed">
                                    <TDiv>"Kapaklı alüminyum giydirme cephe sistemleri, kompozit kaplamalar ve galvaniz sac paneller ile tesislerinizde yalnızca koruma değil, aynı zamanda güçlü bir marka kimliği de inşa ediyoruz. UV koruması, ısı yalıtımı ve nem kontrolü sayesinde enerji tüketiminizi azaltıyor, işletme maliyetlerinizi düşürüyoruz. ASD’nin uzman ekibi, projelerin her aşamasında hızlı uygulama, esnek çözüm ve zamanında teslim garantisi sunar.":"With capped aluminum curtain wall systems, composite cladding, and galvanized sheet metal panels, we not only protect your facilities but also build a strong brand identity. We reduce your energy consumption and operating costs through UV protection, thermal insulation, and humidity control. ASD's expert team ensures rapid implementation, flexible solutions, and on-time delivery at every stage of the project."</TDiv>
                                </p>
                            </div>

                            {/* Right: Form card */}
                            <div className="flex flex-col items-end basis-1/2 gap-4">
                                <Image src={"/industrial01.webp"} alt="Industrial Facility" width={480} height={324} className=" object-contain " />
                                <Image src={"/industrial02.webp"} alt="Industrial Facility" width={480} height={324} className=" object-contain " />
                            </div>
                        </div>

                        <div className="flex flex-col my-8">
                            <h2 className="text-4xl font-bold my-12">Avantajlarımız</h2>
                            <div className="grid grid-cols-5 gap-4">
                                {advantages.map((advantage) => (
                                    <GlassMiniBox key={advantage.id} title={advantage.title} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

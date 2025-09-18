"use client";

import GlassMiniBox from "@/component/GlassMiniBox";
import LiquiedGlassCard from "@/component/LiquiedGlassPage";
import TDiv from "@/component/TranslateSpan";
import Image from "next/image";

export default function AluminumProcessing() {

    const advantages = [
        {
            id: "1",
            title: <TDiv>"Çelik, paslanmaz ve demir-dışı metal işleme
                ":"Steel, stainless and non-ferrous metal processing"</TDiv>
        },
        {
            id: "2",
            title: <TDiv>"CNC freze, talaşlı imalat, sac şekillendirme
                ":"CNC milling, machining, sheet metal forming"</TDiv>
        },
        {
            id: "3",
            title: <TDiv>"MIG / MAG ve TIG kaynak çözümleri
                ":"MIG / MAG and TIG welding solutions"</TDiv>
        },
        {
            id: "4",
            title: <TDiv>"Galvaniz, toz boyama ve krom kaplama
                ":"Galvanizing, powder coating, and chrome plating"</TDiv>
        },
        {
            id: "5",
            title: <TDiv>"Prototipten seri üretime esnek süreç yönetimi
                ":"Flexible process management from prototype to mass production"</TDiv>
        },
        {
            id: "6",
            title: <TDiv>"Hassas ölçüm ve detaylı kalite raporlama
                ":"Precise measurement and detailed quality reporting"</TDiv>
        },
    ]

    return (

        <>
            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[540px] bg-gradient-to-b from-transparent to-[#0057B3]" />
                <div
                    className="pointer-events-none absolute right-0 top-0 h-[540px] w-[950px] bg-no-repeat"
                    style={{
                        backgroundImage: `url('/metal_banner.webp')`,
                        backgroundSize: "cover",
                    }}
                />

                <div className="container pt-[480px]">
                    <div className="flex flex-col">
                        <LiquiedGlassCard className="flex flex-col relative w-fit p-4" contentClassName="px-6 py-4 z-0" radius="14px">
                            <div className="text-4xl md:text-5xl font-extrabold tracking-tight">
                                <TDiv>"Metal İşleme":"Metal Processing"</TDiv>
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
                                    <TDiv>"Metal İşleme":"Metal Processing"</TDiv>
                                </span>
                            </div>
                        </LiquiedGlassCard>


                        <div className="flex pt-24">
                            {/* Left: Intro text */}
                            <div className="flex flex-col basis-1/2">
                                <p className="text-xl md:text-4xl leading-snug text-white/95">
                                    <TDiv>"Modern Teknoloji ile Dayanıklı ve Estetik Metal Çözümleri":"Durable and Aesthetic Metal Solutions with Modern Technology"</TDiv>
                                </p>
                                <p className="mt-10 max-w-2xl text-2xl text-white/90">
                                    <TDiv>"ASD offers high-precision manufacturing capabilities for steel, stainless steel, and non-ferrous metals in the metalworking industry. Our extensive machinery allows us to handle projects of all sizes, from prototypes to mass production.":"ASD offers high-precision manufacturing capabilities for steel, stainless steel, and non-ferrous metals in the metalworking industry. Our extensive machinery allows us to handle projects of all sizes, from prototypes to mass production."</TDiv>

                                </p>
                                <br />

                                <p className="text-[#849DBC] leading-relaxed">
                                    <TDiv>"Talaşlı imalat, CNC freze, sac şekillendirme, pres ve büküm işlemleri ile ihtiyacınıza uygun parçaları titizlikle üretiriz. MIG/MAG ve TIG kaynak uygulamalarında uluslararası standartlara uygun çözümler sunarak dayanıklılığı garanti ederiz. Yüzey işlemlerinde galvaniz, elektrostatik toz boyama ve krom kaplama alternatifleriyle parçalarınızı hem korozyona karşı korur hem de estetik açıdan güçlendiririz. ":"We meticulously produce parts tailored to your needs using machining, CNC milling, sheet metal forming, pressing, and bending processes. We guarantee durability by offering solutions that meet international standards in MIG/MAG and TIG welding applications. We offer surface treatments such as galvanizing, electrostatic powder coating, and chrome plating, protecting your parts from corrosion and enhancing their aesthetic appeal."</TDiv>
                                </p>


                            </div>

                            {/* Right: Form card */}
                            <div className="flex flex-col items-end basis-1/2 gap-4">
                                <Image src={"/metal01.webp"} alt="Industrial Facility" width={480} height={324} className=" object-contain " />
                                <Image src={"/metal02.webp"} alt="Industrial Facility" width={480} height={324} className=" object-contain " />
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

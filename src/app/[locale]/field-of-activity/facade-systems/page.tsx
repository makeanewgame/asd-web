"use client";

import GlassMiniBox from "@/component/GlassMiniBox";
import LiquiedGlassCard from "@/component/LiquiedGlassPage";
import TDiv from "@/component/TranslateSpan";
import Image from "next/image";

export default function RealEstate() {

    const advantages = [
        {
            id: "1",
            title: <TDiv>"Silikon giydirme cepheler ile su geçirmez, modern yüzeyler":"Waterproof, modern surfaces with silicone cladding facades"</TDiv>
        },
        {
            id: "2",
            title: <TDiv>"Alüminyum kompozit paneller ile hafiflik ve dayanıklılık":"Lightweight and durable with aluminum composite panels"</TDiv>
        },
        {
            id: "3",
            title: <TDiv>"Havalandırmalı cephe mantolama ile enerji tasarrufu":"Energy savings with ventilated facade insulation"</TDiv>
        },
        {
            id: "4",
            title: <TDiv>"Modüler cam cepheler ile doğal ışık ve modern görünüm":"Modular glass facades with natural light and modern appearance"</TDiv>
        },
        {
            id: "5",
            title: <TDiv>"Uzun ömürlü, bakım gereksinimi düşük mühendislik çözümleri":"Long-lasting, low-maintenance engineering solutions"</TDiv>
        },
    ]

    return (

        <>
            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[540px] bg-gradient-to-b from-transparent to-[#0057B3]" />
                <div
                    className="pointer-events-none absolute right-0 top-0 h-[540px] w-[950px] bg-no-repeat"
                    style={{
                        backgroundImage: `url('/cephe_sistemleri_banner.webp')`,
                        backgroundSize: "cover",
                    }}
                />

                <div className="container pt-[480px]">
                    <div className="flex flex-col">
                        <LiquiedGlassCard className="flex flex-col relative w-fit p-4" contentClassName="px-6 py-4 z-0" radius="14px">
                            <div className="text-4xl md:text-5xl font-extrabold tracking-tight">
                                <TDiv>"Cephe Sistemleri":"Facade Systems"</TDiv>
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
                                    <TDiv>"Cephe Sistemleri":"Facade Systems"</TDiv>
                                </span>
                            </div>
                        </LiquiedGlassCard>


                        <div className="flex pt-24">
                            {/* Left: Intro text */}
                            <div className="flex flex-col basis-1/2">
                                <p className="text-xl md:text-4xl leading-snug text-white/95">
                                    <TDiv>"Uzun Ömürlü, Güvenli ve Fonksiyonel Cephe Çözümleri":"Long-lasting, safe, and functional facade solutions"</TDiv>
                                </p>
                                <p className="mt-10 max-w-2xl text-2xl text-white/90">
                                    <TDiv>"Cephe sistemleri, bir yapının ilk izlenimini belirleyen en önemli unsur olmakla birlikte, estetik görünümün yanı sıra enerji verimliliği, güvenlik ve dayanıklılık açısından da kritik rol oynar. ASD, projelere özel geliştirdiği cephe çözümleriyle mimarinin ruhunu yansıtan, dayanıklı ve fonksiyonel sistemler sunar.":"Facade systems are the most important element that determines a building's first impression, playing a critical role not only in aesthetics but also in energy efficiency, security, and durability. ASD offers durable and functional systems that reflect the spirit of architecture with its custom-designed façade solutions."</TDiv>

                                </p>
                                <br />

                                <p className="text-[#849DBC] leading-relaxed">
                                    <TDiv>"Silikon giydirme cephe sistemleri, pürüzsüz yüzeyleri ve su geçirmez yapısıyla modern binaların vazgeçilmezi olurken; alüminyum kompozit paneller, hafifliği ve sınırsız renk seçeneğiyle projelere estetik bir kimlik kazandırır. Havalandırmalı mantolama çözümlerimiz, ısı ve nem kontrolüyle iç mekân konforunu artırırken enerji tasarrufu sağlar. Modüler cam cephe sistemleri ise maksimum gün ışığı ve çağdaş tasarım avantajı sunar.":"Silicone curtain wall systems, with their smooth surfaces and waterproof structure, are indispensable for modern buildings, while aluminum composite panels, with their light weight and unlimited color options, add aesthetic value to projects. Our ventilated cladding solutions increase indoor comfort with heat and humidity control, while also saving energy. Modular glass facade systems offer maximum daylight and the advantage of contemporary design."</TDiv>
                                </p>

                                <br />

                            </div>

                            {/* Right: Form card */}
                            <div className="flex flex-col items-end basis-1/2 gap-4">
                                <Image src={"/cephe01.webp"} alt="Industrial Facility" width={480} height={324} className=" object-contain " />
                                <Image src={"/cephe02.webp"} alt="Industrial Facility" width={480} height={324} className=" object-contain " />
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

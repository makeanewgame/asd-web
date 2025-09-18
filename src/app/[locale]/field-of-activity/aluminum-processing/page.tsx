"use client";

import GlassMiniBox from "@/component/GlassMiniBox";
import LiquiedGlassCard from "@/component/LiquiedGlassPage";
import TDiv from "@/component/TranslateSpan";
import Image from "next/image";

export default function AluminumProcessing() {

    const advantages = [
        {
            id: "1",
            title: <TDiv>"CNC kesim, hassas büküm ve profil şekillendirme":"CNC cutting, precision bending, and profile shaping"</TDiv>
        },
        {
            id: "2",
            title: <TDiv>"Ekstrüzyon profil ve levha işleme":"Extrusion profile and sheet processing"</TDiv>
        },
        {
            id: "3",
            title: <TDiv>"UV dayanımlı, uzun ömürlü yüzey işlemleri":"UV-resistant, long-lasting surface treatments"</TDiv>
        },
        {
            id: "4",
            title: <TDiv>"Anodize, toz boyama ve özel kaplama seçenekleri":"Anodizing, powder coating, and special coating options"</TDiv>
        },
        {
            id: "5",
            title: <TDiv>"Proje bazlı kalite kontrol ve zamanında teslimat":"Project-based quality control and timely delivery"</TDiv>
        },
    ]

    return (
        <>
            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[540px] bg-gradient-to-b from-transparent to-[#0057B3]" />
                <div
                    className="pointer-events-none absolute right-0 top-0 h-[540px] w-[950px] bg-no-repeat"
                    style={{
                        backgroundImage: `url('/alu_banner.webp')`,
                        backgroundSize: "cover",
                    }}
                />

                <div className="container pt-[480px]">
                    <div className="flex flex-col">
                        <LiquiedGlassCard className="flex flex-col relative w-fit p-4" contentClassName="px-6 py-4 z-0" radius="14px">
                            <div className="text-4xl md:text-5xl font-extrabold tracking-tight">
                                <TDiv>"Alüminyum İşleme":"Aluminum Processing"</TDiv>
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
                                    <TDiv>"Alüminyum İşleme":"Aluminum Processing"</TDiv>
                                </span>
                            </div>
                        </LiquiedGlassCard>


                        <div className="flex pt-24">
                            {/* Left: Intro text */}
                            <div className="flex flex-col basis-1/2">
                                <p className="text-xl md:text-4xl leading-snug text-white/95">
                                    <TDiv>"Dayanıklılık, Estetik ve Mühendislik Gücü":"Durability, Aesthetics, and Engineering Power"</TDiv>
                                </p>
                                <p className="mt-10 max-w-2xl text-2xl text-white/90">
                                    <TDiv>"Alüminyum, hafifliği, korozyon direnci ve estetik özellikleriyle çağdaş mimarinin en önemli malzemelerinden biridir. ASD, alüminyum işleme alanındaki yüksek teknolojiye sahip üretim altyapısı sayesinde her ölçekte projeye özel çözümler sunar.":"Aluminum, with its light weight, corrosion resistance, and aesthetic properties, is one of the most important materials in contemporary architecture. ASD offers customized solutions for projects of all sizes thanks to its high-tech aluminum processing infrastructure."</TDiv>

                                </p>
                                <br />

                                <p className="text-[#849DBC] leading-relaxed">
                                    <TDiv>"CNC kontrollü kesim, hassas büküm ve profil şekillendirme süreçleriyle en karmaşık tasarımları dahi yüksek doğrulukla üretiriz. Ekstrüzyon profil ve levha işleme, kaynak, delik açma gibi farklı uygulamalarla ihtiyaçlarınıza uygun parçalar elde ederiz. Yüzey işlemlerinde anodize, toz boyama ve poliüretan kaplama seçenekleri sunarak hem estetik hem de uzun ömürlü çözümler üretiyoruz. ":"We produce even the most complex designs with high accuracy using CNC-controlled cutting, precision bending, and profile shaping processes. We create parts tailored to your needs through various processes, including extrusion profile and sheet metal processing, welding, and hole-drilling. We offer anodized, powder-coated, and polyurethane coating options for surface finishes, creating solutions that are both aesthetically pleasing and durable."</TDiv>
                                </p>


                            </div>

                            {/* Right: Form card */}
                            <div className="flex flex-col items-end basis-1/2 gap-4">
                                <Image src={"/alu01.webp"} alt="Industrial Facility" width={480} height={324} className=" object-contain " />
                                <Image src={"/alu02.webp"} alt="Industrial Facility" width={480} height={324} className=" object-contain " />
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

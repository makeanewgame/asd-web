"use client";

import GlassMiniBox from "@/component/GlassMiniBox";
import LiquiedGlassCard from "@/component/LiquiedGlassPage";
import TDiv from "@/component/TranslateSpan";
import Image from "next/image";

export default function Construction() {

    const advantages = [
        {
            id: 1,
            title: <TDiv>"Konut, ticari ve endüstriyel projelerde tek noktadan çözüm":"One-stop solution for residential, commercial, and industrial projects"</TDiv>
        },
        {
            id: 2,
            title: <TDiv>"Temelden bitirmeye kadar tüm süreç yönetimi":"Comprehensive process management from foundation to finish"</TDiv>
        },
        {
            id: 3,
            title: <TDiv>"Zamanında teslim, kaliteli malzeme garantisi":"On-time delivery, quality material guarantee"</TDiv>
        },
        {
            id: 4,
            title: <TDiv>"İş sağlığı ve güvenliği standartlarına tam uyum":""Full compliance with occupational health and safety standards"</TDiv>
        },
        {
            id: 5,
            title: <TDiv>"Çevre dostu, sürdürülebilir inşaat uygulamaları":"Environmentally friendly, sustainable construction practices"</TDiv>
        },
    ]

    return (

        <>
            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[540px] bg-gradient-to-b from-transparent to-[#0057B3]" />
                <div
                    className="pointer-events-none absolute right-0 top-0 h-[540px] w-[950px] bg-no-repeat"
                    style={{
                        backgroundImage: `url('/construction_banner.webp')`,
                        backgroundSize: "cover",
                    }}
                />

                <div className="container pt-[480px]">
                    <div className="flex flex-col">
                        <LiquiedGlassCard className="flex flex-col relative w-fit p-4" contentClassName="px-6 py-4 z-0" radius="14px">
                            <div className="text-4xl md:text-5xl font-extrabold tracking-tight">
                                <TDiv>"İnşaat":"Construction"</TDiv>
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
                                    <TDiv>"İnşaat":"Construction"</TDiv>
                                </span>
                            </div>
                        </LiquiedGlassCard>


                        <div className="flex pt-24">
                            {/* Left: Intro text */}
                            <div className="flex flex-col basis-1/2">
                                <p className="text-xl md:text-4xl leading-snug text-white/95">
                                    <TDiv>"Her Ölçekten Projede Güvenilir ve Sürdürülebilir Çözümler":"Every Project Reliable and Sustainable Solutions"</TDiv>
                                </p>
                                <p className="mt-10 max-w-2xl text-2xl text-white/90">
                                    <TDiv>" ASD, inşaat sektöründe çok yönlü uzmanlığıyla konut, ticari ve endüstriyel projelerde temelden anahtar teslim bitirmeye kadar tüm süreçleri yönetir. Deneyimli mühendislik kadromuz ve güçlü çözüm ortaklıklarımız sayesinde her ölçekten projeyi güvenle hayata geçiriyoruz. ":"At ASD, we manage all processes from foundation to turnkey completion in residential, commercial, and industrial projects with our versatile expertise in the construction sector. Thanks to our experienced engineering team and strong partnerships, we confidently bring every project to life."</TDiv>

                                </p>
                                <br />

                                <p className="text-[#849DBC] leading-relaxed">
                                    <TDiv>" Kazı ve temel çalışmalarından başlayarak betonarme ve çelik konstrüksiyon, çatı ve dış cephe imalatı, mekanik ve elektrik tesisatı, iç mekân ince işler (sıva, boya, alçı, zemin kaplamaları) dahil olmak üzere tüm inşaat süreçlerinde tek elden profesyonel hizmet sunuyoruz. Bu sayede müşterilerimiz tüm süreci tek bir noktadan yönetme kolaylığı elde eder. ":"With our comprehensive professional services, we cover all construction processes from excavation and foundation work to reinforced concrete and steel construction, roof and facade manufacturing, mechanical and electrical installations, and interior finishing (plastering, painting, drywall, flooring). This allows our clients to manage the entire process from a single point."</TDiv>
                                </p>

                                <br />

                                <p className="text-[#849DBC] leading-relaxed">
                                    <TDiv>"Ayrıca ASD, yalnızca hızlı ve kaliteli inşaat hizmeti değil, çevre dostu ve sürdürülebilir çözümler de sunar. İş sağlığı ve güvenliği standartlarına tam uyum sağlayarak, hem çalışanlarımızın güvenliğini hem de çevresel etkilerin minimum seviyede tutulmasını sağlıyoruz. ":"In addition, ASD offers not only fast and high-quality construction services but also environmentally friendly and sustainable solutions. By fully complying with occupational health and safety standards, we ensure the safety of our employees while minimizing environmental impacts."</TDiv>
                                </p>
                            </div>

                            {/* Right: Form card */}
                            <div className="flex flex-col items-end basis-1/2 gap-4">
                                <Image src={"/construction01.webp"} alt="Industrial Facility" width={480} height={324} className=" object-contain " />
                                <Image src={"/construction02.webp"} alt="Industrial Facility" width={480} height={324} className=" object-contain " />
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

"use client";

import LiquiedGlassCard from "@/component/LiquiedGlassPage";
import React, { useState } from "react";

// Figma asset placeholders (served by local Dev Mode server if available)
const IMG_1852 = "http://localhost:3845/assets/ce920d84d08c08ed5f455a4c3903d23fa8944e2f.png";
const IMG_BUILDING_MASK = "http://localhost:3845/assets/c072d5a48ae1813887143dee37fe2b3c949b1693.svg";
const IMG_REVIZE = "http://localhost:3845/assets/c98077fd79af8df6e7c96c8041132b03e9eeeb46.png";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<null | { ok: boolean; text: string }>(
        null
    );

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setStatus(null);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    message,
                    subject: "Contact Form",
                    companyName: "",
                }),
            });

            if (!res.ok) throw new Error("Request failed");
            setStatus({ ok: true, text: "Mesajınız gönderildi." });
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
        } catch {
            setStatus({ ok: false, text: "Gönderim sırasında bir hata oluştu." });
        } finally {
            setLoading(false);
        }
    }

    return (

        <>
            <div className="relative min-h-[1600px] overflow-hidden">
                {/* Top gradient background */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[540px] bg-gradient-to-b from-transparent to-[#0057B3]" />

                {/* Decorative building background (approximate Figma mask) */}
                <div
                    className="pointer-events-none absolute right-0 top-0 h-[452px] w-[392px] bg-no-repeat"
                    style={{
                        backgroundImage: `url('${IMG_1852}')`,
                        backgroundSize: "312.89% 143.14%",
                        backgroundPosition: "48.44% 40.51%",
                    }}
                />

                {/* Large masked imagery - simplified layering for web */}

                <div
                    className="pointer-events-none absolute top-[800px] h-[600px] left-0 right-0 opacity-90"
                    style={{
                        WebkitMaskImage: `url('${IMG_BUILDING_MASK}')`,
                        maskImage: `url('${IMG_BUILDING_MASK}')`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "bottom",
                        maskPosition: "bottom",
                        backgroundImage: `url('${IMG_REVIZE}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "bottom",
                    }}
                />

                <div className="container pt-[480px] "

                >
                    <div className="flex flex-col">


                        <LiquiedGlassCard className="flex flex-col relative w-fit p-4" contentClassName="px-6 py-4 z-0" radius="14px">
                            <div className="text-4xl md:text-5xl font-extrabold tracking-tight">İletişim</div>
                            <div className="mt-2 flex items-center gap-2 text-sm text-white/90">
                                <span className="opacity-80">Anasayfa</span>
                                <span className="opacity-70">›</span>
                                <span className="opacity-100">İletişim</span>
                            </div>
                        </LiquiedGlassCard>


                        <div className="flex pt-24">
                            {/* Left: Intro text */}
                            <div className="flex flex-col basis-1/2">
                                <p className="text-xl md:text-3xl leading-snug text-white/95">
                                    Bizimle İletişime Geçin – Her Proje, <br /> Yeni Bir Hikâyenin Başlangıcıdır
                                </p>
                                <p className="mt-10 max-w-2xl text-lg text-white/90">
                                    Her projenin ardında bir hayal, bir ihtiyaç ve bir vizyon olduğuna inanıyoruz. İster konut, ister taahhüt projeleri… Mimarların hayalini mühendisliğin gücüyle buluştururken, her zaman en yüksek kalite standartlarını gözetiyoruz.
                                </p>
                            </div>

                            {/* Right: Form card */}
                            <div className="flex justify-center basis-1/2">
                                <LiquiedGlassCard className="relative p-8 w-[75%]" contentClassName="p-0" radius="20px">
                                    <form onSubmit={onSubmit} className="space-y-5">
                                        <div>
                                            <label className="mb-1 block text-sm">Adınız Soyadınız</label>
                                            <input
                                                type="text"
                                                required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="w-full h-11 rounded-2xl bg-[#0d214a] px-4 outline-none placeholder:text-white/60"
                                                placeholder="Adınız Soyadınız"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-1 block text-sm">Eposta Adresiniz</label>
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full h-11 rounded-2xl bg-[#0d214a] px-4 outline-none placeholder:text-white/60"
                                                placeholder="ornek@eposta.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-1 block text-sm">Telefon Numaranız</label>
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                className="w-full h-11 rounded-2xl bg-[#0d214a] px-4 outline-none placeholder:text-white/60"
                                                placeholder="+90 5xx xxx xx xx"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-1 block text-sm">Mesajınız</label>
                                            <textarea
                                                required
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                className="w-full h-36 rounded-2xl bg-[#0d214a] p-4 outline-none placeholder:text-white/60 resize-none"
                                                placeholder="Mesajınızı yazın"
                                            />
                                        </div>
                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 text-[#add2ff] hover:bg-white/15 transition-colors"
                                            >
                                                <span>Gönder</span>
                                            </button>
                                        </div>

                                        {status && (
                                            <p
                                                role="status"
                                                className={`text-sm ${status.ok ? "text-green-400" : "text-red-400"}`}
                                            >
                                                {status.text}
                                            </p>
                                        )}
                                    </form>

                                </LiquiedGlassCard>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="relative mx-auto max-w-6xl px-6 pb-24 ">


                    {/* Info cards */}
                    <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
                        <LiquiedGlassCard className="relative p-8" contentClassName="p-0" radius="20px">

                            <div className="flex items-center justify-between">
                                <span className="text-[#849dbc] text-lg">KONUM</span>
                            </div>
                            <p className="mt-2 text-white/95 text-sm">
                                Çerçiler Mahallesi Ankara Bulvarı ASD Plaza No:5/D
                                <br /> Merkez / KARABÜK
                            </p>
                        </LiquiedGlassCard>

                        <LiquiedGlassCard className="relative p-8" contentClassName="p-0" radius="20px">
                            <div className="flex items-center justify-between">
                                <span className="text-[#849dbc] text-lg">TELEFON</span>
                            </div>
                            <p className="mt-2 text-white/95 text-sm">
                                +90 370 415 2667
                                <br />+90 532 585 4878
                            </p>
                        </LiquiedGlassCard>
                        <LiquiedGlassCard className="relative p-8" contentClassName="p-0" radius="20px">
                            <div className="flex items-center justify-between">
                                <span className="text-[#849dbc] text-lg">EPOSTA</span>
                            </div>
                            <p className="mt-2 text-white/95 text-sm">info@asdcephesistemleri.com</p>
                        </LiquiedGlassCard>
                    </div>

                    {/* Working hours */}
                    <div className="mt-10 text-center text-white/90">
                        <p>
                            Çalışma Saatleri:
                            <br /> Pazartesi – Cuma: 09:00 – 18:00 &nbsp;•&nbsp; Cumartesi: 09:00 – 13:00 &nbsp;•&nbsp; Pazar: Kapalı
                        </p>
                    </div>
                </section>
            </div>
        </>

    );
}

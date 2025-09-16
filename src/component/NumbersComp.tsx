import TDiv from './TranslateSpan';

export default function NumbersComp() {
    return (
        <div className="w-full h-min-[600px]">
            <div className='flex gap-2 min-h-[550px]'>
                <div className='flex flex-col grow basis-1/3 gap-2'>
                    <div className="grow bg-transparent rounded-3xl p-6 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url('/numbers/konut_number.webp')`,
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071229] via-[#071229]/60 to-transparent rounded-3xl"></div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <h3 className="text-white text-xl lg:text-3xl font-black tracking-tight self-start">
                                <TDiv>" Tamamlanan Toplam Konut":"Completed Total Housing Units"</TDiv>
                            </h3>
                            <div className="text-white text-4xl lg:text-6xl font-black tracking-tighter self-end">
                                +700
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl p-6 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url('/numbers/makine_number.webp')`,
                            }}
                        />
                        {/* Dark to transparent overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071229] via-[#071229]/60 to-transparent rounded-3xl"></div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <h3 className="text-white text-xl lg:text-3xl font-black tracking-tight self-start">
                                <TDiv>" Makine Parkuru":"Machine Track"</TDiv>
                            </h3>
                            <div className="text-white text-4xl lg:text-5xl font-black tracking-tighter self-end">
                                +140
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl p-6 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url('/numbers/tasinir_number.webp')`,
                            }}
                        />
                        {/* Dark to transparent overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071229] via-[#071229]/60 to-transparent rounded-3xl"></div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <h3 className="text-white text-xl lg:text-3xl font-black tracking-tight self-start">
                                <TDiv>" Taşınır Envanter":"Movable Inventory"</TDiv>
                            </h3>
                            <div className="text-white text-4xl lg:text-5xl font-black tracking-tighter self-end">
                                +3526
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col grow basis-1/3 gap-2'>
                    <div className="grow bg-transparent rounded-3xl p-8 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url('/numbers/taahhut_number.webp')`,

                            }}
                        />
                        {/* Dark to transparent overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071229] via-[#071229]/50 to-transparent rounded-3xl"></div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <h3 className="text-white text-3xl lg:text-5xl font-black tracking-tight self-start mt-8">
                                <TDiv>" Taahhüt":"Commitment"</TDiv>
                            </h3>
                            <div className="text-white text-7xl lg:text-9xl font-black tracking-tighter self-end mb-8">
                                +75
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col grow basis-1/3 gap-2'>
                    <div className='flex grow gap-2'>
                        <div className="grow  basis-1/2 bg-transparent rounded-3xl p-6 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('/numbers/sehir_number.webp')`,
                                }}
                            />

                            <div className="relative z-10 h-full flex justify-between items-start">
                                <h3 className="text-white text-xl lg:text-3xl font-black tracking-tight">
                                    <TDiv>" Şehir":"City"</TDiv>
                                </h3>
                                <div className="text-white text-4xl lg:text-5xl font-black tracking-tighter self-end">
                                    +25
                                </div>
                            </div>
                        </div>
                        <div className="grow basis-1/2 bg-[#d9d9d9] rounded-3xl p-6 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('/numbers/calisan_number.webp')`,

                                }}
                            />
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <h3 className="text-[#08132a] text-xl lg:text-3xl font-black tracking-tight self-start">
                                    <TDiv>" Çalışan Sayısı":"Number of Employees"</TDiv>
                                </h3>
                                <div className="text-[#08132a] text-4xl lg:text-5xl font-black tracking-tighter self-end">
                                    +290
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grow bg-[#d9d9d9] rounded-3xl p-6 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url('/numbers/cephe_number.webp')`,

                            }}
                        />
                        <div className="relative z-10 h-full flex justify-between items-start">
                            <h3 className="text-white text-3xl lg:text-3xl font-black tracking-tight">
                                <TDiv>" Cephe ve Alüminyum":"Facade and Aluminum"</TDiv>
                            </h3>
                            <div className="text-white text-3xl lg:text-4xl font-black tracking-tighter self-end">
                                +380
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

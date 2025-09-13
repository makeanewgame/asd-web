import React from 'react'
import TDiv from './TranslateSpan';

// Image constants from Figma
const img511 = "http://localhost:3845/assets/fdf9a800538ead20bd4b1d07a127b4b6faa0c987.png";
const imgEngineeringConstructionSiteTeamOutdoor600Nw23022607171 = "http://localhost:3845/assets/77003b3cd2ccfb9329c7e2e7b97c9cb5b952a04c.png";
const imgBw2311202337685793641 = "http://localhost:3845/assets/27439e92b371aaf31a7c57d22706ebce28b7802b.png";
const img551 = "http://localhost:3845/assets/58f8910e682e5a87efd002580fe2c99d8a9be4bf.png";
const imgBlog89BekoLoder21 = "http://localhost:3845/assets/18c4a6089b6e8e5bdf279a251fb698cc3b5b5639.png";
const imgKarabukKentMeydaniMilletBahcesi6381562071952808991 = "http://localhost:3845/assets/4bb938083fa5b81ceb7fcaa2dca92d30fae0275d.png";
// SVG masks from Figma
const img512 = "http://localhost:3845/assets/01520230bb4c2e447737f6627b763add514f6630.svg";
const imgEngineeringConstructionSiteTeamOutdoor600Nw23022607172 = "http://localhost:3845/assets/cc66f08a16e655b750886241a9fd23a5af552a2f.svg";
const imgBw2311202337685794000 = "http://localhost:3845/assets/5862635c90439461658b6d93ddc7842073b9f158.svg";
const img552 = "http://localhost:3845/assets/2f2527b1a5b57e90a73afcc48cc1cb8253f5bdd3.svg";
const imgBlog89BekoLoder22 = "http://localhost:3845/assets/ecf61574542b34eb73e6573f22696c973c813d45.svg";
const imgKarabukKentMeydaniMilletBahcesi6381562071952809000 = "http://localhost:3845/assets/27aae53db93c0198565ce9eebb08fa59d33f6b57.svg";

export default function NumbersComp() {
    return (
        <div className="w-full h-min-[600px]">
            {/* Bento Grid Layout */}

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

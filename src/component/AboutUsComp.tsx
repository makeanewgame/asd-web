"use client"
import { Tab, Tabs } from '@heroui/react'
import React from 'react'
import TDiv from './TranslateSpan'
import GlassButton from './GlassButton'

export default function AboutUsComp() {
    return (
        <div className='w-[550px]'>

            <Tabs variant='underlined'>
                <Tab key="mission" title={<TDiv>"Misyon":"Mission"</TDiv>}>

                </Tab>
                <Tab key="vision" title={<TDiv>"Vizyon":"Vision"</TDiv>}>

                </Tab>

                <Tab key="quality-certificates" title={<TDiv>"Kalite Belgeleri":"Quality Certificates"</TDiv>}>
                    <div className='flex flex-col gap-4'>

                        Müşteri memnuniyetini her zaman ön planda tutarak, estetik ve fonksiyonelliği bir araya getiren modern cephe sistemleri sunmaktayız. Yenilikçi bakış açımız ve sürdürülebilir tasarım felsefemizle, projelerimizde en yüksek standartları hedefliyoruz.

                        <div className='w-fit'>

                            <GlassButton>
                                <TDiv>{'"Tümünü Görüntüle":"View All"'}</TDiv>
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                    <path d="M31 15.5C31 24.0604 24.0604 31 15.5 31C6.93959 31 0 24.0604 0 15.5C0 6.93959 6.93959 0 15.5 0C24.0604 0 31 6.93959 31 15.5Z" fill="#2587EF" />
                                    <path d="M9 15H19.844L15.737 10.146L17.263 8.854L23.31 16L17.263 23.146L15.737 21.854L19.844 17H9V15Z" fill="#08132A" />
                                </svg>
                            </GlassButton>
                        </div>

                    </div>

                </Tab>

            </Tabs>
        </div>

    )
}

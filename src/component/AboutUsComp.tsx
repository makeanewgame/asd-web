"use client"
import { Tab, Tabs } from '@heroui/react'
import React from 'react'
import TDiv from './TranslateSpan'
import GlassButton from './GlassButton'
import { Link } from '@/i18n/navigation'

export default function AboutUsComp() {
    return (
        <div className='w-[550px]'>

            <Tabs variant='underlined'>
                <Tab key="mission" title={<TDiv>"Misyon":"Mission"</TDiv>}>
                    <TDiv>"Misyonumuz; cephe sistemleri ve alüminyum sektöründe ulusal liderliğe ulaşarak, müşterilerimize değerli, güvenli ve sürdürülebilir yapılar kazandırmaktır. Çevresel duyarlılık, inovasyon ve etik değerlere bağlı kalarak, sektörde güçlü ve kalıcı bir konum elde etmek için çalışıyor; her projemizde kaliteyi, güveni ve sürekliliği ön planda tutuyoruz.":"Our mission is to achieve national leadership in the façade systems and aluminum industry, providing our customers with valuable, safe, and sustainable structures. We strive to achieve a strong and enduring position in the industry by adhering to environmental awareness, innovation, and ethical values, prioritizing quality, trust, and continuity in every project."</TDiv>
                </Tab>
                <Tab key="vision" title={<TDiv>"Vizyon":"Vision"</TDiv>}>
                    <TDiv>"ASD olarak vizyonumuz; yeniliklere ve yaratıcılığa değer veren bir anlayışla, araştırma ve geliştirmeye sürekli yatırım yapmaktır. Topluma, devlete ve çevreye karşı sorumluluklarımızın bilinciyle hareket ederken, manevi değerlere daima saygı duyuyoruz. Müşterilerimizin talep ve beklentilerini en doğru şekilde analiz ederek, imkanlarımızı bu doğrultuda yönlendiriyor; hizmet verdiğimiz firmaların ilk tercihi, rakiplerimizin ise saygı duyduğu güçlü bir marka olmayı hedefliyoruz.":"At ASD, our vision is to continuously invest in research and development with an approach that values ​​innovation and creativity. We act with awareness of our responsibilities to society, the state, and the environment, while always respecting moral values. We analyze our customers' demands and expectations accurately and direct our resources accordingly. We aim to be the first choice of the companies we serve and a strong brand respected by our competitors."</TDiv>
                </Tab>
                <Tab key="quality-certificates" title={<TDiv>"Kalite Belgeleri":"Quality Certificates"</TDiv>}>
                    <div className='flex flex-col gap-4'>
                        <TDiv>"Müşteri memnuniyetini her zaman ön planda tutarak, estetik ve fonksiyonelliği bir araya getiren modern cephe sistemleri sunmaktayız. Yenilikçi bakış açımız ve sürdürülebilir tasarım felsefemizle, projelerimizde en yüksek standartları hedefliyoruz.":"We offer modern façade systems that combine aesthetics and functionality, always prioritizing customer satisfaction. With our innovative perspective and sustainable design philosophy, we aim for the highest standards in our projects."</TDiv>

                    </div>
                </Tab>
            </Tabs>

            <div className='w-fit'>
                <Link href="/about">
                    <GlassButton>
                        <TDiv>{'"Tümünü Görüntüle":"View All"'}</TDiv>
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                            <path d="M31 15.5C31 24.0604 24.0604 31 15.5 31C6.93959 31 0 24.0604 0 15.5C0 6.93959 6.93959 0 15.5 0C24.0604 0 31 6.93959 31 15.5Z" fill="#2587EF" />
                            <path d="M9 15H19.844L15.737 10.146L17.263 8.854L23.31 16L17.263 23.146L15.737 21.854L19.844 17H9V15Z" fill="#08132A" />
                        </svg>
                    </GlassButton>
                </Link>
            </div>
        </div>

    )
}

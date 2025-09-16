import AccordionComp from '@/component/AccordionComp';
import LiquiedGlassCard from '@/component/LiquiedGlassPage'
import TDiv from '@/component/TranslateSpan'
import Image from 'next/image'
import React from 'react'


type ItemProps = {
    title: string;
    content: string;
};

const Item: React.FC<ItemProps> = ({ title, content }) => {
    return (
        <div className='flex gap-2'>
            <div className='flex flex-col h-auto pt-1 content-stretch items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <circle cx="6.5" cy="6.5" r="6" stroke="#0076F3" />
                </svg>
                <div className="h-auto grow bg-[#0076F3] w-[1px]"></div>
            </div>
            <div className='flex flex-col gap-4 h-full'>
                <h3 className='text-[15px] font-bold'><TDiv>{title}</TDiv></h3>
                <div className='text-[18px] text-[#849DBC] font-default leading-[26px] whitespace-pre-line pb-8'><TDiv>{content}</TDiv></div>
            </div>
        </div>
    );
};

const ItemReverse: React.FC<ItemProps> = ({ title, content }) => {
    return (

        <div className='flex flex-col items-stretch justify-stretch'>
            <div className="h-[100px] block grow bg-[#0076F3] w-[1px] ml-[6px]"></div>
            <div className='flex gap-2 grow'>
                <div className='flex flex-col h-auto pt-1 content-stretch items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <circle cx="6.5" cy="6.5" r="6" stroke="#0076F3" />
                    </svg>
                </div>
                <div className='flex flex-col gap-4 h-full'>
                    <h3 className='text-[15px] font-bold'><TDiv>{title}</TDiv></h3>
                    <div className='text-[18px] text-[#849DBC] font-default leading-[26px] whitespace-pre-line '><TDiv>{content}</TDiv></div>
                </div>
            </div>
        </div>

    );
};

export default function page() {
    const workflowMock = [
        {
            id: 10,
            title: <TDiv>{'"Çevre Dostu Yaklaşımımız":"Our Environmentally Friendly Approach"'}</TDiv>,
            description: <ul>
                <li>
                    <TDiv>"Enerji verimli cephe sistemleri ve yalıtım çözümleri ile yapılarımızın karbon ayak izini azaltıyoruz.":"We reduce the carbon footprint of our buildings with energy-efficient façade systems and insulation solutions."</TDiv>
                    <TDiv>"Geri dönüştürülebilir ve çevre dostu malzemeler kullanıyoruz.":"We use recyclable and environmentally friendly materials."</TDiv>
                    <TDiv>"Proje süreçlerinde atık yönetimi ve su tasarrufu politikalarını uyguluyoruz.":"We implement waste management and water saving policies throughout the project processes."</TDiv>
                </li>
            </ul>
        },
        {
            id: 11,
            title: <TDiv>{'"Sosyal Sorumluluk Çalışmalarımız":"Our Social Responsibility Initiatives"'}</TDiv>,
            description: <TDiv>{'"İhtiyaçların belirlenmesinin ardından, müşterilerimize özel olarak hazırlanan teklif sunulur. Teklifin kabul edilmesi durumunda, taraflar arasında resmi bir sözleşme imzalanır.":"Following the identification of needs, a proposal tailored specifically for our clients is presented. Upon acceptance of the proposal, a formal contract is signed between the parties."'}</TDiv>
        },

    ]

    const personMockup = [
        { id: 1, img: "/person001.webp", name: "Ahmet Yılmaz", position: "Yönetim Kurulu Başkanı", description: "İnşaat sektöründe 30 yılı aşkın deneyime sahip olan Ahmet Yılmaz, mühendislik ve proje yönetimi alanındaki uzmanlığını ASD Yapı’ya taşıdı. Stratejik vizyonu ve liderlik anlayışı ile firmanın büyüme hedeflerini yönlendiriyor." },
        { id: 2, img: "/person002.webp", name: "Mehmet Demir", position: "Genel Müdür", description: "Mehmet Demir, inşaat sektöründe 20 yılı aşkın deneyime sahip bir uzmandır. Proje yönetimi konusundaki derin bilgisi ile ASD Yapı'nın başarılı projelerine imza atmıştır." },
        { id: 3, img: "/person003.webp", name: "Ayşe Yılmaz", position: "Finans Müdürü", description: "Ayşe Yılmaz, finansal yönetim alanında uzmanlaşmış bir profesyoneldir. ASD Yapı'nın mali stratejilerini belirlemede önemli bir rol oynamaktadır." },
        { id: 4, img: "/person004.webp", name: "Fatma Kara", position: "Pazarlama Müdürü", description: "Fatma Kara, pazarlama ve marka yönetimi konularında deneyimli bir uzmandır. ASD Yapı'nın pazarlama stratejilerini başarıyla uygulamaktadır." },

    ]

    return (
        <div className='overflow-hidden'>

            <div className='w-full absolute z-0 top-0 left-0' style={{
                height: "calc(100vh - 280px)"
            }}>
                <Image src={"/about-text.svg"} alt="text-bg" fill className='object-cover object-bottom' />
            </div>
            <div className='w-full absolute z-1 top-0 left-0' style={{
                height: "calc(100vh - 380px)"
            }}>
                <Image src={"/asd-smile.svg"} alt="text-bg" fill className='object-contain' />
            </div>

            <div className='container z-10 relative pt-[400px] flex gap-4 flex-col'>

                <LiquiedGlassCard className="flex flex-col relative w-fit p-4" contentClassName="px-6 py-4 z-0" radius="14px">
                    <div className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        <TDiv>"Kurumsal":"Corporate"</TDiv>
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
                        <span className="opacity-100">
                            <TDiv>"Kurumsal":"Corporate"</TDiv>
                        </span>
                    </div>
                </LiquiedGlassCard>

                <div className='w-[70%]'>
                    <div className='text-[22px] font-default leading-[40px] whitespace-pre-line'><TDiv>{'"  ASD İnşaat, tecrübe ve bilginin birbirini tamamladığı bir ortamda, yeniliklere açık bir yaklaşım benimsemektedir. Teknolojiyi sürekli takip eden düşünce yapımız ve alanında uzmanlaşmış seçkin kadromuzla, her geçen gün yeni tasarımlar üzerinde çalışarak sektördeki gelişmelere öncülük ediyoruz.\n\n Müşteri memnuniyetini her zaman ön planda tutarak, estetik ve fonksiyonelliği bir araya getiren modern cephe sistemleri sunmaktayız.\n\n Yenilikçi bakış açımız ve sürdürülebilir tasarım felsefemizle, projelerimizde en yüksek standartları hedefliyoruz.\n\n ASD Cephe Sistemleri olarak, her tasarımın arkasında yatan mühendislik ve estetik anlayışı ile sektörde fark yaratmaya devam ediyoruz.":"WE BUILD FOR TOMORROW"'}</TDiv></div>
                </div>
                <h2 className='text-[68px] text-white font-bold my-8'>
                    <TDiv>"Tarihçe":"History"</TDiv>
                </h2>
                <div className='flex  gap-8'>
                    <Item title='"2008 – Temellerin Atılması":"2008 – Laying the Foundations"' content='"ASD Yapı, mühendislik tecrübesi ve mimari vizyonu bir araya getiren üç girişimcinin ortak hayali olarak kuruldu. İlk günden itibaren, yalnızca cephe sistemleri üretmek değil, projelere değer katacak çözümler geliştirmek hedeflendi.":"ASD Yapı was founded as a shared dream by three entrepreneurs who combined engineering expertise and architectural vision. From day one, the goal was not just to produce façade systems but to develop solutions that would add value to projects."' />
                    <Item title='"2013 – Konut Sektöründe Güçlü Adımlar":"2013 – Strong Steps in the Housing Sector"' content='"ASD Yapı, mühendislik tecrübesi ve mimari vizyonu bir araya getiren üç girişimcinin ortak hayali olarak kuruldu. İlk günden itibaren, yalnızca cephe sistemleri üretmek değil, projelere değer katacak çözümler geliştirmek hedeflendi.":"ASD Yapı was founded as a shared dream by three entrepreneurs who combined engineering expertise and architectural vision. From day one, the goal was not just to produce façade systems but to develop solutions that would add value to projects."' />
                    <Item title='"2019 – Ulusal Çapta Yaygınlaşma":"2008 – Laying the Foundations"'
                        content='"Türkiye genelinde 15 şehirde, eş zamanlı devam eden projelerle hizmet ağı genişletildi. Kamu binaları, ticari yapılar ve lüks konut projeleri portföye eklendi.":"The service network has been expanded with simultaneous projects in 15 cities across Türkiye. Public buildings, commercial buildings, and luxury residential projects have been added to the portfolio."' />
                    <Item title='"Bugün":"2008 – Today"' content='"Konut ve taahhüt projelerinde yüzlerce başarı hikâyesine imza atan ASD Yapı, mühendislik, estetik ve dayanıklılığı buluşturan çözümlerle geleceğin yapılarında yer almaya devam ediyor.":"Having achieved hundreds of success stories in housing and contracting projects, ASD Yapı continues to take its place in the buildings of the future with solutions that combine engineering, aesthetics, and durability."' />
                </div>
            </div>

            <div className='w-full h-[1px] bg-[#0076F3]'></div>
            <div className='container flex gap-8'>
                <div className='w-[200px]'></div>
                <ItemReverse title='"2010 – İlk Büyük Taahhüt Projesi":"2010 – First Major Commitment Project"'
                    content='"Türkiye’nin önde gelen müteahhitlik firmalarından biriyle yürütülen 50.000 m²’lik cephe uygulaması, ASD Yapı’nın sektördeki bilinirliğini artırdı ve markanın güvenilir çözüm ortağı imajını güçlendirdi.":"ASD Yapı’s façade application of 50,000 m² carried out with one of Turkey’s leading contracting firms increased ASD Yapı’s visibility in the sector and strengthened the brand’s image as a reliable solution partner."' />
                <ItemReverse title='"2016 – Teknoloji ve Üretim Yatırımı":"2016 – Technology and Production Investment"' content='"Artan talep ve genişleyen proje portföyü doğrultusunda, son teknolojiye sahip üretim hattı ve Ar-Ge bölümü devreye alındı. Bu adım, hem kalite standartlarını yükseltti hem de projelerin teslim sürelerini kısalttı.":"In response to increasing demand and an expanding project portfolio, a state-of-the-art production line and R&D department were launched. This step both raised quality standards and shortened project delivery times."' />
                <ItemReverse title='"2023 – Sürdürülebilirlik Odaklı Projeler":"2023 – Sustainability-Focused Projects"'
                    content='"Enerji verimliliği ve çevre dostu malzeme kullanımı, tüm projelerin ana prensibi haline geldi. ASD Yapı, sürdürülebilir cephe çözümleriyle sektörde örnek gösterilen firmalardan biri oldu.":"Energy efficiency and the use of environmentally friendly materials have become the cornerstone of all projects. ASD Yapı has become an exemplary company in the industry for its sustainable façade solutions."' />
            </div>

            <div className='overflow-hidden' style={{
                background: "url('/about-us-bg.webp') no-repeat center",
                backgroundSize: "contain",
                backgroundPosition: "left",
                height: "calc(100vh - 400px)"
            }}>
                <div className='container'>

                    <h2 className='text-[68px] text-white font-bold my-8'>
                        <TDiv>"Yönetim Kadromuz":"Our Management Team"</TDiv>
                    </h2>
                    <div className='flex gap-4'>
                        {personMockup.map((person, index) => (
                            <div key={index} className='flex flex-col items-center justify-center gap-4 my-4 basis-1/4 backdrop-blur-3xl border-1 border-white/10 p-4 bg-blue-950/50 rounded-xl'>
                                <Image src={person.img} alt={person.name} width={100} height={100} className='rounded-full' />
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='text-xl font-semibold'>{person.name}</h3>
                                        <p className='text text-white'>{person.position}</p>
                                    </div>
                                    <p className='text-sm text-[#849DBC]'>{person.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='bg-[#F3F9FF]'>
                <div className='container py-16'>
                    <div className='flex justify-between text-sm text-black mt-8'>
                        <div><TDiv>"30+ Yıllık Deneyim":"30+ Years of Experience"</TDiv></div>
                        <div><TDiv>"Hayatın Kendisinden İlham Alıyoruz":"We Draw Inspiration from Life Itself"</TDiv></div>
                    </div>
                    <h2 className='text-[68px] font-bold my-8 text-[#08132A]'><TDiv>"Sürdürülebilirlik ve Sosyal Sorumluluk":"Our Sustainability and Social Responsibility"</TDiv></h2>
                    <div className='text-[28px] text-[#08132A] mb-8 leading-10 font-light'>
                        <TDiv>"ASD Yapı olarak, yalnızca bugünün ihtiyaçlarını karşılayan yapılar inşa etmeyi değil, gelecek nesillere değer katan projeler bırakmayı hedefliyoruz. Tüm çalışmalarımızda çevresel etkileri en aza indirmek, enerji verimliliğini artırmak ve toplumsal fayda sağlamak önceliklerimiz arasındadır.":"At ASD Yapı, we aim not only to build structures that meet today's needs, but also to leave behind projects that add value to future generations. Minimizing environmental impact, increasing energy efficiency, and providing social benefits are among our priorities in all our work."</TDiv>
                    </div>
                    <div className='flex gap-4'>

                        <div className='basis-1/2 p-4'>
                            <Image src="/aboutus-accordion.webp" alt="workflow_image" width={600} height={400} />
                        </div>
                        <div className='basis-1/2'>
                            <AccordionComp data={workflowMock} dark={true} />
                        </div>
                    </div>

                    <div className='text-[28px] text-[#08132A] mb-8 leading-10 font-light'>
                        <TDiv>"Bizim için sürdürülebilirlik, yalnızca bir kavram değil; her projeye entegre ettiğimiz, geleceğe karşı sorumluluğumuzun bir yansımasıdır. Doğaya ve topluma duyduğumuz saygı, işimizin temelini oluşturur.":"For us, sustainability is not just a concept; it's a reflection of our responsibility to the future, something we integrate into every project. Respect for nature and society is the foundation of our work.."</TDiv>
                    </div>
                </div>
            </div>

        </div >
    )
}

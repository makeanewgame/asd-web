import AboutUsComp from '@/component/AboutUsComp';
import AccordionComp from '@/component/AccordionComp';
import CarouselCard from '@/component/CarouselCard';
import GlassButton from '@/component/GlassButton';
import LiquiedGlassCard from '@/component/LiquiedGlassPage';
import SocialMediaBar from '@/component/SocialMediaBar';
import TDiv from '@/component/TranslateSpan';
import { createClient } from '@/utils/supabase/server'
import { Accordion, AccordionItem, Tab, Tabs } from "@heroui/react";
import Image from 'next/image';


export default async function HomePage() {

  const supabase = await createClient()

  // const { data: projects } = await supabase.from('Projects').select()


  const cardMock = [
    {
      title: <TDiv>{'"Didabra Villas Safranbolu":"Didabra Villas Safranbolu"'}</TDiv>,
      description: <TDiv>{'"Ultra lüks detayları ile tasarlanmış olan DADİBRA VILLAS SAFRANBOLU, en yüksek standartlarda konfor ve güzellik sunuyor.":"Designed with ultra-luxury details, DADİBRA VILLAS SAFRANBOLU offers the highest standards of comfort and beauty."'}</TDiv>,
      id: 3,
      image: "/didabra_card.webp"
    },
    {
      title: <TDiv>{'"Didabra Villas Safranbolu":"Didabra Villas Safranbolu"'}</TDiv>,
      description: <TDiv>{'"Ultra lüks detayları ile tasarlanmış olan DADİBRA VILLAS SAFRANBOLU, en yüksek standartlarda konfor ve güzellik sunuyor.":"Designed with ultra-luxury details, DADİBRA VILLAS SAFRANBOLU offers the highest standards of comfort and beauty."'}</TDiv>,
      id: 2,
      image: "/didabra_card.webp"
    },
  ]

  const accordionMock = [
    {
      id: 1,
      title: <TDiv>{'"Neden ASD?":"Why ASD?"'}</TDiv>,
      description: <TDiv>{'"ASD Grup, 30 yılı aşkın süredir inşaat sektöründe faaliyet gösteren köklü bir firmadır. Müşteri memnuniyetini ön planda tutarak, kaliteli ve yenilikçi projeler geliştirmektedir.":"ASD Group is a well-established company that has been operating in the construction sector for over 30 years. Prioritizing customer satisfaction, it develops quality and innovative projects."'}</TDiv>
    },
    {
      id: 2,
      title: <TDiv>{'"Vizyonumuz nedir?":"What is our vision?"'}</TDiv>,
      description: <TDiv>{'"ASD Grup olarak vizyonumuz, sürdürülebilir ve çevre dostu projelerle sektörde lider konuma gelmektir. Teknolojiyi yakından takip ederek, modern ve estetik yapılar inşa etmeyi hedefliyoruz.":"As ASD Group, our vision is to become a leader in the sector with sustainable and environmentally friendly projects. By closely following technology, we aim to build modern and aesthetic structures."'}</TDiv>
    },
    {
      id: 3,
      title: <TDiv>{'"Hizmetlerimiz nelerdir?":"What are our services?"'}</TDiv>,
      description: <TDiv>{'"ASD Grup, konut, ticari ve endüstriyel projelerde geniş bir hizmet yelpazesi sunmaktadır. Proje yönetimi, tasarım, inşaat ve danışmanlık gibi alanlarda uzman ekibimizle müşterilerimize en iyi çözümleri sunuyoruz.":"ASD Group offers a wide range of services in residential, commercial, and industrial projects. With our expert team in areas such as project management, design, construction, and consulting, we provide the best solutions to our clients."'}</TDiv>
    }
  ]

  return (
    <>
      <div className='h-screen w-full'>
        <video className='w-full h-full object-cover' src="/asd-slider.mp4" autoPlay loop muted />
        <SocialMediaBar />
        <div className='h-[800px] w-full bottom-0 absolute z-10' style={{
          background: 'linear-gradient(180deg, rgba(24, 66, 143, 0%), #071329 100%)',
        }}></div>

        <div className='flex container gap-4 relative z-20 mx-auto  -mt-[550px] text-white px-4' style={{
          height: "calc(100vh / 2 - 100px)",
        }}>
          <div className='flex flex-col basis-3/5 gap-2'>
            <div className='text-[20px] text-[#ADD2FF]'><TDiv>{'"ASD GRUP":"ASD GROUP"'}</TDiv></div>
            <div className='text-[66px] font-bold leading-18 whitespace-pre-line'><TDiv>{'"YARINLAR İÇİN\nİNŞA EDİYORUZ":"WE BUILD FOR TOMORROW"'}</TDiv></div>
            <div className='text-[28px]'><TDiv>{'"30 yılı aşkın tecrübeyi, ileri cephe teknolojileri ve kusursuz proje yönetim anlayışını birleştirerek, mimari vizyonunuzu estetik, dayanıklı ve enerji verimli yapılara dönüştürür.":"By combining over 30 years of experience, advanced façade technologies and flawless project management approach, it transforms your architectural vision into aesthetic, durable and energy-efficient structures."'}</TDiv></div>
            <div className='w-fit'>

              <GlassButton>
                <TDiv>{'"Bize Ulaşın ":"Contact Us"'}</TDiv>
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                  <path d="M31 15.5C31 24.0604 24.0604 31 15.5 31C6.93959 31 0 24.0604 0 15.5C0 6.93959 6.93959 0 15.5 0C24.0604 0 31 6.93959 31 15.5Z" fill="#2587EF" />
                  <path d="M9 15H19.844L15.737 10.146L17.263 8.854L23.31 16L17.263 23.146L15.737 21.854L19.844 17H9V15Z" fill="#08132A" />
                </svg>
              </GlassButton>
            </div>
          </div>
          <div className='basis-2/5 flex justify-end'>
            <div style={{ position: 'relative' }}>
              <CarouselCard
                items={cardMock}
                autoplay={true}
                autoplayDelay={5000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <AccordionComp data={accordionMock} />
      </div>


      <div className='relative h-screen flex items-center'>
        <div className='absolute w-full h-[1200px] bottom-0 left-0 right-0'>
          <Image src={"/aboutus_bg.webp"} alt='aboutus_bg' fill className='mt-8 object-cover mix-blend-overlay absolute' />
        </div>
        <div className='container flex flex-col relative'>

          <div className='flex justify-between text-sm mt-8'>
            <div><TDiv>"30+ Yıllık Deneyim":"30+ Years of Experience"</TDiv></div>
            <div><TDiv>"Hayatın Kendisinden İlham Alıyoruz":"We Draw Inspiration from Life Itself"</TDiv></div>
          </div>
          <h2 className='text-[68px] font-bold my-8'><TDiv>"Hakkımızda":"About Us"</TDiv></h2>
          <div className='text-[40px] leading-10 font-light mb-8'>

            <TDiv>"“tecrübe ve bilginin birbirini tamamladığı bir ortamda, yeniliklere açık bir yaklaşım benimsemektedir. Teknolojiyi sürekli takip eden düşünce yapımız ve alanında uzmanlaşmış seçkin kadromuzla, her geçen gün yeni tasarımlar üzerinde çalışarak sektördeki gelişmelere öncülük ediyoruz.”":""In an environment where experience and knowledge complement each other, we adopt an approach open to innovation. With our mindset that constantly follows technological advancements and our distinguished team of experts in their fields, we are pioneering developments in the sector by working on new designs every day.""</TDiv>
          </div>

          <div className='flex gap-2'>
            <Image src="/cert001-asd.webp" alt="cert001-asd" width={256} height={326} />
            <Image src="/cert002-asd.webp" alt="cert002-asd" width={256} height={326} />
            <Image src="/cert003-asd.webp" alt="cert003-asd" width={256} height={326} />
          </div>
          <div className='absolute right-0 top-100 mt-16'>
            <LiquiedGlassCard className="flex flex-col relative w-fit p-4" contentClassName="px-6 py-4 z-0" radius="14px">
              <AboutUsComp />
            </LiquiedGlassCard>
          </div>

        </div>

      </div >

      <div className='container'>
        <h2 className='text-[68px] font-bold my-8'><TDiv>"Rakamlarla Biz":"Us by the Numbers"</TDiv></h2>
        <div>


        </div>
      </div>


      {/* <div className='text-2xl min-h-[2000px]'>

        {(projects ?? []).map(project => (
          <div key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div> */}







    </>

  );
}

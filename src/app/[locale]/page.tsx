import AboutUsComp from '@/component/AboutUsComp';
import AccordionComp from '@/component/AccordionComp';
import CarouselCard from '@/component/CarouselCard';
import FloatImage from '@/component/FloatImages';
import GlassButton from '@/component/GlassButton';
import LiquiedGlassCard from '@/component/LiquiedGlassPage';
import NumbersComp from '@/component/NumbersComp';
import ProjectsSlider from '@/component/ProjectsSlider';
import SocialMediaBar from '@/component/SocialMediaBar';
import TDiv from '@/component/TranslateSpan';
//import { createClient } from '@/utils/supabase/server'
import Image from 'next/image';
import Link from 'next/link';


export default async function HomePage() {

  //const supabase = await createClient()

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
      title: <TDiv>{'"Endüstriyel Tesisler":"Why ASD?"'}</TDiv>,
      description: <TDiv>{'"ASD olarak endüstriyel tesislerin dış cephelerinde, sektörün en ağır çalışma koşullarına ve çevresel etkilere dayanacak çözümler geliştiriyoruz. Üretim kapasitesi yüksek, yoğun faaliyet gösteren endüstriyel alanlarda cephe sistemlerinin yalnızca estetik değil, aynı zamanda uzun ömürlü ve güvenli olması gerektiğinin bilincindeyiz.":"At ASD, we develop solutions for the exterior facades of industrial facilities that withstand the harshest operating conditions and environmental impacts. We understand that in industrial areas with high production capacity and high activity, facade systems must not only be aesthetically pleasing but also long-lasting and safe."'}</TDiv>
    },
    {
      id: 2,
      title: <TDiv>{'"İnşaat":"Construction"'}</TDiv>,
      description: <TDiv>{'"ASD, inşaat sektöründe çok yönlü uzmanlığıyla konut, ticari ve endüstriyel projelerde temelden anahtar teslim bitirmeye kadar tüm süreçleri yönetir. Deneyimli mühendislik kadromuz ve güçlü çözüm ortaklıklarımız sayesinde her ölçekten projeyi güvenle hayata geçiriyoruz.":"With its multifaceted expertise in the construction industry, ASD manages all aspects of residential, commercial, and industrial projects, from foundation to turnkey completion. Our experienced engineering team and strong solution partnerships enable us to confidently implement projects of all sizes."'}</TDiv>
    },
    {
      id: 3,
      title: <TDiv>{'"Yapı & Gayrimenkul":"Construction & Real Estate"'}</TDiv>,
      description: <TDiv>{'"In construction and real estate development, ASD not only constructs buildings but also creates contemporary living spaces with high investment value. Our residential, office, and commercial projects, developed with a modern urban approach, are designed to meet both user needs and investor expectations.":"In construction and real estate development, ASD not only constructs buildings but also creates contemporary living spaces with high investment value. Our residential, office, and commercial projects, developed with a modern urban approach, are designed to meet both user needs and investor expectations."'}</TDiv>
    },
    {
      id: 4,
      title: <TDiv>{'"Cephe Sistemleri":"Facade Systems"'}</TDiv>,
      description: <TDiv>{'"Cephe sistemleri, bir yapının ilk izlenimini belirleyen en önemli unsur olmakla birlikte, estetik görünümün yanı sıra enerji verimliliği, güvenlik ve dayanıklılık açısından da kritik rol oynar. ASD, projelere özel geliştirdiği cephe çözümleriyle mimarinin ruhunu yansıtan, dayanıklı ve fonksiyonel sistemler sunar.":"Facade systems are the most important element that determines the first impression of a building, and they also play a critical role in terms of energy efficiency, security and durability, as well as aesthetic appearance. ASD offers durable and functional systems that reflect the spirit of architecture with its custom-designed façade solutions."'}</TDiv>
    },
    {
      id: 5,
      title: <TDiv>{'"Aluminyum İşleme":"Aluminum Processing"'}</TDiv>,
      description: <TDiv>{'"Alüminyum, hafifliği, korozyon direnci ve estetik özellikleriyle çağdaş mimarinin en önemli malzemelerinden biridir. ASD, alüminyum işleme alanındaki yüksek teknolojiye sahip üretim altyapısı sayesinde her ölçekte projeye özel çözümler sunar.":"Aluminum, with its light weight, corrosion resistance, and aesthetic properties, is one of the most important materials in contemporary architecture. ASD offers customized solutions for projects of all sizes thanks to its high-tech aluminum processing infrastructure."'}</TDiv>
    },
    {
      id: 6,
      title: <TDiv>{'"Metal İşleme":"Metal Processing"'}</TDiv>,
      description: <TDiv>{'"ASD, metal işleme sektöründe çelik, paslanmaz ve demir-dışı metaller için yüksek hassasiyetli üretim kabiliyetine sahiptir. Geniş makine parkurumuz sayesinde prototip üretimden seri üretime kadar her ölçekte projeye hizmet veririz.":"ASD offers high-precision manufacturing capabilities for steel, stainless steel, and non-ferrous metals in the metalworking industry. Our extensive machinery allows us to handle projects of all sizes, from prototypes to mass production."'}</TDiv>
    },
  ]

  const workflowMock = [
    {
      id: 10,
      title: <TDiv>{'"İhtiyacın Belirlenmesi":"Needs Assessment"'}</TDiv>,
      description: <TDiv>{'"İş birliği süreci, müşterilerimizle gerçekleştirdiğimiz detaylı ihtiyaç analiziyle başlar. Talep edilen ürün ya da hizmetin teknik ve operasyonel gereksinimleri net bir şekilde belirlenir.":"The collaboration process begins with a detailed needs analysis conducted with our clients. The technical and operational requirements of the requested product or service are clearly defined."}'}</TDiv>
    },
    {
      id: 11,
      title: <TDiv>{'"Teklif ve Sözleşme":"Proposal and Contract"'}</TDiv>,
      description: <TDiv>{'"İhtiyaçların belirlenmesinin ardından, müşterilerimize özel olarak hazırlanan teklif sunulur. Teklifin kabul edilmesi durumunda, taraflar arasında resmi bir sözleşme imzalanır.":"Following the identification of needs, a proposal tailored specifically for our clients is presented. Upon acceptance of the proposal, a formal contract is signed between the parties."'}</TDiv>
    },
    {
      id: 12,
      title: <TDiv>{'"Proje Yönetimi":"Project Management"'}</TDiv>,
      description: <TDiv>{'"Sözleşmenin imzalanmasının ardından, projenin planlanması ve yönetimi için uzman ekibimiz devreye girer. Proje süreci boyunca düzenli olarak ilerleme raporları hazırlanır ve müşterilerimizle paylaşılır.":"After the contract is signed, our expert team takes over for the planning and management of the project. Regular progress reports are prepared throughout the project process and shared with our clients."'}</TDiv>
    },
    {
      id: 13,
      title: <TDiv>{'"Teslimat ve Destek":"Delivery and Support"'}</TDiv>,
      description: <TDiv>{'"Proje tamamlandığında, ürün ya da hizmet müşteriye teslim edilir. Teslimat sonrası destek hizmetleri de sunularak, müşterilerimizin memnuniyeti sağlanır.":"When the project is completed, the product or service is delivered to the customer. Post-delivery support services are also provided to ensure customer satisfaction."'}</TDiv>
    }
  ]

  const logos = [
    { id: 1, logo: "/logos/logo001.webp", name: "logo001" },
    { id: 2, logo: "/logos/logo002.webp", name: "logo002" },
    { id: 3, logo: "/logos/logo003.webp", name: "logo003" },
    { id: 4, logo: "/logos/logo004.webp", name: "logo004" },
    { id: 5, logo: "/logos/logo005.webp", name: "logo005" },
    { id: 6, logo: "/logos/logo006.webp", name: "logo006" },
    { id: 7, logo: "/logos/logo007.webp", name: "logo007" },
    { id: 8, logo: "/logos/logo008.webp", name: "logo008" },
    { id: 9, logo: "/logos/logo009.webp", name: "logo009" },
    { id: 10, logo: "/logos/logo010.webp", name: "logo010" },

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
        <div className='flex justify-between items-center'>


          <h2 className='text-[68px] font-bold'><TDiv>"Projelerimiz":"Our Projects"</TDiv></h2>
          <GlassButton>
            <Link href="/projects" className='flex gap-2 items-center'>
              <TDiv>"Tüm Projeler ":"All Projects"</TDiv>
              <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                <path d="M31 15.5C31 24.0604 24.0604 31 15.5 31C6.93959 31 0 24.0604 0 15.5C0 6.93959 6.93959 0 15.5 0C24.0604 0 31 6.93959 31 15.5Z" fill="#2587EF" />
                <path d="M9 15H19.844L15.737 10.146L17.263 8.854L23.31 16L17.263 23.146L15.737 21.854L19.844 17H9V15Z" fill="#08132A" />
              </svg>
            </Link>
          </GlassButton>
        </div>
        <ProjectsSlider />
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

      <div className='container py-16'>
        <h2 className='text-[68px] font-bold my-8'><TDiv>"Rakamlarla Biz":"Us by the Numbers"</TDiv></h2>
        <div>
          <NumbersComp />
        </div>
      </div>


      <div className='bg-[#F3F9FF]'>
        <div className='container py-16'>
          <h2 className='text-[68px] font-bold my-8 text-[#08132A]'><TDiv>"İş Akışımız":"Our Workflow"</TDiv></h2>
          <div className='text-[28px] text-[#08132A] mb-8 leading-10 font-light'>
            <TDiv>"“her projeye özel çözümler üretirken standartlarımızdan ödün vermeden sistematik bir iş akışı izliyoruz. Tüm süreçlerimizde müşteri memnuniyetini merkeze alıyor, esnek ve hızlı çözümler sunarak katma değer yaratıyoruz.”":""</TDiv>
          </div>
          <div className='flex gap-4'>
            <div className='basis-1/2'>
              <AccordionComp data={workflowMock} dark={true} />
            </div>
            <div className='basis-1/2 p-4'>
              <Image src="/workflow_image.webp" alt="workflow_image" width={600} height={400} className='mix-blend-multiply' />
            </div>

          </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className='container flex flex-col overflow-clip py-32'>
          <FloatImage data={logos} />
          {/* <h2 className='text-[68px] text-black font-bold my-8'><TDiv>"Sosyal Medya":"Social Media"</TDiv></h2>
          <div className='flex justify-between'>
            <Image src="/instagram-asd.webp" alt="instagram-asd" width={600} height={400} />
            <Image src="/linkedin-asd.webp" alt="linkedin-asd" width={600} height={400} />
            <Image src="/twitter-asd.webp" alt="twitter-asd" width={600} height={400} />
            <Image src="/youtube-asd.webp" alt="youtube-asd" width={600} height={400} />

          </div> */}
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

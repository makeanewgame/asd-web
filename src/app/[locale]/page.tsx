import SocialMediaBar from '@/component/SocialMediaBar';
import { createClient } from '@/utils/supabase/server'
import Image from 'next/image';

export default async function HomePage() {

  const supabase = await createClient()

  const { data: projects } = await supabase.from('Projects').select()

  return (
    <>



      <div className='h-screen w-full'>
        <video className='w-full h-full object-cover' src="/asd-slider.mp4" autoPlay loop muted />
        <SocialMediaBar />
        <div className='h-[300px] w-full bottom-0 absolute z-10' style={{
          background: 'linear-gradient(180deg, rgba(24, 66, 143, 0%), #071329 100%)',
        }}></div>
      </div>


      <div className='text-2xl min-h-[2000px]'>

        30 yılı aşkın tecrübeyi, ileri cephe teknolojileri ve kusursuz proje yönetim anlayışını birleştirerek, mimari vizyonunuzu estetik, dayanıklı ve enerji verimli yapılara dönüştürür.
        <Image src={"/test.jpg"} width={2500} height={300} alt="Hero görseli" />

        {(projects ?? []).map(project => (
          <div key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </>

  );
}

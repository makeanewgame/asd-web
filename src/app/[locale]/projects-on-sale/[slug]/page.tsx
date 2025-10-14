import LiquiedGlassCard from '@/component/LiquiedGlassPage'
import TDiv from '@/component/TranslateSpan'
import ImageGallery from '@/component/ImageGallery'
import RelatedProjects from '@/component/RelatedProjects'
import MarkdownRenderer from '@/component/MarkdownRenderer'
import { projects } from '@/utils/data';
import GlassButton from '@/component/GlassButton'
import Link from 'next/link'

export default async function page({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    if (!slug || Array.isArray(slug)) {
        return <div>Loading...</div>;
    }

    const projectData = projects.find(project => project.slug === slug);

    return (
        <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[440px] bg-gradient-to-b from-transparent to-[#0057B3]" />
            {
                projectData && projectData.customHeaderImage ? (
                    <div
                        className="pointer-events-none absolute right-0 left-0 top-0 h-[440px] bg-no-repeat"
                        style={{
                            backgroundImage: `url(${projectData.customHeaderImage})`,
                            backgroundSize: "contain",
                            backgroundPosition: "center center",
                        }}
                    />
                ) : (
                    <div
                        className="pointer-events-none absolute right-0 left-0 top-0 h-[440px] bg-no-repeat"
                    />
                )
            }

            <div className='container pt-[340px] pb-16'>
                <LiquiedGlassCard className="flex flex-col relative w-fit p-4" contentClassName="px-6 py-4 z-0" radius="14px">
                    <div className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        <TDiv>&quot;Satıştaki Projeler&quot;:&quot;Projects on Sale&quot;</TDiv>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-sm text-white/90">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21 19V12.267C21 11.7245 20.8896 11.1876 20.6756 10.689C20.4616 10.1905 20.1483 9.74069 19.755 9.36701L13.378 3.31001C13.0063 2.9569 12.5132 2.76001 12.0005 2.76001C11.4878 2.76001 10.9947 2.9569 10.623 3.31001L4.245 9.36701C3.85165 9.74069 3.53844 10.1905 3.3244 10.689C3.11037 11.1876 3 11.7245 3 12.267V19C3 19.5304 3.21071 20.0392 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0392 21 19.5304 21 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="opacity-70">›</span>
                        <Link href="/">
                            <span className="opacity-80">
                                <TDiv>&quot;Anasayfa&quot;:&quot;Home&quot;</TDiv>
                            </span>
                        </Link>
                        <span className="opacity-70">›</span>
                        <Link href="/projects-on-sale">
                            <span className="opacity-100">
                                <TDiv>&quot;Satıştaki Projeler&quot;:&quot;Projects on Sale&quot;</TDiv>
                            </span>
                        </Link>
                        <span className="opacity-70">›</span>
                        <span className="opacity-100">
                            {projectData ? projectData.title : 'Loading...'}
                        </span>
                    </div>
                </LiquiedGlassCard>

                <div className='container'>
                    <div className='flex gap-8'>
                        <div className='flex-1'>
                            <MarkdownRenderer content={projectData ? projectData.content : 'Loading...'} />

                            {projectData?.floorPlans && projectData.floorPlans.length > 0 ? (
                                <>
                                    <h2 className='text-3xl font-bold text-white mt-16 mb-8'>
                                        <TDiv>"Kat Planları":"Kat Planları"</TDiv>
                                    </h2>
                                    <ImageGallery
                                        images={projectData?.floorPlans || []}
                                        folder="floorplan"
                                        projectSlug={slug}
                                    />
                                </>
                            ) : (
                                null
                            )}

                            {projectData?.saleLinks && projectData.saleLinks.length > 0 ? (
                                <>
                                    <h2 className='text-3xl font-bold text-white mt-16 mb-8'>
                                        <TDiv>"Satış Linkleri":"Sale Links"</TDiv>
                                    </h2>
                                    <ul className='space-y-2'>
                                        {projectData.saleLinks.map((link, index) => (

                                            <div className='w-fit' key={index}>

                                                <li>

                                                    <Link href={link.url} target="_blank" rel="noopener noreferrer">
                                                        <GlassButton size='medium'>
                                                            <div className='flex flex-col gap-2'>
                                                                <div className='text-xs text-white/70'>
                                                                    {link.platform}
                                                                </div>
                                                                <div>
                                                                    {link.description}
                                                                </div>

                                                            </div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                                                <path d="M31 15.5C31 24.0604 24.0604 31 15.5 31C6.93959 31 0 24.0604 0 15.5C0 6.93959 6.93959 0 15.5 0C24.0604 0 31 6.93959 31 15.5Z" fill="#2587EF" />
                                                                <path d="M9 15H19.844L15.737 10.146L17.263 8.854L23.31 16L17.263 23.146L15.737 21.854L19.844 17H9V15Z" fill="#08132A" />
                                                            </svg>
                                                        </GlassButton>
                                                    </Link>

                                                </li>
                                            </div>

                                        ))}
                                    </ul>
                                </>
                            ) : (
                                null
                            )}


                        </div>
                        <div className='basis-1/2'>
                            <ImageGallery
                                images={projectData?.imageList || []}
                                projectSlug={slug}
                                folder='project'
                            />
                        </div>

                    </div>
                </div>

                <div>
                    <h2 className='text-3xl font-bold text-white mt-16 mb-8'>
                        <TDiv>"İlgili Projeler":"Related Projects"</TDiv>
                    </h2>
                    {projectData && (
                        <RelatedProjects
                            currentProjectType={projectData.type}
                            currentProjectId={projectData.id}
                            maxProjects={8}
                        />
                    )}
                </div>

            </div>


        </div >
    )
}

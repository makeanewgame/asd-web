"use client"
import LiquiedGlassCard from '@/component/LiquiedGlassPage'
import TDiv from '@/component/TranslateSpan'
import ImageGallery from '@/component/ImageGallery'
import { projects } from '@/utils/data';
import Markdown from 'react-markdown'

export default async function page({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    console.log(slug);

    if (!slug || Array.isArray(slug)) {
        return <div>Loading...</div>;
    }

    const projectData = projects.find(project => project.slug === slug);
    console.log(projectData);

    return (
        <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[540px] bg-gradient-to-t from-transparent to-[#01152a] z-1" />
            <div
                className="pointer-events-none absolute right-0 left-0 top-0 h-[540px] bg-no-repeat"
                style={{
                    backgroundImage: `url('/project/${slug}/001.webp')`,
                    backgroundSize: "cover",
                }}
            />

            <div className='container pt-[480px] pb-16'>
                <LiquiedGlassCard className="flex flex-col relative w-fit p-4" contentClassName="px-6 py-4 z-0" radius="14px">
                    <div className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        <TDiv>&quot;Projeler&quot;:&quot;Projects&quot;</TDiv>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-sm text-white/90">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21 19V12.267C21 11.7245 20.8896 11.1876 20.6756 10.689C20.4616 10.1905 20.1483 9.74069 19.755 9.36701L13.378 3.31001C13.0063 2.9569 12.5132 2.76001 12.0005 2.76001C11.4878 2.76001 10.9947 2.9569 10.623 3.31001L4.245 9.36701C3.85165 9.74069 3.53844 10.1905 3.3244 10.689C3.11037 11.1876 3 11.7245 3 12.267V19C3 19.5304 3.21071 20.0392 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0392 21 19.5304 21 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="opacity-70">›</span>
                        <span className="opacity-80">
                            <TDiv>&quot;Anasayfa&quot;:&quot;Home&quot;</TDiv>
                        </span>
                        <span className="opacity-70">›</span>
                        <span className="opacity-100">
                            <TDiv>&quot;Projeler&quot;:&quot;Projects&quot;</TDiv>
                        </span>
                        <span className="opacity-70">›</span>
                        <span className="opacity-100">
                            {projectData ? projectData.title : 'Loading...'}
                        </span>
                    </div>
                </LiquiedGlassCard>

                <div className='container'>
                    <div className='flex gap-4'>
                        <div className='flex-1'>
                            <div className="markdown-content">
                                <Markdown>
                                    {projectData ? projectData.content : 'Loading...'}
                                </Markdown>
                            </div>
                        </div>
                        <div className='basis-1/2'>
                            <ImageGallery
                                images={projectData?.imageList || []}
                                projectSlug={slug}
                            />
                        </div>

                    </div>
                </div>

                <style jsx>{`
                .markdown-content :global(h1) {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: #ffffff;
                    margin-bottom: 1.5rem;
                    margin-top: 2rem;
                    line-height: 1.2;
                    border-bottom: 2px solid #ADD2FF;
                    padding-bottom: 0.5rem;
                }

                .markdown-content :global(h2) {
                    font-size: 2rem;
                    font-weight: 700;
                    color: #ADD2FF;
                    margin-bottom: 1rem;
                    margin-top: 1.5rem;
                    line-height: 1.3;
                }

                .markdown-content :global(h3) {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #ffffff;
                    margin-bottom: 0.75rem;
                    margin-top: 1.25rem;
                    line-height: 1.4;
                }

                .markdown-content :global(h4) {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #ADD2FF;
                    margin-bottom: 0.5rem;
                    margin-top: 1rem;
                }

                .markdown-content :global(h5) {
                    font-size: 1.1rem;
                    font-weight: 500;
                    color: #ffffff;
                    margin-bottom: 0.5rem;
                    margin-top: 0.75rem;
                }

                .markdown-content :global(h6) {
                    font-size: 1rem;
                    font-weight: 500;
                    color: #ADD2FF;
                    margin-bottom: 0.5rem;
                    margin-top: 0.75rem;
                }

                .markdown-content :global(p) {
                    color: #ffffff;
                    line-height: 1.7;
                    margin-bottom: 1rem;
                    font-size: 1rem;
                }

                .markdown-content :global(ul) {
                    margin: 1rem 0;
                    padding-left: 1.5rem;
                    list-style: none;
                }

                .markdown-content :global(ol) {
                    margin: 1rem 0;
                    padding-left: 1.5rem;
                    color: #ffffff;
                }

                .markdown-content :global(li) {
                    color: #ffffff;
                    line-height: 1.6;
                    margin-bottom: 0.5rem;
                    position: relative;
                }

                .markdown-content :global(ul li):before {
                    content: "•";
                    color: #ADD2FF;
                    font-weight: bold;
                    font-size: 1.2rem;
                    position: absolute;
                    left: -1.5rem;
                }

                .markdown-content :global(ol li) {
                    counter-increment: item;
                }

                .markdown-content :global(ol li):before {
                    content: counter(item) ".";
                    color: #ADD2FF;
                    font-weight: bold;
                    position: absolute;
                    left: -1.5rem;
                }

                .markdown-content :global(ol) {
                    counter-reset: item;
                }

                .markdown-content :global(blockquote) {
                    border-left: 4px solid #ADD2FF;
                    background: rgba(173, 210, 255, 0.1);
                    padding: 1rem 1.5rem;
                    margin: 1.5rem 0;
                    font-style: italic;
                    color: #ffffff;
                    border-radius: 0 8px 8px 0;
                }

                .markdown-content :global(code) {
                    background: rgba(173, 210, 255, 0.15);
                    color: #ADD2FF;
                    padding: 0.2rem 0.4rem;
                    border-radius: 4px;
                    font-family: 'Monaco', 'Consolas', monospace;
                    font-size: 0.9rem;
                }

                .markdown-content :global(pre) {
                    background: rgba(7, 19, 41, 0.8);
                    border: 1px solid rgba(173, 210, 255, 0.3);
                    border-radius: 8px;
                    padding: 1rem;
                    margin: 1rem 0;
                    overflow-x: auto;
                }

                .markdown-content :global(pre code) {
                    background: none;
                    padding: 0;
                    color: #ffffff;
                }

                .markdown-content :global(a) {
                    color: #ADD2FF;
                    text-decoration: underline;
                    transition: color 0.2s ease;
                }

                .markdown-content :global(a:hover) {
                    color: #ffffff;
                }

                .markdown-content :global(strong) {
                    font-weight: 700;
                    color: #ffffff;
                }

                .markdown-content :global(em) {
                    font-style: italic;
                    color: #ADD2FF;
                }

                .markdown-content :global(hr) {
                    border: none;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #ADD2FF, transparent);
                    margin: 2rem 0;
                }

                .markdown-content :global(table) {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 1.5rem 0;
                    background: rgba(7, 19, 41, 0.3);
                    border-radius: 8px;
                    overflow: hidden;
                }

                .markdown-content :global(th) {
                    background: rgba(173, 210, 255, 0.2);
                    color: #ffffff;
                    padding: 0.75rem;
                    text-align: left;
                    font-weight: 600;
                }

                .markdown-content :global(td) {
                    padding: 0.75rem;
                    color: #ffffff;
                    border-top: 1px solid rgba(173, 210, 255, 0.1);
                }

                .markdown-content :global(img) {
                    max-width: 100%;
                    height: auto;
                    border-radius: 8px;
                    margin: 1rem 0;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                }

                @media (max-width: 768px) {
                    .markdown-content :global(h1) {
                        font-size: 2rem;
                    }
                    
                    .markdown-content :global(h2) {
                        font-size: 1.5rem;
                    }
                    
                    .markdown-content :global(h3) {
                        font-size: 1.25rem;
                    }
                }
            `}</style>


            </div>


        </div >
    )
}

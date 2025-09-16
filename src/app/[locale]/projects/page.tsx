"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import { motion } from "motion/react";
import LiquiedGlassCard from "@/component/LiquiedGlassPage";
import TDiv from "@/component/TranslateSpan";
import { ProjectBanners, projects } from "@/utils/data";
import Image from "next/image";

export default function AluminumProcessing() {


    return (

        <>
            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[540px] bg-gradient-to-b from-transparent to-[#0057B3]" />
                <div
                    className="pointer-events-none absolute right-0 top-0 h-[540px] w-[950px] bg-no-repeat"
                    style={{
                        backgroundImage: `url('/projectsbanner.webp')`,
                        backgroundSize: "cover",
                    }}
                />

                <div className="container pt-[480px]">
                    <div className="flex flex-col">
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
                            </div>
                        </LiquiedGlassCard>

                    </div>
                </div>
                {/* <!--Content--> */}
                <ProjectsContent />
            </div>
        </>
    );
}

function ProjectsContent() {
    const [selectedTab, setSelectedTab] = useState("Konut");

    return (
        <div className="-mt-[84px]">
            {/* Banner Section */}
            <ProjectBanner selectedType={selectedTab} />

            {/* Tabs Section */}
            <div className="container">
                <div className="flex justify-start my-8">
                    <Tabs
                        selectedKey={selectedTab}
                        onSelectionChange={(key) => setSelectedTab(key as string)}
                        variant="underlined"
                        classNames={{
                            tabList: "gap-6 w-full relative rounded-none p-0",
                            cursor: "w-full bg-primary",
                            tab: "max-w-fit px-4 h-12",
                            tabContent: "group-data-[selected=true]:text-[#ADD2FF] text-default-500 font-medium"
                        }}
                    >
                        <Tab key="Konut" title="Konutlar" />
                        <Tab key="Üstyapı" title="Üstyapı" />
                        <Tab key="Endüstriyel Yapı" title="Endüstriyel Yapı" />
                        <Tab key="Cephe & Alüminyum" title="Cephe & Alüminyum" />
                        <Tab key="Restorasyon" title="Restorasyon" />
                    </Tabs>
                </div>

                {/* Projects Gallery */}
                <ProjectGallery selectedType={selectedTab} />

                <h2 className="text-3xl my-16 font-bold">
                    <TDiv>"Satıştaki Projelerimiz":"Projects on Sale"</TDiv>
                </h2>
            </div>
        </div>
    );
}

function ProjectBanner({ selectedType }: { selectedType: string }) {
    const banner = ProjectBanners.find(b => b.title === selectedType);

    if (!banner) return null;

    return (
        <div className="relative h-[449px] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-contain bg-right "
                style={{ backgroundImage: `url('${banner.image}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
                <div className="text-white max-w-2xl">
                    <h2 className="text-5xl font-bold mb-4">
                        {banner.title}
                    </h2>
                    <p className="text-xl text-white/90">
                        {banner.headline}
                    </p>
                    <p className="text text-[#849DBC] text-balance">
                        {banner.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

function ProjectGallery({ selectedType }: { selectedType: string }) {
    // Filter projects by selected type
    const filteredProjects = projects.filter(project => project.type === selectedType);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
    const router = useRouter();
    const pathname = usePathname();

    const handleProjectClick = () => {
        // Create slug from project title
        // const slug = project.title
        //     .toLowerCase()
        //     .replace(/\s+/g, '-')
        //     .replace(/[^a-z0-9-]/g, '');

        router.push(`${pathname}/${project.slug}`);
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer group"
            onClick={handleProjectClick}
        >
            <Card className="bg-transparent border border-white/10 overflow-hidden">
                <CardBody className="p-0">
                    <div className="relative aspect-[370/240] overflow-hidden rounded-t-lg">
                        <Image
                            src={project.heroImage}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-5 space-y-3">
                        <h3 className="text-xl font-semibold text-white line-clamp-2">
                            {project.title}
                        </h3>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-white/70 bg-white/10 px-3 py-1 rounded-full">
                                {project.type}
                            </span>
                            <span className={`text-sm px-3 py-1 rounded-full ${project.status === 'Tamamlanan'
                                ? 'bg-green-500/20 text-green-400'
                                : project.status === 'Devam Eden'
                                    ? 'bg-yellow-500/20 text-yellow-400'
                                    : project.status === 'Satışta'
                                        ? 'bg-blue-500/20 text-blue-400'
                                        : 'bg-purple-500/20 text-purple-400'
                                }`}>
                                {project.status}
                            </span>
                        </div>
                        {project.description && (
                            <p className="text-sm text-white/80 line-clamp-2">
                                {project.description}
                            </p>
                        )}
                    </div>
                </CardBody>
            </Card>
        </motion.div>
    );
}

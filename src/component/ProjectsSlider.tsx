'use client'
import React, { useState, useMemo } from 'react'
import { Tabs, Tab } from '@heroui/react'
import { ProjectType, projects } from '@/utils/data'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface Project {
    id: number
    title: string
    type: ProjectType
    status: string
    location: string
    heroImage: string
    content: string
    imageList: string[]
    description: string
}

export default function ProjectsSlider() {
    const router = useRouter()
    const [selectedType, setSelectedType] = useState<string>('all')

    // Filtreli projeleri hesapla
    const filteredProjects = useMemo(() => {
        if (selectedType === 'all') {
            return projects
        }
        return projects.filter(project => project.type === selectedType)
    }, [selectedType])

    // Proje tiplerini al
    const projectTypes = Object.values(ProjectType)

    // Slug oluştur
    const createSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, '') // Özel karakterleri kaldır
            .replace(/\s+/g, '-') // Boşlukları tire ile değiştir
            .replace(/-+/g, '-') // Birden fazla tireyi tek tire yap
            .trim()
    }

    // Proje tıklama handler'ı
    const handleProjectClick = (project: Project) => {
        const slug = createSlug(project.title)
        router.push(`/projects/${slug}`)
    }

    // Video/resim render fonksiyonu
    const renderMedia = (project: Project) => {
        const isVideo = project.heroImage.endsWith('.mp4')

        if (isVideo) {
            return (
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={project.heroImage} type="video/mp4" />
                </video>
            )
        }

        return (
            <Image
                src={project.heroImage || '/placeholder.jpg'}
                alt={project.title}
                fill
                className="object-cover"
            />
        )
    }

    return (
        <div className="w-full container px-4 py-8">
            {/* Filter Tabs */}
            <div className="flex justify-start mb-8">
                <Tabs
                    selectedKey={selectedType}
                    onSelectionChange={(key: React.Key) => setSelectedType(String(key))}
                    variant="underlined"
                    classNames={{
                        tabList: "gap-6 w-full relative rounded-none p-0",
                        cursor: "w-full bg-primary",
                        tab: "max-w-fit px-4 h-12",
                        tabContent: "group-data-[selected=true]:text-[#ADD2FF] text-default-500 font-medium"
                    }}
                >
                    <Tab key="all" title="Tümü" />
                    {projectTypes.map(type => (
                        <Tab key={type} title={
                            <div>
                                <div>{type}</div>
                                <span>{filteredProjects.length}</span>
                            </div>
                        } />
                    ))}
                </Tabs>
            </div>

            {/* Infinite Scrolling Gallery */}
            <div className="relative overflow-hidden">
                <div className="flex animate-scroll hover:animation-play-state-paused">
                    {/* İlk set */}
                    {filteredProjects.map((project, index) => (
                        <div
                            key={`first-${project.id}`}
                            className="flex-shrink-0 w-80 h-60 mx-4 relative rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 group"
                            onClick={() => handleProjectClick(project)}
                        >
                            {renderMedia(project)}

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Title */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                                <p className="text-sm text-gray-200">{project.type}</p>
                            </div>
                        </div>
                    ))}

                    {/* İkinci set (sonsuz döngü için) */}
                    {filteredProjects.map((project, index) => (
                        <div
                            key={`second-${project.id}`}
                            className="flex-shrink-0 w-80 h-60 mx-4 relative rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 group"
                            onClick={() => handleProjectClick(project)}
                        >
                            {renderMedia(project)}

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Title */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                                <p className="text-sm text-gray-200">{project.type}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

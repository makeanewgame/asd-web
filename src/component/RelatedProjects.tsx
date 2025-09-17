'use client'
import React, { useMemo } from 'react'
import { ProjectType, projects } from '@/utils/data'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface Project {
    id: number
    title: string
    slug: string
    type: ProjectType
    status: string
    location: string
    heroImage: string
    content: string
    imageList: string[]
    description: string
}

interface RelatedProjectsProps {
    currentProjectType: ProjectType
    currentProjectId: number
    maxProjects?: number
}

export default function RelatedProjects({
    currentProjectType,
    currentProjectId,
    maxProjects = 8
}: RelatedProjectsProps) {
    const router = useRouter()

    // Aynı türdeki diğer projeleri filtrele (mevcut projeyi hariç tut)
    const relatedProjects = useMemo(() => {
        return projects
            .filter(project => project.type === currentProjectType && project.id !== currentProjectId)
            .slice(0, maxProjects)
    }, [currentProjectType, currentProjectId, maxProjects])

    // Proje tıklama handler'ı
    const handleProjectClick = (project: Project) => {
        router.push(`/projects/${project.slug}`)
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
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
        )
    }

    if (relatedProjects.length === 0) {
        return (
            <div className="text-center py-8">
                <p className="text-gray-400">Bu kategoride başka proje bulunamadı.</p>
            </div>
        )
    }

    return (
        <div className="w-full">
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {relatedProjects.map((project) => (
                    <div
                        key={project.id}
                        className="relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl group bg-gray-900/50"
                        onClick={() => handleProjectClick(project)}
                    >
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                            {renderMedia(project)}

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                            {/* Project Status Badge */}
                            <div className="absolute top-3 right-3">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === 'Tamamlanan'
                                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                    }`}>
                                    {project.status}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <h3 className="text-lg font-bold mb-1 line-clamp-1 group-hover:text-[#ADD2FF] transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-300 mb-2">{project.type}</p>
                            {project.location && (
                                <p className="text-xs text-gray-400 flex items-center">
                                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {project.location}
                                </p>
                            )}
                        </div>

                        {/* Hover Arrow */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-[#ADD2FF]/20 backdrop-blur-sm rounded-full p-3">
                                <svg className="w-6 h-6 text-[#ADD2FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Proje sayısı bilgisi */}
            <div className="text-center mt-6">
                <p className="text-gray-400 text-sm">
                    {currentProjectType} kategorisinde {relatedProjects.length} benzer proje
                </p>
            </div>
        </div>
    )
}

"use client"

import Image from 'next/image'
import { useState } from 'react'

interface ImageGalleryProps {
    images: string[]
    projectSlug: string
    className?: string
}

export default function ImageGallery({ images, projectSlug, className = "" }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    // Filter out empty strings
    const validImages = images.filter(img => img && img.trim() !== '')

    if (validImages.length === 0) {
        return (
            <div className={`${className} flex items-center justify-center h-64 bg-gray-800/20 rounded-lg border-2 border-dashed border-gray-600`}>
                <div className="text-center text-gray-400">
                    <svg className="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Henüz resim eklenmemiş</p>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className={`${className}`}>

                {/* Thumbnail Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8
                ">
                    {validImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative aspect-video cursor-pointer group overflow-hidden rounded-lg "
                            onClick={() => setSelectedImage(image)}
                        >
                            <Image
                                src={`/project/${projectSlug}/${image}`}
                                alt={`${projectSlug} Proje görseli ${index + 1}`}
                                width={320}
                                height={180}
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-transparent bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                <div className="bg-white bg-opacity-20 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Full Screen Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Image Container */}
                        <div className="relative w-full h-full max-w-full max-h-full">
                            <Image
                                src={`/project/${projectSlug}/${selectedImage}`}
                                alt="Tam ekran proje görseli"
                                fill
                                className="object-contain"
                                sizes="100vw"
                                quality={95}
                            />
                        </div>

                        {/* Navigation Arrows */}
                        {validImages.length > 1 && (
                            <>
                                {/* Previous Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        const currentIndex = validImages.indexOf(selectedImage)
                                        const prevIndex = currentIndex === 0 ? validImages.length - 1 : currentIndex - 1
                                        setSelectedImage(validImages[prevIndex])
                                    }}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-200"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                {/* Next Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        const currentIndex = validImages.indexOf(selectedImage)
                                        const nextIndex = currentIndex === validImages.length - 1 ? 0 : currentIndex + 1
                                        setSelectedImage(validImages[nextIndex])
                                    }}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-200"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                            {validImages.indexOf(selectedImage) + 1} / {validImages.length}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

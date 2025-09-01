"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageSliderProps {
    images: string[];
    alt: string;
    className?: string;
}

export default function ImageSlider({ images, alt, className = "" }: ImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) return null;

    // Single image case
    if (images.length === 1) {
        return (
            <div className={`relative w-full h-64 md:h-80 ${className}`}>
                <Image
                    src={images[0]}
                    alt={alt}
                    fill
                    className="object-cover rounded-lg"
                    quality={100}
                />
            </div>
        );
    }

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className={`relative group ${className}`}>
            {/* Main Image */}
            <div className="relative w-full h-full overflow-hidden">
                <Image
                    src={images[currentIndex]}
                    alt={`${alt} - ${currentIndex + 1}`}
                    fill
                    className="object-cover transition-opacity duration-300"
                    quality={100}
                />

                {/* Navigation Arrows */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-75"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-75"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnail Navigation */}
            {/* <div className="flex justify-center mt-4 space-x-2 overflow-x-auto">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`relative w-16 h-12 flex-shrink-0 rounded overflow-hidden border-2 transition-all duration-200 ${index === currentIndex
                                ? "border-primary ring-2 ring-primary ring-opacity-50"
                                : "border-gray-300 hover:border-gray-400"
                            }`}
                    >
                        <Image
                            src={image}
                            alt={`${alt} thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                            quality={75}
                        />
                    </button>
                ))}
            </div> */}
        </div>
    );
}

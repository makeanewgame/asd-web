'use client';

import { useState, useRef, useEffect } from 'react';

interface VideoPlayerProps {
    src: string;
    poster?: string;
    className?: string;
}

// Extended interfaces for fullscreen support
interface ExtendedHTMLVideoElement extends HTMLVideoElement {
    webkitRequestFullscreen?: () => Promise<void>;
    msRequestFullscreen?: () => Promise<void>;
}

interface ExtendedDocument extends Document {
    webkitExitFullscreen?: () => Promise<void>;
    msExitFullscreen?: () => Promise<void>;
}

export default function VideoPlayer({ src, poster, className = "" }: VideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showControls, setShowControls] = useState(false);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(true); const [showPoster, setShowPoster] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const hideControlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateTime = () => setCurrentTime(video.currentTime);
        const updateDuration = () => setDuration(video.duration);

        // Video durduğunda poster'ı tekrar göster
        const handlePause = () => {
            setIsPlaying(false);
            if (!isPlaying) {
                setShowPoster(true);
            }
            // Pause durumunda timer'ı temizle
            if (hideControlsTimeoutRef.current) {
                clearTimeout(hideControlsTimeoutRef.current);
            }
            setShowControls(true);
        };

        const handlePlay = () => {
            setIsPlaying(true);
            setShowPoster(false);
            // Video oynatıldığında kontrolleri göster ve timer başlat
            setShowControls(true);
            hideControlsAfterDelay();
        };

        const handleLoadStart = () => setIsLoading(true);
        const handleCanPlay = () => setIsLoading(false);

        video.addEventListener('timeupdate', updateTime);
        video.addEventListener('loadedmetadata', updateDuration);
        video.addEventListener('pause', handlePause);
        video.addEventListener('play', handlePlay);
        video.addEventListener('loadstart', handleLoadStart);
        video.addEventListener('canplay', handleCanPlay);

        return () => {
            video.removeEventListener('timeupdate', updateTime);
            video.removeEventListener('loadedmetadata', updateDuration);
            video.removeEventListener('pause', handlePause);
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('loadstart', handleLoadStart);
            video.removeEventListener('canplay', handleCanPlay);
        };
    }, [isPlaying]); // hideControlsAfterDelay'i dependency olarak eklemeye gerek yok çünkü fonksiyon içinde tanımlı

    // Cleanup timer on unmount
    useEffect(() => {
        return () => {
            if (hideControlsTimeoutRef.current) {
                clearTimeout(hideControlsTimeoutRef.current);
            }
        };
    }, []);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (isPlaying) {
            video.pause();
        } else {
            video.play();
            setShowPoster(false);
            // Play başladığında kontrolleri göster ve timer başlat
            setShowControls(true);
            hideControlsAfterDelay();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const video = videoRef.current;
        if (!video) return;

        const newTime = (parseFloat(e.target.value) / 100) * duration;
        video.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const toggleMute = () => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const video = videoRef.current;
        if (!video) return;

        const newVolume = parseFloat(e.target.value) / 100;
        video.volume = newVolume;
        setVolume(newVolume);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const hideControlsAfterDelay = () => {
        if (hideControlsTimeoutRef.current) {
            clearTimeout(hideControlsTimeoutRef.current);
        }

        if (isPlaying) {
            hideControlsTimeoutRef.current = setTimeout(() => {
                setShowControls(false);
            }, 3000); // 3 saniye sonra gizle
        }
    };

    const showControlsAndResetTimer = () => {
        setShowControls(true);
        hideControlsAfterDelay();
    };

    const toggleFullscreen = () => {
        const video = videoRef.current as ExtendedHTMLVideoElement;
        if (!video) return;

        if (!isFullscreen) {
            // Enter fullscreen
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            }
        } else {
            // Exit fullscreen
            const doc = document as ExtendedDocument;
            if (doc.exitFullscreen) {
                doc.exitFullscreen();
            } else if (doc.webkitExitFullscreen) {
                doc.webkitExitFullscreen();
            } else if (doc.msExitFullscreen) {
                doc.msExitFullscreen();
            }
        }
    };

    // Fullscreen change event listener
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('msfullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('msfullscreenchange', handleFullscreenChange);
        };
    }, []);

    return (
        <div
            className={`relative group w-full h-full ${className}`}
            onMouseEnter={() => {
                setShowControls(true);
                if (isPlaying) hideControlsAfterDelay();
            }}
            onMouseMove={() => {
                if (isPlaying) showControlsAndResetTimer();
            }}
            onMouseLeave={() => {
                if (isPlaying) hideControlsAfterDelay();
            }}
        >
            <video
                ref={videoRef}
                src={src}
                poster={showPoster ? poster : undefined}
                className="w-full h-full rounded-lg"
                muted={isMuted}
                loop
                preload="metadata"
                playsInline
            />

            {/* Loading indicator */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center rounded-lg">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
            )}

            {/* Play Button Overlay */}
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center rounded-lg">
                    <button
                        onClick={togglePlay}
                        className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transition-all duration-300 transform hover:scale-110 shadow-lg"
                    >
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-primary ml-1"
                        >
                            <path
                                d="M8 5v14l11-7z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
            )}

            {/* Controls */}
            {(showControls || isPlaying) && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 rounded-b-lg">
                    {/* Progress Bar */}
                    <div className="mb-3">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={duration ? (currentTime / duration) * 100 : 0}
                            onChange={handleTimeChange}
                            className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                        />
                    </div>

                    {/* Control Buttons */}
                    <div className="flex items-center justify-between text-white">
                        <div className="flex items-center space-x-4">
                            {/* Fullscreen Button */}
                            <button
                                onClick={toggleFullscreen}
                                className="hover:text-secondary transition-colors p-1"
                                title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                            >
                                {isFullscreen ? (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                                    </svg>
                                )}
                            </button>

                            {/* Play/Pause Button */}
                            <button
                                onClick={togglePlay}
                                className="hover:text-secondary transition-colors p-1"
                            >
                                {isPlaying ? (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                    </svg>
                                ) : (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                )}
                            </button>

                            {/* Volume Control */}
                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={toggleMute}
                                    className="hover:text-secondary transition-colors p-1"
                                >
                                    {isMuted ? (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                                        </svg>
                                    ) : (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                        </svg>
                                    )}
                                </button>

                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={volume * 100}
                                    onChange={handleVolumeChange}
                                    className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                                />
                            </div>

                            {/* Time Display */}
                            <span className="text-sm font-medium">
                                {formatTime(currentTime)} / {formatTime(duration)}
                            </span>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`

        video[poster]{
        object-fit: contain;
        }
        video{
        object-fit: cover;}    
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 14px;
          width: 14px;
          border-radius: 50%;
          background: #F39019;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .slider::-moz-range-thumb {
          height: 14px;
          width: 14px;
          border-radius: 50%;
          background: #F39019;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .slider::-webkit-slider-track {
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }

        .slider::-moz-range-track {
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }

        .slider:hover::-webkit-slider-thumb {
          background: #F39019;
          transform: scale(1.1);
        }

        .slider:hover::-moz-range-thumb {
          background: #F39019;
          transform: scale(1.1);
        }
      `}</style>
        </div>
    );
}

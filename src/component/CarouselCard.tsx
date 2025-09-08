"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform as motionUseTransform } from 'motion/react';
import type { MotionValue, Transition } from 'motion/react';
import type { JSX, ReactNode } from 'react';

import Image, { type StaticImageData } from 'next/image';
import LiquiedGlassCard from './LiquiedGlassPage';
export interface CarouselItem {
    title: string | ReactNode;
    description: string | ReactNode;
    id: number;
    image: string | StaticImageData;
}

export interface CarouselProps {
    items?: CarouselItem[];
    baseWidth?: number;
    autoplay?: boolean;
    autoplayDelay?: number;
    pauseOnHover?: boolean;
    loop?: boolean;
    round?: boolean;
}

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS: Transition = { type: 'spring', stiffness: 300, damping: 30 } as const;

export default function CarouselCard({
    items = [],
    baseWidth = 500,
    autoplay = false,
    autoplayDelay = 5000,
    pauseOnHover = false,
    loop = false,
    round = false
}: CarouselProps): JSX.Element {
    const containerPadding = 16;
    const itemWidth = baseWidth - containerPadding * 2;
    const trackItemOffset = itemWidth + GAP;

    const carouselItems = loop && items.length > 0 ? [...items, items[0]] : items;
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const x = useMotionValue<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isResetting, setIsResetting] = useState<boolean>(false);

    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (pauseOnHover && containerRef.current) {
            const container = containerRef.current;
            const handleMouseEnter = () => setIsHovered(true);
            const handleMouseLeave = () => setIsHovered(false);
            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);
            return () => {
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, [pauseOnHover]);

    useEffect(() => {
        if (!autoplay) return;
        if (pauseOnHover && isHovered) return;
        if (carouselItems.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex(prev => {
                if (loop && prev === items.length - 1) {
                    return prev + 1;
                }
                if (prev === carouselItems.length - 1) {
                    return loop ? 0 : prev;
                }
                return prev + 1;
            });
        }, autoplayDelay);
        return () => clearInterval(timer);
    }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

    const effectiveTransition: Transition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

    const handleAnimationComplete = () => {
        if (loop && currentIndex === carouselItems.length - 1) {
            setIsResetting(true);
            x.set(0);
            setCurrentIndex(0);
            setTimeout(() => setIsResetting(false), 50);
        }
    };

    type DragInfo = { offset: { x: number }; velocity: { x: number } };
    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: DragInfo): void => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;
        if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
            if (loop && currentIndex === items.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setCurrentIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
            }
        } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
            if (loop && currentIndex === 0) {
                setCurrentIndex(items.length - 1);
            } else {
                setCurrentIndex(prev => Math.max(prev - 1, 0));
            }
        }
    };

    const dragProps = loop || carouselItems.length === 0
        ? {}
        : {
            dragConstraints: {
                left: -trackItemOffset * (carouselItems.length - 1),
                right: 0
            }
        };

    return (

        <div
            ref={containerRef}
            className="relative overflow-hidden p-4"
            style={{
                width: `${baseWidth}px`,
                ...(round && { height: `${baseWidth}px` })
            }}
        >
            <LiquiedGlassCard radius='20px'>

                <motion.div
                    className="flex"
                    drag="x"
                    {...dragProps}
                    style={{
                        width: itemWidth,
                        gap: `${GAP}px`,
                        perspective: 1000,
                        perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
                        x
                    }}
                    onDragEnd={handleDragEnd}
                    animate={{ x: -(currentIndex * trackItemOffset) }}
                    transition={effectiveTransition}
                    onAnimationComplete={handleAnimationComplete}
                >

                    {carouselItems.map((item, index) => {
                        return (
                            <CarouselSlide
                                key={item.id * Math.random()}
                                valkey={index * Math.random()}
                                item={item}
                                index={index}
                                round={round}
                                itemWidth={itemWidth}
                                trackItemOffset={trackItemOffset}
                                x={x}
                                effectiveTransition={effectiveTransition}
                            />
                        )
                    })}

                </motion.div>
                <div className={`flex w-full justify-center ${round ? 'absolute z-20 bottom-12 left-1/2 -translate-x-1/2' : ''}`}>
                    <div className="mt-4 flex w-[150px] justify-center gap-2 px-8">
                        {items.length > 0 && items.map((_, index) => (
                            <motion.div
                                key={index}
                                className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${currentIndex % items.length === index
                                    ? round
                                        ? 'bg-white'
                                        : 'bg-[#0076F3]'
                                    : round
                                        ? 'bg-[#555]'
                                        : 'bg-[#D9D9D9]'
                                    }`}
                                animate={{
                                    scale: currentIndex % items.length === index ? 1.2 : 1
                                }}
                                onClick={() => setCurrentIndex(index)}
                                transition={{ duration: 0.15 }}
                            />
                        ))}
                    </div>
                </div>
            </LiquiedGlassCard>


        </div>

    );
}

type SlideProps = {
    item: CarouselItem;
    valkey: number | string;
    index: number;
    round: boolean;
    itemWidth: number;
    trackItemOffset: number;
    x: MotionValue<number>;
    effectiveTransition: Transition;
};

function CarouselSlide({ item, index, round, itemWidth, trackItemOffset, x, effectiveTransition, valkey }: SlideProps) {

    const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
    const outputRange = [90, 0, -90];
    const rotateY = motionUseTransform(x, range, outputRange, { clamp: false });

    return (
        <motion.div
            key={valkey}
            className={`relative shrink-0 flex flex-col ${round
                ? 'items-center justify-center text-center  border-0'
                : 'items-start justify-between rounded-[12px]'
                } overflow-hidden cursor-grab active:cursor-grabbing`}
            style={{
                width: itemWidth,
                height: round ? itemWidth : '100%',
                rotateY: rotateY,
                ...(round && { borderRadius: '50%' })
            }}
            transition={effectiveTransition}
        >
            <div className='flex'>
                <Image src={item.image} alt={typeof item.title === 'string' ? item.title : 'Carousel Image'} className="rounded-md w-[165px] h-[165px]" width={165} height={165} />
                <div className="p-5 flex flex-col gap-2">
                    <div className="mb-1 font-black text-lg text-white">{item.title}</div>
                    <p className="text-sm text-white">{item.description}</p>
                </div>
            </div>

        </motion.div>
    );
}

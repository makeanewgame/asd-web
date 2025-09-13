"use client"

import { Accordion, AccordionItem } from '@heroui/react'
import React from 'react'
import { CarouselItem } from './CarouselCard';

export interface AccordionItemData {
    title: string | React.ReactNode;
    id: number;
    description?: string | React.ReactNode;
    image?: string | CarouselItem['image'];
}

const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <g clipPath="url(#clip0_240_56)">
            <path d="M0 13H28V15H0V13Z" fill="white" />
            <path d="M15 8.74227e-08L15 28H13L13 0L15 8.74227e-08Z" fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_240_56">
                <rect width="28" height="28" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

const PlusIconDark = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <g clipPath="url(#clip0_240_56)">
            <path d="M0 13H28V15H0V13Z" fill="black" />
            <path d="M15 8.74227e-08L15 28H13L13 0L15 8.74227e-08Z" fill="black" />
        </g>
        <defs>
            <clipPath id="clip0_240_56">
                <rect width="28" height="28" fill="black" />
            </clipPath>
        </defs>
    </svg>
)

const MinusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <g clipPath="url(#clip0_240_53)">
            <path d="M13 28L13 0L15 -8.74228e-08L15 28L13 28Z" fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_240_53">
                <rect width="28" height="28" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

const MinusIconDark = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <g clipPath="url(#clip0_240_53)">
            <path d="M13 28L13 0L15 -8.74228e-08L15 28L13 28Z" fill="black" />
        </g>
        <defs>
            <clipPath id="clip0_240_53">
                <rect width="28" height="28" fill="black" />
            </clipPath>
        </defs>
    </svg>
)



export default function AccordionComp({ data, dark }: { data: AccordionItemData[]; dark?: boolean }) {

    const itemClasses = !dark ? {
        title: "text-[38px] font-medium text-[#ffffff]",
        content: "text-default text-[#ffffff] text-[20px] mt-4s",


    } : {
        title: "text-[38px] font-medium text-[#000000]",
        content: "text-default text-[#000000] text-[20px] mt-4s",
        base: 'border-b border-b-[#000000]/20'
    };

    return (
        <Accordion itemClasses={itemClasses}>
            {
                data.map(item => (
                    <AccordionItem
                        className='whitespace-pre-line'
                        indicator={({ isOpen }) => (isOpen ? dark ? <MinusIconDark /> : <MinusIcon /> : dark ? <PlusIconDark /> : <PlusIcon />)}
                        key={item.id} textValue={item.id.toString()} title={item.title}>{item.description}</AccordionItem>
                ))
            }
        </Accordion >
    )
}

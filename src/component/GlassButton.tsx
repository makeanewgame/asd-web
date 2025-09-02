import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'

type GlassButtonProps = {
    name?: string;
    icon?: boolean;
};

export default function GlassButton(props: GlassButtonProps) {
    const { name, icon } = props;
    const t = useTranslations("Menu");
    return (
        <div className='glass-card-full flex items-center justify-center px-4 py-4 rounded-full text-[#ADD2FF]'>
            {icon ? <Image src={"/phone.svg"} alt="Chevron Right" width={24} height={24} /> : null}
            {!icon && name ? t(name) : null}
            <svg style={{ "display": "none" }}>
                <filter id="displacementFilter">
                    <feImage href="/glass-2.jpg" preserveAspectRatio="none" />
                    <feDisplacementMap in="SourceGraphic"
                        in2="turbulence"
                        scale="100" xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </svg>
        </div>
    )
}

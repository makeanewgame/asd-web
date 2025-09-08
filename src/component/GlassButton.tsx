import React from 'react'
import LiquiedGlassCard from './LiquiedGlassPage';

type GlassButtonProps = {
    name?: string;
    icon?: boolean;
    children?: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
};

export default function GlassButton(props: GlassButtonProps) {
    const { children, size = 'medium' } = props;

    const sizeMap = {
        small: { wrapper: 'px-3 py-1 text-xs gap-2', radius: '9999px' },
        medium: { wrapper: 'px-4 py-2 text-sm gap-3', radius: '9999px' },
        large: { wrapper: 'px-4 py-4 text-base gap-4', radius: '9999px' },
    } as const;

    return (
        <LiquiedGlassCard className='relative' contentClassName="p-0" radius="200px">
            <div className={`flex items-center justify-between w-full rounded-full text-[#ADD2FF] ${sizeMap[size].wrapper}`}>
                {children}
                <svg style={{ "display": "none" }}>
                    <filter id="displacementFilter">
                        <feImage href="/glass-2.jpg" preserveAspectRatio="none" />
                        <feDisplacementMap in="SourceGraphic"
                            in2="turbulence"
                            scale="100" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                </svg>
            </div>
        </LiquiedGlassCard>

    )
}

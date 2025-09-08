export default function LiquiedGlassCard({ children, className, contentClassName, radius }: { children: React.ReactNode; className?: string; contentClassName?: string; radius?: string | number }) {

    const style: React.CSSProperties & { ['--corner-radius']?: string } = {};
    if (radius !== undefined) {
        style['--corner-radius'] = typeof radius === 'number' ? `${radius}px` : radius;
    }

    return (
        <div className={`GlassContainer ${className}`} style={style}>
            <div className={`GlassContent ${contentClassName}`}>
                {children}
            </div>
            <div className="GlassMaterial">
                <div className="GlassEdgeReflection"></div>
                <div className="GlassEmbossReflection"></div>
                <div className="GlassRefraction"></div>
                <div className="GlassBlur"></div>
                <div className="BlendLayers"></div>
                <div className="BlendEdge"></div>
                <div className="Highlight"></div>
            </div>
        </div>
    )
}

export default function LiquiedGlassCard({ children, className, contentClassName, radius }: { children: React.ReactNode; className?: string; contentClassName?: string; radius?: string }) {

    const style = {
        ['--corner-radius' as any]: typeof radius === 'number' ? `${radius}px` : radius, // örn: 24 -> "24px" ya da "1.5rem"
    } as React.CSSProperties;

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

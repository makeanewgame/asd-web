import { JSX } from "react"

export default function GlassMiniBox({ key, title }: {
    key: number, title: JSX.Element
}) {
    return (
        <div className="bg-white/10 backdrop-blur-md text-white p-4 border border-white/30 rounded-lg shadow-md flex items-center min-h-[200px]" key={key}>
            <h3 className="text-center text-[#ADD2FF]">{title}</h3>
        </div>
    )
}

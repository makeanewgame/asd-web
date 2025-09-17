"use client"
import Markdown from 'react-markdown'

interface MarkdownRendererProps {
    content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
    return (
        <div className="markdown-content">
            <Markdown>{content}</Markdown>
            <style jsx>{`
                .markdown-content :global(h1) {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: #ffffff;
                    margin-bottom: 1.5rem;
                    margin-top: 2rem;
                    line-height: 1.2;
                    border-bottom: 2px solid #ADD2FF;
                    padding-bottom: 0.5rem;
                }

                .markdown-content :global(h2) {
                    font-size: 2rem;
                    font-weight: 700;
                    color: #ADD2FF;
                    margin-bottom: 1rem;
                    margin-top: 1.5rem;
                    line-height: 1.3;
                }

                .markdown-content :global(h3) {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #ffffff;
                    margin-bottom: 0.75rem;
                    margin-top: 1.25rem;
                    line-height: 1.4;
                }

                .markdown-content :global(h4) {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #ADD2FF;
                    margin-bottom: 0.5rem;
                    margin-top: 1rem;
                }

                .markdown-content :global(h5) {
                    font-size: 1.1rem;
                    font-weight: 500;
                    color: #ffffff;
                    margin-bottom: 0.5rem;
                    margin-top: 0.75rem;
                }

                .markdown-content :global(h6) {
                    font-size: 1rem;
                    font-weight: 500;
                    color: #ADD2FF;
                    margin-bottom: 0.5rem;
                    margin-top: 0.75rem;
                }

                .markdown-content :global(p) {
                    color: #ffffff;
                    line-height: 1.7;
                    margin-bottom: 1rem;
                    font-size: 1rem;
                }

                .markdown-content :global(ul) {
                    margin: 1rem 0;
                    padding-left: 1.5rem;
                    list-style: none;
                }

                .markdown-content :global(ol) {
                    margin: 1rem 0;
                    padding-left: 1.5rem;
                    color: #ffffff;
                }

                .markdown-content :global(li) {
                    color: #ffffff;
                    line-height: 1.6;
                    margin-bottom: 0.5rem;
                    position: relative;
                }

                .markdown-content :global(ul li):before {
                    content: "•";
                    color: #ADD2FF;
                    font-weight: bold;
                    font-size: 1.2rem;
                    position: absolute;
                    left: -1.5rem;
                }

                .markdown-content :global(ol li) {
                    counter-increment: item;
                }

                .markdown-content :global(ol li):before {
                    content: counter(item) ".";
                    color: #ADD2FF;
                    font-weight: bold;
                    position: absolute;
                    left: -1.5rem;
                }

                .markdown-content :global(ol) {
                    counter-reset: item;
                }

                .markdown-content :global(blockquote) {
                    border-left: 4px solid #ADD2FF;
                    background: rgba(173, 210, 255, 0.1);
                    padding: 1rem 1.5rem;
                    margin: 1.5rem 0;
                    font-style: italic;
                    color: #ffffff;
                    border-radius: 0 8px 8px 0;
                }

                .markdown-content :global(code) {
                    background: rgba(173, 210, 255, 0.15);
                    color: #ADD2FF;
                    padding: 0.2rem 0.4rem;
                    border-radius: 4px;
                    font-family: 'Monaco', 'Consolas', monospace;
                    font-size: 0.9rem;
                }

                .markdown-content :global(pre) {
                    background: rgba(7, 19, 41, 0.8);
                    border: 1px solid rgba(173, 210, 255, 0.3);
                    border-radius: 8px;
                    padding: 1rem;
                    margin: 1rem 0;
                    overflow-x: auto;
                }

                .markdown-content :global(pre code) {
                    background: none;
                    padding: 0;
                    color: #ffffff;
                }

                .markdown-content :global(a) {
                    color: #ADD2FF;
                    text-decoration: underline;
                    transition: color 0.2s ease;
                }

                .markdown-content :global(a:hover) {
                    color: #ffffff;
                }

                .markdown-content :global(strong) {
                    font-weight: 700;
                    color: #ffffff;
                }

                .markdown-content :global(em) {
                    font-style: italic;
                    color: #ADD2FF;
                }

                .markdown-content :global(hr) {
                    border: none;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #ADD2FF, transparent);
                    margin: 2rem 0;
                }

                .markdown-content :global(table) {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 1.5rem 0;
                    background: rgba(7, 19, 41, 0.3);
                    border-radius: 8px;
                    overflow: hidden;
                }

                .markdown-content :global(th) {
                    background: rgba(173, 210, 255, 0.2);
                    color: #ffffff;
                    padding: 0.75rem;
                    text-align: left;
                    font-weight: 600;
                }

                .markdown-content :global(td) {
                    padding: 0.75rem;
                    color: #ffffff;
                    border-top: 1px solid rgba(173, 210, 255, 0.1);
                }

                .markdown-content :global(img) {
                    max-width: 100%;
                    height: auto;
                    border-radius: 8px;
                    margin: 1rem 0;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                }

                @media (max-width: 768px) {
                    .markdown-content :global(h1) {
                        font-size: 2rem;
                    }
                    
                    .markdown-content :global(h2) {
                        font-size: 1.5rem;
                    }
                    
                    .markdown-content :global(h3) {
                        font-size: 1.25rem;
                    }
                }
            `}</style>
        </div>
    )
}

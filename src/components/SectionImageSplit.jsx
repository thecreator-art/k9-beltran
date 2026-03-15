import Image from 'next/image';

export default function SectionImageSplit({
    title,
    eyebrow,
    body = [],
    imageSrc,
    imageAlt,
    reverse = false,
    light = false,
}) {
    return (
        <section className={`section ${light ? 'section-light' : ''}`}>
            <div className="container">
                <div className="section-image-split-grid">
                    <div className="section-image-split-copy" style={{ order: reverse ? 2 : 1 }}>
                        {eyebrow ? <div className="section-label">{eyebrow}</div> : null}
                        <h2 className="section-title">{title}</h2>
                        <div className="rule"></div>
                        {body.map((paragraph, index) => (
                            <p key={index} style={{ fontSize: 18, color: 'var(--text-dark)', lineHeight: 1.8 }}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <div className="section-image-split-media-wrap" style={{ order: reverse ? 1 : 2 }}>
                        <div className="section-image-split-media">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                sizes="(max-width: 900px) 100vw, 40vw"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

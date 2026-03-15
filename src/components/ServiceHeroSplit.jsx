import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { SITE_CONFIG } from '@/config/siteConfig';

export default function ServiceHeroSplit({
    imageSrc,
    imageAlt,
    eyebrow,
    title,
    description,
    points = [],
    primaryLabel = 'Book an Evaluation',
    primaryHref = '#hero-form',
    formTitle = 'Start My Dog\'s Training',
    formSubtitle = 'Tell Eduardo what is going on and he will point you to the right program.',
    defaultService,
    sourceService,
    sourceLocation,
}) {
    return (
        <section className="page-hero page-hero-standard" style={{ minHeight: 620 }}>
            <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                sizes="100vw"
                style={{ objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.52)', zIndex: 1 }} />
            <div className="container">
                <div className="page-hero-inner">
                    <div className="page-hero-copy" style={{ position: 'relative', zIndex: 2 }}>
                        <div className="section-label" style={{ color: 'rgba(255,255,255,0.84)' }}>{eyebrow}</div>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        {points.length > 0 && (
                            <div className="hero-bullets" style={{ marginTop: 24, marginBottom: 0 }}>
                                {points.map((point) => (
                                    <div key={point} className="hero-bullet" style={{ fontSize: 17 }}>
                                        {point}
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="page-hero-actions" style={{ marginTop: 28 }}>
                            <a href={primaryHref} className="btn btn-primary btn-lg">{primaryLabel}</a>
                            <a href={SITE_CONFIG.phoneHref} className="btn btn-secondary btn-lg">{SITE_CONFIG.phone}</a>
                        </div>
                    </div>
                    <div className="hero-form" id="hero-form" style={{ position: 'relative', zIndex: 2 }}>
                        <ContactForm
                            title={formTitle}
                            subtitle={formSubtitle}
                            defaultService={defaultService}
                            sourceService={sourceService}
                            sourceLocation={sourceLocation}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

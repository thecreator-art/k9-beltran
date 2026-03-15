import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/config/siteConfig';
import { ALL_LOCATIONS } from '@/config/locations';
import { SERVICE_CONTENT } from '@/config/service-content';
import { SERVICE_FAQS, FALLBACK_FAQS } from '@/config/seo-data';
import FAQAccordion from '@/components/FAQAccordion';
import TransformationCTA from '@/components/TransformationCTA';
import MobileCardCarousel from '@/components/MobileCardCarousel';

export default function SEOPageTemplate({ service, city, variant }) {
    if (!service) return null;

    const isCityPage = !!city;
    const content = SERVICE_CONTENT[service.id] || { bullets: [], steps: [] };
    const faqs = SERVICE_FAQS[service.id] || FALLBACK_FAQS;
    const heroPoints = (content.bullets && content.bullets.length > 0)
        ? content.bullets.slice(0, 4)
        : [
            `Real-world ${service.name.toLowerCase()} that sticks`,
            `Clear structure, honest coaching, no gimmicks`,
            city ? `Serving ${city.name} and ${city.county}` : 'Serving Murrieta and surrounding areas',
            'Fast scheduling and direct access to Eduardo',
        ];

    // Fallback blurb if city but no blurb
    const cityBlurb = city?.blurb || `Expert ${service.name} services for families in ${city?.name || 'the area'}.`;

    const renderSection = (sectionId) => {
        switch (sectionId) {
            case 'intro':
                return (
                    <section key="intro" className="section">
                        <div className="container content-narrow">
                            <div className="section-label">{isCityPage ? `Serving ${city.name}` : 'Professional Service'}</div>
                            <h2 className="section-title">
                                {isCityPage
                                    ? `${service.name} for ${city.name}, CA Dog Owners`
                                    : `${service.name} Designed for Real-World Reliability`}
                            </h2>
                            <div className="rule"></div>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '24px' }}>
                                {variant.opening}
                            </p>
                            <p>
                                {isCityPage
                                    ? `If you're looking for professional ${service.name.toLowerCase()} in ${city.name}, Shepards K9 provides the focused, relationship-based results you need. ${cityBlurb}`
                                    : `Shepards K9 specializes in ${service.name.toLowerCase()} that sticks. We don't just train for the training room; we train for the life you actually live with your dog.`}
                            </p>
                            <p>
                                Unlike many trainers who rely on treats or high-pressure tactics, Eduardo Beltran focuses on clear communication and mutual respect. This approach creates a dog that <em>wants</em> to listen to you, even when there are distractions around.
                            </p>
                        </div>
                    </section>
                );
            case 'why-us':
                return (
                    <section key="why-us" className="section section-light">
                        <div className="container content-narrow">
                            <h2 style={{ marginBottom: 16 }}>{variant.benefitTitle}</h2>
                            <div className="rule"></div>
                            <ul className="icon-list" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginBottom: 40 }}>
                                {content.bullets.map(item => (
                                    <li key={item} className="icon-list-item" style={{ fontSize: 16 }}>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <h3 style={{ marginBottom: 24 }}>How the {service.name} Process Works</h3>
                            <MobileCardCarousel
                                items={content.steps}
                                className="service-step-grid"
                                renderItem={(step, idx) => (
                                    <div key={`${step.title}-${idx}`} className="info-card service-step-card">
                                        <div className="info-card-step">Step 0{idx + 1}</div>
                                        <h4 style={{ marginBottom: 8 }}>{step.title}</h4>
                                        <p style={{ fontSize: 14, color: '#6B7280', margin: 0 }}>{step.body}</p>
                                    </div>
                                )}
                            />
                        </div>
                    </section>
                );
            case 'local-relevance':
                if (!isCityPage) return null;
                return (
                    <section key="local-relevance" className="section">
                        <div className="container content-narrow">
                            <h2 style={{ marginBottom: 16 }}>{service.name} in {city.name} Neighborhoods</h2>
                            <div className="rule"></div>
                            <p>
                                From <strong>{city.neighborhoods}</strong> to the surrounding areas, Shepards K9 provides {service.name.toLowerCase()} that accounts for local distractions. Whether you're walking your dog near <strong>{city.landmarks}</strong> or practicing recall in your own backyard, we ensure the behavior is reliable.
                            </p>
                            <p>
                                Eduardo is fully licensed, insured, and deeply familiar with the {city.county} area. We offer convenient pickup and drop-off service throughout {city.name}, making it easy to fit elite training into your busy schedule.
                            </p>
                        </div>
                    </section>
                );
            case 'faqs':
                return (
                    <section key="faqs" className="section">
                        <div className="container" style={{ maxWidth: 800 }}>
                            <div className="text-center">
                                <div className="section-label">Common Questions</div>
                                <h2 className="section-title">{service.name} FAQs</h2>
                            </div>
                            <FAQAccordion faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />
                        </div>
                    </section>
                );
            case 'pricing-link':
                return (
                    <section key="pricing-link" className="section-sm section-alt">
                        <div className="container text-center">
                            <h3>Transparent, Budget-Friendly Pricing</h3>
                            <p>Get the most effective ${service.name.toLowerCase()} without hidden fees or corporate price tags.</p>
                            <Link href="/pricing" className="btn btn-primary">View Training Pricing</Link>
                        </div>
                    </section>
                );
            case 'cta':
                return <TransformationCTA key="cta" />;
            default:
                return null;
        }
    };

    return (
        <div className={`seo-page-variant-${variant.id}`}>
            <div className="breadcrumb">
                <div className="container">
                    <ol className="breadcrumb-list">
                        <li><Link href="/">Home</Link></li>
                        <li className="breadcrumb-sep">›</li>
                        {isCityPage && (
                            <>
                                <li><Link href={service.href}>{service.name}</Link></li>
                                <li className="breadcrumb-sep">›</li>
                                <li>{city.name}</li>
                            </>
                        )}
                        {!isCityPage && <li>{service.name}</li>}
                    </ol>
                </div>
            </div>

            <section className="page-hero page-hero-standard">
                <Image
                    src={service.image || '/photos/hero-eduardo-boxer.jpg'}
                    alt={isCityPage
                        ? `${service.name} with Eduardo Beltran in ${city.name}, California`
                        : `${service.name} with Eduardo Beltran at Shepards K9`}
                    fill
                    priority
                    quality={55}
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.45)', zIndex: 1 }} />
                <div className="container">
                    <div className="page-hero-inner">
                        <div className="page-hero-copy" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="section-label" style={{ color: 'rgba(255,255,255,0.86)' }}>
                                {isCityPage ? `${service.name} in ${city.name}` : service.name}
                            </div>
                            <h1>
                                {isCityPage ? `${service.name} in ${city.name}, CA` : service.h1}
                            </h1>
                            <p>
                                {service.shortDesc} {isCityPage ? `Now serving ${city.name} and all of ${city.county}.` : ''}
                            </p>
                            <div className="page-hero-actions">
                                <Link href="#hero-form" className="btn btn-primary btn-lg">Book Free Evaluation</Link>
                                <a href={SITE_CONFIG.phoneHref} className="btn btn-secondary btn-lg">📞 {SITE_CONFIG.phone}</a>
                            </div>
                        </div>
                        <div className="page-hero-panel" style={{ position: 'relative', zIndex: 2 }}>
                            <h3>{isCityPage ? `Why ${city.name} owners call Eduardo` : `What to expect from ${service.name}`}</h3>
                            <p>{variant.opening}</p>
                            <div className="page-hero-points">
                                {heroPoints.map((point) => (
                                    <div key={point} className="page-hero-point">{point}</div>
                                ))}
                            </div>
                            {city && (
                                <p style={{ marginTop: 18, marginBottom: 0 }}>
                                    {cityBlurb}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Dynamic Rendering of Sections based on Variant */}
            {variant.sections.map(sectionId => renderSection(sectionId))}

            {/* Internal Linking Footer */}
            <section className="section-sm section-light" style={{ borderTop: '1px solid #E5E7EB' }}>
                <div className="container">
                    <h3 style={{ marginBottom: 20, fontSize: 18 }}>
                        {isCityPage ? `${service.name} in Other Cities` : `${service.name} Service Areas`}
                    </h3>
                    <div className="location-grid">
                        {ALL_LOCATIONS.filter(l => !city || l.id !== city.id).slice(0, 16).map((l, idx) => {
                            const anchorVariations = [
                                l.name,
                                `${l.name}, CA`,
                                `${service.name} ${l.name}`,
                                `${l.name} ${service.name}`
                            ];
                            const anchorText = isCityPage
                                ? anchorVariations[idx % anchorVariations.length]
                                : `${l.name}, CA`;

                            return (
                                <Link
                                    key={l.id}
                                    href={`/${service.id}/${l.id}`}
                                    className="location-chip"
                                >
                                    {anchorText}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

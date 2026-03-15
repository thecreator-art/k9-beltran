import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { ALL_LOCATIONS, PRIMARY_CITIES } from '@/config/locations';
import { TIER_1_CONTENT } from '@/config/tier1-location-content';
import { TIER_2_CONTENT } from '@/config/tier2-location-content';
import FAQAccordion from '@/components/FAQAccordion';
import InternalLinkingHub from '@/components/InternalLinkingHub';
import { SITE_CONFIG } from '@/config/siteConfig';
import { isIndexableLocationPage } from '@/lib/indexability';
import ContactForm from '@/components/ContactForm';
import { REVIEWS } from '@/config/reviews';
import { getServiceVisuals } from '@/config/service-visuals';
import SectionImageSplit from '@/components/SectionImageSplit';
import MobileCardCarousel from '@/components/MobileCardCarousel';

export async function generateStaticParams() {
    return ALL_LOCATIONS.map((city) => ({
        slug: city.id,
    }));
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const cityObj = ALL_LOCATIONS.find((c) => c.id === slug);

    if (!cityObj) return {};

    const content = TIER_1_CONTENT[slug] || TIER_2_CONTENT[slug];
    if (!content) return {};

    return {
        title: `${content.h1.split(' — ')[0]} | Shepards K9`,
        description: `Professional dog training in ${cityObj.name}, CA. Eduardo Beltran solves severe behavioral problems safely in real-world environments. Book an evaluation.`,
        alternates: {
            canonical: `/${slug}`,
        },
        robots: isIndexableLocationPage(slug) ? undefined : {
            index: false,
            follow: true,
        },
    };
}

export default async function LocationPage({ params }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    const cityObj = ALL_LOCATIONS.find((c) => c.id === slug);
    if (!cityObj) notFound();

    const content = TIER_1_CONTENT[slug] || TIER_2_CONTENT[slug];
    if (!content) {
        return <div style={{ padding: 120, textAlign: 'center' }}>Content for {cityObj.name} not found.</div>;
    }

    const locationMapSrc = `https://www.google.com/maps?q=${encodeURIComponent(`${cityObj.name}, California`)}&z=11&output=embed`;
    const realReviewPool = REVIEWS
        .filter((review) => !content.reviews.some((existing) => existing.text === review.text))
        .sort((a, b) => {
            const aMatch = a.location.toLowerCase().includes(cityObj.name.toLowerCase()) ? 1 : 0;
            const bMatch = b.location.toLowerCase().includes(cityObj.name.toLowerCase()) ? 1 : 0;
            return bMatch - aMatch;
        })
        .map((review) => ({
            name: review.author,
            text: review.text,
            location: review.location,
            service: review.service,
        }));
    const displayedReviews = [...content.reviews, ...realReviewPool].slice(0, 3);

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: content.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
            },
        })),
    };

    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Shepards K9',
        image: `${SITE_CONFIG.url}/logo.svg`,
        url: `${SITE_CONFIG.url}/${slug}`,
        telephone: SITE_CONFIG.phone,
        areaServed: {
            '@type': 'City',
            name: cityObj.name,
            containedInPlace: {
                '@type': 'State',
                name: 'California'
            }
        },
        description: `Professional dog training services serving ${cityObj.name}, CA.`,
    };

    return (
        <div>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="localbox-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            <section className="page-hero page-hero-standard">
                <Image
                    src="/photos/IMG_8720.jpg"
                    alt={`Eduardo Beltran training a dog outdoors near ${cityObj.name}, California`}
                    fill
                    priority
                    fetchPriority="high"
                    quality={55}
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />
                <div className="container">
                    <div className="page-hero-inner">
                        <div className="page-hero-copy" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="section-label" style={{ color: 'rgba(255,255,255,0.84)' }}>{cityObj.name}, California</div>
                            <h1>{content.h1}</h1>
                            <p>{cityObj.blurb}</p>
                            <div className="page-hero-actions">
                                <Link href="/contact" className="btn btn-primary btn-lg">Book an Evaluation</Link>
                                <a href={SITE_CONFIG.phoneHref} className="btn btn-secondary btn-lg">{SITE_CONFIG.phone}</a>
                            </div>
                        </div>
                        <div className="hero-form" style={{ position: 'relative', zIndex: 2 }}>
                            <ContactForm
                                title={`Start Training in ${cityObj.name}`}
                                subtitle="Tell Eduardo what your dog is doing and he will point you to the right program."
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="location-story-grid">
                        <div className="location-map-wrap">
                            <iframe
                                src={locationMapSrc}
                                title={`${cityObj.name} service area map`}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <div className="location-story-copy">
                            <div className="section-label">Local Training</div>
                            <h2 className="section-title">
                                {cityObj.name.length % 3 === 0 
                                    ? `Why ${cityObj.name} owners call Eduardo`
                                    : cityObj.name.length % 3 === 1
                                    ? `Local dog training solutions in ${cityObj.name}`
                                    : `Solving canine behavior in ${cityObj.name}`}
                            </h2>
                            <div className="rule"></div>
                            {content.intro.map((paragraph, idx) => (
                                <p key={idx} style={{ fontSize: '1.08rem', lineHeight: '1.75', marginBottom: idx !== content.intro.length - 1 ? '24px' : '0' }}>
                                    {paragraph}
                                </p>
                            ))}
                            <div className="page-hero-points location-story-points">
                                <div className="page-hero-point">Real-world training in neighborhoods, parks, and public spaces</div>
                                <div className="page-hero-point">Behavior work built for daily life in {cityObj.name}</div>
                                <div className="page-hero-point">Direct communication and a clear plan from Eduardo</div>
                                <div className="page-hero-point">Fast scheduling with service across {cityObj.county}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div style={{ display: 'flex', flexDirection: cityObj.name.length % 2 === 0 ? 'column' : 'column-reverse' }}>
                <SectionImageSplit
                    light={cityObj.name.length % 2 === 0}
                    eyebrow="Training In Daily Life"
                    title={`How dog training holds up in ${cityObj.name}`}
                    body={[
                        `A local page should explain how the training actually translates into daily life in ${cityObj.name}. That means calmer walks, better threshold behavior, stronger leash communication, and more control in the places where your dog has already been making bad decisions.`,
                        `Eduardo uses the city context as part of the plan. The point is not to create a dog that only behaves in a quiet drill setup. The point is to create a dog that can move through ${cityObj.name} with more neutrality, more structure, and less chaos for the owner.`,
                    ]}
                    imageSrc={getServiceVisuals('dog-training')[1]}
                    imageAlt={`Dog training image for ${cityObj.name}`}
                    reverse={cityObj.name.length % 2 !== 0}
                />

                <section className="section section-light border-y border-[var(--border)]">
                    <div className="container" style={{ maxWidth: 1080 }}>
                        <div className="text-center">
                            <div className="section-label">Programs</div>
                            <h2 className="section-title">Dog training services in {cityObj.name}</h2>
                            <div className="rule" style={{ margin: '0 auto 24px' }}></div>
                        </div>
                        <div className="card-grid">
                            {content.services.map((service) => (
                                <div key={service.id} className="info-card">
                                    <h3 style={{ marginBottom: 10, color: 'var(--primary)' }}>{service.name}</h3>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>{service.desc}</p>
                                    <Link href={`/${service.id}/${cityObj.id}`} className="service-card-cta">
                                        Learn more →
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <SectionImageSplit
                    light={cityObj.name.length % 2 !== 0}
                    title={content.realEnvironments.title}
                    eyebrow="Real Environments"
                    body={[
                        content.realEnvironments.body,
                        `Good local pages should not read like generic dog-training copy with a city name inserted into it. In ${cityObj.name}, owners need to know whether the work holds on normal neighborhood walks, around local traffic, and in the real patterns their dog is already rehearsing every week.`,
                    ]}
                    imageSrc={getServiceVisuals('dog-training')[2]}
                    imageAlt={`Real-world dog training near ${cityObj.name}`}
                    reverse={cityObj.name.length % 2 === 0}
                />
            </div>

            <section className="section section-alt">
                <div className="container" style={{ maxWidth: 980 }}>
                    <div className="section-label">Behavior Issues</div>
                    <h2 className="section-title">{content.commonProblems.title}</h2>
                    <div className="rule"></div>
                    <MobileCardCarousel
                        items={content.commonProblems.issues}
                        className="city-problem-grid"
                        renderItem={(issue, idx) => (
                            <div key={`${issue.title}-${idx}`} className="info-card city-problem-card">
                                <h3 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: 8 }}>{issue.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: 0 }}>{issue.desc}</p>
                            </div>
                        )}
                    />
                </div>
            </section>

            <section className="section section-light location-page-review-section">
                <div className="container" style={{ maxWidth: 1040 }}>
                    <div className="text-center">
                        <div className="section-label">Client Results</div>
                        <h2 className="section-title">What {cityObj.name} dog owners say</h2>
                        <div className="rule" style={{ margin: '0 auto 32px' }}></div>
                    </div>
                    <div className="reviews-grid">
                        {displayedReviews.map((review, idx) => (
                            <div key={idx} className="review-card location-page-review-card">
                                <div className="review-stars">★★★★★</div>
                                <p className="review-text">"{review.text}"</p>
                                <div className="review-author">
                                    <div className="review-avatar">{review.name[0]}</div>
                                        <div>
                                            <div className="review-name">{review.name}</div>
                                            <div className="review-location">{review.location || `${cityObj.name}, CA`}</div>
                                            <div className="review-service">{review.service || 'Dog Training Client'}</div>
                                        </div>
                                    </div>
                                </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-light">
                <div className="container" style={{ maxWidth: 800 }}>
                    <div className="text-center">
                        <div className="section-label">Questions</div>
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <div className="rule" style={{ margin: '0 auto 32px' }}></div>
                    </div>
                    <FAQAccordion faqs={content.faqs} />
                </div>
            </section>

            <section className="section">
                <div className="container text-center" style={{ maxWidth: 800 }}>
                    <div className="section-label">Next Step</div>
                    <h2 className="section-title">Ready to train your dog in {cityObj.name}?</h2>
                    <div className="rule" style={{ margin: '0 auto 24px' }}></div>
                    <p style={{ fontSize: '1.15rem', marginBottom: 32, color: 'var(--text-muted)' }}>
                        {content.cta}
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg">
                        Schedule an Evaluation
                    </Link>
                    <InternalLinkingHub type="location" currentCityId={slug} />
                </div>
            </section>
        </div>
    );
}

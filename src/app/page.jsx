import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/config/siteConfig';
import { SERVICES } from '@/config/services';
import { HOMEPAGE_FAQS } from '@/config/faqs';
import { ALL_LOCATIONS, PRIMARY_CITIES } from '@/config/locations';
import dynamic from 'next/dynamic';
import ContactForm from '@/components/ContactForm';
const FAQAccordion = dynamic(() => import('@/components/FAQAccordion'));
const ReviewGrid = dynamic(() => import('@/components/ReviewGrid'));
const InstagramSection = dynamic(() => import('@/components/InstagramSection'));
import TransformationCTA from '@/components/TransformationCTA';


export const metadata = {
    title: 'Shepards K9 | Dog Training & Boarding in Murrieta, CA',
    description: "Murrieta's #1 dog training & boarding company. Board & Train, Off Leash Training, Dog Boarding & more. Licensed, insured & guaranteed. Call 818-255-8728.",
    alternates: { canonical: '/' },
    openGraph: { title: 'Shepards K9 | Dog Training & Boarding in Murrieta, CA', description: "Murrieta's #1 dog trainer. Results-driven, relationship-based dog training serving Murrieta, Temecula & Southern California.", },
};

const localBusinessSchema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', '@id': `${SITE_CONFIG.siteUrl}/#business`, name: SITE_CONFIG.businessName, description: SITE_CONFIG.defaultDescription, url: SITE_CONFIG.siteUrl, telephone: SITE_CONFIG.phone, email: SITE_CONFIG.email, address: { '@type': 'PostalAddress', streetAddress: 'Murrieta', addressLocality: 'Murrieta', addressRegion: 'CA', postalCode: '92562', addressCountry: 'US', }, geo: { '@type': 'GeoCoordinates', latitude: 33.5539, longitude: -117.2139, }, openingHours: 'Mo-Su 09:00-18:00', priceRange: '$', image: `${SITE_CONFIG.siteUrl}/og-image.jpg`, sameAs: [SITE_CONFIG.instagram, SITE_CONFIG.tiktok].filter(Boolean) };
const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.siteUrl}/#business`,
    'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '5.0',
        'reviewCount': '201'
    }
};

export default function HomePage() {
    const homepageServiceOrder = [
        'board-and-train',
        'dog-boarding',
        'dog-training',
        'puppy-training',
        'obedience-training',
        'off-leash-training',
        'day-training',
        'pickup-and-drop-off',
        'dog-photography',
    ];
    const homepageServices = homepageServiceOrder
        .map((id) => SERVICES.find((service) => service.id === id))
        .filter(Boolean);
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />


            {/* HERO */}
            <section className="hero">
                <Image
                    src="/photos/hero-eduardo-boxer-home.jpg"
                    alt="Eduardo Beltran working a boxer during a Shepards K9 training session in Murrieta"
                    fill
                    priority
                    fetchPriority="high"
                    quality={60}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                    className="hero-bg-image"
                />
                <div className="container" style={{ width: '100%' }}>
                    <div className="hero-inner">
                        <div className="hero-content">

                            <h1>Murrieta's #1 Dog Training & <span>Boarding</span> Company</h1>
                            <p className="hero-desc">
                                Real training. Real relationships. Real results. Eduardo Beltran at Shepards K9
                                transforms dogs through personalized, real-world training that actually sticks.
                            </p>
                            <div className="hero-bullets">
                                <div className="hero-bullet">Licensed, Insured & Guaranteed Results</div>
                                <div className="hero-bullet">Same Week Availability</div>
                                <div className="hero-bullet">Pickup & Drop Off Available</div>
                                <div className="hero-bullet">Serving Murrieta, Temecula, Menifee & More</div>
                            </div>
                            <div className="hero-ctas">
                                <a href="#hero-form" className="btn btn-primary btn-lg">Book Free Consultation</a>
                                <a href={SITE_CONFIG.phoneHref} className="btn btn-secondary btn-lg">Call Now</a>
                            </div>
                        </div>

                        <div className="hero-form" id="hero-form">
                            <ContactForm
                                title="Start My Dog's Training"
                                subtitle="Same week availability — Eduardo responds within a few hours."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SOUND FAMILIAR SECTION */}
            <section className="section" style={{ overflow: 'hidden', padding: '0', backgroundColor: '#F9F7F2', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
                <div className="container">
                    <div className="sound-familiar-grid" style={{ alignItems: 'flex-start' }}>
                        {/* LEFT: EDUARDO IMAGE */}
                        <div className="sound-familiar-image-wrap">
                            <Image
                                src="/photos/eduardo-rottweiler-cutout.png"
                                alt="Eduardo Training a Rottweiler"
                                width={600}
                                height={800}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ height: 'auto', width: '100%', maxWidth: '520px', objectFit: 'contain', display: 'block' }}
                                loading="lazy"
                                fetchPriority="low"
                                className="sound-familiar-hero-img"
                            />
                        </div>

                        {/* RIGHT: CONTENT */}
                        <div className="sound-familiar-content">
                            <div style={{ color: '#8C4F14', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
                                SOUND FAMILIAR?
                            </div>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(24px, 3.5vw, 42px)', lineHeight: 1.15, color: '#1C1C1C', marginBottom: '40px' }}>
                                Does your dog struggle with this?
                            </h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                                {['Pulling on leash', 'Jumping on guests', 'Aggression toward other dogs', 'Ignoring commands in public', 'Reactivity on walks', 'Off leash reliability'].map((issue, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#1C1C1C', fontFamily: 'var(--font-sans)', fontSize: '18px', fontWeight: 500 }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8C4F14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                                            <path d="M12 9v4" />
                                            <path d="M12 17h.01" />
                                        </svg>
                                        {issue}
                                    </div>
                                ))}
                            </div>

                            <p style={{ color: '#566A46', fontFamily: 'var(--font-sans)', fontSize: '16px', fontStyle: 'italic', marginBottom: '32px' }}>
                                Eduardo solves all of these — in real environments, not a training facility.
                            </p>

                            <Link href="#hero-form" className="btn btn-primary" style={{ width: 'fit-content', display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '16px 36px', fontSize: '18px', fontWeight: 700, borderRadius: '4px', textDecoration: 'none' }}>
                                I'm Ready To Fix This
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>



            {/* SERVICES */}
            <section className="section section-light">
                <div className="container">
                    <div className="text-center">
                        <div className="section-label">What We Offer</div>
                        <h2 className="section-title">Dog Training & Boarding Services in Murrieta</h2>
                        <div className="rule" style={{ margin: '0 auto 16px' }}></div>
                        <p className="section-desc" style={{ margin: '0 auto' }}>
                            From Board & Train to Off Leash Freedom — every program is built around your dog's unique personality and your real-life goals.
                        </p>
                    </div>
                    <div className="services-grid-home" style={{ marginTop: 40 }}>
                        {homepageServices.map((service) => (
                            <Link key={service.id} href={service.href} className={service.featured ? 'service-card featured' : 'service-card'}>
                                {service.image && (
                                    <div className="service-card-image">
                                        <Image src={service.image} alt={service.name} width={420} height={280} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                                        {service.featured && <div className="featured-badge">Popular</div>}
                                    </div>
                                )}
                                <div className="service-card-content">
                                    <h3>{service.name}</h3>
                                    <p>{service.shortDesc}</p>
                                    <div className="service-card-cta">Learn More →</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            {/* ABOUT EDUARDO */}
            <section className="section">
                <div className="container">
                    <div className="about-eduardo-grid">

                        {/* LEFT COLUMN: CONTENT */}
                        <div style={{ padding: '24px 0' }}>
                            <div style={{ color: '#C4782A', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
                                MEET YOUR TRAINER
                            </div>

                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(24px, 4vw, 42px)', lineHeight: 1.15, color: '#1C1C1C', marginBottom: '24px' }}>
                                Eduardo Beltran — Murrieta's Dog Training Expert
                            </h2>

                            <div style={{ width: '60px', height: '3px', backgroundColor: '#C4782A', marginBottom: '32px' }}></div>

                            <div style={{ color: '#4B5563', fontFamily: 'var(--font-sans)', fontSize: '17px', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                                <p>
                                    Eduardo Beltran founded Shepards K9 with one belief — every dog deserves a trainer who actually cares about them as an individual, not just a number in a program.
                                </p>
                                <p>
                                    With years of experience training dogs across Murrieta, Temecula, and Southern California, Eduardo has built a relationship-first approach that gets real results — not in a facility, but on walks, at the park, with guests at home, and everywhere life takes you and your dog.
                                </p>
                                <p>
                                    Whether you have a reactive rescue, a high-energy puppy, or a dog who's been through programs before without lasting results — Eduardo's honest, patient approach delivers the transformation you've been looking for.
                                </p>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '48px' }}>
                                {['Licensed & Insured', 'Guaranteed Results', 'All Breeds Welcome', 'Murrieta Based', 'Relationship-Based Training'].map((pill, idx) => (
                                    <span key={idx} style={{ backgroundColor: 'transparent', color: '#C4782A', border: '1px solid #C4782A', padding: '8px 16px', borderRadius: '4px', fontSize: '14px', fontWeight: 600, fontFamily: 'var(--font-sans)' }}>
                                        {pill}
                                    </span>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                <Link href="/about" className="btn" style={{ backgroundColor: '#2D5016', color: '#FFFFFF', padding: '16px 32px', borderRadius: '4px', fontSize: '16px', fontWeight: 700, textDecoration: 'none' }}>
                                    Learn More About Eduardo
                                </Link>
                                <a href={SITE_CONFIG.phoneHref} className="btn" style={{ backgroundColor: 'transparent', border: '2px solid #2D5016', color: '#2D5016', padding: '14px 32px', borderRadius: '4px', fontSize: '16px', fontWeight: 700, textDecoration: 'none' }}>
                                    Call Now
                                </a>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: SINGLE PORTRAIT PHOTO */}
                        <div>
                            <Image
                                src="/photos/about-eduardo-trees.jpg"
                                alt="Eduardo Beltran Training outdoors"
                                width={600}
                                height={800}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '16px',
                                    display: 'block'
                                }}
                                quality={60}
                                loading="lazy"
                                fetchPriority="low"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* REVIEWS */}
            <section className="section section-alt">
                <div className="container">
                    <div className="text-center">
                        <div className="section-label">What Clients Say</div>
                        <h2 className="section-title">Real Results from Real Murrieta Dog Owners</h2>
                        <div className="rule" style={{ margin: '0 auto' }}></div>
                    </div>
                    <ReviewGrid />
                </div>
            </section>

            {/* PHILOSOPHY / PHOTO BREAK */}
            <section style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
                height: '50vh',
                minHeight: '450px',
                backgroundColor: '#1E3610',
                padding: '0 24px'
            }}>
                <Image
                    src="/photos/off-leash-field.jpg"
                    alt="Off-leash dog training session in an open field"
                    fill
                    sizes="100vw"
                    quality={55}
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                    fetchPriority="low"
                />
                {/* Dark Gradient Overlay for readability */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: 0
                }}></div>

                {/* Content Overlay */}
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ color: '#C4782A', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>
                        The Shepards K9 Philosophy
                    </div>

                    <h2 style={{ color: '#FFFFFF', fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 5vw, 56px)', lineHeight: 1.15, fontWeight: 700, marginBottom: '24px', textShadow: '0 4px 16px rgba(0,0,0,0.4)' }}>
                        We don't just train dogs. <br />We build <span style={{ color: '#C4782A', fontStyle: 'italic' }}>relationships.</span>
                    </h2>

                    <p style={{ color: '#F3F4F6', fontFamily: 'var(--font-sans)', fontSize: '18px', maxWidth: '600px', lineHeight: 1.6, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
                        Real environments. Real distractions. Real results.
                    </p>
                </div>
            </section>
            <InstagramSection />

            {/* SERVICE AREAS (VOLT Vikings Style with Brand Tweaks) */}
            <section className="section" style={{ backgroundColor: '#F7F4EF', overflow: 'hidden' }}>
                <div className="container" style={{ maxWidth: 1200, position: 'relative' }}>
                    <div className="service-map-layout">
                        {/* LEFT: MAP */}
                        <div style={{ width: '100%', height: '600px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 12px 24px rgba(0,0,0,0.06)' }}>
                            <iframe
                                src="https://maps.google.com/maps?q=Murrieta,CA&t=&z=10&ie=UTF8&iwloc=&output=embed"
                                title="Murrieta dog training service area map"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'sepia(0.35) hue-rotate(-15deg) saturate(1.4) contrast(1.05)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        {/* RIGHT: CONTENT & CITIES */}
                        <div style={{ padding: '24px 0' }}>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px, 4vw, 40px)', lineHeight: 1.2, color: '#111827', marginBottom: '24px' }}>
                                Dog training serving the greater Murrieta area
                            </h2>
                            <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#4B5563', marginBottom: '32px' }}>
                                No matter where you are, we've got your dog training needs covered. We provide services across the region, giving everyone access to our highly experienced and reliable team. If you need dog training in Murrieta or the greater Southern California area, we are here for you!
                            </p>

                            <div className="city-link-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px 24px', marginBottom: '40px' }}>
                                {ALL_LOCATIONS.slice(0, 18).map((loc) => (
                                    <Link key={loc.id} href={`/${loc.id}`} className="city-link" style={{ paddingLeft: '8px', borderLeft: '2px solid #C4782A' }}>
                                        {loc.name}, CA
                                    </Link>
                                ))}
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '24px', marginTop: '48px' }}>
                                <Link href="#hero-form" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#8C4F14', borderColor: '#8C4F14', color: '#FFFFFF', padding: '20px 56px', fontSize: '22px', fontWeight: 700, borderRadius: '100px', boxShadow: '0 8px 24px rgba(140, 79, 20, 0.25)' }}>
                                    Check Availability
                                </Link>
                                <Image
                                    src="/photos/pitbull-cutout.png"
                                    alt="Happy White and Grey Pitbull"
                                    width={400}
                                    height={500}
                                    sizes="(max-width: 768px) 50vw, 400px"
                                    style={{ height: '280px', width: 'auto', objectFit: 'contain', display: 'block', transform: 'translateY(-10px)' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: 800 }}>
                    <div className="text-center">
                        <div className="section-label">Common Questions</div>
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <div className="rule" style={{ margin: '0 auto 12px' }}></div>
                    </div>
                    <FAQAccordion faqs={HOMEPAGE_FAQS} />
                    <div style={{ textAlign: 'center', marginTop: 32 }}>
                        <Link href="/faq" className="btn btn-outline">View All FAQs →</Link>
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA SECTION */}
            <section className="cta-section" style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '110px 10%',
                backgroundColor: '#1E3610',
                borderBottom: '1px solid rgba(255,255,255,0.08)'
            }}>
                <Image
                    src="/photos/real-life-doberman.jpg"
                    alt="Doberman standing calmly during real-world obedience training"
                    fill
                    sizes="100vw"
                    quality={55}
                    style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
                    loading="lazy"
                    fetchPriority="low"
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(90deg, rgba(0,0,0,.65) 0%, rgba(0,0,0,.45) 40%, rgba(0,0,0,.1) 70%)',
                    zIndex: 0
                }} />

                <div className="cta-content" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', maxWidth: '900px' }}>
                    <h2 style={{ color: '#FFFFFF', fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 6vw, 56px)', margin: '0', lineHeight: 1.15, fontWeight: 700, textShadow: '0 2px 16px rgba(0,0,0,0.6)' }}>
                        Ready to transform your dog's behavior?
                    </h2>

                    <div className="cta-buttons" style={{ display: 'flex', flexWrap: 'wrap', gap: '22px', marginTop: '28px', alignItems: 'flex-start' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                            <Link href="#hero-form" className="btn btn-primary" style={{ background: '#8C4F14', color: '#FFFFFF', borderColor: '#8C4F14', borderRadius: '4px', padding: '18px 36px', fontSize: '18px', fontWeight: 600, boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
                                Book Free Consultation
                            </Link>
                            <span style={{ color: '#FFFFFF', fontSize: '14px', opacity: 0.9, fontWeight: 500, letterSpacing: '0.5px' }}>
                                Limited Spots This Month
                            </span>
                        </div>
                        <a href={SITE_CONFIG.phoneHref} className="btn" style={{ color: '#FFFFFF', border: '1.5px solid #FFFFFF', background: 'transparent', borderRadius: '4px', padding: '18px 36px', fontSize: '18px', fontWeight: 600, textShadow: '0 2px 8px rgba(0,0,0,0.8)', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
                            Call Now
                        </a>
                    </div>

                    {/* Trust Signal */}
                    <div className="cta-trust" style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '4px', color: '#FFFFFF', fontSize: '16px', opacity: 0.95 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                            <span style={{ color: '#FFB800', letterSpacing: '2px', fontSize: '18px' }}>★★★★★</span>
                            <span>200+ Happy Clients</span>
                        </div>
                        <div style={{ opacity: 0.95 }}>
                            Serving Murrieta & Temecula
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

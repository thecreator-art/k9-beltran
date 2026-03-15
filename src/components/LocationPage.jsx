import Link from 'next/link';
import { SITE_CONFIG } from '@/config/siteConfig';
import { ALL_LOCATIONS } from '@/config/locations';
import ContactForm from '@/components/ContactForm';

// Shared component for all location pages
export function LocationPage({ city }) {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Dog Training',
        provider: { '@type': 'LocalBusiness', name: 'Shepards K9', telephone: SITE_CONFIG.phone },
        areaServed: { '@type': 'City', name: city.name, containedIn: { '@type': 'State', name: 'California' } },
        description: `Professional dog training in ${city.name}, CA by Shepards K9. Board & Train, Dog Boarding, Day Training, and Off Leash Training.`,
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.siteUrl },
            { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE_CONFIG.siteUrl}/dog-training-murrieta` },
            { '@type': 'ListItem', position: 3, name: `Dog Training ${city.name}`, item: `${SITE_CONFIG.siteUrl}/dog-training-${city.id}` },
        ],
    };

    const relatedServices = [
        { label: 'Board & Train', href: `/board-and-train-${city.id}` },
        { label: 'Dog Boarding', href: `/dog-boarding-${city.id}` },
        { label: 'Day Training', href: `/day-training-${city.id}` },
        { label: 'Off Leash Training', href: `/off-leash-training-${city.id}` },
    ];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <link rel="canonical" href={`${SITE_CONFIG.siteUrl}/dog-training-${city.id}`} />

            <div className="breadcrumb">
                <div className="container">
                    <ol className="breadcrumb-list">
                        <li><Link href="/">Home</Link></li>
                        <li className="breadcrumb-sep">›</li>
                        <li><Link href="/dog-training-murrieta">Service Areas</Link></li>
                        <li className="breadcrumb-sep">›</li>
                        <li>Dog Training {city.name}</li>
                    </ol>
                </div>
            </div>

            <section className="page-hero">
                <div className="container">
                    <h1>Dog Training in {city.name}, CA | Shepards K9</h1>
                    <p>Expert dog training and boarding serving {city.name} and {city.county}. Eduardo Beltran brings real-world, relationship-based training directly to your community.</p>
                    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
                        <Link href="/contact" className="btn btn-primary">Get Free Estimate</Link>
                        <a href={SITE_CONFIG.phoneHref} className="btn btn-secondary">📞 {SITE_CONFIG.phone}</a>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: 860 }}>
                    <div className="section-label">Serving {city.name}</div>
                    <h2 className="section-title">Professional Dog Training in {city.name}, CA</h2>
                    <div className="rule"></div>
                    <p>Shepards K9 provides expert dog training services throughout {city.name} and the surrounding {city.county} area. {city.blurb}</p>
                    <p>Whether you're dealing with a dog who pulls on leash, won't come when called, jumps on guests, or has behavioral issues you've been struggling with for years — Eduardo Beltran has the experience, patience, and relationship-first approach to help. Every program is tailored to your dog as an individual, not plugged into a generic routine.</p>

                    <h2 style={{ marginTop: 40, marginBottom: 16 }}>Dog Training Services Available in {city.name}</h2>
                    <div className="rule"></div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20, marginBottom: 40 }}>
                        {[
                            { icon: '🏡', label: 'Board & Train', href: `/board-and-train-${city.id}`, desc: `Your dog lives and trains with Eduardo. The fastest path to results for ${city.name} dog owners.` },
                            { icon: '🐾', label: 'Dog Boarding', href: `/dog-boarding-${city.id}`, desc: `Safe, loving in-home dog boarding — not a kennel. Serving ${city.name} families since day one.` },
                            { icon: '☀️', label: 'Day Training', href: `/day-training-${city.id}`, desc: 'Eduardo trains your dog while you\'re at work. Drop off, training, pickup.' },
                            { icon: '🎾', label: 'Off Leash Training', href: '/off-leash-training', desc: `Real off-leash freedom built in the parks and trails around ${city.name}.` },
                            { icon: '🐶', label: 'Puppy Training', href: '/puppy-training', desc: 'Start your new puppy off right with solid foundations from day one.' },
                            { icon: '🚗', label: 'Pickup & Drop Off', href: '/pickup-drop-off', desc: `Convenient pickup and drop-off throughout ${city.name} and nearby areas.` },
                        ].map(svc => (
                            <Link key={svc.label} href={svc.href} className="service-card" style={{ textDecoration: 'none' }}>
                                <div className="service-icon">{svc.icon}</div>
                                <h3>{svc.label}</h3>
                                <p>{svc.desc}</p>
                                <div className="service-card-cta">Learn More →</div>
                            </Link>
                        ))}
                    </div>

                    <h2 style={{ marginBottom: 16 }}>Why {city.name} Dog Owners Choose Shepards K9</h2>
                    <div className="rule"></div>
                    <p>Dog owners in {city.name} have unique needs. {city.neighborhoods} and the surrounding neighborhoods are home to active families who want dogs they can take everywhere — to parks, on trails, to friends' houses, and on family outings. Eduardo trains dogs for exactly these real-life scenarios.</p>
                    <p>Local landmarks like {city.landmarks} are often part of Eduardo's training environment, giving your dog hands-on experience with the actual places you'll explore together. If your dog can handle training at these locations, they can handle anything.</p>
                    <p>Eduardo is licensed and insured, offers a satisfaction guarantee, same-week availability, and free estimates. He also provides pickup and drop-off service throughout {city.name} and {city.county}, so you don't even have to drive anywhere to get started.</p>

                    <h2 style={{ marginTop: 40, marginBottom: 16 }}>Get Started with Dog Training in {city.name} Today</h2>
                    <div className="rule"></div>
                    <p>Ready to transform your dog? Eduardo is accepting new clients in {city.name} now. Call <a href={SITE_CONFIG.phoneHref} style={{ color: '#E05C1B', fontWeight: 700 }}>{SITE_CONFIG.phone}</a> or fill out the form below for your free estimate. Same-week availability in most cases.</p>

                    <div style={{ textAlign: 'center', marginTop: 40 }}>
                        <Link href="/pricing" className="btn btn-dark" style={{ marginRight: 12 }}>View Pricing</Link>
                        <Link href="/contact" className="btn btn-primary">Book Free Estimate</Link>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container" style={{ maxWidth: 640 }}>
                    <div className="text-center" style={{ marginBottom: 32 }}>
                        <div className="section-label">{city.name} Residents</div>
                        <h2 className="section-title">Request Your Free Estimate</h2>
                    </div>
                    <div className="contact-form-wrap">
                        <ContactForm title="" subtitle="" />
                    </div>
                </div>
            </section>

            <div className="cta-section">
                <div className="container">
                    <h2>Dog Training in {city.name} — Call Eduardo Today</h2>
                    <p>Licensed, insured, guaranteed results. Same week availability. Serving {city.name} and all of {city.county}.</p>
                    <div className="cta-group">
                        <Link href="/contact" className="btn btn-secondary btn-lg">Get Free Estimate</Link>
                        <a href={SITE_CONFIG.phoneHref} className="btn btn-lg" style={{ background: 'white', color: '#E05C1B', fontWeight: 800 }}>
                            📞 {SITE_CONFIG.phone}
                        </a>
                    </div>
                </div>
            </div>

            {/* Internal links to nearby cities */}
            <section className="section-sm section-light">
                <div className="container">
                    <h3 style={{ marginBottom: 16, fontSize: 16, color: '#1A3C6B' }}>Also Serving Nearby Cities</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                        {ALL_LOCATIONS.filter(l => l.id !== city.id).slice(0, 8).map(l => (
                            <Link key={l.id} href={`/dog-training-${l.id}`} style={{ background: '#F0F4F9', border: '1px solid #E2E8F0', borderRadius: 20, padding: '6px 14px', fontSize: 13, fontWeight: 600, color: '#1A3C6B' }}>
                                {l.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

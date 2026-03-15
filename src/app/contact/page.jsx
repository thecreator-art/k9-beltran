import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/config/siteConfig';
import { SERVICES } from '@/config/services';
import { ALL_LOCATIONS } from '@/config/locations';
import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: 'Contact Shepards K9 | Start Dog Training in Murrieta',
    description: 'Contact Eduardo Beltran to schedule a dog training evaluation in Murrieta, Temecula, Menifee, and surrounding Southern California service areas.',
    alternates: {
        canonical: `${SITE_CONFIG.siteUrl}/contact`,
    },
};

const serviceCardOrder = [
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

const contactServices = serviceCardOrder
    .map((id) => SERVICES.find((service) => service.id === id))
    .filter(Boolean);

export default function ContactPage() {
    return (
        <main>
            <section className="section" style={{ paddingBottom: 40 }}>
                <div className="container" style={{ maxWidth: 1400 }}>
                    <div className="contact-grid">
                        <div>
                            <div className="section-label">What Happens Next</div>
                            <h1 className="section-title">Request an Evaluation</h1>
                            <div className="rule"></div>
                            <p style={{ fontSize: 18, lineHeight: 1.8, color: 'var(--text-dark)' }}>
                                Before Eduardo recommends a program, he looks at the real problem, not
                                just the label. He evaluates your dog&apos;s behavior, your handling, your
                                daily structure, and which service actually makes sense for the result
                                you want.
                            </p>
                            <p style={{ fontSize: 18, lineHeight: 1.8, color: 'var(--text-dark)' }}>
                                That means you get a direct answer. If your dog needs an intensive
                                program, he will tell you. If a lower-commitment option is enough, he
                                will tell you that too. The goal is to put you in the right plan the
                                first time.
                            </p>
                            <div className="hero-bullets" style={{ marginTop: 28 }}>
                                <div className="hero-bullet" style={{ color: 'var(--text-dark)', fontSize: 17 }}>
                                    Direct access to Eduardo, not a sales team
                                </div>
                                <div className="hero-bullet" style={{ color: 'var(--text-dark)', fontSize: 17 }}>
                                    Same week scheduling when space is available
                                </div>
                                <div className="hero-bullet" style={{ color: 'var(--text-dark)', fontSize: 17 }}>
                                    Clear recommendation based on your dog&apos;s actual behavior
                                </div>
                                <div className="hero-bullet" style={{ color: 'var(--text-dark)', fontSize: 17 }}>
                                    Service across Murrieta and surrounding Southern California cities
                                </div>
                            </div>
                        </div>

                        <div className="hero-form" style={{ maxWidth: '100%' }}>
                            <ContactForm
                                title="Request Evaluation"
                                subtitle="Tell Eduardo what is going on, and he will point you to the right next step."
                                submitLabel="Submit Request"
                            />
                        </div>
                    </div>

                    <div className="contact-links-columns" style={{ marginTop: 28 }}>
                        <div className="pricing-card" style={{ textAlign: 'left', padding: 24, minHeight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div className="section-label" style={{ marginBottom: 12 }}>Phone</div>
                            <a href={SITE_CONFIG.phoneHref} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                                Call Now
                            </a>
                        </div>
                        <div className="pricing-card" style={{ textAlign: 'left', padding: 24, minHeight: 'auto' }}>
                            <div className="section-label" style={{ marginBottom: 8 }}>Email</div>
                            <a href={`mailto:${SITE_CONFIG.email}`} style={{ fontSize: 'clamp(16px, 3vw, 20px)', lineHeight: 1.5, wordBreak: 'break-word' }}>
                                {SITE_CONFIG.email}
                            </a>
                        </div>
                        <div className="pricing-card" style={{ textAlign: 'left', padding: 24, minHeight: 'auto' }}>
                            <div className="section-label" style={{ marginBottom: 8 }}>Base</div>
                            <p style={{ margin: 0, fontSize: 'clamp(18px, 4vw, 20px)', lineHeight: 1.5 }}>{SITE_CONFIG.address}</p>
                        </div>
                        <div className="pricing-card" style={{ textAlign: 'left', padding: 24, minHeight: 'auto' }}>
                            <div className="section-label" style={{ marginBottom: 8 }}>Response</div>
                            <p style={{ margin: 0, fontSize: 'clamp(16px, 4vw, 20px)', lineHeight: 1.5, color: 'var(--text-dark)' }}>
                                Eduardo typically answers within a few hours.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-light" style={{ paddingTop: 56, paddingBottom: 56 }}>
                <div className="container">
                    <div className="text-center">
                        <div className="section-label">Services</div>
                        <h2 className="section-title">Choose the service you want to ask about</h2>
                        <div className="rule" style={{ margin: '0 auto 16px' }}></div>
                        <p className="section-desc" style={{ margin: '0 auto' }}>
                            If you already know what you need, jump straight into the service page and
                            then reach out.
                        </p>
                    </div>

                    <div className="services-grid-home" style={{ marginTop: 40 }}>
                        {contactServices.map((service) => (
                            <Link
                                key={service.id}
                                href={service.href}
                                className={service.featured ? 'service-card featured' : 'service-card'}
                            >
                                {service.image && (
                                    <div className="service-card-image">
                                        <Image
                                            src={service.image}
                                            alt={service.name}
                                            width={420}
                                            height={280}
                                            style={{ objectFit: 'cover' }}
                                        />
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

            <section className="section" style={{ paddingTop: 56, paddingBottom: 56 }}>
                <div className="container">
                    <div className="about-grid" style={{ alignItems: 'stretch' }}>
                        <div style={{ height: '100%' }}>
                            <div
                                className="location-map-wrap"
                                style={{ height: '100%', minHeight: 350, aspectRatio: 'auto' }}
                            >
                                <iframe
                                    src="https://www.google.com/maps?q=Murrieta,California&z=10&output=embed"
                                    title="Murrieta service area map"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    style={{ width: '100%', height: '100%', border: 0, minHeight: 350 }}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <div className="section-label">Service Areas</div>
                            <h2 className="section-title">Dog training serving the greater Murrieta area</h2>
                            <div className="rule"></div>
                            <p style={{ fontSize: 18, lineHeight: 1.8, color: 'var(--text-dark)', marginBottom: 20 }}>
                                No matter where you are, Eduardo provides service across the region so
                                owners can get direct help without dealing with a giant training company
                                or a one-size-fits-all process.
                            </p>

                            <div
                                className="location-grid"
                                style={{
                                    marginTop: 0,
                                    flex: 1,
                                }}
                            >
                                {ALL_LOCATIONS.map((city) => (
                                    <Link
                                        key={city.id}
                                        href={`/${city.id}`}
                                        className="location-chip"
                                        style={{ height: '100%', justifyContent: 'flex-start', lineHeight: 1.4, alignItems: 'flex-start' }}
                                    >
                                        {city.name}, CA
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

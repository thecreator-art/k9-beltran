import Link from 'next/link';
import { SITE_CONFIG, NAV_SERVICES } from '@/config/siteConfig';

const primaryLocations = [
    { name: 'Murrieta', href: '/murrieta' },
    { name: 'Temecula', href: '/temecula' },
    { name: 'Menifee', href: '/menifee' },
    { name: 'Wildomar', href: '/wildomar' },
    { name: 'Canyon Lake', href: '/canyon-lake' },
    { name: 'Lake Elsinore', href: '/lake-elsinore' },
    { name: 'Fallbrook', href: '/fallbrook' },
    { name: 'Escondido', href: '/escondido' },
    { name: 'Oceanside', href: '/oceanside' },
    { name: 'Carlsbad', href: '/carlsbad' },
];

function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.9">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
    );
}

function TikTokIcon() {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
            <path d="M14.5 3c.5 2 1.7 3.2 3.5 3.7V10c-1.4-.1-2.6-.5-3.5-1.2v6.5a5.3 5.3 0 1 1-5.3-5.3c.3 0 .6 0 .8.1v3.1a2.3 2.3 0 1 0 1.5 2.1V3h3Z" />
        </svg>
    );
}

export default function Footer() {
    const year = new Date().getFullYear();
    const contactLabelStyle = {
        minWidth: 54,
        fontSize: 11,
        fontWeight: 800,
        letterSpacing: '1.2px',
        textTransform: 'uppercase',
        color: 'var(--gold)',
        marginTop: 3,
        flexShrink: 0,
    };

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3>Shepards <span>K9</span></h3>
                        <p>
                            Expert dog training & boarding in Murrieta, CA. Eduardo Beltran builds
                            real relationships with every dog — and gets real results in real-world environments.
                        </p>
                        <div className="footer-contact-item">
                            <span style={contactLabelStyle}>Phone</span>
                            <a href={SITE_CONFIG.phoneHref} className="tel-link" style={{ color: '#F5A623', fontWeight: 700 }}>
                                {SITE_CONFIG.phone}
                            </a>
                        </div>
                        <div className="footer-contact-item">
                            <span style={contactLabelStyle}>Email</span>
                            <a href={`mailto:${SITE_CONFIG.email}`} style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px' }}>
                                {SITE_CONFIG.email}
                            </a>
                        </div>
                        <div className="footer-contact-item">
                            <span style={contactLabelStyle}>Base</span>
                            <span style={{ fontSize: '14px' }}>{SITE_CONFIG.address}</span>
                        </div>
                        <div className="footer-contact-item">
                            <span style={contactLabelStyle}>Hours</span>
                            <span style={{ fontSize: '14px' }}>Mon–Sun: {SITE_CONFIG.hours}</span>
                        </div>
                        <div style={{ display: 'flex', gap: 12, marginTop: 18 }}>
                            <a
                                href="https://www.instagram.com/k9beltran/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="K9 Beltran on Instagram"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 40,
                                    height: 40,
                                    borderRadius: 999,
                                    border: '1px solid rgba(255,255,255,0.18)',
                                    color: 'var(--white)',
                                    background: 'rgba(255,255,255,0.06)',
                                }}
                            >
                                <InstagramIcon />
                            </a>
                            <a
                                href="https://www.tiktok.com/@k9beltran"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="K9 Beltran on TikTok"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 40,
                                    height: 40,
                                    borderRadius: 999,
                                    border: '1px solid rgba(255,255,255,0.18)',
                                    color: 'var(--white)',
                                    background: 'rgba(255,255,255,0.06)',
                                }}
                            >
                                <TikTokIcon />
                            </a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            {NAV_SERVICES.map((service) => (
                                <li key={service.href}><Link href={service.href}>{service.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Service Areas</h4>
                        <ul>
                            {primaryLocations.map((location) => (
                                <li key={location.href}><Link href={location.href}>{location.name}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Eduardo</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/faq">FAQ</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/sitemap.xml">Sitemap</Link></li>
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {year} {SITE_CONFIG.businessName}. All rights reserved. | {SITE_CONFIG.address} | Licensed & Insured</p>
                    <p>
                        Web Design and Digital Marketing by{' '}
                        <a
                            href="https://vaultio.co"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#FFFFFF', textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 700 }}
                        >
                            Vaultio
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

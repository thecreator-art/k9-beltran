'use client';
import Link from 'next/link';
import { useState } from 'react';
import { SITE_CONFIG, NAV_SERVICES } from '@/config/siteConfig';
import { ALL_LOCATIONS, PRIMARY_CITIES } from '@/config/locations';
import { useEffect } from 'react';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [areasOpen, setAreasOpen] = useState(false);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    const extendedServiceAreas = ALL_LOCATIONS.filter(
        (location) => !PRIMARY_CITIES.some((city) => city.id === location.id)
    );

    return (
        <>
            <header className="site-header">
                <div className="header-inner">
                    <Link href="/" className="header-logo">
                        <span className="logo-paw">🐾</span>
                        Shepards <span>K9</span>
                    </Link>

                    <nav>
                        <ul className="header-nav">
                            <li><Link href="/">Home</Link></li>
                            <li className="nav-dropdown">
                                <Link href="/dog-training">Services ▾</Link>
                                <ul className="nav-dropdown-menu">
                                    {NAV_SERVICES.map((service) => (
                                        <li key={service.href}>
                                            <Link href={service.href}>{service.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-dropdown">
                                <Link href="/service-areas">Service Areas ▾</Link>
                                <div className="nav-dropdown-menu nav-dropdown-menu-wide">
                                    <div className="nav-dropdown-columns">
                                        <div>
                                            <div className="nav-dropdown-heading">Primary Areas</div>
                                            <ul>
                                                {PRIMARY_CITIES.map((location) => (
                                                    <li key={location.id}>
                                                        <Link href={`/${location.id}`}>{location.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <div className="nav-dropdown-heading">Extended Areas</div>
                                            <ul>
                                                {extendedServiceAreas.map((location) => (
                                                    <li key={location.id}>
                                                        <Link href={`/${location.id}`}>{location.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/faq">FAQ</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav>

                    <div className="header-cta-group">
                        <a href={SITE_CONFIG.phoneHref} className="btn btn-outline" style={{ padding: '10px 24px', fontSize: '14px', borderRadius: '50px' }}>
                            Call Now
                        </a>
                        <Link href="/contact" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '14px', borderRadius: '50px' }}>
                            Free Estimate
                        </Link>
                    </div>

                    <button
                        className="hamburger"
                        onClick={() => setMobileOpen((open) => !open)}
                        aria-label="Toggle navigation"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            {mobileOpen
                                ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                                : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />}
                        </svg>
                    </button>
                </div>

                <nav className={`mob-nav ${mobileOpen ? 'open' : ''}`} style={{ maxHeight: 'calc(100vh - 80px)', overflowY: 'auto', paddingBottom: '40px' }}>
                    <a className="mob-phone btn btn-primary" href={SITE_CONFIG.phoneHref} style={{ margin: '16px', display: 'flex', justifyContent: 'center' }}>Call Now</a>
                    <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
                    <button
                        onClick={() => setServicesOpen((open) => !open)}
                        style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)', fontWeight: '600', fontSize: '15px', padding: '12px 0', width: '100%', cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                    >
                        Services {servicesOpen ? '▲' : '▼'}
                    </button>
                    {servicesOpen && NAV_SERVICES.map((service) => (
                        <Link key={service.href} href={service.href} onClick={() => setMobileOpen(false)} style={{ paddingLeft: 20 }}>
                            {service.label}
                        </Link>
                    ))}
                    <button
                        onClick={() => setAreasOpen((open) => !open)}
                        style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)', fontWeight: '600', fontSize: '15px', padding: '12px 0', width: '100%', cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                    >
                        Service Areas {areasOpen ? '▲' : '▼'}
                    </button>
                    {areasOpen && (
                        <>
                            <Link href="/service-areas" onClick={() => setMobileOpen(false)} style={{ paddingLeft: 20 }}>
                                All Service Areas
                            </Link>
                            {ALL_LOCATIONS.map((location) => (
                                <Link key={location.id} href={`/${location.id}`} onClick={() => setMobileOpen(false)} style={{ paddingLeft: 20 }}>
                                    {location.name}
                                </Link>
                            ))}
                        </>
                    )}
                    <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
                    <Link href="/pricing" onClick={() => setMobileOpen(false)}>Pricing</Link>
                    <Link href="/faq" onClick={() => setMobileOpen(false)}>FAQ</Link>
                    <Link href="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
                    <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
                </nav>
            </header>
        </>
    );
}

'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/siteConfig';

export default function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Show when the hero section is NOT visible (scrolled past)
                setIsVisible(!entry.isIntersecting);
            },
            { threshold: 0 }
        );

        const hero = document.querySelector('.hero');
        if (hero) observer.observe(hero);

        return () => {
            if (hero) observer.unobserve(hero);
        };
    }, []);

    return (
        <div 
            className="md:hidden sticky-cta-container flex"
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                transition: 'transform 0.3s ease-in-out',
                backgroundColor: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderTop: '1px solid rgba(0,0,0,0.1)',
                padding: '12px 16px',
                paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
                gap: '12px',
                boxShadow: '0 -4px 20px rgba(0,0,0,0.08)'
            }}
        >
            <a 
                href={SITE_CONFIG.phoneHref}
                className="btn"
                style={{
                    flex: 1,
                    backgroundColor: 'var(--primary) !important',
                    border: '1.5px solid var(--primary)',
                    color: 'var(--white) !important',
                    padding: '14px 0',
                    textAlign: 'center',
                    fontSize: '15px',
                    fontWeight: 700,
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                }}
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call Now
            </a>
            <Link 
                href="/contact"
                className="btn btn-primary"
                style={{
                    flex: 1,
                    padding: '14px 0',
                    textAlign: 'center',
                    fontSize: '15px',
                    fontWeight: 700,
                    boxShadow: '0 4px 12px rgba(140, 79, 20, 0.25)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                Book Consult
            </Link>
        </div>
    );
}

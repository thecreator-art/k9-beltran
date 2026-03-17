import Link from 'next/link';
import { SITE_CONFIG } from '@/config/siteConfig';

export const metadata = {
    title: 'Thank You | Shepards K9',
    description: 'We have received your evaluation request.',
    alternates: {
        canonical: `${SITE_CONFIG.siteUrl}/thank-you`,
    },
    robots: {
        index: false,
        follow: false,
    }
};

export default function ThankYouPage() {
    return (
        <main style={{ 
            backgroundColor: 'var(--bg-light)', 
            minHeight: '80vh', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '100px 24px',
            textAlign: 'center'
        }}>
            <div style={{ 
                maxWidth: '700px', 
                backgroundColor: 'white', 
                padding: '60px 40px', 
                borderRadius: '24px', 
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border)'
            }}>
                <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    backgroundColor: 'var(--primary)', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 32px',
                    boxShadow: '0 8px 16px rgba(45, 80, 22, 0.2)'
                }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>

                <p style={{ 
                    fontFamily: 'var(--font-heading)', 
                    color: 'var(--accent)', 
                    fontWeight: 700, 
                    fontSize: '14px', 
                    letterSpacing: '2px', 
                    textTransform: 'uppercase',
                    marginBottom: '16px'
                }}>
                    Submission Successful
                </p>

                <h1 style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontSize: 'clamp(32px, 5vw, 48px)', 
                    color: 'var(--primary)', 
                    marginBottom: '24px',
                    fontWeight: 800
                }}>
                    Thank You For Reaching Out!
                </h1>

                <p style={{ 
                    fontSize: '18px', 
                    color: 'var(--text-muted)', 
                    lineHeight: '1.7', 
                    marginBottom: '40px',
                    maxWidth: '540px',
                    marginInline: 'auto'
                }}>
                    Eduardo or a member of the Shepards K9 team will reach out to you within 24 hours to discuss your dog and schedule your evaluation.
                </p>

                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/" style={{ 
                        backgroundColor: 'var(--accent)', 
                        color: 'white', 
                        padding: '18px 36px', 
                        borderRadius: '50px', 
                        fontWeight: 700, 
                        fontSize: '16px',
                        boxShadow: '0 4px 12px rgba(140, 79, 20, 0.3)',
                        transition: 'transform 0.2s ease'
                    }}>
                        Return Home
                    </Link>
                    <a href={SITE_CONFIG.phoneHref} style={{ 
                        backgroundColor: 'var(--primary)', 
                        color: 'white', 
                        padding: '18px 36px', 
                        borderRadius: '50px', 
                        fontWeight: 700, 
                        fontSize: '16px',
                        boxShadow: '0 4px 12px rgba(45, 80, 22, 0.2)'
                    }}>
                        Call Eduardo: {SITE_CONFIG.phone}
                    </a>
                </div>
            </div>
        </main>
    );
}

import './globals.css';
import Script from 'next/script';
import { SITE_CONFIG } from '@/config/siteConfig';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap', weight: ['400', '700', '800'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap', weight: ['400', '500', '600', '700'] });

export const metadata = {
    title: {
        default: 'Shepards K9 | Dog Training & Boarding in Murrieta, CA',
        template: '%s',
    },
    description: SITE_CONFIG.defaultDescription,
    metadataBase: new URL(SITE_CONFIG.siteUrl),
    alternates: { canonical: '/' },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        siteName: SITE_CONFIG.businessName,
        url: SITE_CONFIG.siteUrl,
        images: [
            {
                url: `${SITE_CONFIG.url}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: 'Shepards K9 Dog Training',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        images: [`${SITE_CONFIG.url}/og-image.jpg`],
    },
};

export default function RootLayout({ children }) {
    const orgSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_CONFIG.businessName,
        url: SITE_CONFIG.siteUrl,
        telephone: SITE_CONFIG.phone,
        email: SITE_CONFIG.email,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Murrieta',
            addressRegion: 'CA',
            addressCountry: 'US',
        },
        sameAs: [SITE_CONFIG.instagram, SITE_CONFIG.tiktok].filter(Boolean),
    };

    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
            <head>
                {/* Critical CSS for Instant Paint */}
                <style dangerouslySetInnerHTML={{ __html: `
                    :root {
                        --primary: #2D5016; --primary-dark: #1E3610; --accent: #8C4F14;
                        --bg-light: #F7F4EF; --text-dark: #1C1C1C; --white: #ffffff;
                        --max-width: 1180px; --font-heading: var(--font-playfair), Georgia, serif;
                    }
                    body { margin: 0; padding: 0; background: var(--bg-light); font-family: sans-serif; overflow-x: hidden; }
                    .site-header { position: sticky; top: 0; z-index: 1000; background: var(--primary-dark); height: 70px; }
                    .header-inner { display: flex; align-items: center; justify-content: space-between; padding: 0 24px; height: 70px; max-width: var(--max-width); margin: 0 auto; }
                    .header-logo { font-family: var(--font-heading); font-size: 22px; font-weight: 900; color: white; text-decoration: none; display: flex; align-items: center; gap: 10px; }
                    .hero { background: var(--bg-light); position: relative; overflow: hidden; min-height: 600px; display: flex; align-items: center; }
                    .hero-bg-image { object-fit: cover; object-position: 85% 35%; width: 100%; height: 100%; position: absolute; top: 0; left: 0; }
                    .container { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; width: 100%; position: relative; z-index: 10; }
                    h1 { font-family: var(--font-heading); color: var(--white); font-size: clamp(28px, 5vw, 52px); }
                `}} />
                
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
                />
            </head>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-1HS5XKTT4E"
                strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-1HS5XKTT4E');
                `}
            </Script>
            <body>
                <Header />
                <BreadcrumbSchema />
                <main>{children}</main>
                <Footer />
                <StickyMobileCTA />
            </body>
        </html>
    );
}

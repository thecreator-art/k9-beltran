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
                {/* Resource Hints for Flash Speed */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
                
                {/* Preload Hero Image */}
                <link rel="preload" fetchPriority="high" as="image" href="/_next/image?url=%2Fphotos%2Fhero-eduardo-boxer-home.jpg&w=1200&q=70" />
                
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
                />
            </head>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-1HS5XKTT4E"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
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

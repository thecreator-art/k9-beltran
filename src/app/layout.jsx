import './globals.css';
import { SITE_CONFIG } from '@/config/siteConfig';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
                />
            </head>
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

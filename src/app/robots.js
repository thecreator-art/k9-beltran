import { SITE_CONFIG } from '@/config/siteConfig';

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${SITE_CONFIG.siteUrl}/sitemap.xml`,
        host: SITE_CONFIG.siteUrl,
    };
}

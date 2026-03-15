import { SERVICES } from '@/config/services';
import { ALL_LOCATIONS } from '@/config/locations';
import { SITE_CONFIG } from '@/config/siteConfig';
import { COMBO_CONTENT } from '@/config/combo-content';
import { getIndexableBlogPosts, isIndexableComboPage, isIndexableLocationPage } from '@/lib/indexability';

export default function sitemap() {
    const baseUrl = SITE_CONFIG.siteUrl;

    const staticRoutes = ['', '/about', '/contact', '/pricing', '/faq', '/blog', '/service-areas'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    const serviceRoutes = SERVICES.map((service) => ({
        url: `${baseUrl}/${service.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: service.isCore ? 0.9 : 0.7,
    }));

    const locationRoutes = ALL_LOCATIONS.filter((city) => isIndexableLocationPage(city.id)).map((city) => ({
        url: `${baseUrl}/${city.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.75,
    }));

    const comboRoutes = [];
    const comboServices = SERVICES.filter((service) => Object.keys(COMBO_CONTENT).includes(service.id));

    comboServices.forEach((service) => {
        ALL_LOCATIONS.forEach((city) => {
            if (isIndexableComboPage(service.id, city.id)) {
                comboRoutes.push({
                    url: `${baseUrl}/${service.id}/${city.id}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly',
                    priority: 0.6,
                });
            }
        });
    });

    const blogRoutes = getIndexableBlogPosts().map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...comboRoutes, ...blogRoutes];
}

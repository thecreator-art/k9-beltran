'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { SITE_CONFIG } from '@/config/siteConfig';
import { SERVICES } from '@/config/services';
import { ALL_LOCATIONS } from '@/config/locations';

const staticLabels = {
    about: 'About',
    contact: 'Contact',
    pricing: 'Pricing',
    faq: 'FAQ',
    blog: 'Blog',
    'dog-training': 'Dog Training',
    'service-areas': 'Service Areas',
};

function titleize(value) {
    return value.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function buildBreadcrumbs(pathname) {
    const paths = pathname.split('/').filter(Boolean);
    if (paths.length === 0) return [];

    const serviceMap = new Map(SERVICES.map((service) => [service.id, service.name]));
    const locationMap = new Map(ALL_LOCATIONS.map((location) => [location.id, location.name]));

    const home = {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_CONFIG.siteUrl,
    };

    if (paths[0] === 'blog' && paths[1]) {
        return [
            home,
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_CONFIG.siteUrl}/blog` },
            { '@type': 'ListItem', position: 3, name: titleize(paths[1]), item: `${SITE_CONFIG.siteUrl}${pathname}` },
        ];
    }

    if (paths[0] === 'service-areas') {
        return [
            home,
            { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE_CONFIG.siteUrl}/service-areas` },
        ];
    }

    if (paths.length === 1 && locationMap.has(paths[0])) {
        return [
            home,
            { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE_CONFIG.siteUrl}/service-areas` },
            { '@type': 'ListItem', position: 3, name: locationMap.get(paths[0]), item: `${SITE_CONFIG.siteUrl}${pathname}` },
        ];
    }

    if (serviceMap.has(paths[0]) && paths[1] && locationMap.has(paths[1])) {
        return [
            home,
            { '@type': 'ListItem', position: 2, name: serviceMap.get(paths[0]), item: `${SITE_CONFIG.siteUrl}/${paths[0]}` },
            { '@type': 'ListItem', position: 3, name: locationMap.get(paths[1]), item: `${SITE_CONFIG.siteUrl}${pathname}` },
        ];
    }

    if (serviceMap.has(paths[0])) {
        return [
            home,
            { '@type': 'ListItem', position: 2, name: serviceMap.get(paths[0]), item: `${SITE_CONFIG.siteUrl}${pathname}` },
        ];
    }

    return [
        home,
        ...paths.map((path, index) => {
            const href = '/' + paths.slice(0, index + 1).join('/');
            return {
                '@type': 'ListItem',
                position: index + 2,
                name: staticLabels[path] || titleize(path),
                item: `${SITE_CONFIG.siteUrl}${href}`,
            };
        }),
    ];
}

export default function BreadcrumbSchema() {
    const pathname = usePathname();

    if (!pathname || pathname === '/') return null;

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: buildBreadcrumbs(pathname),
    };

    return (
        <Script
            id="breadcrumb-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
    );
}

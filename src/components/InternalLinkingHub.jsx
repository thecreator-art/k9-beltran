import Link from 'next/link';
import { ALL_LOCATIONS, PRIMARY_CITIES } from '@/config/locations';
import { SERVICES } from '@/config/services';

export default function InternalLinkingHub({ type, currentServiceId, currentCityId }) {
    if (type === 'service') {
        const service = SERVICES.find((item) => item.id === currentServiceId) || SERVICES.find((item) => item.id === 'dog-training');
        const locations = PRIMARY_CITIES.slice(0, 4);

        return (
            <div style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid #d8d1c2' }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: 16 }}>
                    Eduardo also serves nearby communities. View our {service.name.toLowerCase()} programs in:
                </p>
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                    {locations.map((loc) => (
                        <Link key={loc.id} href={`/${service.id}/${loc.id}`} style={{ color: 'var(--accent)', fontSize: '0.95rem', fontWeight: 600, textDecoration: 'none' }}>
                            {loc.name} {service.name}
                        </Link>
                    ))}
                </div>
            </div>
        );
    }

    if (type === 'location') {
        if (!currentCityId) return null;
        const relatedLocations = PRIMARY_CITIES.filter((city) => city.id !== currentCityId).slice(0, 3);
        return (
            <div style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid #d8d1c2' }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: 16 }}>
                    Eduardo also serves other communities nearby. View our training in:
                </p>
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                    {relatedLocations.map((related) => (
                        <Link key={related.id} href={`/${related.id}`} style={{ color: 'var(--accent)', fontSize: '0.95rem', fontWeight: 600, textDecoration: 'none' }}>
                            {related.name} Dog Training
                        </Link>
                    ))}
                </div>
            </div>
        );
    }

    if (type === 'combo') {
        if (!currentServiceId || !currentCityId) return null;
        const service = SERVICES.find((item) => item.id === currentServiceId);
        const city = ALL_LOCATIONS.find((item) => item.id === currentCityId);
        if (!service || !city) return null;

        return (
            <div style={{ marginTop: 48, textAlign: 'center', borderTop: '1px solid #d8d1c2', paddingTop: 32 }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                    Return to <Link href={`/${service.id}`} style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '3px' }}>{service.name}</Link> or view all our services in <Link href={`/${city.id}`} style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '3px' }}>{city.name}</Link>.
                </p>
            </div>
        );
    }

    if (type === 'blog') {
        const services = SERVICES.slice(0, 2);
        const city = PRIMARY_CITIES[0];
        return (
            <div style={{ marginTop: 40, paddingTop: 28, borderTop: '1px solid #d8d1c2', maxWidth: 820, marginInline: 'auto', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-muted)', marginBottom: 0, fontSize: '1.05rem', lineHeight: 1.7 }}>
                    Need professional help? Explore our <Link href={`/${services[0].id}`} style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '3px' }}>{services[0].name}</Link>, <Link href={`/${services[1].id}`} style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '3px' }}>{services[1].name}</Link>, or see our <Link href={`/${city.id}`} style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '3px' }}>{city.name} Dog Training</Link> programs.
                </p>
            </div>
        );
    }

    return null;
}

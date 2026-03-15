import Link from 'next/link';
import { ALL_LOCATIONS, PRIMARY_CITIES } from '@/config/locations';

export const metadata = {
    title: 'Service Areas | Dog Training Across Riverside, North County, and South Orange County',
    description: 'See every city Shepards K9 serves for dog training, board and train, boarding, and behavior work across Murrieta and surrounding Southern California communities.',
    alternates: {
        canonical: '/service-areas',
    },
};

export default function ServiceAreasPage() {
    const extendedAreas = ALL_LOCATIONS.filter(
        (location) => !PRIMARY_CITIES.some((primary) => primary.id === location.id)
    );

    return (
        <main>
            <section className="page-hero">
                <div className="container" style={{ maxWidth: 920 }}>
                    <div className="section-label">Service Areas</div>
                    <h1>Dog training service areas across Southern California</h1>
                    <p>
                        Eduardo works directly with dog owners across Riverside County, North County San Diego,
                        and parts of South Orange County. Use this hub to find the city page closest to you.
                    </p>
                    <div style={{ maxWidth: 760, margin: '28px auto 0', color: 'var(--text-muted)', display: 'grid', gap: 16 }}>
                        <p>Most owners land here because they want to know whether they are inside the normal travel range before they book an evaluation. This page exists to make that answer fast. If you are close to Murrieta, Temecula, Menifee, Wildomar, Canyon Lake, Lake Elsinore, Winchester, or Fallbrook, you are inside the core area Eduardo serves every week.</p>
                        <p>The extended cities below are still serviceable, but the right next click is the local city page or the exact service page your dog needs. Use this hub to move into dog training, board and train, dog boarding, puppy training, off leash training, day training, or obedience work without guessing which page matters most.</p>
                        <p>Our commitment to local service in Southern California means we don't stretch ourselves so thin that we can't provide dedicated, consistent training to the dogs in our program. By focusing our primary efforts on the Interstate 15 and 215 corridors through Riverside County, we ensure that every client gets the responsive, in-person attention required to solve complex behavioral issues. If you are slightly outside our listed extended coverage areas, we occasionally make exceptions for intensive board and train programs where daily travel is not a factor—please reach out directly to inquire about out-of-area availability.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 36 }}>
                        <div className="section-label">Primary Areas</div>
                        <h2 className="section-title">Core cities we serve every week</h2>
                        <div className="rule" style={{ margin: '0 auto 18px' }}></div>
                    </div>
                    <div className="location-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                        {PRIMARY_CITIES.map((city) => (
                            <Link key={city.id} href={`/${city.id}`} className="location-chip">
                                {city.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-light">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 36 }}>
                        <div className="section-label">Extended Coverage</div>
                        <h2 className="section-title">Additional cities Eduardo serves</h2>
                        <div className="rule" style={{ margin: '0 auto 18px' }}></div>
                        <p className="section-desc" style={{ margin: '0 auto' }}>
                            If you are in one of these surrounding communities, you can still work directly with
                            Shepards K9. Check the local page for location-specific details.
                        </p>
                    </div>
                    <div className="location-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                        {extendedAreas.map((city) => (
                            <Link key={city.id} href={`/${city.id}`} className="location-chip">
                                {city.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

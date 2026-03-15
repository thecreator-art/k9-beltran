import { SITE_CONFIG } from '@/config/siteConfig';

export const metadata = {
    title: 'Dog Training Pricing & Packages | Shepards K9',
    description: 'Honest, transparent dog training pricing in Murrieta. We do not negotiate with dogs, and we do not hide our rates from owners. View Board & Train costs.',
    alternates: {
        canonical: `${SITE_CONFIG.url}/pricing`
    }
};

const PRICING_PROGRAMS = [
    {
        name: 'Board & Train',
        price: '$3,000',
        note: 'Starting rate for shorter residential programs',
        featured: true,
        points: [
            'Immersive training with daily structure and real-world outings.',
            'Best fit for behavior cases, leash problems, and faster transformation.',
            'Includes transfer work so you know how to maintain the results.'
        ]
    },
    {
        name: 'Dog Training',
        price: '$175',
        note: 'Starting per private session',
        points: [
            'One-on-one coaching for obedience, manners, and daily handling.',
            'Ideal for owners who want direct instruction and accountability.',
            'Usually packaged into multi-session plans based on goals.'
        ]
    },
    {
        name: 'Puppy Training',
        price: '$165',
        note: 'Starting per puppy foundation session',
        points: [
            'Built for crate routines, biting, jumping, and early leash skills.',
            'Great for owners who want structure before bad habits settle in.',
            'Can be packaged as a starter plan for the first few months.'
        ]
    },
    {
        name: 'Obedience Training',
        price: '$175',
        note: 'Starting per private session',
        points: [
            'Clear work on sit, down, place, heel, and recall under distraction.',
            'Focused on reliable commands that carry into public life.',
            'Often paired with packages for owners who want momentum.'
        ]
    },
    {
        name: 'Off Leash Training',
        price: '$1,200',
        note: 'Starting for foundational off-leash packages',
        points: [
            'Long-line, recall, and accountability work before freedom is tested.',
            'Designed for owners who want real trust outside the house.',
            'Price depends on your dog’s current obedience and responsiveness.'
        ]
    },
    {
        name: 'Day Training',
        price: '$125',
        note: 'Starting per training day',
        points: [
            'Professional reps while you keep your dog home each night.',
            'Good fit for busy owners who need consistent daytime work.',
            'Usually booked in blocks for stronger progress and better value.'
        ]
    },
    {
        name: 'Dog Boarding',
        price: '$85',
        note: 'Starting per night',
        points: [
            'Structured in-home boarding instead of loud kennel-style care.',
            'Best for owners who want calm, reliable handling while away.',
            'Holiday dates and special-care dogs may price differently.'
        ]
    },
    {
        name: 'Pickup & Drop Off',
        price: '$40',
        note: 'Starting each way based on route',
        points: [
            'Convenient transportation for eligible programs and locations.',
            'Helps busy owners stay consistent with training and boarding.',
            'Final rate depends on distance and scheduling window.'
        ]
    },
    {
        name: 'Dog Photography',
        price: '$300',
        note: 'Starting per session',
        points: [
            'Natural portraits in scenic Southern California locations.',
            'Ideal for owners who want clean, memorable photos of their dog.',
            'Packages vary based on location, edits, and session length.'
        ]
    }
];

export default function PricingPage() {
    return (
        <main>
            <section className="page-hero" style={{ minHeight: 420, background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)' }}>
                <div className="container text-center" style={{ maxWidth: 860 }}>
                    <div className="section-label" style={{ color: 'rgba(255,255,255,0.82)' }}>Programs</div>
                    <h1 style={{ color: '#fff', marginBottom: 14 }}>Training Programs & Pricing</h1>
                    <p style={{ color: 'rgba(255,255,255,0.84)', fontSize: 18, margin: '0 auto' }}>
                        Clear starting rates, honest guidance, and the right recommendation for the dog you actually have.
                    </p>
                </div>
            </section>

            <section className="section section-light">
                <div className="container">
                    <div className="text-center" style={{ maxWidth: 760, margin: '0 auto 32px' }}>
                        <div className="section-label">Starting Rates</div>
                        <h2 className="section-title">Straightforward starting rates for each training program</h2>
                        <div className="rule" style={{ margin: '0 auto 24px' }}></div>
                        <p className="section-desc" style={{ margin: '0 auto' }}>
                            These are starting points. Final pricing depends on your dog, your goals, travel, and how much structure the case needs.
                        </p>
                    </div>
                    <div className="pricing-grid">
                        {PRICING_PROGRAMS.map((program) => (
                            <div key={program.name} className={`pricing-card ${program.featured ? 'featured' : ''}`}>
                                {program.featured && <div className="featured-badge">Most Effective</div>}
                                <h3>{program.name}</h3>
                                <div className="pricing-price">Starting at {program.price}</div>
                                <div className="pricing-price-note">{program.note}</div>
                                <ul className="pricing-features">
                                    {program.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                                <a href="/contact" className="btn btn-primary" style={{ width: '100%' }}>Request Pricing Call</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container content-narrow">
                    <div className="text-center">
                        <div className="section-label">Why It Matters</div>
                        <h2 className="section-title">The cost of waiting is usually higher</h2>
                        <div className="rule" style={{ margin: '0 auto 32px' }}></div>
                    </div>
                    <div style={{ fontSize: 17, color: 'var(--text-dark)' }}>
                        <p>
                            Most owners wait until the behavior has already disrupted walks, guests, vacations, or daily peace in the house. By that point, the dog has rehearsed the problem hundreds of times. Starting earlier usually means faster progress and lower overall cost.
                        </p>
                        <p>
                            Eduardo will tell you directly what makes sense for your dog. If a smaller package can solve the issue, he will say that. If the dog needs a more serious reset, he will say that too. The goal is not to oversell you. The goal is to put you in the right program the first time.
                        </p>
                    </div>
                    <div className="text-center" style={{ marginTop: 32 }}>
                        <a href="/contact" className="btn btn-primary btn-lg">
                            Get a Direct Recommendation
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

import Image from 'next/image';
import Script from 'next/script';
import { SITE_CONFIG } from '@/config/siteConfig';

export const metadata = {
    title: 'About Shepards K9 | Dog Trainer Eduardo Beltran',
    description: 'Eduardo Beltran trains dogs in the exact environments they live in. Real obedience, extreme accountability, and clear leadership for Southern California dogs.',
    alternates: {
        canonical: `${SITE_CONFIG.url}/about`
    }
};

export default function AboutPage() {
    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Eduardo Beltran',
        jobTitle: 'Head Trainer',
        worksFor: {
            '@type': 'LocalBusiness',
            name: 'Shepards K9'
        },
        url: `${SITE_CONFIG.url}/about`
    };

    return (
        <main>
            <Script id="person-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
            <section className="page-hero page-hero-standard">
                <Image
                    src="/photos/about-eduardo-trees.jpg"
                    alt="Eduardo Beltran training outdoors"
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.55)', zIndex: 1 }} />
                <div className="container">
                    <div className="page-hero-inner">
                        <div className="page-hero-copy" style={{ position: 'relative', zIndex: 2 }}>
                            <div className="section-label" style={{ color: 'rgba(255,255,255,0.9)' }}>My Story</div>
                            <h1 style={{ fontSize: 'clamp(28px, 6vw, 48px)' }}>About Eduardo Beltran</h1>
                            <p style={{ fontSize: 'clamp(16px, 2vw, 18px)' }}>The path to Shepards K9 was not planned. It was built through real life, real dogs, and finally finding the work that meant something.</p>
                        </div>
                        <div className="page-hero-panel" style={{ position: 'relative', zIndex: 2 }}>
                            <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>What owners should know first</h3>
                            <p style={{ fontSize: '14px', marginBottom: '20px' }}>Eduardo is not trying to impress you with gimmicks. He is trying to build a dog you can actually live with, trust in public, and enjoy at home.</p>
                            <div className="page-hero-points">
                                <div className="page-hero-point">Real-world obedience, not rehearsal inside a bubble</div>
                                <div className="page-hero-point">Direct communication with owners from day one</div>
                                <div className="page-hero-point">Structure that holds up in neighborhoods, parks, and homes</div>
                                <div className="page-hero-point">A trainer who understands working dogs, nervous dogs, and family dogs</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-light">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 40 }}>
                        <div className="section-label">How It Started</div>
                        <h2 className="section-title">The road that led here</h2>
                        <div className="rule" style={{ margin: '0 auto 24px' }}></div>
                    </div>
                    <div className="about-timeline">
                        <div className="about-timeline-item">
                            <div className="about-timeline-year">Before Dogs</div>
                            <h3>Certified welder with a work ethic that still shows up today</h3>
                            <p>Eduardo spent a couple of years as a certified welder. That background built discipline, repetition, standards, and pride in doing hard work the right way the first time.</p>
                        </div>
                        <div className="about-timeline-item">
                            <div className="about-timeline-year">Creative Chapter</div>
                            <h3>Real estate photography taught patience and detail</h3>
                            <p>Before dog training became the calling, Eduardo was also doing real estate photography. That work sharpened his eye for detail, timing, presentation, and how small things change the whole picture.</p>
                        </div>
                        <div className="about-timeline-item">
                            <div className="about-timeline-year">Enzo</div>
                            <h3>The dog that changed the direction</h3>
                            <p>Enzo forced Eduardo to stop guessing and start learning. Building that dog up became the proof that structure, patience, and honest handling can completely change a dog's future.</p>
                        </div>
                        <div className="about-timeline-item">
                            <div className="about-timeline-year">Today</div>
                            <h3>Shepards K9 is now the work that matters most</h3>
                            <p>Now the mission is simple. Help owners build dogs they can trust in the real world and give them the kind of guidance that cuts through confusion fast.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingBottom: '40px' }}>
                <div className="container about-grid" style={{ alignItems: 'center' }}>
                    <div>
                        <div className="section-label">My Story</div>
                        <h2 className="section-title">Relationship before shortcuts</h2>
                        <div className="rule"></div>
                        <p>
                            Eduardo built Shepards K9 for owners who are done chasing tips and ready for a real plan. If your dog is pulling, reacting, blowing off commands, or making daily life stressful, the next move is simple: get a direct evaluation and start building structure that actually holds.
                        </p>
                        <p>
                            It happened during a chapter of my life when I needed direction the most. When my girlfriend and I moved into our first apartment, I adopted Enzo, a working-line Doberman who instantly grabbed my heart. I had no idea how much fear, drive, and confusion he carried, or how much he was going to change me.
                        </p>
                        <div className="about-creds">
                            <span className="about-cred">Licensed & Insured</span>
                            <span className="about-cred">Real-World Proofing</span>
                            <span className="about-cred">Murrieta Based</span>
                            <span className="about-cred">Relationship First</span>
                        </div>
                    </div>
                    <div className="about-image-wrap" style={{ minHeight: 'auto', height: 'clamp(350px, 60vh, 500px)', width: '100%', marginTop: '24px' }}>
                        <Image
                            src="/photos/about-eduardo-trees.jpg"
                            alt="Eduardo Beltran in a training environment"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="text-center">
                        <div className="section-label">What Makes Us Different</div>
                        <h2 className="section-title">The Shepards K9 standard</h2>
                        <div className="rule" style={{ margin: '0 auto 32px' }}></div>
                    </div>
                    <div className="about-values-grid">
                        <div className="pricing-card" style={{ textAlign: 'left', background: 'var(--white)', height: '100%', padding: '32px 28px' }}>
                            <h3>Real-world proofing</h3>
                            <p style={{ fontSize: 16, color: 'var(--text-dark)' }}>
                                Eduardo does not build obedience that only works in a quiet training bubble. The work gets tested where owners actually struggle: sidewalks, parks, front doors, guests, errands, and public spaces.
                            </p>
                        </div>
                        <div className="pricing-card" style={{ textAlign: 'left', background: 'var(--white)', height: '100%', padding: '32px 28px' }}>
                            <h3>Direct owner coaching</h3>
                            <p style={{ fontSize: 16, color: 'var(--text-dark)' }}>
                                Owners get straight answers. If you are part of the problem, Eduardo will tell you. That honesty is exactly why clients move faster instead of staying stuck in mixed messages.
                            </p>
                        </div>
                        <div className="pricing-card" style={{ textAlign: 'left', background: 'var(--white)', height: '100%', padding: '32px 28px' }}>
                            <h3>Relationship before shortcuts</h3>
                            <p style={{ fontSize: 16, color: 'var(--text-dark)' }}>
                                The goal is not to dominate a dog or bribe a dog. The goal is to build clarity, trust, accountability, and calm so the dog understands exactly what life with you requires.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-light" style={{ paddingTop: 40, paddingBottom: 64 }}>
                <div className="container" style={{ maxWidth: 980 }}>
                    <div>
                        <div className="section-label">Why Owners Reach Out</div>
                        <h2 className="section-title">If your dog is running the house, the fix is not more guessing</h2>
                        <div className="rule"></div>
                        <p>
                            Eduardo built Shepards K9 for owners who are done chasing tips and ready for a real plan. If your dog is pulling, reacting, blowing off commands, or making daily life stressful, the next move is simple: get a direct evaluation and start building structure that actually holds.
                        </p>
                        <p>
                            The point is not to impress you with theory. The point is to tell you exactly what your dog needs, what your role is, and how to start making progress without wasting months on mixed advice.
                        </p>
                        <div className="hero-bullets" style={{ marginTop: 24 }}>
                            <div className="hero-bullet" style={{ color: 'var(--text-dark)', fontSize: 17 }}>Straight answers about program fit</div>
                            <div className="hero-bullet" style={{ color: 'var(--text-dark)', fontSize: 17 }}>Real expectations for owner follow-through</div>
                            <div className="hero-bullet" style={{ color: 'var(--text-dark)', fontSize: 17 }}>A practical next step instead of more guessing</div>
                        </div>
                    </div>
                    <div className="about-closing-card" style={{ marginTop: 48, marginLeft: 'auto', marginRight: 'auto' }}>
                        <h3>Work with Eduardo directly</h3>
                        <p>Clear recommendation. Honest program fit. Real training for the dog you live with every day.</p>
                        <a href="/contact" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '17px' }}>Schedule Your Evaluation</a>
                    </div>
                </div>
            </section>
        </main>
    );
}

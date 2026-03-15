import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_CONFIG } from '@/config/siteConfig';
import { ALL_LOCATIONS } from '@/config/locations';
import { getServiceVisuals } from '@/config/service-visuals';
import SectionImageSplit from '@/components/SectionImageSplit';

const dogTrainingFaqs = [
    {
        question: 'What is the difference between dog training and obedience training?',
        answer: 'Dog training is the wider category. It covers house manners, leash control, thresholds, neutrality, jumping, reactivity, and the day-to-day structure that changes behavior. Obedience training is one part of that picture. If your dog technically knows commands but still falls apart in real life, you need a broader training plan than obedience alone.',
    },
    {
        question: 'What kinds of dogs are a good fit for this page?',
        answer: 'This page is for owners dealing with pulling, jumping, bad thresholds, inconsistent recall, leash pressure problems, nuisance barking, reactivity, and weak follow-through at home or in public. If the case is more severe, Eduardo may recommend Board and Train instead.',
    },
    {
        question: 'Will Eduardo tell me if my dog needs a different program?',
        answer: 'Yes. If the issue is too advanced for a standard dog training plan, you will hear that directly. The goal is to place you in the right service the first time, not sell you the wrong package.',
    },
    {
        question: 'Do you train in the real world or just in a facility?',
        answer: 'Real world. The work has to hold up on sidewalks, around guests, in parks, through doorways, and in the places where your dog normally loses clarity. That is where Eduardo puts the reps in.',
    },
];

export const metadata = {
    title: 'Dog Training Programs in Murrieta, CA | Shepards K9',
    description: 'Murrieta dog training programs for leash pulling, reactivity, impulse control, recall, and day-to-day obedience. Work directly with Eduardo Beltran at Shepards K9.',
    alternates: {
        canonical: '/dog-training',
    },
};

export default function DogTrainingPage() {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dog Training',
        provider: {
            '@type': 'LocalBusiness',
            name: SITE_CONFIG.businessName,
            telephone: SITE_CONFIG.phone,
            url: SITE_CONFIG.siteUrl,
        },
        areaServed: 'Murrieta, California',
        description: 'Professional dog training for leash control, household structure, real-world obedience, and behavior problems in Murrieta, California.',
        url: `${SITE_CONFIG.siteUrl}/dog-training`,
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: dogTrainingFaqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <main>
                <section className="page-hero page-hero-standard">
                    <Image
                        src="/photos/hero-eduardo-boxer-home.jpg"
                        alt="Eduardo Beltran training a boxer during a Shepards K9 dog training session in Murrieta"
                        fill
                        priority
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.45)', zIndex: 1 }} />
                    <div className="container">
                        <div className="page-hero-inner">
                            <div className="page-hero-copy" style={{ position: 'relative', zIndex: 2 }}>
                                <div className="section-label" style={{ color: 'rgba(255,255,255,0.84)' }}>Murrieta Dog Training</div>
                                <h1>Dog Training in Murrieta, CA That Holds Up in Real Life</h1>
                                <p>
                                    This page is for owners who need more than a few obedience commands. Eduardo
                                    builds control at the front door, on the leash, around distractions, and in the
                                    daily routines where behavior problems usually show up first.
                                </p>
                                <div className="hero-bullets" style={{ marginTop: 24, marginBottom: 0 }}>
                                    <div className="hero-bullet" style={{ fontSize: 17 }}>Licensed, insured, and direct access to Eduardo</div>
                                    <div className="hero-bullet" style={{ fontSize: 17 }}>Real-world dog training built for everyday life</div>
                                    <div className="hero-bullet" style={{ fontSize: 17 }}>Same week scheduling when availability opens up</div>
                                    <div className="hero-bullet" style={{ fontSize: 17 }}>Programs adjusted to the dog in front of you</div>
                                </div>
                                <div className="page-hero-actions">
                                    <a href="#dog-training-form" className="btn btn-primary btn-lg">Book an Evaluation</a>
                                    <a href={SITE_CONFIG.phoneHref} className="btn btn-secondary btn-lg">{SITE_CONFIG.phone}</a>
                                </div>
                            </div>
                            <div className="hero-form" id="dog-training-form" style={{ position: 'relative', zIndex: 2 }}>
                                <ContactForm
                                    title="Talk to Eduardo About Your Dog"
                                    subtitle="Describe the problem, the dog's age, and what has already been tried."
                                    defaultService="Dog Training"
                                    sourceService="Dog Training"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container content-narrow">
                        <div className="section-label">What This Covers</div>
                        <h2 className="section-title">A broader program than simple obedience work</h2>
                        <div className="rule"></div>
                        <p style={{ fontSize: 18, lineHeight: 1.8 }}>
                            A lot of owners come in asking for obedience when the real issue is bigger than sit, down,
                            and stay. The dog may know commands already and still drag on leash, crowd thresholds,
                            explode on walks, ignore house rules, or lose all clarity outside the living room. This
                            page exists for that middle ground: dogs that need a real training plan, but not always
                            full Board and Train.
                        </p>
                        <p style={{ fontSize: 18, lineHeight: 1.8 }}>
                            Eduardo uses dog training to clean up the routines driving the problem. That means more
                            structure at home, better leash mechanics, honest accountability, and public reps that
                            actually transfer into daily life. The goal is not flashy demos. The goal is a dog you can
                            trust more every week.
                        </p>
                    </div>
                </section>

                <SectionImageSplit
                    light
                    eyebrow="Real-World Reliability"
                    title="Dog training should solve problems outside the living room"
                    body={[
                        `A lot of owners do not need another class where the dog looks good for a few minutes in a clean setup. They need a dog that listens when the front door opens, when a distraction shows up on the walk, or when the house feels busy and overstimulating.`,
                        `That is why Eduardo builds dog training around real life. The training is supposed to make the owner feel more in control on normal days, not just when conditions are perfect.`,
                    ]}
                    imageSrc={getServiceVisuals('dog-training')[1]}
                    imageAlt="Dog training in Murrieta with Eduardo"
                />

                <section className="section section-light">
                    <div className="container">
                        <div className="card-grid">
                            <div className="info-card">
                                <h3 style={{ marginBottom: 12 }}>Best fit for</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>
                                    Pulling, bad thresholds, leash reactivity, jumping, nuisance barking, weak recall,
                                    place command work, house manners, and owners who need structure that survives real
                                    distractions.
                                </p>
                            </div>
                            <div className="info-card">
                                <h3 style={{ marginBottom: 12 }}>How this differs from obedience</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>
                                    Obedience training is command-focused. Dog training starts earlier in the picture.
                                    It fixes the routine, the handling, the boundaries, and the follow-through that make
                                    obedience either hold up or collapse.
                                </p>
                            </div>
                            <div className="info-card">
                                <h3 style={{ marginBottom: 12 }}>When Eduardo upgrades the recommendation</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>
                                    If the dog has serious aggression, major public liability, or needs faster immersion,
                                    Eduardo will tell you directly that Board and Train is the better move.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="text-center" style={{ maxWidth: 820, margin: '0 auto 36px' }}>
                            <div className="section-label">Related Programs</div>
                            <h2 className="section-title">Choose the right training path for the dog in front of you</h2>
                            <div className="rule" style={{ margin: '0 auto 18px' }}></div>
                            <p className="section-desc" style={{ margin: '0 auto' }}>
                                Dog Training is the broadest landing page in the service stack. These are the next
                                internal pages most owners compare after they talk through the details.
                            </p>
                        </div>
                        <div className="location-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
                            <Link href="/obedience-training" className="location-chip">Obedience Training</Link>
                            <Link href="/board-and-train" className="location-chip">Board &amp; Train</Link>
                            <Link href="/day-training" className="location-chip">Day Training</Link>
                            <Link href="/off-leash-training" className="location-chip">Off Leash Training</Link>
                            <Link href="/puppy-training" className="location-chip">Puppy Training</Link>
                        </div>
                    </div>
                </section>

                <section className="section section-light">
                    <div className="container">
                        <div className="text-center" style={{ maxWidth: 820, margin: '0 auto 36px' }}>
                            <div className="section-label">Service Areas</div>
                            <h2 className="section-title">Dog training city pages</h2>
                            <div className="rule" style={{ margin: '0 auto 18px' }}></div>
                            <p className="section-desc" style={{ margin: '0 auto' }}>
                                Every city we serve now has a matching Dog Training page so owners can land on a local
                                route first and still get directed into the right program.
                            </p>
                        </div>
                        <div className="location-grid">
                            {ALL_LOCATIONS.map((city) => (
                                <Link key={city.id} href={`/dog-training/${city.id}`} className="location-chip">
                                    {city.name} Dog Training
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section section-light">
                    <div className="container" style={{ maxWidth: 860 }}>
                        <div className="text-center">
                            <div className="section-label">Questions</div>
                            <h2 className="section-title">Dog Training FAQs</h2>
                            <div className="rule" style={{ margin: '0 auto 32px' }}></div>
                        </div>
                        <FAQAccordion faqs={dogTrainingFaqs} />
                    </div>
                </section>

                <section className="section">
                    <div className="container text-center" style={{ maxWidth: 760 }}>
                        <div className="section-label">Next Step</div>
                        <h2 className="section-title">Need a direct recommendation?</h2>
                        <div className="rule" style={{ margin: '0 auto 24px' }}></div>
                        <p style={{ fontSize: 18, color: 'var(--text-muted)', marginBottom: 32 }}>
                            Tell Eduardo what the dog is doing, where the routine is falling apart, and whether the
                            issue is happening at home, on walks, or in public. He will tell you if standard dog
                            training is the right fit or if a more intensive service makes more sense.
                        </p>
                        <Link href="/contact" className="btn btn-primary btn-lg">
                            Request an Evaluation
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}

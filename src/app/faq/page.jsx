import Script from 'next/script';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_CONFIG } from '@/config/siteConfig';

export const metadata = {
    title: 'Frequently Asked Questions | Shepards K9 Dog Training',
    description: 'Get answers to common dog training questions regarding e-collars, guaranteed results, Board & Train formatting, and Eduardo Beltran\'s methods.',
    alternates: {
        canonical: `${SITE_CONFIG.url}/faq`
    }
};

const FAQ_GROUPS = [
    {
        label: 'Training Philosophy',
        title: 'How Eduardo trains dogs',
        faqs: [
            {
                q: 'What training methods do you use?',
                a: 'Eduardo uses a balanced, relationship-based system. Dogs are rewarded for clear decisions and corrected fairly when they ignore known rules. The goal is clarity, accountability, and a calmer dog in real life.'
            },
            {
                q: 'Are prong collars or e-collars cruel?',
                a: 'Not when they are used correctly. Eduardo uses tools as communication, not punishment. Timing, fairness, and the dog\'s understanding matter far more than the internet label attached to the tool.'
            },
            {
                q: 'Do you train aggressive or reactive dogs?',
                a: 'Yes. Reactivity, leash aggression, insecurity, overstimulation, and serious control problems are a major part of Eduardo\'s work. The plan depends on the dog in front of him, not a generic script.'
            },
            {
                q: 'Do you work with all breeds?',
                a: 'Yes. Eduardo works with working breeds, rescues, family dogs, high-drive dogs, stubborn adolescents, and dogs owners feel overwhelmed by. The structure is tailored to the dog, but the standard stays clear.'
            }
        ]
    },
    {
        label: 'Programs',
        title: 'Choosing the right service',
        faqs: [
            {
                q: 'How do I know if I need Board & Train?',
                a: 'If your dog has bigger behavioral issues, falls apart outside the house, or you need fast momentum, Board & Train is often the strongest option. Eduardo will tell you directly if it is the right fit or if something lighter makes more sense.'
            },
            {
                q: 'What happens during Board & Train?',
                a: 'Your dog lives with Eduardo, trains every day, and practices structure from morning to night. The dog is not just drilled on commands. The dog lives a different routine and learns how to function inside it.'
            },
            {
                q: 'What is Day Training?',
                a: 'Day Training gives your dog professional work during the day while you keep the dog home at night. It is a strong option for owners who need help building reps and structure without a full residential stay.'
            },
            {
                q: 'Can boarding help maintain training?',
                a: 'Yes. Boarding at Shepards K9 follows rules and structure, not kennel chaos. Dogs maintain routines, accountability, and calm handling while they stay with Eduardo.'
            }
        ]
    },
    {
        label: 'Behavior Problems',
        title: 'What owners usually want fixed first',
        faqs: [
            {
                q: 'Can you help with puppy biting and jumping?',
                a: 'Yes. Those issues usually improve quickly when the puppy has proper boundaries, crate routines, sleep, leash structure, and consistent follow-through from the family.'
            },
            {
                q: 'Can you stop leash pulling and lunging?',
                a: 'Yes. Eduardo rebuilds the walk from the ground up so the dog understands pace, pressure, direction, and accountability. The fix is not just a better tool. It is a better system.'
            },
            {
                q: 'What if my dog knows commands at home but ignores me outside?',
                a: 'That usually means the dog knows the cue but not the standard. Real obedience has to be proofed in public, around movement, people, dogs, and environmental pressure.'
            },
            {
                q: 'Can you help with recall and off-leash reliability?',
                a: 'Yes. Eduardo builds recall through structure, repetition, accountability, and gradually harder distractions. Off-leash reliability is earned. It is not something you guess at.'
            }
        ]
    },
    {
        label: 'Scheduling & Logistics',
        title: 'What to expect during the process',
        faqs: [
            {
                q: 'How soon can we get started?',
                a: 'Same-week availability is often possible depending on the schedule and the service. The fastest path is to call or submit the contact form with honest details about the dog.'
            },
            {
                q: 'Do you offer pickup and drop off?',
                a: 'Yes. Pickup and drop off is available for qualifying programs throughout Murrieta and nearby service areas. It helps busy owners stay consistent with the plan.'
            },
            {
                q: 'Can I visit my dog during Board & Train?',
                a: 'Usually no. Mid-program visits often interrupt the structure and emotional reset that make the training work. Eduardo provides updates so you can see progress without weakening the process.'
            },
            {
                q: 'What areas do you serve?',
                a: 'Shepards K9 serves Murrieta, Temecula, Menifee, Wildomar, Canyon Lake, Lake Elsinore, Winchester, Fallbrook, plus parts of San Diego County and Orange County.'
            }
        ]
    },
    {
        label: 'Results & Responsibility',
        title: 'What changes and what Eduardo expects from you',
        faqs: [
            {
                q: 'Do you guarantee your training?',
                a: 'Eduardo stands behind the work and the transfer process, but long-term success still depends on the owner following through. If the lifestyle goes backward, the dog usually does too.'
            },
            {
                q: 'Will my dog forget me during Board & Train?',
                a: 'No. Your dog does not forget you. What changes is the dog\'s respect for structure, expectations, and follow-through. Eduardo then shows you how to maintain that at home.'
            },
            {
                q: 'Do I have to do homework after training?',
                a: 'Yes. Eduardo can create clarity and momentum, but the home still has to support the rules. Owners who stay consistent keep their results much longer.'
            },
            {
                q: 'What if I already tried another trainer?',
                a: 'That happens all the time. Eduardo evaluates what is actually solid, what is fake obedience, and what needs to be rebuilt so the dog performs in real life, not just in a controlled lesson.'
            }
        ]
    }
];

export default function FAQPage() {
    const allFaqs = FAQ_GROUPS.flatMap((group) => group.faqs);
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: allFaqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
            },
        })),
    };

    return (
        <main>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="page-hero" style={{ minHeight: 420, background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)' }}>
                <div className="container text-center" style={{ maxWidth: 860 }}>
                    <div className="section-label" style={{ color: 'rgba(255,255,255,0.82)' }}>Answers</div>
                    <h1 style={{ color: '#fff', marginBottom: 14 }}>Frequently Asked Questions</h1>
                    <p style={{ color: 'rgba(255,255,255,0.84)', fontSize: 18, margin: '0 auto' }}>
                        Direct answers to the questions dog owners ask before they commit to training, boarding, or behavior work.
                    </p>
                </div>
            </section>

            <section className="section section-light">
                <div className="container" style={{ maxWidth: 980 }}>
                    <div className="faq-groups-layout">
                        {FAQ_GROUPS.map((group) => (
                            <div key={group.title} className="faq-group-card">
                                <div className="section-label">{group.label}</div>
                                <h2 className="section-title" style={{ marginBottom: 10 }}>{group.title}</h2>
                                <div className="rule"></div>
                                <FAQAccordion faqs={group.faqs} jsonLd={false} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-sm" style={{ paddingTop: 0, paddingBottom: 80 }}>
                <div className="container text-center" style={{ maxWidth: 760 }}>
                    <div className="section-label">Still wondering?</div>
                    <h2 className="section-title">Any more questions?</h2>
                    <div className="rule" style={{ margin: '0 auto 24px' }}></div>
                    <p style={{ color: 'var(--text-muted)', fontSize: 18, marginBottom: 28 }}>
                        If you want a direct answer about your dog, your goals, or the right training program, call Eduardo and talk it through.
                    </p>
                    <a href={SITE_CONFIG.phoneHref} className="btn btn-primary btn-lg">Give Us a Call</a>
                </div>
            </section>
        </main>
    );
}

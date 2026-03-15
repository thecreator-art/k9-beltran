import Link from 'next/link';
import Script from 'next/script';
import FAQAccordion from '@/components/FAQAccordion';
import InternalLinkingHub from '@/components/InternalLinkingHub';
import { SITE_CONFIG } from '@/config/siteConfig';
import ServiceHeroSplit from '@/components/ServiceHeroSplit';
import { getServiceVisuals } from '@/config/service-visuals';
import SectionImageSplit from '@/components/SectionImageSplit';

export const metadata = {
    title: 'Dog Day Training Murrieta, CA | Shepards K9',
    description: 'Dog day training in Murrieta. Drop your dog off before work and pick up a better-behaved companion. Eduardo Beltran trains your dog in real environments.',
    alternates: {
        canonical: '/day-training',
    },
};

const faqs = [
    {
        question: 'Is this the same as doggy daycare?',
        answer: 'No. Traditional dog daycare is a free-for-all where 30 dogs run around a warehouse unsupervised, learning terrible manners and getting overstimulated. Day training is a highly structured educational environment. While there is socialization, the focus is on installing obedience, practicing calmness around distractions, and following rules.'
    },
    {
        question: 'What time are drop-offs and pick-ups?',
        answer: 'We schedule drop-offs between 7:00 AM and 9:00 AM, and pickups between 4:00 PM and 6:00 PM. We build this around your standard workday to make it as convenient as possible for busy dog owners in the Murrieta area.'
    },
    {
        question: 'How fast will I see a change in my dog?',
        answer: 'Because Eduardo does the heavy lifting every day, most owners see a distinct shift in their dog\'s attitude and leash manners by the end of the first week. However, translating those results permanently to you requires your participation during our handoff sessions.'
    },
    {
        question: 'Does my dog get to play with other dogs?',
        answer: 'Yes, but in a very controlled way. We use stable, neutral dogs to teach your dog how to interact politely, respect boundaries, and disengage when called. They learn that they cannot just tackle every dog they see.'
    },
    {
        question: 'What happens if I cannot drop them off?',
        answer: 'If you live within our primary service area, we offer a specialized pick-up and drop-off service so you do not have to interrupt your morning commute. Talk to Eduardo during the evaluation to set this up.'
    }
];

export default function DayTrainingPage() {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dog Day Training',
        provider: {
            '@type': 'LocalBusiness',
            name: 'Shepards K9'
        },
        areaServed: {
            '@type': 'State',
            name: 'California'
        }
    };

    return (
        <div>
            <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <ServiceHeroSplit
                imageSrc="/photos/IMG_9491.JPG"
                imageAlt="Day training with Eduardo Beltran in Murrieta"
                eyebrow="Day Training"
                title="Dog Day Training in Murrieta, CA"
                description="Professional training while you work. Drop off an unruly dog in the morning, and pick up a tired, better-behaved companion in the evening."
                points={['Full training days with structure', 'Built for busy owners', 'Real outings, not daycare chaos']}
                formTitle="Start Day Training"
                formSubtitle="Tell Eduardo about your schedule and the behavior you want fixed."
                defaultService="Day Training"
                sourceService="Day Training"
            />

            {/* INTRO */}
            <section className="section">
                <div className="container" style={{ maxWidth: 860 }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '24px' }}>
                        Many dog owners know their dog needs consistent, structured training, but between commuting, working full time, and managing a household, they simply don't have the three hours a day required to build an obedient dog from scratch. Day training is the solution for busy professionals in Murrieta and Temecula.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '24px' }}>
                        Unlike a chaotic doggy daycare where animals practice bad habits all day, Eduardo Beltran runs a tight, structured program. Your dog spends the day learning to walk on a loose leash, holding a "place" command, and ignoring distractions. We do the heavy lifting of installing the commands so you don't have to.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        What makes Shepards K9 completely different is that the training doesn't happen in a giant indoor play yard. We take the dogs out into real-world environments. They learn how to behave around Southern California traffic, shopping carts, and oblivious pedestrians. By the time you pick them up, they are mentally satisfied and ready to relax at home with you. If you need overnight care on top of this structured environment, we also offer <Link href="/dog-boarding" style={{ color: '#C4782A', textDecoration: 'underline' }}>dog boarding</Link> exclusively for our clients.
                    </p>
                </div>
            </section>

            <SectionImageSplit
                light
                eyebrow="Structured Workdays"
                title="Why day training is different from daycare"
                body={[
                    'Day training should not look like chaos with a nicer label. Eduardo uses the day to build leash skills, obedience, neutrality, and calmer routines while your dog still goes home with you at night.',
                    'That is what makes it a strong middle ground for owners who want consistent professional reps without committing to a full residential program.',
                ]}
                imageSrc={getServiceVisuals('day-training')[1]}
                imageAlt="Day training session in Murrieta"
            />

            {/* WHO THIS IS FOR */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>Who This Is For</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        Day training is perfectly suited for owners who want the fast results of an immersion program, but still want their dog to sleep in their own bed at night. It addresses:
                    </p>
                    <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr', gap: '16px', padding: 0 }}>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Working Professionals:</strong> Owners who are out of the house for 8 to 10 hours a day and feel guilty leaving their dog crated or bored.</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>High Energy Dogs:</strong> Working breeds (Shepherds, Malinois, Pointers) whose physical and mental needs are too demanding for a 15-minute neighborhood walk.</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Poor Leash Walkers:</strong> Dogs that drag their owners down the street. We install the heel command, so you just have to maintain it.</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Under-Socialized Dogs:</strong> Dogs that don't know how to exist calmly around other dogs and need controlled, structured exposure. (If the dog has severe aggression, our <Link href="/board-and-train" style={{ color: '#C4782A', textDecoration: 'underline' }}>board and train</Link> is a safer starting point).</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="section">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>How It Works</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        You drop your dog off in the morning. Instead of immediately throwing them into a playgroup to get overstimulated, Eduardo starts the day with structure. The dog is given a job to do. Over the course of the day, they will have multiple focused obedience sessions layered with treadmill conditioning if necessary, structured pack walks, and enforced rest periods.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        Throughout the week, we progressively increase the difficulty. The dog learns that "sit" doesn't just mean sit for three seconds; it means sit until you are released, even if another dog walks by. Eduardo builds a relationship with your dog based on mutual respect, clearly defining what behaviors are acceptable and which are not.
                    </p>
                    <p>
                        When you pick your dog up in the evening, Eduardo doesn't just hand you the leash and wave goodbye. We do a summary handoff. Once a week, we require a formal transfer session where you hold the leash, and we coach you exactly on how to enforce the rules at home over the weekend so the dog doesn't regress.
                    </p>
                </div>
            </section>

            {/* WHAT YOU'LL SEE AFTER */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>What You'll See After</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        The most immediate change you will see is a calm, mentally fulfilled dog in the evenings. Because they spent the day using their brain to solve problems and hold commands, they won't be frantically pacing the house or destroying pillows while you try to cook dinner.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        On your weekend walks, the chaos will be gone. The dog will understand leash pressure, meaning they will yield to the collar and walk beside you instead of pulling your shoulder out of its socket to get to a fire hydrant. When guests come over, you'll be able to send the dog to their bed and trust they will stay there.
                    </p>
                    <p>
                        You will finally be able to actually enjoy your dog without feeling the constant, nagging guilt that you aren't doing enough for them.
                    </p>
                </div>
            </section>

            {/* WHY SHEPARDS K9 */}
            <section className="section">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>Why Shepards K9</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        Corporate pet resorts sell the illusion of a tired dog by letting thirty dogs run wild on artificial turf. The dog comes home exhausted, but they also learned to bark excessively, ignore humans, and bully weaker dogs. That is not training; that is managed chaos.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        Shepards K9 provides actual education. Eduardo Beltran ensures your dog is learning real-world manners every single hour they are with us.
                    </p>
                    <p>
                        Beyond the facility walls, Eduardo takes the training on the road, testing your dog's obedience near <Link href="/day-training/escondido" style={{ color: '#C4782A', textDecoration: 'underline' }}>Escondido</Link> shopping districts or the busy trails in <Link href="/day-training/san-marcos" style={{ color: '#C4782A', textDecoration: 'underline' }}>San Marcos</Link>. Your dog learns that the rules apply everywhere, not just when the trainer is standing in front of them with a piece of hot dog.
                    </p>
                </div>
            </section>

            {/* FAQS */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: 800 }}>
                    <div className="text-center">
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <div className="rule" style={{ margin: '0 auto 32px' }}></div>
                    </div>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="section">
                <div className="container text-center" style={{ maxWidth: 800 }}>
                    <p style={{ fontSize: '1.2rem', marginBottom: 32 }}>
                        If you want a highly trained dog but simply do not have the time to do the foundational work yourself, reach out today. Eduardo will evaluate your dog, verify they are a good candidate for the day training environment, and reserve a spot in our upcoming rotation.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg" style={{ backgroundColor: '#C4782A', borderColor: '#C4782A' }}>
                        Schedule an Evaluation
                    </Link>
                    <InternalLinkingHub type="service" currentServiceId="day-training" />
                </div>
            </section>
        </div>
    );
}

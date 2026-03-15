import Link from 'next/link';
import Script from 'next/script';
import FAQAccordion from '@/components/FAQAccordion';
import InternalLinkingHub from '@/components/InternalLinkingHub';
import { SITE_CONFIG } from '@/config/siteConfig';
import ServiceHeroSplit from '@/components/ServiceHeroSplit';
import { getServiceVisuals } from '@/config/service-visuals';
import SectionImageSplit from '@/components/SectionImageSplit';

export const metadata = {
    title: 'Puppy Training Murrieta, CA | Shepards K9',
    description: 'Start your puppy right in Murrieta. Eduardo Beltran builds real-world housebreaking, crate training, and bite inhibition foundations. Book an evaluation.',
    alternates: {
        canonical: '/puppy-training',
    },
};

const faqs = [
    {
        question: 'When should I start training my puppy?',
        answer: 'You should start training the day you bring them home. Puppies are constantly learning from their environment. Waiting until they are six months old usually means we are fixing bad habits instead of building good ones from the start.'
    },
    {
        question: 'Do you help with housebreaking and potty training?',
        answer: 'Yes. We give you a strict, proven schedule to follow that eliminates accidents in the house. Potty training is about consistency and managing their environment, not punishing them for mistakes.'
    },
    {
        question: 'How do I stop my puppy from biting my hands and ankles?',
        answer: 'Puppy nipping is natural, but it must be addressed early. We teach you how to properly redirect that drive, when to use an "off" command, and how to stop accidentally rewarding the biting behavior through petting or high-pitched talking.'
    },
    {
        question: 'What vaccinations does my puppy need to start training?',
        answer: 'Your puppy should have at least their first two rounds of standard vaccinations (DHPP/DA2PP) before doing any training outside of your home. We are very careful about where we walk young puppies to avoid parvo risks until they are fully vaccinated.'
    },
    {
        question: 'How do you train puppies without overwhelming them?',
        answer: 'Puppy sessions are kept short, highly engaging, and fun. We focus heavily on building their confidence in new environments and establishing a bond before we introduce formal, sustained obedience commands.'
    }
];

export default function PuppyTrainingPage() {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Puppy Training',
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
                imageSrc="/photos/IMG_0416.JPG"
                imageAlt="Puppy training session with Eduardo Beltran in Murrieta"
                eyebrow="Puppy Training"
                title="Puppy Training in Murrieta, CA"
                description="Raise a confident, calm adult dog. Build flawless housebreaking, crate training, and bite inhibition foundations from day one."
                points={['Housebreaking and crate structure', 'Biting and impulse control', 'Clear routines before bad habits settle in']}
                formTitle="Start Puppy Training"
                formSubtitle="Tell Eduardo your puppy's age, breed, and the habits you want to stop early."
                defaultService="Puppy Training"
                sourceService="Puppy Training"
            />

            {/* INTRO */}
            <section className="section">
                <div className="container" style={{ maxWidth: 860 }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '24px' }}>
                        Bringing a new puppy home is exciting, but the reality of sharp teeth, constant accidents on the rug, and sleepless nights usually hits fast. Shepards K9 provides structured puppy training designed to stop these frustrating habits before they become deeply ingrained behavioral issues.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '24px' }}>
                        Eduardo Beltran focuses on establishing clear communication right away. Instead of just hand-feeding treats in a circle, he teaches your puppy how to navigate a human household. They learn what to chew, where the bathroom is, and that you are the source of leadership and affection.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Because puppies have short attention spans, this program relies heavily on coaching you, the owner. You will learn how to set up the crate, manage their free roaming time, and introduce them to real-world environments safely. Setting the rules early prevents you from needing intense rehabilitation when the dog reaches adolescence.
                    </p>
                </div>
            </section>

            <SectionImageSplit
                light
                eyebrow="Foundation Work"
                title="The first few months change everything later"
                body={[
                    'Puppy training is where owners either build structure early or spend the next year fixing habits that could have been prevented. Eduardo uses this stage to clean up biting, crate stress, housebreaking, thresholds, and leash patterns before they harden.',
                    'That makes the rest of the dog’s life easier because the early rules are already clear before the dog gets stronger, faster, and more opinionated.',
                ]}
                imageSrc={getServiceVisuals('puppy-training')[1]}
                imageAlt="Puppy training foundation work"
            />

            {/* WHO THIS IS FOR */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>Who This Is For</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        This training structure is specifically designed for puppies under six months of age. It addresses the immediate struggles new dog owners face in Southern California, including:
                    </p>
                    <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr', gap: '16px', padding: 0 }}>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Constant Nipping:</strong> Puppies that treat your hands, ankles, and children's pants like chew toys and won't disengage when you say "no."</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Housebreaking Issues:</strong> Owners who feel like they are constantly cleaning up urine and feces because the puppy won't use the grass outside.</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Crate Anxiety:</strong> Puppies that scream, panic, or soil themselves the moment you close the crate door, destroying your ability to sleep or leave the house.</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Lack of Focus:</strong> If your puppy refuses to walk on a leash, constantly trips you, or ignores you entirely when an interesting leaf blows by on the sidewalk.</span>
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
                        During the first session, Eduardo assesses your home setup. We fix crate placement, feeding schedules, and block off parts of the house where the puppy should not be allowed. We then introduce the concept of leash pressure, teaching the puppy that yielding to the collar gets them what they want.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        As the puppy matures during the training program, we introduce foundational obedience commands like sit, down, and place. We also begin proper socialization. Socialization does not mean letting your puppy get rushed by unruly dogs at a local park; it means teaching them to exist calmly near strange noises, people, and neutral dogs.
                    </p>
                    <p>
                        Owners are expected to enforce the boundaries established in every session. Eduardo will show you exactly what to do, but you must commit to the schedule. If you leave the puppy unsupervised or let them sleep in the bed before they are reliably crate trained, the process will stall.
                    </p>
                </div>
            </section>

            {/* WHAT YOU'LL SEE AFTER */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>What You'll See After</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        A trained puppy is a puppy you can actually enjoy living with. You will see a dog that sleeps quietly in the crate through the night, giving you your sanity back. Housebreaking accidents will stop because the puppy understands the schedule and signals when they need to go outside.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        The bleeding scratches on your hands from constant nipping will heal. Instead of engaging in a tug-of-war with your clothing, the puppy will learn to drop items when told and redirect their energy to appropriate chew toys.
                    </p>
                    <p>
                        When out on short walks around the neighborhood, the puppy will stick to your side rather than planting their feet or choking themselves at the end of the leash. This early foundation eventually paves the way for adult <Link href="/day-training" style={{ color: '#C4782A', textDecoration: 'underline' }}>day training</Link> or advanced obedience down the road.
                    </p>
                </div>
            </section>

            {/* WHY SHEPARDS K9 */}
            <section className="section">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>Why Shepards K9</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        Many puppy classes offered at big-box pet stores are little more than supervised play dates. The dogs run around chaotically, learn to be overly frantic around other animals, and leave without any practical house manners.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        Eduardo Beltran takes a private, relationship-first approach. By focusing heavily on your home environment and real-world distractions right from the start, we build a dog that respects you as the leader. We don't just bribe the puppy with treats; we teach them emotional regulation.
                    </p>
                    <p>
                        Furthermore, we serve the specific needs of families in Southern California. Whether you live in a bustling Murrieta neighborhood or want to eventually take your dog to outdoor cafes in <Link href="/puppy-training/temecula" style={{ color: '#C4782A', textDecoration: 'underline' }}>Temecula</Link>, this program lays the groundwork for a dog you can confidently take anywhere. If you need coverage while away from home, we also offer secure <Link href="/dog-boarding" style={{ color: '#C4782A', textDecoration: 'underline' }}>dog boarding</Link> strictly for our training clients.
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
                        If you want to raise your puppy right the first time and avoid expensive behavioral rehabilitation later, contact Eduardo to schedule an initial evaluation. He will meet your puppy, assess your living situation, and outline a clear, actionable plan to get your household running smoothly again.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg" style={{ backgroundColor: '#C4782A', borderColor: '#C4782A' }}>
                        Schedule an Evaluation
                    </Link>
                    <InternalLinkingHub type="service" currentServiceId="puppy-training" />
                </div>
            </section>
        </div>
    );
}

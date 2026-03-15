import Link from 'next/link';
import Script from 'next/script';
import FAQAccordion from '@/components/FAQAccordion';
import InternalLinkingHub from '@/components/InternalLinkingHub';
import { SITE_CONFIG } from '@/config/siteConfig';
import ServiceHeroSplit from '@/components/ServiceHeroSplit';
import { getServiceVisuals } from '@/config/service-visuals';
import SectionImageSplit from '@/components/SectionImageSplit';

export const metadata = {
    title: 'Board & Train Dog Training in Murrieta | Shepards K9',
    description: 'Real-world board and train dog training in Murrieta. Your dog stays with Eduardo Beltran to build reliable obedience in public settings. Book an evaluation.',
    alternates: {
        canonical: '/board-and-train',
    },
};

const faqs = [
    {
        question: 'Where does my dog stay during the board and train?',
        answer: 'Your dog stays in a real home environment with Eduardo in Murrieta, not in a commercial kennel. This allows us to address house manners, doorbell reactivity, and relax-on-command behavior in the exact setting where you need it to work.'
    },
    {
        question: 'How long is the board and train program?',
        answer: 'The duration depends entirely on your dog\'s current behavior and goals. Most programs run between three to four weeks. During our initial evaluation, Eduardo assesses your dog and provides a clear timeline for the results you want.'
    },
    {
        question: 'Will my dog forget me or think they live with you?',
        answer: 'No. Dogs have excellent memories, especially for their families. However, the time away resets their expectations for structure and boundaries. When they return, the go-home session teaches you how to maintain those new expectations so they respect you just as much as they respect Eduardo.'
    },
    {
        question: 'How do you handle fearful or aggressive dogs in this program?',
        answer: 'Dogs with deep behavioral issues actually benefit the most from board and train. Removing them from their normal triggers allows Eduardo to establish clear communication and build their confidence safely before reintroducing stressors.'
    },
    {
        question: 'What happens when my dog comes home?',
        answer: 'Every program concludes with an intensive go-home transfer session. Eduardo walks you through everything your dog learned and coaches you on how to handle the leash, issue commands, and enforce the rules. You also get follow-up support to ensure the behavior transfers completely to your home.'
    }
];

export default function BoardAndTrainPage() {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Board and Train Dog Training',
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
                imageSrc="/photos/IMG_8911.JPG"
                imageAlt="Board and train session with Eduardo Beltran in Murrieta"
                eyebrow="Board & Train"
                title="Board and Train in Murrieta, CA"
                description="Your dog lives with Eduardo and trains daily in real public environments. The fastest way to build lasting obedience and fix severe behavioral issues."
                points={['Immersion with daily structure', 'Best fit for major behavior resets', 'Real-world public proofing']}
                formTitle="Start Board & Train"
                formSubtitle="Tell Eduardo what your dog is doing and he will tell you if this is the right level of structure."
                defaultService="Board & Train"
                sourceService="Board & Train"
            />

            {/* INTRO */}
            <section className="section">
                <div className="container" style={{ maxWidth: 860 }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '24px' }}>
                        When you drop your dog off for a board and train at Shepards K9, they aren't going to a loud, stressful commercial facility. They are coming into Eduardo Beltran's home. They learn how to behave in a house, how to walk calmly through local parks, and how to ignore distractions in public spaces around Southern California.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '24px' }}>
                        This intense, immersion-style approach works because it completely resets the dog's daily habits. By removing established patterns of pulling, jumping, or reacting, Eduardo can clearly communicate what is expected. The dog learns to make better choices because structure is consistently enforced from morning until night.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Unlike basic classroom obedience, this program focuses entirely on the real world. Your dog will practice commands near busy streets, around other dogs, and out in the community. By the time they return to you, they understand that the rules apply everywhere—not just when you have a treat in your hand.
                    </p>
                </div>
            </section>

            <SectionImageSplit
                light
                eyebrow="Immersion"
                title="What board and train looks like day to day"
                body={[
                    'Your dog is not dropped into a random kennel routine. They live with Eduardo in a structured environment where house rules, leash work, crate habits, and public accountability all happen every day.',
                    'That matters because severe behavior problems do not get fixed through occasional reps. They get fixed through repetition, clarity, and enough structure that the dog stops winning with the old behavior.',
                ]}
                imageSrc={getServiceVisuals('board-and-train')[1]}
                imageAlt="Board and train daily structure with Eduardo"
            />

            {/* WHO THIS IS FOR */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>Who This Is For</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        This program is built for owners who are overwhelmed by their dog's behavior and need a total reset. It directly addresses:
                    </p>
                    <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr', gap: '16px', padding: 0 }}>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Severe Leash Reactivity:</strong> Dogs that lunge, bark, or drag you down the street the second they see another dog or a squirrel.</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Anxiety & Fear:</strong> Dogs that lack confidence and react poorly to loud noises, strangers, or new environments.</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>In-Home Chaos:</strong> Dogs jumping on guests, counter-surfing, charging the front door, or refusing to settle down when you want to relax.</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Busy Schedules:</strong> Owners who know their dog needs intense, repetitive guidance but simply don't have the hours to do it themselves from scratch. (If you want to handle the daily work yourself, our <Link href="/dog-training" style={{ color: '#C4782A', textDecoration: 'underline' }}>private dog training</Link> may be a better fit.)</span>
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
                        On day one, Eduardo begins by establishing clear communication. There is no coddling, but there is no unfair pressure either. Your dog learns what "yes" and "no" mean in practical terms. We start with foundational leash work to stop pulling and build engagement.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        As the weeks progress, the training moves outside the yard. Eduardo takes your dog to local spots—like hardware stores or busy parks in Murrieta—to proof their new obedience against heavy distractions. They learn to hold a "place" command, walk in a structured heel, and ignore other dogs.
                    </p>
                    <p>
                        The final stage is the transfer. A board and train only works if you enforce what Eduardo built. During the massive go-home session, Eduardo teaches you the mechanics of the leash, how to read your dog's body language, and exactly how to maintain their new mindset. You must be willing to change your handling habits to keep the results intact.
                    </p>
                </div>
            </section>

            {/* WHAT YOU'LL SEE AFTER */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>What You'll See After</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        When your dog comes home, you will notice an immediate difference in their state of mind. Instead of scanning the room for things to react to, they will look to you for direction.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        Walking your dog will no longer feel like a physical battle; the leash will be loose, and your arm will stop hurting. When the Amazon delivery driver drops off a package, your dog will hold their place command on their bed instead of losing their mind at the window. When guests come over, you won't have to lock the dog in another room to prevent them from jumping.
                    </p>
                    <p>
                        Overall, the frantic energy is replaced by a calm, attentive attitude. If you're looking for extreme off-leash freedom on trails, you might pair this foundation with our <Link href="/off-leash-training" style={{ color: '#C4782A', textDecoration: 'underline' }}>off leash training</Link> program.
                    </p>
                </div>
            </section>

            {/* WHY SHEPARDS K9 */}
            <section className="section">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>Why Shepards K9</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        Many facilities run board and trains like an assembly line. They keep 20 dogs in a warehouse, use kennel techs to do the actual walking, and teach the dog to perform tricks for a piece of hot dog.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        Eduardo Beltran takes a completely different approach. By bringing your dog into his home, he enforces rules 24 hours a day. He builds a genuine relationship with your dog first, ensuring that compliance is based on respect, not bribery or fear.
                    </p>
                    <p>
                        Furthermore, because the training happens in real-world environments—from local neighborhoods to <Link href="/temecula" style={{ color: '#C4782A', textDecoration: 'underline' }}>Temecula</Link> shopping centers—the dog learns to handle the exact types of distractions they will face when they return to your house.
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
                        If you are tired of struggling with your dog's behavior and want a system that actually produces a calm, reliable companion, reach out to schedule an evaluation. Eduardo will assess your dog, give you honest feedback on what it will take to fix the issues, and explain exactly how the board and train program will work for your specific situation.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg" style={{ backgroundColor: '#C4782A', borderColor: '#C4782A' }}>
                        Schedule an Evaluation
                    </Link>
                    <InternalLinkingHub type="service" currentServiceId="board-and-train" />
                </div>
            </section>
        </div>
    );
}

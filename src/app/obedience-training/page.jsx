import Link from 'next/link';
import Script from 'next/script';
import FAQAccordion from '@/components/FAQAccordion';
import InternalLinkingHub from '@/components/InternalLinkingHub';
import { SITE_CONFIG } from '@/config/siteConfig';
import ServiceHeroSplit from '@/components/ServiceHeroSplit';
import { getServiceVisuals } from '@/config/service-visuals';
import SectionImageSplit from '@/components/SectionImageSplit';

export const metadata = {
    title: 'Dog Obedience Training Murrieta, CA | Shepards K9',
    description: 'Real dog obedience training in Murrieta. Eduardo Beltran teaches your dog to sit, down, place, and recall under heavy distractions. Stop the pulling today.',
    alternates: {
        canonical: '/obedience-training',
    },
};

const faqs = [
    {
        question: 'Does my dog need to learn basic obedience before addressing behavioral issues?',
        answer: 'Yes. Basic obedience is the foundation of clear communication. Teaching commands like "heel" or "place" gives the dog a job to do, which fundamentally changes their state of mind from anxious and reactive to calm and focused.'
    },
    {
        question: 'My dog listens perfectly inside but ignores me outside. Can you fix this?',
        answer: 'This is the most common problem we see. It happens because the dog was only trained in low-distraction environments with treats. We fix this by deliberately training in real-world scenarios and holding the dog accountable for commands when they are distracted.'
    },
    {
        question: 'How many sessions will it take to stop my dog from pulling on the leash?',
        answer: 'You will see a massive improvement in leash walking during the very first session. However, cementing that behavior so it becomes the dog\'s permanent default state takes consistent, daily repetition from you over a few weeks.'
    },
    {
        question: 'Do you use treats to train the dogs?',
        answer: 'We use food during the early teaching phases to clearly mark what we want the dog to do. However, we quickly fade out the food lures so the dog learns to comply out of respect for you, rather than just negotiating for a piece of cheese.'
    },
    {
        question: 'Can all breeds learn obedience?',
        answer: 'Absolutely. While a Husky and a Golden Retriever have different genetic drives and motivations, every breed is capable of learning manners and respecting boundaries. We adjust the training style to match the dog pulling on the other end of the leash.'
    }
];

export default function ObedienceTrainingPage() {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dog Obedience Training',
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
                imageSrc="/photos/IMG_8720.jpg"
                imageAlt="Obedience training session with Eduardo Beltran in Murrieta"
                eyebrow="Obedience Training"
                title="Dog Obedience Training in Murrieta, CA"
                description="Build a dog that listens because they respect you, not just because you have food in your hand. Commands that work under real distractions."
                points={['Leash work and command clarity', 'Place, heel, recall, and thresholds', 'Built to hold outside the living room']}
                formTitle="Start Obedience Training"
                formSubtitle="Tell Eduardo where the commands break down and what your dog ignores most often."
                defaultService="Obedience Training"
                sourceService="Obedience Training"
            />

            {/* INTRO */}
            <section className="section">
                <div className="container" style={{ maxWidth: 860 }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '24px' }}>
                        Obedience training isn't about teaching your dog cute tricks for social media. It is about establishing a clear language between you and your dog so you can safely navigate the world together. At Shepards K9, we focus on practical, functional obedience—sit, down, stay, come, heel, and place.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '24px' }}>
                        Eduardo Beltran brings the training directly to the places where you struggle. If your dog refuses to listen on a walk through your Murrieta neighborhood, we train in that neighborhood. If your dog forgets their name the second another dog walks by at the park, we address it right there in the park.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        The goal is reliable behavior. When you ask your dog to go to their bed because guests are coming through the front door, they need to stay there until you release them. This level of compliance happens when you build a relationship based on fair rules, consistent boundaries, and actual respect. If you want us to do the heavy lifting of installing these commands first, consider our <Link href="/board-and-train" style={{ color: '#C4782A', textDecoration: 'underline' }}>board and train</Link> program.
                    </p>
                </div>
            </section>

            <SectionImageSplit
                light
                eyebrow="Command Clarity"
                title="Obedience should make life easier, not more repetitive"
                body={[
                    'Owners usually come to obedience training because they are tired of repeating themselves. The goal is not a prettier sit. The goal is commands that still hold when the dog is distracted, excited, or trying to test the boundary.',
                    'That is why Eduardo ties obedience to leash mechanics, thresholds, place work, and public reliability instead of keeping it in a low-pressure bubble.',
                ]}
                imageSrc={getServiceVisuals('obedience-training')[1]}
                imageAlt="Obedience training with Eduardo in Murrieta"
            />

            {/* WHO THIS IS FOR */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>Who This Is For</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        This training program is meant for dog owners who are tired of repeating themselves. It specifically addresses:
                    </p>
                    <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr', gap: '16px', padding: 0 }}>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Severe Leash Pulling:</strong> Dogs that drag you down the street, choke themselves on the collar, or suddenly lunge toward bushes and animals.</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Selective Hearing:</strong> Dogs that know what "come" means in the living room, but completely ignore you the moment they step off the porch.</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Guest Harassment:</strong> Dogs that tackle delivery drivers, jump aggressively on family friends, or sprint out the front door the moment it opens.</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>The "Only for Treats" Dog:</strong> If your dog stares at your hands to see if you have food before deciding whether or not to sit, the relationship needs a total reset.</span>
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
                        We start the process by assessing you and your dog. Eduardo observes how you handle the leash, how you deliver commands, and whether your dog views you as a leader or just a roommate. During the first session, we strip away all the complicated stuff and focus entirely on engagement and leash pressure.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        As you move through the program, Eduardo layers in formal commands. You will learn the mechanics of a proper heel. You will learn how to enforce a long-duration "place" command. We gradually introduce distractions—bouncing balls, other dogs walking past, loud noises—so your dog learns to prioritize your voice over their environment.
                    </p>
                    <p>
                        This requires homework. If you do not practice the drills Eduardo assigns between sessions, the dog will revert. You have to commit to changing how you interact with your dog daily, ensuring you enforce the rules even when it is inconvenient.
                    </p>
                </div>
            </section>

            {/* WHAT YOU'LL SEE AFTER */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>What You'll See After</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        The transformation is observable in your daily routine. Walking your dog will become a relaxing experience. Your arm will stop hurting because the dog walk at a calm heel next to your leg, pacing themselves to your walking speed.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        When you open the front door to grab a package, your dog will hold a sit or a down rather than trying to bolt past your legs. If they see a squirrel or another dog, they may notice it, but they won't pull you into the street to get to it.
                    </p>
                    <p>
                        Most importantly, you will have a dog you actually enjoy taking places. The stress of managing a chaotic animal will be replaced by the confidence of handling a trained companion. For owners starting with younger dogs, this translates directly into avoiding bad habits, which is why we stress early <Link href="/puppy-training" style={{ color: '#C4782A', textDecoration: 'underline' }}>puppy training</Link> fundamentals as well.
                    </p>
                </div>
            </section>

            {/* WHY SHEPARDS K9 */}
            <section className="section">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>Why Shepards K9</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        The dog training industry is full of people who rent out loud warehouses and teach dogs to sit on astroturf for a piece of chicken. That's fine if you never intend to leave your house. But Southern California dog owners want to take their dogs to the beach, to the farmers market, and on hiking trails.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        Eduardo Beltran trains in those real-world environments. He teaches your dog how to handle the exact sights and sounds they will face living in <Link href="/obedience-training/lake-elsinore" style={{ color: '#C4782A', textDecoration: 'underline' }}>Lake Elsinore</Link> or walking paths in <Link href="/obedience-training/wildomar" style={{ color: '#C4782A', textDecoration: 'underline' }}>Wildomar</Link>.
                    </p>
                    <p>
                        He also trains *you*. Unlike a franchise that quickly cycles you through a group class, Eduardo provides direct, one-on-one coaching so your handling skills match your dog's new training. That is the only way the results actually stick for the lifetime of your dog.
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
                        If you are ready to stop making excuses for your dog's behavior and start putting in the work to fix it, contact us today. Eduardo will evaluate your dog, tell you exactly what is causing the issues, and build a training plan that gives you back control of your walks and your home.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg" style={{ backgroundColor: '#C4782A', borderColor: '#C4782A' }}>
                        Schedule an Evaluation
                    </Link>
                    <InternalLinkingHub type="service" currentServiceId="obedience-training" />
                </div>
            </section>
        </div>
    );
}

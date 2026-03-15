import Link from 'next/link';
import Script from 'next/script';
import FAQAccordion from '@/components/FAQAccordion';
import InternalLinkingHub from '@/components/InternalLinkingHub';
import { SITE_CONFIG } from '@/config/siteConfig';
import ServiceHeroSplit from '@/components/ServiceHeroSplit';
import { getServiceVisuals } from '@/config/service-visuals';
import SectionImageSplit from '@/components/SectionImageSplit';

export const metadata = {
    title: 'Off Leash Dog Training Murrieta, CA | Shepards K9',
    description: 'Achieve true off-leash freedom with your dog. Eduardo Beltran provides reliable, e-collar conditioning for recall without a leash in Southern California. Call today.',
    alternates: {
        canonical: '/off-leash-training',
    },
};

const faqs = [
    {
        question: 'What is an e-collar, and does it hurt the dog?',
        answer: 'Modern e-collars, when used correctly, operate like a TENS unit used in physical therapy. It is not painful; it is a clear, muscle-stimulating tap that gets the dog\'s attention from a distance. We spend weeks conditioning the dog to understand this pressure at the absolute lowest perceptible level.'
    },
    {
        question: 'Will my dog have to wear the e-collar forever?',
        answer: 'The e-collar is an insurance policy. While many dogs become so reliable that owners rarely need to push the button, we always recommend having it on when off-leash in unsecured public areas to guarantee your dog\'s safety if a sudden, massive distraction appears.'
    },
    {
        question: 'Can my aggressive dog be trained off-leash?',
        answer: 'A dog with a history of severe, unprovoked aggression toward humans or dogs is rarely a safe candidate for total off-leash freedom in public parks. However, the exact same training system can be used to give you 100% control over the dog on a leash or in your own backyard.'
    },
    {
        question: 'Doesn\'t off-leash training just mean bribing the dog with treats?',
        answer: 'Treats only work when the dog decides the treat is better than the squirrel. True off-leash training relies on a foundation of respect and an invisible "leash" (the e-collar) that holds the dog accountable even when you don\'t have food.'
    },
    {
        question: 'How old does my dog need to be for this?',
        answer: 'We generally wait until a dog is around six months old to introduce electronic collar conditioning, ensuring they have the mental maturity to process the communication. We recommend starting with standard obedience or puppy training before that age.'
    }
];

export default function OffLeashTrainingPage() {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Off Leash Dog Training',
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
                imageSrc="/photos/IMG_0320.JPG"
                imageAlt="Off leash training session with Eduardo Beltran in Murrieta"
                eyebrow="Off Leash Training"
                title="Off Leash Dog Training in Murrieta, CA"
                description="Take your dog anywhere with confidence. 100% reliable recall and off-leash freedom using modern, fair e-collar communication."
                points={['Distance accountability', 'Reliable recall under distraction', 'Built for real freedom, not hopeful guessing']}
                formTitle="Start Off Leash Training"
                formSubtitle="Tell Eduardo where recall breaks down and how much outdoor control you have right now."
                defaultService="Off Leash Training"
                sourceService="Off Leash Training"
            />

            {/* INTRO */}
            <section className="section">
                <div className="container" style={{ maxWidth: 860 }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '24px' }}>
                        There is no substitute for knowing your dog will return to you immediately when called, regardless of the distraction. Shepards K9 provides focused off-leash dog training for owners who want to hike trails, visit the beach, or just play in an unfenced front yard without worrying that their dog will bolt into traffic.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '24px' }}>
                        Eduardo Beltran achieves these results through proper, methodical e-collar conditioning. This is not about shocking a dog into submission. It is about establishing a low-level, invisible leash that allows you to tap the dog on the shoulder from 300 yards away when it is time to come back.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        We train entirely in real-world environments. An off-leash dog is useless if they only listen in the backyard. Eduardo takes your dog out into Murrieta, Temecula, and surrounding regional parks to proof their obedience in front of hikers, bikes, and local wildlife.
                    </p>
                </div>
            </section>

            <SectionImageSplit
                light
                eyebrow="Distance Control"
                title="Off-leash freedom only works when accountability is clear"
                body={[
                    'Owners usually want the freedom first, but Eduardo builds accountability first. That means long-line reps, cleaner recall mechanics, and proofing the dog where distractions are actually real.',
                    'Off-leash training only holds when the dog understands the command from a distance and the owner knows how to enforce it correctly.',
                ]}
                imageSrc={getServiceVisuals('off-leash-training')[1]}
                imageAlt="Off leash recall training with Eduardo"
            />

            {/* WHO THIS IS FOR */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>Who This Is For</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        This training program is strictly for owners who want ultimate freedom and safety for their dog. It specifically addresses:
                    </p>
                    <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr', gap: '16px', padding: 0 }}>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>The "Runner":</strong> Dogs that sprint out the front door or slip out of their collar and refuse to let you catch them.</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Prey Drive:</strong> Dogs that pull you off your feet to chase rabbits, squirrels, or neighborhood cats, ignoring your shouting completely.</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Active Owners:</strong> Hikers, runners, and beach-goers who want to bring their dog along without being tethered to a six-foot nylon strap the entire day.</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Stubborn Recall:</strong> The dog who looks directly at you when called, weighs their options, and decides the distraction is more interesting than you are.</span>
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
                        We do not immediately take the leash off and hope the dog listens. Eduardo starts the process on a long-line leash. The dog is taught that the low-level stimulation from the collar means "pay attention to the handler." When they turn to acknowledge Eduardo, the stimulation shuts off. They quickly learn they control the pressure by complying.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        Once the dog understands the communication language on the long line, we slowly begin dropping the leash in controlled environments. The dog learns that "come" means "come right now," not when they finish sniffing a tree. If they choose to ignore the command, the collar provides fair, immediate accountability from a distance.
                    </p>
                    <p>
                        It is mandatory that owners learn the exact mechanics of using the e-collar responsibly. Eduardo coaches you on timing when to push the button, how to adjust the level based on distraction, and how to use your body language to support the collar's communication.
                    </p>
                </div>
            </section>

            {/* WHAT YOU'LL SEE AFTER */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>What You'll See After</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        Life with an off-leash trained dog is drastically different. You can walk out your front door to get the mail with your dog following you, without needing to clip a leash onto them. You can take them for off-leash hikes safely, knowing that if another dog or a snake appears on the trail, you can stop your dog in their tracks with a single command.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        Your dog will actually get more physical exercise because you can safely throw a tennis ball in massive open fields without fear of losing them. They will stop dragging you into bushes, and instead pace themselves to your momentum. This level of behavioral reliability pairs beautifully with situations where owners might normally just utilize <Link href="/day-training" style={{ color: '#C4782A', textDecoration: 'underline' }}>day training</Link> or standard leash obedience.
                    </p>
                    <p>
                        This peace of mind fundamentally changes the relationship you have with your animal. The tension is gone. The panic of a dropped leash is eliminated.
                    </p>
                </div>
            </section>

            {/* WHY SHEPARDS K9 */}
            <section className="section">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>Why Shepards K9</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        There are old-school trainers who use e-collars as cheap punishment buttons. They crank the dial high, wait for the dog to mess up, and shock them. That method ruins the dog's confidence and destroys their trust in the handler. Eduardo Beltran fiercely rejects that approach.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        Eduardo uses the e-collar as a nuanced communication tool. It acts like a tap on the shoulder. By conditioning the dog to the sensation slowly, fairly, and with heavy positive reinforcement for correct choices, the dog retains their happy, goofy personality.
                    </p>
                    <p>
                        Additionally, Shepards K9 tests this training in the hardest environments in Southern California. Whether it is an open park in <Link href="/off-leash-training/menifee" style={{ color: '#C4782A', textDecoration: 'underline' }}>Menifee</Link> or the busy trails of <Link href="/off-leash-training/fallbrook" style={{ color: '#C4782A', textDecoration: 'underline' }}>Fallbrook</Link>, we ensure the training holds up where life actually happens, or we can establish this foundation during a <Link href="/board-and-train" style={{ color: '#C4782A', textDecoration: 'underline' }}>board and train</Link> stay.
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
                        If you want the ultimate freedom and peace of mind that comes with a hyper-reliable recall, contact Eduardo today. He will evaluate your dog's temperament to ensure they are the right candidate for this program, explain the tools we use, and lay out the exact steps we take to hit your goals.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg" style={{ backgroundColor: '#C4782A', borderColor: '#C4782A' }}>
                        Schedule an Evaluation
                    </Link>
                    <InternalLinkingHub type="service" currentServiceId="off-leash-training" />
                </div>
            </section>
        </div>
    );
}

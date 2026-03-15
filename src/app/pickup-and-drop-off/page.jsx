import Link from 'next/link';
import Script from 'next/script';
import FAQAccordion from '@/components/FAQAccordion';
import InternalLinkingHub from '@/components/InternalLinkingHub';
import { SITE_CONFIG } from '@/config/siteConfig';
import ServiceHeroSplit from '@/components/ServiceHeroSplit';
import { getServiceVisuals } from '@/config/service-visuals';
import SectionImageSplit from '@/components/SectionImageSplit';

export const metadata = {
    title: 'Dog Training Pickup & Drop Off Murrieta | Shepards K9',
    description: 'Convenient dog training pickup and drop-off in Murrieta. Eduardo Beltran brings the training directly to your door. Book an evaluation today.',
    alternates: {
        canonical: '/pickup-and-drop-off',
    },
};

const faqs = [
    {
        question: 'What areas do you provide pickup and drop-off for?',
        answer: 'We primarily service Murrieta, Temecula, Menifee, Wildomar, and the immediately surrounding communities. For clients outside our core local zone, transport can sometimes be arranged for a fee depending on the specific program booked.'
    },
    {
        question: 'Do I need to be home when you pick up the dog?',
        answer: 'For the first few sessions, yes, we require you to be present so we can establish a routine. Once a relationship is built with the dog and trust is established, many of our reliable day training clients provide a garage code or key lockbox so we can safely load the dog while they are at work.'
    },
    {
        question: 'How is my dog secured during transport?',
        answer: 'Safety is the absolute priority. Your dog is transported in a climate-controlled vehicle using heavy-duty, crash-tested crates tied down securely. They are never allowed to free-roam in the cabin of a vehicle while we are driving on Southern California highways.'
    },
    {
        question: 'Is the transport time counted as training time?',
        answer: 'Riding calmly in a vehicle is actually a critical training skill, but we do not deduct drive time from your dog\'s scheduled working sessions. The physical training and conditioning start once we arrive at our destination.'
    },
    {
        question: 'Does my dog have to be crate trained to use this service?',
        answer: 'Preferably, yes. If your dog panics inside a crate or vehicle, we will actually make that specific fear the first priority of their training program before doing heavy transport.'
    }
];

export default function PickupAndDropOffPage() {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dog Training Pickup & Drop Off',
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
                imageSrc="/photos/IMG_8737-2.jpg"
                imageAlt="Dog pickup and drop off service with Shepards K9 in Murrieta"
                eyebrow="Pickup & Drop Off"
                title="Dog Training Pickup & Drop Off in Murrieta, CA"
                description="Professional training built around your schedule. We come to your door, safely load your dog, and do the heavy lifting for you."
                points={['Built for busy owners', 'Safe crate transport', 'Best paired with day training and boarding']}
                primaryLabel="Contact Us for Availability"
                formTitle="Ask About Pickup & Drop Off"
                formSubtitle="Tell Eduardo your city, your schedule, and which training program you are considering."
                defaultService="Pickup & Drop Off"
                sourceService="Pickup & Drop Off"
            />

            {/* INTRO */}
            <section className="section">
                <div className="container" style={{ maxWidth: 860 }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '24px' }}>
                        Getting a dog trained should relieve stress in your life, not add to it. For many families in Murrieta and Southern California, the biggest barrier to hiring a trainer isn't the cost—it's the massive time commitment of driving a dog across town in rush hour traffic during the workweek.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '24px' }}>
                        Shepards K9 eliminates that friction with our structured pickup and drop-off service. Eduardo Beltran brings the training directly to your front porch. Whether you are sending your dog off for an intensive <Link href="/board-and-train" style={{ color: '#C4782A', textDecoration: 'underline' }}>board and train</Link> or utilizing our daily <Link href="/day-training" style={{ color: '#C4782A', textDecoration: 'underline' }}>day training</Link> program, we manage the logistics safely and professionally.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Furthermore, the transport itself is an extension of the training process. Dogs learn that holding commands at the front door, loading calmly into a vehicle crate, and resisting the urge to bark at cars out the window are mandatory rules, not optional suggestions. We train in the real-world environments before we even reach the park.
                    </p>
                </div>
            </section>

            <SectionImageSplit
                light
                eyebrow="Convenience"
                title="Transport should support the training, not create more chaos"
                body={[
                    'Pickup and drop off only matters if it removes friction without lowering standards. Eduardo uses transport as part of the structure, from threshold work at the door to calmer loading and unloading.',
                    'That makes it useful for busy owners, but it also keeps the dog from practicing frantic routines around the car and front door.',
                ]}
                imageSrc={getServiceVisuals('pickup-and-drop-off')[1]}
                imageAlt="Dog transport for training in Murrieta"
            />

            {/* WHO THIS IS FOR */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>Who This Is For</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        This service is designed specifically for dog owners who need absolute convenience without sacrificing the quality of their dog's education. It addresses:
                    </p>
                    <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr', gap: '16px', padding: 0 }}>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Busy Professionals:</strong> Owners who commute out of Murrieta and simply cannot fit a 9:00 AM facility drop-off or a 3:00 PM pickup into their workday schedule.</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Dogs With Car Anxiety:</strong> Dogs that pace, pant, scream, or throw up in the backseat of a car. We use secure crates and structured loading to break the cycle of panic.</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Multi-Dog Households:</strong> Families trying to manage two large dogs that physically do not fit in the back of a small sedan for transport.</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Front Door Bolters:</strong> We immediately enforce threshold rules. We do not let your dog charge through the front door to get into our vehicle. We practice calm exits from day one.</span>
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
                        When you book a program that includes transport, we establish a tight morning window for arrival. Eduardo pulls up to your home, and the training starts the second the door opens. Your dog is required to hold a sit or a place command while we clip the leash on.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        Once leashed, we walk calmly to the training vehicle. The dog is commanded to jump carefully into a secured, crash-tested transport crate. After the day's training is complete—whether we worked in a <Link href="/temecula" style={{ color: '#C4782A', textDecoration: 'underline' }}>Temecula</Link> park or an outdoor mall in <Link href="/menifee" style={{ color: '#C4782A', textDecoration: 'underline' }}>Menifee</Link>—the process is reversed.
                    </p>
                    <p>
                        We drop the dog back at your house, usually physically tired and mentally fulfilled. Owners are required to do a quick handoff where Eduardo summarizes the day's progress and notes any specific behaviors you need to enforce that evening.
                    </p>
                </div>
            </section>

            {/* WHAT YOU'LL SEE AFTER */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>What You'll See After</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        You will stop dreading the logistics of dog ownership. You will no longer have to lay towels down in your back seat, wrestle a muddy eighty-pound dog into your vehicle, or apologize to strangers when your dog barks wildly out the window at them.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        Instead, your dog learns that getting into a vehicle requires manners. Because we enforce structure heavily during this transition phase, you will see a massive improvement in how your dog acts around cars in general. They will wait for a release command before jumping in, and wait again before jumping out.
                    </p>
                    <p>
                        Ultimately, you gain back hours of your week while still providing your dog with the elite-level education and physical exercise they desperately need to be calm inside your home.
                    </p>
                </div>
            </section>

            {/* WHY SHEPARDS K9 */}
            <section className="section">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>Why Shepards K9</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        Many doggy daycare "taxis" are just an employee opening the back of a minivan, letting a pack of dogs pile in, and driving wildly while the dogs surf the seats and bark at traffic. That creates dangerous, over-aroused behavior that ruins obedience.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        Eduardo Beltran treats transport as a fundamental part of the dog's psychological state. By using secure, individual crates, the dog is forced to settle down and relax during the drive.
                    </p>
                    <p>
                        This ensures that when we arrive at a real-world training environment, we don't spend thirty minutes calming the dog down from the car ride. They step out of the vehicle ready to work, respect the handler, and actually learn.
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
                        If you are ready for a better-behaved dog but need the logistics handled for you, reach out to Eduardo. During your initial consultation, mention that you are interested in pickup and drop-off, and we will verify if your location falls within our standard SoCal transport routes.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg" style={{ backgroundColor: '#C4782A', borderColor: '#C4782A' }}>
                        Inquire About Availability
                    </Link>
                    <InternalLinkingHub type="service" currentServiceId="pickup-and-drop-off" />
                </div>
            </section>
        </div>
    );
}

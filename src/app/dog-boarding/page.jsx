import Link from 'next/link';
import Script from 'next/script';
import FAQAccordion from '@/components/FAQAccordion';
import InternalLinkingHub from '@/components/InternalLinkingHub';
import { SITE_CONFIG } from '@/config/siteConfig';
import ServiceHeroSplit from '@/components/ServiceHeroSplit';
import { getServiceVisuals } from '@/config/service-visuals';
import SectionImageSplit from '@/components/SectionImageSplit';

export const metadata = {
    title: 'Dog Boarding Murrieta, CA | Shepards K9',
    description: 'Premium in-home dog boarding in Murrieta. Your dog stays in a structured, loving environment with Eduardo Beltran, not a chaotic commercial kennel.',
    alternates: {
        canonical: '/dog-boarding',
    },
};

const faqs = [
    {
        question: 'Is your boarding facility a commercial kennel?',
        answer: 'No. We provide strictly in-home boarding. Your dog stays in a residential environment with Eduardo. There are no concrete runs, no deafening rows of cages, and no constantly rotating minimum-wage kennel staff.'
    },
    {
        question: 'Will my dog get training while they board?',
        answer: 'The primary focus of boarding is care and maintenance, not installing new behaviors from scratch. However, your dog will be required to maintain all their house manners and obedience rules. If you want new skills installed while you travel, you should book a board and train instead.'
    },
    {
        question: 'How much exercise will my dog get?',
        answer: 'Dogs receive structured walks, treadmill conditioning if appropriate, and supervised yard time. The amount of physical output is tailored to your dog\'s age, breed, and energy level.'
    },
    {
        question: 'Do you take aggressive dogs for boarding?',
        answer: 'We only board dogs that we have previously evaluated or trained. Because this is an in-home environment where safety is the absolute priority, we cannot take dogs with severe human or dog aggression for standard boarding without a prior training relationship.'
    },
    {
        question: 'What do I need to pack for my dog\'s stay?',
        answer: 'You only need to provide enough of their regular food for the duration of the stay, plus any required medications. We provide the bowls, beds, crates, and structured environment.'
    }
];

export default function DogBoardingPage() {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dog Boarding',
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
                imageSrc="/photos/dog-boarding-indoor.jpg"
                imageAlt="Structured in-home dog boarding with Eduardo Beltran in Murrieta"
                eyebrow="Dog Boarding"
                title="Dog Boarding in Murrieta, CA"
                description="Leave town without the guilt. Structured, in-home boarding where your dog maintains their training and drops the kennel stress."
                points={['In-home care, not kennel chaos', 'Structured routines while you travel', 'Best fit for dogs that need calm handling']}
                primaryLabel="Check Boarding Availability"
                formTitle="Ask About Boarding"
                formSubtitle="Tell Eduardo your travel dates, your dog's routine, and whether we have trained together before."
                defaultService="Dog Boarding"
                sourceService="Dog Boarding"
            />

            {/* INTRO */}
            <section className="section">
                <div className="container" style={{ maxWidth: 860 }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '24px' }}>
                        Most dog owners dread dropping their dog off at a boarding facility. The standard commercial kennel is incredibly stressful—dogs spend 23 hours a day in a concrete run listening to fifty other dogs bark frantically. They come home exhausted, anxious, and usually smelling terrible.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '24px' }}>
                        Shepards K9 completely changes that experience. Eduardo Beltran offers exclusive, low-volume, in-home boarding right here in Murrieta. Your dog stays in a residential environment where all the rules, boundaries, and structure they are used to at home are actively maintained.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        This is highly controlled boarding. Your dog will not be thrown into a massive, unsupervised play field to fight over toys. They receive structured daily walks in real-world environments, treadmill conditioning, and supervised socialization with stable, neutral dogs. We ensure that your dog actually enjoys their stay.
                    </p>
                </div>
            </section>

            <SectionImageSplit
                light
                eyebrow="Calm Boarding"
                title="Boarding should not undo your dog’s stability"
                body={[
                    'The reason owners choose in-home boarding is simple: they do not want kennel chaos creating stress and sloppy behavior while they are away. Eduardo keeps the handling calm, structured, and predictable.',
                    'That makes this a better fit for dogs that need more control, more consistency, and a quieter environment than a high-volume commercial setup can offer.',
                ]}
                imageSrc={getServiceVisuals('dog-boarding')[1]}
                imageAlt="Structured dog boarding with Eduardo"
            />

            {/* WHO THIS IS FOR */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>Who This Is For</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        Because space is extremely limited in a home environment, this service is targeted at owners who want premium, stress-free care. It is perfect for:
                    </p>
                    <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr', gap: '16px', padding: 0 }}>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Anxious Dogs:</strong> Dogs that completely shut down or become overly reactive when placed in loud, chaotic commercial facilities.</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Training Clients:</strong> Owners who have already put the hard work into training their dog and refuse to let a boarding facility undo those manners over a two-week vacation.</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Working Breeds:</strong> High-drive dogs that need structured physical output and mental boundaries, rather than just being left in a yard to pace fences.</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Frequent Travelers:</strong> Owners who travel often for work and need a reliable, trusted second home for their dog, utilizing our <Link href="/pickup-and-drop-off" style={{ color: '#C4782A', textDecoration: 'underline' }}>pickup & drop off</Link> services for ultimate convenience.</span>
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
                        If we have never worked with your dog before, the process begins with a brief meet and greet. Eduardo needs to ensure your dog is comfortable in the house and does not pose a severe aggression risk, as safety for all boarded dogs is the priority.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        Once your dog arrives for their stay, they immediately integrate into the daily schedule. Mornings consist of structured walks and feeding. The middle of the day involves supervised outdoor time, socialization, and mandatory quiet crate rest. Evenings wrap up with a final round of activity before sleeping safely indoors.
                    </p>
                    <p>
                        Because this is a small-scale operation, holidays and summer weekends book up months in advance. You must plan ahead. We do not overbook the house, ensuring every dog receives genuine one-on-one attention throughout the day.
                    </p>
                </div>
            </section>

            {/* WHAT YOU'LL SEE AFTER */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>What You'll See After</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        When you pick your dog up, the difference between Shepards K9 and a standard kennel is immediately obvious. Your dog will not have lost their voice from stress-barking for four days straight. They won't have diarrhea from severe anxiety.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        Instead, they will be happy, healthy, and relaxed. Furthermore, because we hold them accountable to house rules while they are here, you will not have to spend your first week home retraining them to stop jumping on the counters or pulling on the leash.
                    </p>
                    <p>
                        If you want your dog to actively learn entirely new obedience commands or fix severe reactivity while you are away, you should bypass standard boarding and book our intensive <Link href="/board-and-train" style={{ color: '#C4782A', textDecoration: 'underline' }}>board and train</Link> program instead.
                    </p>
                </div>
            </section>

            {/* WHY SHEPARDS K9 */}
            <section className="section">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>Why Shepards K9</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        The dog boarding industry has largely become an automated, high-volume business. Facilities rely on packing as many dogs into a building as possible to maximize profit, completely ignoring the psychological toll it takes on the animals.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        Eduardo Beltran treats boarding as an extension of his training philosophy. He keeps the volume incredibly low so he can personally manage every dog's state of mind. By taking the dogs on structured walks through Murrieta neighborhoods and local parks, he provides true mental fulfillment.
                    </p>
                    <p>
                        This peace of mind extends far beyond Murrieta. We frequently host dogs from <Link href="/dog-boarding/canyon-lake" style={{ color: '#C4782A', textDecoration: 'underline' }}>Canyon Lake</Link> and <Link href="/dog-boarding/winchester" style={{ color: '#C4782A', textDecoration: 'underline' }}>Winchester</Link> because those owners refuse to subject their dogs to massive kennel environments. Your dog is part of the family while they are here.
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
                        If you have a trip coming up and want the peace of mind knowing your dog is in a structured, safe, and entirely controlled home environment, contact us to check boarding availability. Space is highly restricted to ensure quality care, so please reach out well in advance of your travel dates.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg" style={{ backgroundColor: '#C4782A', borderColor: '#C4782A' }}>
                        Reserve Boarding Dates
                    </Link>
                    <InternalLinkingHub type="service" currentServiceId="dog-boarding" />
                </div>
            </section>
        </div>
    );
}

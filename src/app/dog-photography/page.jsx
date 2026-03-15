import Link from 'next/link';
import Script from 'next/script';
import FAQAccordion from '@/components/FAQAccordion';
import InternalLinkingHub from '@/components/InternalLinkingHub';
import { SITE_CONFIG } from '@/config/siteConfig';
import ServiceHeroSplit from '@/components/ServiceHeroSplit';
import { getServiceVisuals } from '@/config/service-visuals';
import SectionImageSplit from '@/components/SectionImageSplit';

export const metadata = {
    title: 'Professional Dog Photography Murrieta, CA | Shepards K9',
    description: 'Professional dog photography in Murrieta. Eduardo Beltran captures the true personality of your dog in stunning outdoor SoCal environments. Book a session.',
    alternates: {
        canonical: '/dog-photography',
    },
};

const faqs = [
    {
        question: 'Does my dog need to be perfectly trained for a photo shoot?',
        answer: 'No. While basic obedience helps, Eduardo uses his experience as a professional dog trainer to naturally guide your dog into positions. We utilize long lines, fast shutter speeds, and specific handling techniques to capture incredible shots even if the dog won\'t hold a "sit" for three seconds.'
    },
    {
        question: 'Do you shoot indoor studio portraits or only outdoors?',
        answer: 'We focus exclusively on outdoor, environmental portraiture. The goal is to capture your dog\'s raw power and genuine personality out in nature, rather than freezing them on a sterile seamless paper backdrop under studio strobes.'
    },
    {
        question: 'Can you get good photos of my all-black dog? They always look like a shadow on my phone.',
        answer: 'Yes. Black dogs require specific understanding of exposure, dynamic range, and natural lighting angles. Eduardo explicitly times his shoots to find lighting that properly separates your dark-coated dog from the background, highlighting the detail in their fur.'
    },
    {
        question: 'How long does a typical photography session take?',
        answer: 'Sessions usually last 60 to 90 minutes. We never rush the dog. The best photos happen once the dog realizes the camera isn\'t a threat, burns off their initial energy, and starts offering natural expressions.'
    },
    {
        question: 'Can I be in the photos with my dog?',
        answer: 'Our main focus is the animal, but yes, we absolutely capture the bond between you and your dog. We direct you into natural, candid interactions with your dog rather than stiff, overly-posed family portraits.'
    }
];

export default function DogPhotographyPage() {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Professional Dog Photography',
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
                imageSrc="/photos/IMG_0391.JPG"
                imageAlt="Dog photography session with Eduardo Beltran in Southern California"
                eyebrow="Dog Photography"
                title="Professional Dog Photography in Murrieta, CA"
                description="Raw, powerful images of your dog in Southern California landscapes. Captured by a dog trainer who actually knows how to handle the animal."
                points={['Outdoor portrait sessions', 'Handled by a trainer who knows dogs', 'Natural images without stiff posing']}
                primaryLabel="Book a Photography Session"
                formTitle="Book a Dog Photography Session"
                formSubtitle="Tell Eduardo about your dog, your location, and the type of images you want."
                defaultService="Dog Photography"
                sourceService="Dog Photography"
            />

            {/* INTRO */}
            <section className="section">
                <div className="container" style={{ maxWidth: 860 }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '24px' }}>
                        Getting a genuinely great photo of your dog is incredibly frustrating when you are relying on an iPhone. They constantly look away the second you press the shutter button, the lighting ruins the contrast on their coat, and action shots turn into blurry streaks of color.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '24px' }}>
                        Shepards K9 provides professional, high-end dog photography exactly tailored to the Murrieta landscape. Eduardo Beltran merges technical photography skill with an expert understanding of dog behavior. He knows how to motivate a dog, how to read their body language, and how to capture the exact split-second expression that defines their personality.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        We shoot in real-world environments across Southern California—finding epic morning fog, steep golden-hour trails, or dramatic urban backdrops. The result is art that belongs framed on your wall, not just a snapshot dying on your camera roll. If your dog lacks the manners to pose outdoors yet, we heavily recommend starting with our <Link href="/obedience-training" style={{ color: '#C4782A', textDecoration: 'underline' }}>obedience training</Link>.
                    </p>
                </div>
            </section>

            <SectionImageSplit
                light
                eyebrow="Session Flow"
                title="Good dog photography depends on handling, not luck"
                body={[
                    'Eduardo approaches photography like a trainer first. That means reading the dog, finding the right environment, and creating the right level of structure so the dog does not look frantic, shut down, or over-posed.',
                    'The result is cleaner body language, better expressions, and images that actually feel like the dog you live with every day.',
                ]}
                imageSrc={getServiceVisuals('dog-photography')[1]}
                imageAlt="Dog photography session with Eduardo"
            />

            {/* WHO THIS IS FOR */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>Who This Is For</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        A dedicated dog photography session is for owners who view their dog as family and want lasting, physical representations of their life together. It specifically solves:
                    </p>
                    <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr', gap: '16px', padding: 0 }}>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Working Breeds in Action:</strong> Owners of high-drive dogs who want razor-sharp images of their dog sprinting, jumping, or actively engaging in bite-work and protection sports.</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>Black or Dark Coated Dogs:</strong> Dogs that are notoriously difficult to photograph well. We use professional lighting and exposure techniques to ensure the details of a black coat do not crush into total darkness.</span>
                        </li>
                        <li style={{ display: 'flex', gap: 12 }}>
                            <span style={{ color: '#C4782A', fontWeight: 900 }}>✓</span>
                            <span><strong>The Uncooperative Dog:</strong> Dogs that physically will not sit still for a typical portrait photographer who does not know how to manage canine energy.</span>
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
                        When you book a session, we first discuss the energy level of your dog and the aesthetic you want. Eduardo scouts a location near you or uses proven spots in Murrieta to guarantee incredible lighting. We pick either early morning or late afternoon based entirely on the sun's angle.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        On the day of the shoot, Eduardo spends the first ten minutes simply reading the dog. There is zero pressure to perform immediately. If we need action shots, we throw balls. If we need stoic portraits, Eduardo uses minimal vocal commands to hold the dog's attention while shooting up close with wide apertures to blur out the background.
                    </p>
                    <p>
                        After the shoot, the images undergo professional color grading. You receive a final, curated gallery of high-resolution digital files roughly one week later. You can download these directly to print canvases, metal wall art, or photo books.
                    </p>
                </div>
            </section>

            {/* WHAT YOU'LL SEE AFTER */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>What You'll See After</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        The final deliverables are completely entirely different from what a standard portrait photographer will hand you. Because Eduardo understands the anatomy of a working dog, he knows the exact angles that highlight a dog's physical build and focus.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        You will receive images where the dog's eyes are tack-sharp, their ears are pitched beautifully forward, and their musculature is clearly defined. You won't see awkward panting or stressed body language because Eduardo knows how to avoid putting the dog in a defensive state of mind.
                    </p>
                    <p>
                        Many of our returning training clients book these sessions after completing <Link href="/off-leash-training" style={{ color: '#C4782A', textDecoration: 'underline' }}>off leash training</Link> because their dog is finally capable of posing safely in massive public spaces without any equipment attached to them.
                    </p>
                </div>
            </section>

            {/* WHY SHEPARDS K9 */}
            <section className="section">
                <div className="container" style={{ maxWidth: 860 }}>
                    <h2 style={{ marginBottom: 16 }}>Why Shepards K9</h2>
                    <div className="rule"></div>
                    <p style={{ marginBottom: 24 }}>
                        Standard wedding or family photographers struggle with dog photography because they try to treat the dog like a human subject. They ask the dog to "smile" or wave squeaky toys frantically, which immediately triggers the dog's prey drive and ruins any chance of a calm pose.
                    </p>
                    <p style={{ marginBottom: 24 }}>
                        Eduardo Beltran is a dog trainer first. He commands respect from the dog. He knows how to naturally guide an animal into a powerful, confident stance. By combining professional-grade camera bodies and fast prime lenses with unmatched handling skills, he creates images that few standard photographers can replicate.
                    </p>
                    <p>
                        We travel throughout the region to capture the best environments, offering sessions from the foothills of <Link href="/dog-photography/lake-elsinore" style={{ color: '#C4782A', textDecoration: 'underline' }}>Lake Elsinore</Link> down to the rugged trails in <Link href="/dog-photography/san-marcos" style={{ color: '#C4782A', textDecoration: 'underline' }}>San Marcos</Link>. We find the terrain that best matches your dog's spirit.
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
                        If you want stunning, professional-grade imagery capturing the intensity, loyalty, and true personality of your dog, contact Eduardo today to reserve a session. Because prime lighting windows are short, photography sessions are strictly limited to early mornings or sunset hours, so book ahead.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg" style={{ backgroundColor: '#C4782A', borderColor: '#C4782A' }}>
                        Book a Photo Session
                    </Link>
                    <InternalLinkingHub type="service" currentServiceId="dog-photography" />
                </div>
            </section>
        </div>
    );
}

import { notFound } from 'next/navigation';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_CONFIG } from '@/config/siteConfig';
import { ALL_LOCATIONS } from '@/config/locations';
import { COMBO_CONTENT } from '@/config/combo-content';
import { SERVICES } from '@/config/services';
import InternalLinkingHub from '@/components/InternalLinkingHub';
import { isIndexableComboPage } from '@/lib/indexability';
import ServiceHeroSplit from '@/components/ServiceHeroSplit';
import SectionImageSplit from '@/components/SectionImageSplit';
import { getServiceVisuals } from '@/config/service-visuals';

// Generate 144 static paths for combination pages (18 cities x 8 services)
export async function generateStaticParams() {
    const paths = [];
    const serviceKeys = Object.keys(COMBO_CONTENT); // This array inherently only contains the 8 service string keys. Good.
    const cityKeys = ALL_LOCATIONS; // array of all 18 city objects

    serviceKeys.forEach(service => {
        cityKeys.forEach(city => {
            paths.push({
                slug: service,
                city: city.id
            });
        });
    });

    return paths;
}

export async function generateMetadata({ params }) {
    const { slug, city } = await params;

    let contentObj = COMBO_CONTENT[slug]?.[city];
    const serviceInfo = SERVICES.find(s => s.id === slug);
    const cityObj = ALL_LOCATIONS.find(c => c.id === city);

    if (!serviceInfo || !cityObj) return {};

    const isFallback = !isIndexableComboPage(slug, city);

    if (isFallback) {
        const { generateTier2ComboFallback } = require('@/config/combo-tier2-generator');
        contentObj = generateTier2ComboFallback(serviceInfo.id, serviceInfo.name, cityObj);
    }

    const serviceName = serviceInfo.name;
    const cityName = cityObj.name;

    const baseMetadata = {
        title: contentObj.h1, // usually < 60 chars based on generation
        description: `Professional ${serviceName} in ${cityName}, CA. ${contentObj.intro[0].substring(0, 100)}...`,
        alternates: {
        canonical: `${SITE_CONFIG.url}/${slug}/${city}`
        }
    };

    if (isFallback) {
        baseMetadata.robots = {
            index: false,
            follow: true
        };
    }

    return baseMetadata;
}

export default async function ComboPage({ params }) {
    const { slug, city } = await params;

    let contentObj = COMBO_CONTENT[slug]?.[city];
    const serviceInfo = SERVICES.find(s => s.id === slug);
    const cityObj = ALL_LOCATIONS.find(c => c.id === city);

    if (!serviceInfo || !cityObj) {
        notFound();
    }

    if (!contentObj) {
        const { generateTier2ComboFallback } = require('@/config/combo-tier2-generator');
        contentObj = generateTier2ComboFallback(serviceInfo.id, serviceInfo.name, cityObj);
    }

    // Build FAQ Schema dynamically from the unique combo FAQ content
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": contentObj.faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <main>
                <ServiceHeroSplit
                    imageSrc={serviceInfo.image || '/photos/hero-eduardo-boxer.jpg'}
                    imageAlt={`${serviceInfo.name} with Eduardo Beltran serving ${cityObj.name}, California`}
                    eyebrow={`${serviceInfo.name} in ${cityObj.name}`}
                    title={contentObj.h1}
                    description={contentObj.intro[0]}
                    points={[
                        contentObj.howItWorks.title,
                        contentObj.rightForDog.title,
                        contentObj.expectations.title,
                        `${cityObj.county} service with direct access to Eduardo`,
                    ]}
                    formTitle={`Start ${serviceInfo.name} in ${cityObj.name}`}
                    formSubtitle={`Tell Eduardo what is happening with your dog in ${cityObj.name} and he will tell you the right next step.`}
                    defaultService={serviceInfo.name}
                    sourceService={serviceInfo.name}
                    sourceLocation={cityObj.name}
                />

                <section className="section">
                    <div className="container content-narrow">
                        <div className="section-label">Local Overview</div>
                        <h2 className="section-title">
                            {cityObj.name.length % 3 === 0
                                ? `What dog owners in ${cityObj.name} need from ${serviceInfo.name.toLowerCase()}`
                                : cityObj.name.length % 3 === 1
                                ? `Expert ${serviceInfo.name.toLowerCase()} for ${cityObj.name} residents`
                                : `Addressing ${serviceInfo.name.toLowerCase()} challenges in ${cityObj.name}`}
                        </h2>
                        <div className="rule"></div>
                        <p style={{ fontSize: 18, color: 'var(--text-dark)', lineHeight: 1.8, borderLeft: '4px solid var(--accent)', paddingLeft: 20 }}>
                            {contentObj.intro[1]}
                        </p>
                        <p style={{ fontSize: 18, color: 'var(--text-dark)', lineHeight: 1.8, marginTop: 24 }}>
                            In {cityObj.name}, the problem usually shows up in normal life before owners ever call a trainer.
                            It shows up on neighborhood walks, around front-door thresholds, at local parks, and in the
                            exact places where the dog has been getting away with the same pattern for weeks or months.
                            That is why this page is built around local relevance rather than generic training language.
                        </p>
                        <p style={{ fontSize: 18, color: 'var(--text-dark)', lineHeight: 1.8 }}>
                            Eduardo does not treat {serviceInfo.name.toLowerCase()} like a sterile checklist. He looks at
                            how the dog handles pressure, how the owner communicates, and what daily routines still leave
                            the dog too much room to make bad decisions. That is what turns this from template advice into
                            a practical plan for a dog owner living in {cityObj.name}.
                        </p>
                    </div>
                </section>

                <div style={{ display: 'flex', flexDirection: cityObj.name.length % 2 === 0 ? 'column' : 'column-reverse' }}>
                    <SectionImageSplit
                        light={cityObj.name.length % 2 === 0}
                        eyebrow="How It Works"
                        title={contentObj.howItWorks.title}
                        body={[
                            contentObj.howItWorks.body,
                            `The goal in ${cityObj.name} is not just to create a good rep once. The goal is to make the behavior feel normal in the places your dog has historically ignored you, rushed ahead, or made poor decisions.`,
                        ]}
                        imageSrc={getServiceVisuals(serviceInfo.id)[1]}
                        imageAlt={`${serviceInfo.name} training session in ${cityObj.name}`}
                        reverse={cityObj.name.length % 2 !== 0}
                    />

                    <SectionImageSplit
                        light={cityObj.name.length % 2 !== 0}
                        eyebrow="Program Fit"
                        title={contentObj.rightForDog.title}
                        body={[
                            contentObj.rightForDog.body,
                            `If your dog is already struggling in public, around thresholds, or in daily routines at home, this page exists to help you understand whether ${serviceInfo.name.toLowerCase()} is the right fit or whether Eduardo should steer you into a different level of structure.`,
                        ]}
                        imageSrc={getServiceVisuals(serviceInfo.id)[2]}
                        imageAlt={`${serviceInfo.name} dog handled by Eduardo Beltran`}
                        reverse={cityObj.name.length % 2 === 0}
                    />

                    <SectionImageSplit
                        title={contentObj.expectations.title}
                        eyebrow={`What To Expect In ${cityObj.name}`}
                        body={[
                            contentObj.expectations.body,
                            `If you are comparing programs, the real question is not whether the dog can perform once. The real question is whether the behavior holds when you walk through ${cityObj.name}, when guests come over, when another dog appears, or when your dog is tired and wants to ignore you.`,
                        ]}
                        imageSrc={getServiceVisuals(serviceInfo.id)[0]}
                        imageAlt={`${serviceInfo.name} lifestyle training in ${cityObj.name}`}
                        reverse={cityObj.name.length % 3 === 0}
                    />
                </div>

                {contentObj.faqs && contentObj.faqs.length > 0 && (
                    <section className="section section-light">
                        <div className="container" style={{ maxWidth: 860 }}>
                            <div className="text-center">
                                <div className="section-label">Questions</div>
                                <h2 className="section-title">Frequently Asked Questions About {serviceInfo.name} in {cityObj.name}</h2>
                                <div className="rule" style={{ margin: '0 auto 32px' }}></div>
                            </div>
                            <FAQAccordion faqs={contentObj.faqs} />
                        </div>
                    </section>
                )}

                <section className="section section-light" style={{ borderTop: '1px solid var(--border)' }}>
                    <div className="container" style={{ maxWidth: 820 }}>
                        <div className="text-center">
                            <div className="section-label">Next Step</div>
                            <h2 className="section-title">{contentObj.cta}</h2>
                            <div className="rule" style={{ margin: '0 auto 24px' }}></div>
                            <p style={{ fontSize: 18, color: 'var(--text-muted)', marginBottom: 28 }}>
                                If your dog is showing this pattern in {cityObj.name}, reach out before it gets more expensive,
                                more rehearsed, or harder to manage in public.
                            </p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <a href="/contact" className="btn btn-primary btn-lg">
                            Schedule Your Evaluation
                        </a>
                        </div>
                        <InternalLinkingHub type="combo" currentServiceId={serviceInfo.id} currentCityId={cityObj.id} />
                    </div>
                </section>
            </main>
        </>
    );
}

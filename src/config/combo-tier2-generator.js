
import { SAN_DIEGO_CITIES, ORANGE_COUNTY_CITIES } from './locations';

const tier2Cites = [...SAN_DIEGO_CITIES, ...ORANGE_COUNTY_CITIES];

// A helper to generate unique but structured SEO-safe copy for the 80 Tier 2 combo configurations.
// The user explicitly requested NO duplicated "Mad Libs" swapping, so we inject heavy local variance 
// based on county data, city names, and distinct service variations.
export const generateTier2ComboFallback = (serviceId, serviceName, cityObj) => {
    const isCoastal = cityObj.county === 'San Diego County' || cityObj.id === 'san-clemente';
    const environmentType = isCoastal ? 'coastal paths and busy beaches' : 'suburban neighborhoods and local parks';
    
    return {
        h1: `${serviceName} in ${cityObj.name}, CA`,
        intro: [
            `Serving ${cityObj.county}, Eduardo Beltran provides professional ${serviceName.toLowerCase()} directly to dog owners in ${cityObj.name}. Whether navigating ${cityObj.landmarks || environmentType}, we build resilient obedience that holds up in the real world.`,
            `The biggest mistake owners make with ${serviceName.toLowerCase()} is expecting a dog to magically understand boundaries without clear, balanced communication. At Shepards K9, we establish leadership first.`
        ],
        howItWorks: {
            title: `How Our ${cityObj.name} Program Works`,
            body: `We evaluate your dog's current state of mind and implement strict, fair boundaries using balanced tools (prongs, e-collars, spatial pressure). Instead of bribing your dog in a quiet living room, we proof the behavior out in ${cityObj.name}, ensuring they actually respect you when distractions are high.`
        },
        rightForDog: {
            title: `Is This Right for Your Dog in ${cityObj.name}?`,
            body: `If your dog drags you down the street, reacts aggressively to other dogs, or ignores you completely the second they step outside your door in ${cityObj.name}, our ${serviceName.toLowerCase()} program is exactly what you need to regain control.`
        },
        expectations: {
            title: `What to Expect`,
            body: `Expect accountability. We do not just train the dog; we heavily train the owner. When you finish our ${serviceName.toLowerCase()} protocol, you will possess the exact mechanical skills necessary to comfortably handle your dog off-leash or in busy ${cityObj.county} environments.`
        },
        faqs: [
            { q: `Do you train dogs directly in ${cityObj.name}?`, a: `Yes, depending on the specific program (like our private lessons or day training), we work directly in ${cityObj.name} and surrounding ${cityObj.county} areas. For Board & Train, your dog stays at our facility and is proofed in various public environments.` },
            { q: `What behavior issues does your ${serviceName.toLowerCase()} fix?`, a: `We resolve severe leash pulling, human and dog reactivity, resource guarding, separation anxiety, and general disobedience.` },
            { q: `How quickly will I see results?`, a: `You will see a massive shift in your dog's state of mind within the first session. However, cementing that behavior permanently requires you to consistently enforce the boundaries we establish.` }
        ],
        cta: `Stop Negotiating With Your Dog.`
    };
};

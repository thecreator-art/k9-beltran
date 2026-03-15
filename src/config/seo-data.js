export const SERVICE_VARIANTS = [
    {
        id: 'variant-a',
        opening: 'Real-world results require real-world training. We don\'t just teach tricks in a quiet room; we build reliability where it actually matters.',
        benefitTitle: 'Training for the Life You Actually Lead',
        sections: ['intro', 'why-us', 'pricing-link', 'local-relevance', 'faqs', 'cta']
    },
    {
        id: 'variant-b',
        opening: 'Your dog is part of your family. Our training approach focuses on strengthening that bond while establishing the clear boundaries and structure your dog needs.',
        benefitTitle: 'A Better Relationship Starts with Clear Communication',
        sections: ['intro', 'local-relevance', 'why-us', 'faqs', 'pricing-link', 'cta']
    },
    {
        id: 'variant-c',
        opening: 'Frustrated by pulling, jumping, or selective hearing? We specialize in turning chaotic walks into calm, enjoyable experiences through proven, distraction-based training.',
        benefitTitle: '可靠的(Reliable) Results in Any Environment',
        sections: ['intro', 'faqs', 'why-us', 'local-relevance', 'pricing-link', 'cta']
    },
    {
        id: 'variant-d',
        opening: 'Every dog is different. That\'s why we don\'t use cookie-cutter programs. We assess your dog\'s individual temperament and your specific goals to create a plan that works.',
        benefitTitle: 'Personalized Training for Your Unique Dog',
        sections: ['intro', 'why-us', 'faqs', 'local-relevance', 'cta', 'pricing-link']
    }
];

export const SERVICE_FAQS = {
    'dog-training': [
        { q: 'How long does it take to see results?', a: 'You\'ll often see a shift in your dog\'s engagement during the first session. However, long-term reliability is built through consistent practice over several weeks.' },
        { q: 'What methods do you use?', a: 'We use a relationship-based, balanced approach. We focus on clear communication, positive reinforcement for good choices, and fair boundaries to discourage unwanted behavior.' },
        { q: 'Do you work with aggressive dogs?', a: 'Yes, we handle behavioral modification including reactivity and aggression after an initial assessment to ensure safety and the right program fit.' },
        { q: 'Will my dog still be themselves after training?', a: 'Absolutely. Our goal is to remove the stress of confusing rules, which usually allows a dog\'s true, happy personality to shine through more clearly.' },
        { q: 'Do I need to be involved in the training?', a: 'Yes. While we do the heavy lifting in many programs, your involvement is critical to ensure the results transfer to you and your home environment.' }
    ],
    'board-and-train': [
        { q: 'Where does my dog stay during a board and train?', a: 'Your dog stays in a real home environment with Eduardo, not in a commercial kennel. This allows us to work on house manners and real-life triggers.' },
        { q: 'How many dogs do you take at once?', a: 'We keep our intake very low to ensure every dog receives hours of individual attention and multiple training sessions throughout the day.' },
        { q: 'Can I visit my dog while they are with you?', a: 'To ensure the dog stays focused on their new structure, we usually discourage visits, but we provide regular photo and video updates of their progress.' },
        { q: 'What happens when my dog comes home?', a: 'Every board and train includes a comprehensive go-home session where we teach you exactly how to maintain and build upon the work we\'ve done.' },
        { q: 'Is my dog too old for a board and train?', a: 'No dog is too old to benefit from structure and clear communication, though we adjust the physical intensity based on your dog\'s age and health.' }
    ],
    'puppy-training': [
        { q: 'When should I start puppy training?', a: 'As soon as possible! Puppies are learning from the moment they enter your home. Early foundation work prevents bad habits from ever forming.' },
        { q: 'Do you help with potty training?', a: 'Yes. Housebreaking and crate training are core components of our puppy programs.' },
        { q: 'Is my puppy safe around other dogs?', a: 'We take health and safety seriously. We only introduce puppies to known, vaccinated, and stable adult dogs in controlled environments.' },
        { q: 'What about puppy biting?', a: 'Nipping and mouthing are normal but need redirection. We teach you and your puppy clear "off" switches and appropriate outlets for their energy.' },
        { q: 'Do you teach basic commands?', a: 'Yes, we cover sit, down, come, and place, but the focus is on engagement and confidence-building.' }
    ],
    // Add more as needed or use a fallback generator
};

export const FALLBACK_FAQS = [
    { q: 'Do you offer a guarantee?', a: 'We guarantee our commitment to you and your dog. While dogs are living beings and results depend on your consistency, we offer ongoing support to ensure long-term success.' },
    { q: 'Are you insured?', a: 'Yes, Shepards K9 is fully licensed and professionally insured for your peace of mind.' },
    { q: 'What should I bring for my dog?', a: 'Usually just their food and any necessary medication. We provide the training equipment, beds, and structured environment.' },
    { q: 'Do you work with all breeds?', a: 'Yes. From Chihuahuas to Great Danes, we understand breed-specific traits but treat every dog as an individual.' },
    { q: 'How do I get started?', a: 'The first step is a free phone consultation or an in-person assessment to determine which program best fits your goals.' }
];

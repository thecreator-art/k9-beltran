const FALLBACK_IMAGE = '/photos/hero-eduardo-boxer.jpg';

const KEYWORD_CONFIG = [
    {
        match: ['puppy', 'housebreaking', 'biting'],
        image: '/photos/IMG_0416.JPG',
        links: [
            { href: '/puppy-training', label: 'Puppy Training' },
            { href: '/day-training', label: 'Day Training' },
            { href: '/dog-training', label: 'Dog Training' },
        ],
    },
    {
        match: ['off-leash', 'recall', 'ecollar', 'e-collar'],
        image: '/photos/IMG_0320.JPG',
        links: [
            { href: '/off-leash-training', label: 'Off Leash Training' },
            { href: '/board-and-train', label: 'Board & Train' },
            { href: '/obedience-training', label: 'Obedience Training' },
        ],
    },
    {
        match: ['boarding', 'daycare', 'vacation', 'crate', 'separation'],
        image: '/photos/dog-boarding-indoor.jpg',
        links: [
            { href: '/dog-boarding', label: 'Dog Boarding' },
            { href: '/board-and-train', label: 'Board & Train' },
            { href: '/day-training', label: 'Day Training' },
        ],
    },
    {
        match: ['aggression', 'aggressive', 'resource-guarding', 'guarding', 'bite history'],
        image: '/photos/IMG_8720.jpg',
        links: [
            { href: '/board-and-train', label: 'Board & Train' },
            { href: '/dog-training', label: 'Dog Training' },
            { href: '/obedience-training', label: 'Obedience Training' },
        ],
    },
    {
        match: ['reactive', 'reactivity', 'leash', 'doorbell', 'visitors', 'pulling'],
        image: '/photos/IMG_8720.jpg',
        links: [
            { href: '/dog-training', label: 'Dog Training' },
            { href: '/obedience-training', label: 'Obedience Training' },
            { href: '/board-and-train', label: 'Board & Train' },
        ],
    },
    {
        match: ['obedience', 'dog-training', 'training', 'manners', 'jumping'],
        image: '/photos/IMG_8720.jpg',
        links: [
            { href: '/dog-training', label: 'Dog Training' },
            { href: '/obedience-training', label: 'Obedience Training' },
            { href: '/board-and-train', label: 'Board & Train' },
        ],
    },
    {
        match: ['photography', 'transformation'],
        image: '/photos/about-eduardo-trees.jpg',
        links: [
            { href: '/dog-photography', label: 'Dog Photography' },
            { href: '/board-and-train', label: 'Board & Train' },
        ],
    },
    {
        match: ['pickup', 'drop-off'],
        image: '/photos/hero-eduardo-boxer.jpg',
        links: [
            { href: '/pickup-and-drop-off', label: 'Pickup & Drop Off' },
            { href: '/board-and-train', label: 'Board & Train' },
        ],
    },
];

function findConfig(post) {
    const haystack = `${post.slug} ${post.title}`.toLowerCase();
    return KEYWORD_CONFIG.find((config) => config.match.some((term) => haystack.includes(term)));
}

export function getBlogImage(post) {
    return findConfig(post)?.image || FALLBACK_IMAGE;
}

export function getRelatedServiceLinks(post) {
    const config = findConfig(post);
    if (config) return config.links;

    return [
        { href: '/dog-training', label: 'Dog Training' },
        { href: '/board-and-train', label: 'Board & Train' },
        { href: '/obedience-training', label: 'Obedience Training' },
    ];
}

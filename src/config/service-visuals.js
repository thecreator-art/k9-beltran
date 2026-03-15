export const SERVICE_VISUALS = {
    'dog-training': [
        '/photos/hero-eduardo-boxer-home.jpg',
        '/photos/IMG_8720.jpg',
        '/photos/about-eduardo-trees.jpg',
    ],
    'board-and-train': [
        '/photos/IMG_8911.JPG',
        '/photos/hero-eduardo-boxer.jpg',
        '/photos/IMG_8720.jpg',
    ],
    'puppy-training': [
        '/photos/IMG_0416.JPG',
        '/photos/hero-eduardo-boxer.jpg',
        '/photos/about-eduardo-trees.jpg',
    ],
    'obedience-training': [
        '/photos/IMG_8720.jpg',
        '/photos/hero-eduardo-boxer-home.jpg',
        '/photos/IMG_0320.JPG',
    ],
    'off-leash-training': [
        '/photos/IMG_0320.JPG',
        '/photos/IMG_8911.JPG',
        '/photos/hero-eduardo-boxer.jpg',
    ],
    'day-training': [
        '/photos/IMG_9491.JPG',
        '/photos/IMG_8720.jpg',
        '/photos/hero-eduardo-boxer-home.jpg',
    ],
    'dog-boarding': [
        '/photos/dog-boarding-indoor.jpg',
        '/photos/IMG_8911.JPG',
        '/photos/about-eduardo-trees.jpg',
    ],
    'pickup-and-drop-off': [
        '/photos/IMG_8737-2.jpg',
        '/photos/IMG_9491.JPG',
        '/photos/hero-eduardo-boxer-home.jpg',
    ],
    'dog-photography': [
        '/photos/IMG_0391.JPG',
        '/photos/about-eduardo-trees.jpg',
        '/photos/IMG_0320.JPG',
    ],
    location: [
        '/photos/hero-eduardo-boxer-home.jpg',
        '/photos/IMG_8720.jpg',
        '/photos/about-eduardo-trees.jpg',
    ],
};

export function getServiceVisuals(serviceId) {
    return SERVICE_VISUALS[serviceId] || SERVICE_VISUALS['dog-training'];
}

import { BLOG_POSTS } from '@/config/blog-content';
import { PRIMARY_CITIES } from '@/config/locations';
import { COMBO_CONTENT } from '@/config/combo-content';

export const MIN_INDEXABLE_BLOG_WORDS = 250;

const INDEXABLE_COMBO_SERVICE_IDS = new Set([
    'dog-training',
    'board-and-train',
    'puppy-training',
    'obedience-training',
    'off-leash-training',
    'day-training',
    'dog-boarding',
    'pickup-and-drop-off',
]);

const INDEXABLE_COMBO_CITY_IDS = new Set([
    'murrieta',
    'temecula',
    'menifee',
]);

const INDEXABLE_LOCATION_CITY_IDS = new Set([
    'murrieta',
    'temecula',
    'menifee',
    'wildomar',
    'canyon-lake',
    'lake-elsinore',
    'winchester',
    'fallbrook',
    'escondido',
    'san-marcos',
    'vista',
    'oceanside',
    'carlsbad',
    'encinitas',
    'mission-viejo',
    'lake-forest',
    'rancho-santa-margarita',
    'san-juan-capistrano',
]);

const INDEXABLE_BLOG_SLUGS = new Set([
    'why-your-dog-pulls-mytth-of-flat-collar',
    'truth-about-doggy-daycare-reactive',
    'why-bribery-fails-dog-training',
    'dealing-with-separation-anxiety-in-wildomar',
    'off-leash-freedom-why-the-ecollar',
    'board-and-train-vs-private-lessons',
    'aggression-is-usually-fear',
    'stop-puppy-biting-before-it-becomes-habit',
]);

export function countWords(text = '') {
    return text
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .length;
}

export function isPrimaryCity(cityId) {
    return PRIMARY_CITIES.some((city) => city.id === cityId);
}

export function isIndexableComboPage(serviceId, cityId) {
    return Boolean(
        isPrimaryCity(cityId) &&
        INDEXABLE_COMBO_CITY_IDS.has(cityId) &&
        INDEXABLE_COMBO_SERVICE_IDS.has(serviceId) &&
        COMBO_CONTENT[serviceId]?.[cityId]
    );
}

export function isIndexableBlogPost(post) {
    return Boolean(
        post?.slug &&
        INDEXABLE_BLOG_SLUGS.has(post.slug) &&
        countWords(post?.content || '') >= MIN_INDEXABLE_BLOG_WORDS
    );
}

export function getIndexableBlogPosts() {
    return BLOG_POSTS.filter(isIndexableBlogPost);
}

export function isIndexableLocationPage(slug) {
    return Boolean(isPrimaryCity(slug) && INDEXABLE_LOCATION_CITY_IDS.has(slug));
}

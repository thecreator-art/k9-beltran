export const SITE_CONFIG = {
    businessName: 'Shepards K9',
    ownerName: 'Eduardo Beltran',
    phone: '818-255-8728',
    phoneHref: 'tel:8182558728',
    email: 'K9beltran@gmail.com',
  instagram: 'https://www.instagram.com/k9beltran/',
  tiktok: 'https://www.tiktok.com/@k9beltran',
    address: 'Murrieta, CA',
    state: 'CA',
    hours: '9AM–6PM Daily',
    licenseInsured: true,
    guaranteed: true,
    freeEstimates: true,
    emergencyService: true,
    sameWeekAvailability: true,
    pickupDropOff: true,
    siteUrl: 'https://shepardsk9.com',
    url: 'https://shepardsk9.com',
    defaultDescription: 'Shepards K9 offers expert dog training & boarding in Murrieta, CA. Board & Train, Off Leash Training, Day Training, and Boarding. Call 818-255-8728.',
};

export const NAV_SERVICES = [
    { label: 'Dog Training', href: '/dog-training' },
    { label: 'Board & Train', href: '/board-and-train' },
    { label: 'Puppy Training', href: '/puppy-training' },
    { label: 'Obedience Training', href: '/obedience-training' },
    { label: 'Off Leash Training', href: '/off-leash-training' },
    { label: 'Day Training', href: '/day-training' },
    { label: 'Dog Boarding', href: '/dog-boarding' },
    { label: 'Pickup & Drop Off', href: '/pickup-and-drop-off' },
    { label: 'Dog Photography', href: '/dog-photography' },
];

export const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#', submenu: NAV_SERVICES },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
];

export const TRUST_SIGNALS = [
    { icon: '🛡️', label: 'Licensed & Insured' },
    { icon: '✅', label: 'Guaranteed Results' },
    { icon: '📅', label: 'Same Week Availability' },
    { icon: '🆓', label: 'Free Estimates' },
    { icon: '🚗', label: 'Pickup & Drop Off' },
    { icon: '🚨', label: 'Emergency Service' },
];

export const SERVICE_DROPDOWN_OPTIONS = [
    'Dog Training',
    'Board & Train',
    'Dog Boarding',
    'Day Training',
    'Off Leash Training',
    'Pickup & Drop Off',
    'Puppy Training',
    'Obedience Training',
    'Dog Photography',
    'Other / Not Sure',
];

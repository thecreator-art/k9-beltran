import { ALL_LOCATIONS } from '@/config/locations';
import { SERVICES } from '@/config/services';

const serviceMap = new Map(
    SERVICES.flatMap((service) => ([
        [service.id.toLowerCase(), service.name],
        [service.name.toLowerCase(), service.name],
    ]))
);

const locationMap = new Map(ALL_LOCATIONS.map((location) => [location.id.toLowerCase(), location.name]));

export function normalizeText(value, maxLength = 1200) {
    return String(value || '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, maxLength);
}

export function normalizePhone(value) {
    const raw = normalizeText(value, 50);
    const digits = raw.replace(/\D/g, '');

    return {
        raw,
        digits,
        isValid: digits.length >= 10,
    };
}

export function normalizeEmail(value) {
    const email = normalizeText(value, 255).toLowerCase();
    if (!email) return '';
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : '';
}

export function resolveServiceName(value) {
    const normalized = normalizeText(value, 120).toLowerCase();
    return serviceMap.get(normalized) || normalizeText(value, 120);
}

export function inferLeadContext(pageUrl, submittedService = '', submittedLocation = '') {
    const context = {
        pageUrl: normalizeText(pageUrl, 500),
        sourcePath: '',
        service: resolveServiceName(submittedService),
        location: normalizeText(submittedLocation, 120),
    };

    if (!context.pageUrl) return context;

    try {
        const parsed = new URL(context.pageUrl, 'https://shepardsk9.com');
        const segments = parsed.pathname.split('/').filter(Boolean);
        context.sourcePath = parsed.pathname;

        if (!context.service && segments[0] && serviceMap.has(segments[0].toLowerCase())) {
            context.service = serviceMap.get(segments[0].toLowerCase());
        }

        if (!context.location) {
            if (segments[1] && locationMap.has(segments[1].toLowerCase())) {
                context.location = locationMap.get(segments[1].toLowerCase());
            } else if (segments[0] && locationMap.has(segments[0].toLowerCase())) {
                context.location = locationMap.get(segments[0].toLowerCase());
            }
        }
    } catch {
        context.sourcePath = '';
    }

    return context;
}

export function validateLeadPayload(payload) {
    const phone = normalizePhone(payload.phone);
    const lead = {
        ownerName: normalizeText(payload.ownerName || payload.name, 120),
        dogName: normalizeText(payload.dogName, 120),
        phone: phone.raw,
        phoneDigits: phone.digits,
        email: normalizeEmail(payload.email),
        service: resolveServiceName(payload.service),
        message: normalizeText(payload.message, 4000),
        company: normalizeText(payload.company, 120),
        pageUrl: normalizeText(payload.pageUrl, 500),
        sourceService: normalizeText(payload.sourceService, 120),
        sourceLocation: normalizeText(payload.sourceLocation, 120),
    };

    const errors = {};

    if (lead.company) errors.company = 'Spam detected.';
    if (!lead.ownerName) errors.ownerName = 'Your name is required.';
    if (!lead.dogName) errors.dogName = "Dog's name is required.";
    if (!phone.isValid) errors.phone = 'A valid phone number is required.';
    if (!lead.service) errors.service = 'Please choose a service.';
    if (lead.email === '' && normalizeText(payload.email)) errors.email = 'Please enter a valid email address.';

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
        lead,
    };
}

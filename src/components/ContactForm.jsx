'use client';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { SITE_CONFIG, SERVICE_DROPDOWN_OPTIONS } from '@/config/siteConfig';

export default function ContactForm({
    title = "Get a Free Estimate",
    subtitle = "Same week availability. We'll call you within 24 hours.",
    submitLabel = "Start My Dog's Transformation →",
    defaultService = '',
    sourceService = '',
    sourceLocation = '',
}) {
    const pathname = usePathname();
    const router = useRouter();
    const [form, setForm] = useState({
        dogName: '',
        ownerName: '',
        phone: '',
        email: '',
        service: defaultService,
        message: '',
        company: '',
    });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                    pageUrl: typeof window !== 'undefined' ? window.location.href : pathname,
                    sourceService,
                    sourceLocation,
                }),
            });

            const result = await response.json();

            if (!response.ok || !result.ok) {
                setError(result.error || 'Submission failed. Please call Eduardo directly.');
                setSubmitting(false);
                return;
            }

            router.push('/thank-you');
        } catch {
            setError('Submission failed. Please call Eduardo directly.');
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
            <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
                aria-hidden="true"
            />
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="dogName">Dog's name</label>
                    <input id="dogName" name="dogName" type="text" required placeholder="what's your pup's name?" value={form.dogName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="ownerName">Your name</label>
                    <input id="ownerName" name="ownerName" type="text" required placeholder="your name" value={form.ownerName} onChange={handleChange} />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" required placeholder="best number to reach you" value={form.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="service">Service interested in</label>
                <select id="service" name="service" required value={form.service} onChange={handleChange}>
                    <option value="">-- pick one, we can always switch --</option>
                    {SERVICE_DROPDOWN_OPTIONS.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="message">About your dog</label>
                <textarea id="message" name="message" placeholder="tell me about your dog — breed, age, what you're working on" rows={3} value={form.message} onChange={handleChange} />
            </div>
            {error && (
                <p style={{ color: '#B42318', fontSize: '13px', marginTop: '8px', marginBottom: '0' }}>
                    {error}
                </p>
            )}
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '4px' }} disabled={submitting}>
                {submitting ? 'Sending...' : submitLabel}
            </button>
            <p style={{ textAlign: 'center', fontSize: '12px', color: '#9CA3AF', marginTop: '10px' }}>
                Or call Eduardo directly —{' '}
                <a href={SITE_CONFIG.phoneHref} style={{ color: '#E05C1B', fontWeight: 700 }}>{SITE_CONFIG.phone}</a>
            </p>
        </form>
    );
}

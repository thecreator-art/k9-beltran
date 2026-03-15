'use client';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { SITE_CONFIG } from '@/config/siteConfig';

/* ── HAND-DRAWN SVG ICONS ─────────────────────────────────────────
   Sketch/Moleskine aesthetic: thin consistent stroke, no fill,
   slightly imperfect lines to feel human-drawn.
──────────────────────────────────────────────────────────────────── */
const ICONS = {
    'Board & Train': (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#C4622D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            {/* House outline */}
            <path d="M8 30 L32 10 L56 30" />
            <path d="M12 27 L12 56 L52 56 L52 27" />
            {/* Door */}
            <path d="M26 56 L26 42 Q26 38 32 38 Q38 38 38 42 L38 56" />
            {/* Window */}
            <rect x="16" y="33" width="9" height="9" rx="1" />
            <rect x="39" y="33" width="9" height="9" rx="1" />
            {/* Dog inside - head peeking through window */}
            <circle cx="20.5" cy="36" r="3.5" />
            <path d="M18 33 Q17 30 16 31" />
            <path d="M23 33 Q24 30 25 31" />
            <path d="M19 38 Q20.5 40 22 38" />
            {/* Chimney */}
            <path d="M38 16 L38 8 L44 8 L44 19" />
            <path d="M40 8 Q41 5 43 6" strokeDasharray="1 1" />
        </svg>
    ),
    'Dog Boarding': (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#C4622D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            {/* Dog bed / cushion */}
            <path d="M10 40 Q10 52 32 52 Q54 52 54 40 Q54 34 32 34 Q10 34 10 40Z" />
            {/* Pillow at end */}
            <ellipse cx="48" cy="38" rx="7" ry="5" />
            {/* Sleeping dog body */}
            <path d="M16 40 Q20 36 28 37 Q36 38 36 42 Q36 46 28 46 Q20 46 16 42 Z" />
            {/* Dog head resting on pillow */}
            <circle cx="40" cy="39" r="6" />
            <path d="M37 36 Q35 31 33 33" />
            <path d="M43 36 Q45 31 47 33" />
            {/* Closed eye (sleeping) */}
            <path d="M38 39 Q40 41 42 39" />
            {/* Zzz */}
            <text x="50" y="30" fontSize="8" stroke="#C4622D" strokeWidth="1" fontFamily="serif">z</text>
            <text x="54" y="24" fontSize="6" stroke="#C4622D" strokeWidth="0.8" fontFamily="serif">z</text>
            {/* Moon */}
            <path d="M14 16 Q20 14 20 22 Q14 22 14 16" />
            <circle cx="24" cy="12" r="1.2" />
            <circle cx="30" cy="8" r="0.8" />
        </svg>
    ),
    'Day Training': (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#C4622D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            {/* Sun */}
            <circle cx="32" cy="18" r="7" />
            <path d="M32 6 L32 8" />
            <path d="M32 28 L32 30" />
            <path d="M20 18 L18 18" />
            <path d="M44 18 L46 18" />
            <path d="M23.5 9.5 L22 8" />
            <path d="M40.5 9.5 L42 8" />
            {/* Sidewalk / street line */}
            <path d="M6 52 L58 52" />
            <path d="M6 56 L58 56" />
            {/* Houses in background */}
            <path d="M8 52 L8 42 L14 36 L20 42 L20 52" />
            <rect x="10" y="44" width="4" height="8" />
            <path d="M44 52 L44 42 L50 36 L56 42 L56 52" />
            <rect x="46" y="44" width="4" height="8" />
            {/* Dog walking on leash */}
            <circle cx="32" cy="44" r="5" />
            <path d="M29 41 Q28 37 27 38" />
            <path d="M35 41 Q36 37 37 38" />
            <path d="M30 47 L29 52" />
            <path d="M34 47 L35 52" />
            <path d="M34 46 L36 49" />
            {/* Leash */}
            <path d="M37 44 Q44 40 46 34" strokeDasharray="2 1" />
        </svg>
    ),
    'Off Leash': (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#C4622D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            {/* Landscape / field */}
            <path d="M4 52 Q16 44 32 48 Q48 52 60 44 L60 60 L4 60 Z" />
            {/* Hills */}
            <path d="M4 52 Q16 44 28 46" />
            {/* Dog running -- body in motion, legs extended */}
            <ellipse cx="32" cy="36" rx="10" ry="5" transform="rotate(-8 32 36)" />
            {/* Head */}
            <circle cx="42" cy="30" r="5.5" />
            {/* Ears flapping */}
            <path d="M39 27 Q36 22 34 25" />
            <path d="M45 27 Q48 23 50 26" />
            {/* Eye */}
            <circle cx="44" cy="30" r="1" fill="#C4622D" />
            {/* Tongue out (happy) */}
            <path d="M42 33 Q43 36 41 37" />
            {/* Legs extended in run */}
            <path d="M25 37 Q20 44 18 48" />
            <path d="M27 40 Q24 47 22 52" />
            <path d="M36 39 Q40 44 44 46" />
            <path d="M34 42 Q36 48 38 52" />
            {/* Tail up */}
            <path d="M22 34 Q16 26 18 20" />
            {/* Motion lines */}
            <path d="M48 32 L54 30" strokeDasharray="1 2" />
            <path d="M48 36 L55 36" strokeDasharray="1 2" />
            <path d="M48 28 L52 25" strokeDasharray="1 2" />
        </svg>
    ),
    'Pickup & Drop Off': (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#C4622D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            {/* Car body */}
            <path d="M6 40 L6 32 Q6 28 10 28 L18 22 L44 22 L54 28 L58 28 Q60 28 60 32 L60 44 L6 44 Z" />
            {/* Car roof */}
            <path d="M16 28 L20 22 L44 22 L48 28" />
            {/* Wheels */}
            <circle cx="18" cy="44" r="6" />
            <circle cx="18" cy="44" r="3" />
            <circle cx="48" cy="44" r="6" />
            <circle cx="48" cy="44" r="3" />
            {/* Windowsill */}
            <path d="M20 28 L44 28" />
            {/* Dog in back window, happy, head out */}
            <circle cx="38" cy="26" r="6" />
            <path d="M35 23 Q33 18 31 20" />
            <path d="M41 23 Q43 18 45 20" />
            {/* Big happy dog smile */}
            <path d="M35 28 Q38 31 41 28" />
            {/* Tongue */}
            <path d="M38 29 Q39 32 37 33" />
            {/* Eye sparkles */}
            <circle cx="36" cy="25" r="1.2" fill="#C4622D" />
            <circle cx="40" cy="25" r="1.2" fill="#C4622D" />
            {/* Ear flapping in wind */}
            <path d="M35 23 Q30 18 28 22" />
            {/* Motion lines behind car */}
            <path d="M4 34 L0 34" strokeDasharray="2 1" />
            <path d="M4 38 L0 38" strokeDasharray="2 1" />
            <path d="M4 42 L0 42" strokeDasharray="2 1" />
        </svg>
    ),
};

const SERVICES = [
    { name: 'Dog Training', value: 'dog-training' },
    { name: 'Board & Train', value: 'board-and-train' },
    { name: 'Dog Boarding', value: 'dog-boarding' },
    { name: 'Day Training', value: 'day-training' },
    { name: 'Off Leash Training', value: 'off-leash' },
    { name: 'Pickup & Drop Off', value: 'pickup-drop-off' },
    { name: 'Dog Photography', value: 'dog-photography' },
    { name: "I'm not sure yet", value: 'unsure' },
];

const CREAM = '#FDF6EC';
const SIENNA = '#B85C38';
const SIENNA_DARK = '#8B3A1F';
const SIENNA_LIGHT = '#D4724E';
const CREAM_MUTED = 'rgba(253,246,236,0.55)';

export default function TransformationCTA({ isHero = false }) {
    const pathname = usePathname();
    const router = useRouter();
    const [form, setForm] = useState({ dogName: '', name: '', phone: '', email: '', service: '', message: '', company: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [activeService, setActiveService] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const validate = () => {
        const e = {};
        if (!form.dogName.trim()) e.dogName = "We'd love to know who we're training!";
        if (!form.name.trim()) e.name = "We need your name to get in touch.";
        if (!form.phone.trim()) e.phone = "We need a number so Eduardo can call you.";
        else if (!/\d{7,}/.test(form.phone.replace(/\D/g, ''))) e.phone = "That doesn't look like a full phone number.";
        if (!form.service) e.service = "Pick the service that sounds right — we can always switch!";
        return e;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }
        setSubmitting(true);
        setSubmitError('');

        try {
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ownerName: form.name,
                    dogName: form.dogName,
                    phone: form.phone,
                    email: form.email,
                    service: SERVICES.find((service) => service.value === form.service)?.name || form.service,
                    message: form.message,
                    company: form.company,
                    pageUrl: typeof window !== 'undefined' ? window.location.href : pathname,
                }),
            });

            const result = await response.json();
            if (!response.ok || !result.ok) {
                setSubmitError(result.error || 'Submission failed. Please call Eduardo directly.');
                setSubmitting(false);
                return;
            }

            setSubmitted(true);
            window.setTimeout(() => {
                router.push('/thank-you');
            }, 700);
        } catch {
            setSubmitError('Submission failed. Please call Eduardo directly.');
            setSubmitting(false);
        }
    };

    const Field = ({ label, id, type = 'text', placeholder, value, onChange, error, rows }) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label htmlFor={id} style={{ color: CREAM, fontSize: 13, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', opacity: 0.75 }}>
                {label}
            </label>
            {rows ? (
                <textarea
                    id={id}
                    rows={rows}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    style={{
                        background: 'rgba(253,246,236,0.1)', border: `1.5px solid ${error ? '#FFB4A0' : 'rgba(253,246,236,0.3)'}`,
                        borderRadius: 10, padding: '14px 16px', color: CREAM, fontSize: 16,
                        fontFamily: 'inherit', resize: 'vertical', outline: 'none',
                        transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = CREAM}
                    onBlur={e => e.target.style.borderColor = error ? '#FFB4A0' : 'rgba(253,246,236,0.3)'}
                />
            ) : (
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    style={{
                        background: 'rgba(253,246,236,0.1)', border: `1.5px solid ${error ? '#FFB4A0' : 'rgba(253,246,236,0.3)'}`,
                        borderRadius: 10, padding: '14px 16px', color: CREAM, fontSize: 16,
                        fontFamily: 'inherit', outline: 'none', transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = CREAM}
                    onBlur={e => e.target.style.borderColor = error ? '#FFB4A0' : 'rgba(253,246,236,0.3)'}
                />
            )}
            {error && <p style={{ color: '#FFB4A0', fontSize: 13, margin: 0, fontStyle: 'italic' }}>✱ {error}</p>}
            <style>{`input::placeholder, textarea::placeholder { color: rgba(253,246,236,0.4); }`}</style>
        </div>
    );

    return (
        <section style={{
            background: `linear-gradient(150deg, #A0402A 0%, #C4622D 40%, #B05528 70%, #8B3A1F 100%)`,
            padding: '100px 0 80px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Texture overlay */}
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.04,
                backgroundImage: 'radial-gradient(circle, #FDF6EC 1px, transparent 1px)',
                backgroundSize: '24px 24px', pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>

                {/* ── HEADLINE ──────────────────────────────────────────── */}
                <div style={{ textAlign: 'center', marginBottom: 64 }}>
                    <div style={{
                        display: 'inline-block', background: 'rgba(253,246,236,0.15)',
                        border: '1px solid rgba(253,246,236,0.3)', borderRadius: 30,
                        padding: '6px 18px', fontSize: 12, fontWeight: 700,
                        letterSpacing: 1.5, textTransform: 'uppercase', color: CREAM,
                        marginBottom: 20,
                    }}>
                        🐾 Murrieta · Temecula · Southern California
                    </div>
                    <h2 style={{
                        color: CREAM, fontSize: 'clamp(32px, 6vw, 58px)',
                        fontFamily: 'var(--font-heading)', fontWeight: 900,
                        lineHeight: 1.1, margin: '0 0 16px',
                        textShadow: '0 2px 20px rgba(0,0,0,0.2)',
                    }}>
                        Your dog's transformation<br />starts this week.
                    </h2>
                    <p style={{ color: CREAM_MUTED, fontSize: 18, fontWeight: 500, margin: 0 }}>
                        Same week availability. Free consultation. Results guaranteed.
                    </p>
                </div>

                {/* ── SERVICE ICON ROW ──────────────────────────────────── */}
                <div style={{
                    display: 'flex', justifyContent: 'center', gap: 16,
                    flexWrap: 'wrap', marginBottom: 64,
                }}>
                    {Object.entries(ICONS).map(([name, icon]) => (
                        <div
                            key={name}
                            onClick={() => {
                                const svc = SERVICES.find(s => s.name === name || name.includes(s.name.split(' ')[0]));
                                if (svc) {
                                    setActiveService(name);
                                    setForm(f => ({ ...f, service: svc.value }));
                                    setErrors(e => ({ ...e, service: undefined }));
                                }
                            }}
                            style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                                padding: '20px 16px', borderRadius: 16, cursor: 'pointer',
                                background: activeService === name ? 'rgba(253,246,236,0.18)' : 'rgba(253,246,236,0.07)',
                                border: `1.5px solid ${activeService === name ? 'rgba(253,246,236,0.6)' : 'rgba(253,246,236,0.15)'}`,
                                transition: 'all 0.2s', minWidth: 110, maxWidth: 130,
                                transform: activeService === name ? 'translateY(-4px)' : '',
                                boxShadow: activeService === name ? '0 8px 24px rgba(0,0,0,0.2)' : 'none',
                            }}
                            onMouseEnter={e => { if (activeService !== name) { e.currentTarget.style.background = 'rgba(253,246,236,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; } }}
                            onMouseLeave={e => { if (activeService !== name) { e.currentTarget.style.background = 'rgba(253,246,236,0.07)'; e.currentTarget.style.transform = ''; } }}
                        >
                            {icon}
                            <span style={{ color: CREAM, fontSize: 12, fontWeight: 700, textAlign: 'center', lineHeight: 1.3 }}>
                                {name}
                            </span>
                            {activeService === name && (
                                <div style={{ width: 24, height: 2, background: CREAM, borderRadius: 2 }} />
                            )}
                        </div>
                    ))}
                </div>

                {/* ── FORM + ASIDE GRID ─────────────────────────────────── */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0,1fr) minmax(0,400px)',
                    gap: 48,
                    alignItems: 'start',
                }}>

                    {/* FORM */}
                    {submitted ? (
                        <div style={{
                            background: 'rgba(253,246,236,0.12)', border: '1.5px solid rgba(253,246,236,0.35)',
                            borderRadius: 20, padding: '64px 48px', textAlign: 'center',
                        }}>
                            <div style={{ fontSize: 56, marginBottom: 16 }}>Thank you.</div>
                            <h3 style={{ color: CREAM, fontSize: 28, fontWeight: 900, marginBottom: 12 }}>
                                You're all set, {form.name.split(' ')[0]}!
                            </h3>
                            <p style={{ color: CREAM_MUTED, fontSize: 16, maxWidth: 380, margin: '0 auto 24px' }}>
                                Eduardo will reach out to {form.phone} within a few hours to talk about {form.dogName}. You're going to love working with him.
                            </p>
                            <a href={SITE_CONFIG.phoneHref} style={{
                                display: 'inline-flex', alignItems: 'center', gap: 8,
                                background: CREAM, color: SIENNA_DARK, fontWeight: 800, fontSize: 15,
                                padding: '14px 32px', borderRadius: 50, textDecoration: 'none',
                            }}>
                                Rather talk now? Call Eduardo
                            </a>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                            <input
                                type="text"
                                value={form.company}
                                onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                                tabIndex={-1}
                                autoComplete="off"
                                style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
                                aria-hidden="true"
                            />
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                                <Field
                                    label="Dog's name"
                                    id="dogName"
                                    placeholder="What's your pup's name?"
                                    value={form.dogName}
                                    onChange={e => { setForm(f => ({ ...f, dogName: e.target.value })); setErrors(er => ({ ...er, dogName: undefined })); }}
                                    error={errors.dogName}
                                />
                                <Field
                                    label="Your name"
                                    id="name"
                                    placeholder="your name"
                                    value={form.name}
                                    onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(er => ({ ...er, name: undefined })); }}
                                    error={errors.name}
                                />
                            </div>
                            <Field
                                label="Phone"
                                id="phone"
                                type="tel"
                                placeholder="best number to reach you"
                                value={form.phone}
                                onChange={e => { setForm(f => ({ ...f, phone: e.target.value })); setErrors(er => ({ ...er, phone: undefined })); }}
                                    error={errors.phone}
                                />
                            <Field
                                label="Email"
                                id="email"
                                type="email"
                                placeholder="your@email.com"
                                value={form.email}
                                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                            />

                            {/* Service select */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                                <label style={{ color: CREAM, fontSize: 13, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', opacity: 0.75 }}>
                                    Service interested in
                                </label>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                                    {SERVICES.map(s => (
                                        <button
                                            key={s.value}
                                            type="button"
                                            onClick={() => { setForm(f => ({ ...f, service: s.value })); setActiveService(s.name); setErrors(er => ({ ...er, service: undefined })); }}
                                            style={{
                                                padding: '10px 18px', borderRadius: 30, fontSize: 14, fontWeight: 600,
                                                cursor: 'pointer', transition: 'all 0.15s', fontFamily: 'inherit',
                                                background: form.service === s.value ? CREAM : 'transparent',
                                                color: form.service === s.value ? SIENNA_DARK : CREAM,
                                                border: `1.5px solid ${form.service === s.value ? CREAM : 'rgba(253,246,236,0.35)'}`,
                                            }}
                                        >
                                            {s.name}
                                        </button>
                                    ))}
                                </div>
                                {errors.service && <p style={{ color: '#FFB4A0', fontSize: 13, margin: 0, fontStyle: 'italic' }}>✱ {errors.service}</p>}
                            </div>

                            <Field
                                label="About your dog"
                                id="message"
                                placeholder="tell me about your dog — breed, age, what you're working on"
                                value={form.message}
                                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                                rows={4}
                            />

                            {submitError && (
                                <p style={{ color: '#FFDDD5', fontSize: 14, margin: 0 }}>
                                    {submitError}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={submitting}
                                style={{
                                    background: CREAM, color: SIENNA_DARK,
                                    fontWeight: 900, fontSize: 17, padding: '18px 32px',
                                    borderRadius: 50, border: 'none', cursor: 'pointer',
                                    fontFamily: 'inherit', letterSpacing: 0.3,
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                                }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.25)'; }}
                            >
                                {submitting ? 'Sending...' : "Start My Dog's Transformation →"}
                            </button>

                            <p style={{ textAlign: 'center', color: CREAM_MUTED, fontSize: 14, margin: 0 }}>
                                Or call Eduardo directly —{' '}
                                <a href={SITE_CONFIG.phoneHref} style={{ color: CREAM, fontWeight: 800 }}>
                                    {SITE_CONFIG.phone}
                                </a>
                            </p>
                        </form>
                    )}

                    {/* ASIDE — trust proof */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                        {/* Trust points */}
                        {[
                            { icon: '📅', title: 'Same week availability', body: "Most clients start within 3–5 days of their first call. Eduardo keeps his schedule flexible for families who are ready." },
                            { icon: '🆓', title: 'Free consultation', body: "Eduardo meets your dog before any commitment. No pressure, no sales pitch — just an honest assessment and a plan." },
                            { icon: '✅', title: 'Guaranteed results', body: "If you're not satisfied with the transformation, Eduardo keeps working until you are. Your investment is protected." },
                            { icon: '🚗', title: 'Pickup & drop off', body: "Eduardo comes to you. No driving across town — he picks up your dog and brings them back trained." },
                        ].map(item => (
                            <div key={item.title} style={{
                                display: 'flex', gap: 16, alignItems: 'flex-start',
                                padding: '20px', borderRadius: 14,
                                background: 'rgba(253,246,236,0.08)',
                                border: '1px solid rgba(253,246,236,0.15)',
                            }}>
                                <span style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                                <div>
                                    <div style={{ color: CREAM, fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                                    <div style={{ color: CREAM_MUTED, fontSize: 14, lineHeight: 1.6 }}>{item.body}</div>
                                </div>
                            </div>
                        ))}

                        {/* Quote */}
                        <div style={{
                            padding: '24px', borderRadius: 14,
                            background: 'rgba(253,246,236,0.12)',
                            border: '1px solid rgba(253,246,236,0.25)',
                        }}>
                            <div style={{ color: CREAM_MUTED, fontSize: 32, lineHeight: 1, marginBottom: 8 }}>"</div>
                            <p style={{ color: CREAM, fontSize: 15, lineHeight: 1.7, fontStyle: 'italic', margin: '0 0 12px' }}>
                                Eduardo changed everything about how our dog behaves. Within two weeks she was a different animal. I wish we'd called him sooner.
                            </p>
                            <div style={{ color: CREAM_MUTED, fontSize: 13, fontWeight: 700 }}>— Sarah M., Murrieta</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive grid fix */}
            <style>{`
        @media (max-width: 860px) {
          .transformation-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}

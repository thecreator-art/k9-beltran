'use client';
import { useState } from 'react';

const SERVICES = [
    'Dog Training',
    'Board & Train',
    'Dog Boarding',
    'Day Training',
    'Off Leash Training',
    'Pickup & Drop Off',
    'Puppy Training',
    'Obedience Training',
    'Dog Photography',
    'Other / Not Sure'
];

export default function SandboxPage() {
    const [status, setStatus] = useState('');
    const [form, setForm] = useState({
        dogName: '',
        ownerName: '',
        phone: '',
        email: '',
        service: '',
        message: ''
    });

    const webhookUrl = 'https://services.leadconnectorhq.com/hooks/4DeH3g2CLc50xEdY5i4k/webhook-trigger/edfc8c08-e760-4c91-b925-78229e4a6ca2';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Firing via Secure Backend...');

        try {
            const response = await fetch('/api/sandbox-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            
            const result = await response.json();
            if (result.ok) {
                setStatus('Sent! All fields extracted to LeadConnector.');
            } else {
                setStatus('Error: ' + result.error);
            }
        } catch (error) {
            setStatus('Connection Error: ' + error.message);
        }
    };

    return (
        <div style={{ backgroundColor: '#F9F7F2', minHeight: '100vh', padding: '80px 24px', fontFamily: 'var(--font-inter), sans-serif' }}>
            <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.06)' }}>
                <h1 style={{ color: '#2D5016', fontSize: '28px', marginBottom: '8px' }}>Start My Dog's Training</h1>
                <p style={{ color: '#666', marginBottom: '32px', fontSize: '15px' }}>Same week availability — Eduardo responds within a few hours.</p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>Dog's name</label>
                            <input type="text" name="dogName" required placeholder="what's your pup's name?" value={form.dogName} onChange={handleChange} style={inputStyle} />
                        </div>
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>Your name</label>
                            <input type="text" name="ownerName" required placeholder="your name" value={form.ownerName} onChange={handleChange} style={inputStyle} />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>Phone</label>
                            <input type="tel" name="phone" required placeholder="best number to reach you" value={form.phone} onChange={handleChange} style={inputStyle} />
                        </div>
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>Email</label>
                            <input type="email" name="email" required placeholder="your@email.com" value={form.email} onChange={handleChange} style={inputStyle} />
                        </div>
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>Service interested in</label>
                        <select name="service" required value={form.service} onChange={handleChange} style={inputStyle}>
                            <option value="">-- pick one, we can always switch --</option>
                            {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>About your dog</label>
                        <textarea name="message" placeholder="tell me about your dog — breed, age, what you're working on" rows={3} value={form.message} onChange={handleChange} style={{ ...inputStyle, resize: 'none' }} />
                    </div>

                    <button type="submit" style={{ 
                        marginTop: '12px',
                        padding: '18px', 
                        backgroundColor: '#8C4F14', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '40px', 
                        fontWeight: 700, 
                        fontSize: '18px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(140, 79, 20, 0.2)'
                    }}>
                        Start My Dog's Transformation →
                    </button>

                    {status && (
                        <div style={{ 
                            padding: '16px', 
                            backgroundColor: '#F7F4EF', 
                            borderRadius: '6px', 
                            border: '1px solid #8C4F14',
                            fontWeight: 600,
                            textAlign: 'center'
                        }}>
                            {status}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

const formGroupStyle = { display: 'flex', flexDirection: 'column', gap: '8px' };
const labelStyle = { color: '#1C1C1C', fontWeight: 600, fontSize: '14px' };
const inputStyle = { padding: '12px 16px', borderRadius: '8px', border: '1px solid #DDD', backgroundColor: '#F9F9F9', fontSize: '15px' };

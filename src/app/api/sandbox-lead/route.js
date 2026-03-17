import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const payload = await request.json();
        
        console.log('--- EXTRACING LEAD FOR SANDBOX ---');
        console.log(payload);

        const WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL || 'https://services.leadconnectorhq.com/hooks/4DeH3g2CLc50xEdY5i4k/webhook-trigger/edfc8c08-e760-4c91-b925-78229e4a6ca2';

        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`LeadConnector rejected: ${errorText}`);
        }

        return NextResponse.json({ ok: true, message: 'Fired successfully!' });

    } catch (err) {
        console.error('Webhook Failure:', err.message);
        return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
    }
}

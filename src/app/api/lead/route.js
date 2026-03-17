import fs from 'node:fs/promises';
import path from 'node:path';
import { NextResponse } from 'next/server';
import { inferLeadContext, validateLeadPayload } from '@/lib/lead-utils';

export async function POST(request) {
    let payload;

    try {
        payload = await request.json();
    } catch {
        return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
    }

    const { isValid, errors, lead } = validateLeadPayload(payload);
    if (!isValid) {
        return NextResponse.json({ ok: false, errors }, { status: 422 });
    }

    const context = inferLeadContext(lead.pageUrl, lead.sourceService || lead.service, lead.sourceLocation);
    const submission = {
        id: crypto.randomUUID(),
        submittedAt: new Date().toISOString(),
        ownerName: lead.ownerName,
        dogName: lead.dogName,
        phone: lead.phone,
        phoneDigits: lead.phoneDigits,
        email: lead.email,
        service: lead.service,
        message: lead.message,
        pageUrl: context.pageUrl,
        sourcePath: context.sourcePath,
        sourceService: context.service,
        sourceLocation: context.location,
        ip:
            request.headers.get('x-forwarded-for') ||
            request.headers.get('x-real-ip') ||
            '',
        userAgent: request.headers.get('user-agent') || '',
    };

    try {
        const leadsDir = process.env.LEAD_STORAGE_DIR || path.join(process.cwd(), 'data');
        await fs.mkdir(leadsDir, { recursive: true });
        await fs.appendFile(path.join(leadsDir, 'leads.ndjson'), `${JSON.stringify(submission)}\n`, 'utf8');

        // GHL / LeadConnector Webhook
        const WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL || 'https://services.leadconnectorhq.com/hooks/4DeH3g2CLc50xEdY5i4k/webhook-trigger/edfc8c08-e760-4c91-b925-78229e4a6ca2';

        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(submission),
            cache: 'no-store',
        });

        if (!response.ok) {
            console.error('GHL Webhook rejected the lead');
        }

    } catch (err) {
        console.error('Lead process error:', err.message);
        // We still return OK if local storage worked, or a specific error if you prefer
        return NextResponse.json(
            { ok: false, error: 'Lead submission failed. Please call Eduardo directly.' },
            { status: 500 }
        );
    }

    return NextResponse.json({ ok: true, id: submission.id });
}

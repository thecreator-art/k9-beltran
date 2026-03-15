import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy | Shepards K9',
    description: 'Privacy Policy for Shepards K9 dog training in Murrieta, CA.',
    robots: { index: false, follow: true }
};

export default function PrivacyPolicy() {
    return (
        <main className="section" style={{ minHeight: '60vh', paddingTop: 140 }}>
            <div className="container content-narrow">
                <h1 className="section-title">Privacy Policy</h1>
                <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.8, color: 'var(--text-dark)' }}>
                    At Shepards K9, we respect your privacy and are committed to protecting any personal information you share with us.
                    This Privacy Policy outlines how we collect, use, and safeguard the data you provide when interacting with our website,
                    booking evaluations, or contacting our team. We do not sell or share your personal data with third-party marketing companies.
                </p>
                <h2 style={{ fontSize: 24, marginTop: 40, marginBottom: 16 }}>Information Collection</h2>
                <p style={{ fontSize: 18, lineHeight: 1.8, color: 'var(--text-dark)' }}>
                    When you submit a contact form or request a consultation, we collect basic necessary information including your name,
                    phone number, email address, and details about your dog. This information is used strictly to communicate with you
                    regarding our dog training services and to schedule potential evaluations.
                </p>
                <div style={{ marginTop: 60 }}>
                    <Link href="/" className="btn btn-outline">← Back to Home</Link>
                </div>
            </div>
        </main>
    );
}

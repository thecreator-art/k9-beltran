import Link from 'next/link';

export const metadata = {
    title: 'Terms of Service | Shepards K9',
    description: 'Terms of Service for Shepards K9.',
    robots: { index: false, follow: true }
};

export default function TermsOfService() {
    return (
        <main className="section" style={{ minHeight: '60vh', paddingTop: 140 }}>
            <div className="container content-narrow">
                <h1 className="section-title">Terms of Service</h1>
                <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.8, color: 'var(--text-dark)' }}>
                    Welcome to Shepards K9. By accessing our website and utilizing our dog training or boarding services,
                    you agree to be bound by the following Terms of Service. These terms govern your engagement with our
                    trainers and our programs.
                </p>
                <h2 style={{ fontSize: 24, marginTop: 40, marginBottom: 16 }}>Service Engagement</h2>
                <p style={{ fontSize: 18, lineHeight: 1.8, color: 'var(--text-dark)' }}>
                    All dog training programs require an initial evaluation to ensure the appropriate program fit. We reserve
                    the right to refuse service if a dog presents an unmanageable safety risk. Training results depend heavily
                    on owner compliance and consistency in applying Eduardo's methods in real-world environments outside of planned sessions.
                </p>
                <div style={{ marginTop: 60 }}>
                    <Link href="/" className="btn btn-outline">← Back to Home</Link>
                </div>
            </div>
        </main>
    );
}

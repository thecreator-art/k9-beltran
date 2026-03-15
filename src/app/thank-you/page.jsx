import Link from 'next/link';
import { SITE_CONFIG } from '@/config/siteConfig';

export const metadata = {
    title: 'Thank You | Shepards K9',
    description: 'We have received your evaluation request.',
    alternates: {
        canonical: `${SITE_CONFIG.siteUrl}/thank-you`,
    },
    robots: {
        index: false,
        follow: false,
    }
};

export default function ThankYouPage() {
    return (
        <main className="bg-white min-h-[70vh] flex flex-col items-center justify-center py-32 px-6 border-t border-zinc-200">
            <div className="max-w-2xl text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <span className="text-4xl">✓</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 uppercase tracking-tight">
                    Evaluation Request Received
                </h1>
                <p className="text-xl text-zinc-700 leading-relaxed mb-8">
                    Eduardo Beltran or a member of the Shepards K9 team will reach out to you shortly to discuss your dog and confirm your initial evaluation.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <Link href="/" className="inline-block px-8 py-4 bg-red-700 hover:bg-red-600 text-white font-bold tracking-wide uppercase rounded transition-colors shadow flex-shrink-0">
                        Return to Homepage
                    </Link>
                    <a href={SITE_CONFIG.phoneHref} className="inline-block px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold tracking-wide uppercase rounded transition-colors shadow flex-shrink-0">
                        {SITE_CONFIG.phone}
                    </a>
                </div>
            </div>
        </main>
    );
}

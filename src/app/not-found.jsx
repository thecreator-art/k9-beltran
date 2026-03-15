import Link from 'next/link';
import { SITE_CONFIG } from '@/config/siteConfig';

export const metadata = {
    title: '404 - Page Not Found | Shepards K9',
    description: 'The page you are looking for could not be found. Return to Shepards K9.',
    robots: {
        index: false,
        follow: true, // Let them follow the links out of the 404 page
    }
};

export default function NotFound() {
    return (
        <main className="bg-white min-h-[75vh] flex flex-col justify-center items-center py-20 px-6">
            <div className="max-w-2xl text-center">
                <h1 className="text-8xl md:text-9xl font-black text-zinc-900 mb-6 tracking-tighter">
                    404
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-6 uppercase tracking-tight">
                    Page Not Found
                </h2>
                <p className="text-xl text-zinc-600 leading-relaxed mb-10 max-w-xl mx-auto">
                    The dog training page or resource you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <Link href="/" className="inline-block px-10 py-5 bg-red-700 hover:bg-red-800 text-white font-bold tracking-widest uppercase rounded shadow transition-colors flex-shrink-0">
                        Return to Homepage
                    </Link>
                    <a href={SITE_CONFIG.phoneHref} className="inline-block px-10 py-5 bg-zinc-900 hover:bg-black text-white font-bold tracking-widest uppercase rounded shadow transition-colors flex-shrink-0">
                        Call {SITE_CONFIG.phone}
                    </a>
                </div>
            </div>

            <div className="mt-20 pt-10 border-t border-zinc-200 w-full max-w-2xl text-center">
                <p className="text-zinc-500 mb-4">Looking for a specific program?</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-wider text-red-700">
                    <Link href="/board-and-train" className="hover:text-red-900">Board & Train</Link>
                    <span>|</span>
                    <Link href="/puppy-training" className="hover:text-red-900">Puppy Training</Link>
                    <span>|</span>
                    <Link href="/contact" className="hover:text-red-900">Contact Us</Link>
                </div>
            </div>
        </main>
    );
}

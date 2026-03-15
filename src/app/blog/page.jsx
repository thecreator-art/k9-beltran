import Link from 'next/link';
import Image from 'next/image';
import { getBlogImage } from '@/config/blog-presentation';
import { getIndexableBlogPosts } from '@/lib/indexability';
import { SITE_CONFIG } from '@/config/siteConfig';

export const metadata = {
    title: 'Dog Training Blog & Case Studies | Shepards K9',
    description: 'Read brutally honest insights on canine behavior, e-collar training, pulling, reactivity, and true leadership from Eduardo Beltran in Murrieta, CA.',
    alternates: {
        canonical: `${SITE_CONFIG.url}/blog`
    }
};

export default function BlogIndexPage() {
    const posts = getIndexableBlogPosts();

    return (
        <main className="section-light">
            <section className="page-hero" style={{ minHeight: 420, background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)' }}>
                <div className="container text-center" style={{ maxWidth: 900 }}>
                    <div className="section-label" style={{ color: 'rgba(255,255,255,0.8)' }}>Field Notes</div>
                    <h1 style={{ color: '#fff' }}>
                        Training Insights & Field Notes
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 18, maxWidth: 760, margin: '0 auto' }}>
                        Raw, unfiltered truths about working dogs, severe reactivity, and exactly how we fix the behaviors other trainers cannot handle.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="blog-grid">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                            <div className="blog-card-thumb">
                                <Image
                                    src={getBlogImage(post)}
                                    alt={post.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                                <span className="blog-card-badge">Insight</span>
                            </div>

                            <div className="blog-card-body">
                                <div className="blog-meta">
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric',
                                    })}
                                </div>
                                <h2>
                                    {post.title}
                                </h2>
                                <p>
                                    {post.excerpt}
                                </p>
                            </div>
                            <div className="blog-card-footer">
                                <span className="blog-card-cta">
                                    Read Full Article
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ marginLeft: 8 }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

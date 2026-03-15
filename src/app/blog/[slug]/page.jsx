import { notFound } from 'next/navigation';
import Image from 'next/image';
import { BLOG_POSTS } from '@/config/blog-content';
import { buildEduardoLongformArticle } from '@/config/blog-longform';
import { getBlogImage, getRelatedServiceLinks } from '@/config/blog-presentation';
import { SITE_CONFIG } from '@/config/siteConfig';
import InternalLinkingHub from '@/components/InternalLinkingHub';
import { isIndexableBlogPost } from '@/lib/indexability';

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) return {};

    return {
        title: `${post.title} | Shepards K9 Trainers`,
        description: post.excerpt,
        alternates: {
            canonical: `${SITE_CONFIG.url}/blog/${post.slug}`
        },
        robots: isIndexableBlogPost(post) ? undefined : {
            index: false,
            follow: true,
        },
    };
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const relatedServices = getRelatedServiceLinks(post);
    const articleContent = buildEduardoLongformArticle(post, relatedServices);

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        author: {
            '@type': 'Person',
            name: post.author,
            url: `${SITE_CONFIG.url}/about`
        },
        publisher: {
            '@type': 'Organization',
            name: SITE_CONFIG.businessName,
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_CONFIG.url}/logo.svg`
            }
        },
        datePublished: post.date,
        dateModified: post.date,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${SITE_CONFIG.url}/blog/${post.slug}`
        }
    };

    const formatContent = (body) => {
        return body.split('\n\n').filter((paragraph) => paragraph.trim() !== '').map((paragraph, index) => {
            if (paragraph.startsWith('**') && paragraph.includes('**', 2)) {
                const titleMatch = paragraph.match(/\*\*(.*?)\*\*/);
                if (titleMatch) {
                    const titleText = titleMatch[1];
                    const remainingBody = paragraph.replace(/\*\*(.*?)\*\*/, '').trim();
                    return (
                        <div key={index} style={{ marginTop: 40, marginBottom: 20 }}>
                            <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', marginBottom: 14 }}>{titleText}</h2>
                            {remainingBody && <p style={{ fontSize: 18, color: 'var(--text-dark)', lineHeight: 1.8 }}>{remainingBody}</p>}
                        </div>
                    );
                }
            }

            return (
                <p key={index} style={{ fontSize: 18, color: 'var(--text-dark)', lineHeight: 1.9, marginBottom: 24 }}>
                    {paragraph}
                </p>
            );
        });
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <main>
                <article>
                    <header className="page-hero page-hero-standard">
                        <Image
                            src={getBlogImage(post)}
                            alt={post.title}
                            fill
                            priority
                            sizes="100vw"
                            style={{ objectFit: 'cover' }}
                        />
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.45)', zIndex: 1 }} />
                        <div className="container" style={{ maxWidth: 900, position: 'relative', zIndex: 2 }}>
                            <div className="text-center">
                                <div className="section-label" style={{ color: 'rgba(255,255,255,0.84)', marginBottom: 16 }}>
                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} | By {post.author}
                                </div>
                                <h1 style={{ color: '#fff', marginBottom: 20 }}>{post.title}</h1>
                                <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.88)', maxWidth: 760, margin: '0 auto' }}>
                                    {post.excerpt}
                                </p>
                            </div>
                        </div>
                    </header>

                    <section className="section">
                        <div className="container content-narrow">
                            {formatContent(articleContent)}
                            <div className="section-sm" style={{ paddingTop: 40, paddingBottom: 40, marginBottom: 16 }}>
                                <div className="section-label">Related Services</div>
                                <div className="location-grid">
                                    {relatedServices.map((link) => (
                                        <a key={link.href} href={link.href} className="location-chip">
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </article>

                <section className="section section-light" style={{ borderTop: '1px solid var(--border)' }}>
                    <div className="container text-center" style={{ maxWidth: 760 }}>
                        <div className="section-label">Next Step</div>
                        <h2 className="section-title">Stop reading. Start training.</h2>
                        <div className="rule" style={{ margin: '0 auto 24px' }}></div>
                        <p style={{ fontSize: 18, color: 'var(--text-muted)' }}>
                            If you recognize your dog in this article, reading about it will not fix it. Eduardo will. Reach out and get a direct recommendation for the right program.
                        </p>
                        <a href="/contact" className="btn btn-primary btn-lg">
                            Request Your Evaluation Today
                        </a>
                        <InternalLinkingHub type="blog" />
                    </div>
                </section>
            </main>
        </>
    );
}

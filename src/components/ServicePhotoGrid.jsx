import Image from 'next/image';

export default function ServicePhotoGrid({ images = [], altPrefix = 'Shepards K9 dog training' }) {
    const usableImages = images.slice(0, 3);

    if (usableImages.length === 0) return null;

    return (
        <section className="section section-light">
            <div className="container">
                <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
                    {usableImages.map((src, index) => (
                        <div key={`${src}-${index}`} style={{ position: 'relative', minHeight: 260, borderRadius: 18, overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                            <Image
                                src={src}
                                alt={`${altPrefix} photo ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

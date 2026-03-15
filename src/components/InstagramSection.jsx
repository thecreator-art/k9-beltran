'use client';
import { useRef, useState } from 'react';

const VIDEOS = [
    { src: '/videos/reel1.mp4', poster: '/videos/poster1.jpg' },
    { src: '/videos/reel2.mp4', poster: '/videos/poster2.jpg' },
    { src: '/videos/reel3.mp4', poster: '/videos/poster3.jpg' },
    { src: '/videos/reel4.mp4', poster: '/videos/poster4.jpg' },
    { src: '/videos/reel5.mp4', poster: '/videos/poster5.jpg' },
    { src: '/videos/reel6.mp4', poster: '/videos/poster6.jpg' },
];

function VideoCard({ src, poster }) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div style={{
            width: 320,
            height: 568, // 9:16 aspect ratio
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 16px 40px rgba(0,0,0,0.1)',
            flexShrink: 0,
            background: '#0a0a0a',
            position: 'relative',
            cursor: 'pointer',
            scrollSnapAlign: 'start'
        }} onClick={togglePlay}>
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                preload="none"
                loop
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onEnded={() => setIsPlaying(false)}
            />
            {/* Play Button Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isPlaying ? 'transparent' : 'rgba(0,0,0,0.3)',
                transition: 'background 0.3s ease',
            }}>
                <div style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.25)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.4)',
                    opacity: isPlaying ? 0 : 1,
                    transform: isPlaying ? 'scale(0.8)' : 'scale(1)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: 4 }}>
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default function InstagramSection() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -352 : 352; // 320 card width + 32 gap
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section style={{
            background: '#F9FAFB',
            padding: '100px 0',
            position: 'relative',
        }}>
            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            <div className="container" style={{ textAlign: 'center', marginBottom: 40, padding: '0 24px' }}>
                <h2 style={{
                    color: '#111827',
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(32px, 5vw, 48px)',
                    fontWeight: 800,
                    margin: 0
                }}>
                    Dog Training Tips from Eduardo
                </h2>
                <p style={{ color: '#4B5563', fontSize: 18, margin: '16px auto 0', maxWidth: 600 }}>
                    Simple, honest, accurate.
                </p>
            </div>

            <div style={{ position: 'relative', maxWidth: 1400, margin: '0 auto' }}>
                {/* Arrow Left */}
                <button
                    onClick={(e) => { e.preventDefault(); scroll('left'); }}
                    style={{
                        position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)', zIndex: 10,
                        width: 56, height: 56, borderRadius: '50%', background: 'white', border: '1px solid #E5E7EB',
                        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.1)', color: '#111827'
                    }}
                    aria-label="Scroll left"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    className="hide-scrollbar"
                    style={{
                        display: 'flex',
                        gap: 32,
                        overflowX: 'auto',
                        scrollSnapType: 'x mandatory',
                        padding: '40px 80px', // Extra horizontal padding gives space for the arrows, vertical prevents top/bottom shadow cutoffs
                        scrollBehavior: 'smooth'
                    }}
                >
                    {VIDEOS.map((vid, i) => (
                        <VideoCard key={i} src={vid.src} poster={vid.poster} />
                    ))}
                </div>

                {/* Arrow Right */}
                <button
                    onClick={(e) => { e.preventDefault(); scroll('right'); }}
                    style={{
                        position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)', zIndex: 10,
                        width: 56, height: 56, borderRadius: '50%', background: 'white', border: '1px solid #E5E7EB',
                        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.1)', color: '#111827'
                    }}
                    aria-label="Scroll right"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </div>

            <div style={{ textAlign: 'center', marginTop: 16 }}>
                <a
                    href="https://www.instagram.com/k9beltran/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 12,
                        background: '#111827',
                        color: '#FFFFFF',
                        padding: '16px 36px',
                        borderRadius: '50px',
                        fontSize: 18,
                        fontWeight: 700,
                        textDecoration: 'none',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                        transition: 'transform 0.2s, box-shadow 0.2s'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.25)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)'; }}
                >
                    Follow Eduardo on Instagram
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
        </section>
    );
}

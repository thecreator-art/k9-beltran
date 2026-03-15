'use client';
import { useEffect, useRef } from 'react';

/**
 * Creates a true JS-driven 0.5x speed parallax scrolling background section.
 */
export default function ParallaxSection({ bgImage, bgPosition = 'center', height = '50vh', minHeight = '400px', children, style = {}, overlay = true }) {
    const sectionRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !bgRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            // Only animate if the section is somewhat in the viewport
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                // Calculate how much the window has scrolled past the top of the element
                const scrollOffset = window.innerHeight - rect.top;
                // Move the background 0.5px for every 1px scrolled
                bgRef.current.style.transform = `translateY(${scrollOffset * 0.5}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial setup
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                position: 'relative',
                width: '100%',
                height,
                minHeight,
                overflow: 'hidden',
                ...style
            }}
        >
            <div
                ref={bgRef}
                style={{
                    position: 'absolute',
                    top: '-50%', // Start higher so it can scroll down
                    left: 0,
                    width: '100%',
                    height: '200%', // Taller than the section to prevent blank areas
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: bgPosition,
                    backgroundRepeat: 'no-repeat',
                    zIndex: 0,
                    willChange: 'transform'
                }}
            />
            {overlay && (
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', zIndex: 1 }} />
            )}
            <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>
                {children}
            </div>
        </section>
    );
}

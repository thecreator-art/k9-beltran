'use client';
import { useEffect, useRef } from 'react';

/**
 * A cleanly reusable IntersectionObserver component.
 * It adds a "reveal-visible" class to the container when it scrolls into view.
 * If `stagger` is true, it instead finds all `.stagger-item` children and animates them sequentially.
 */
export default function ScrollReveal({ children, stagger = false, delayOffset = 0, style = {}, className = "" }) {
    const ref = useRef(null);

    useEffect(() => {
        const currentRef = ref.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (stagger) {
                            const items = currentRef.querySelectorAll('.stagger-item');
                            items.forEach((item, index) => {
                                setTimeout(() => {
                                    item.classList.add('reveal-visible');
                                }, delayOffset + (index * 100)); // 100ms stagger between items
                            });
                        } else {
                            setTimeout(() => {
                                currentRef.classList.add('reveal-visible');
                            }, delayOffset);
                        }
                        observer.unobserve(currentRef);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
        );

        observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [stagger, delayOffset]);

    return (
        <div ref={ref} className={`scroll-reveal ${stagger ? 'is-stagger-parent' : ''} ${className}`} style={{ ...style, width: '100%' }}>
            {children}
        </div>
    );
}

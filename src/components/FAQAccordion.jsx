'use client';
import { useState } from 'react';

export default function FAQAccordion({ faqs, jsonLd = true }) {
    const [openIndex, setOpenIndex] = useState(null);
    const normalizedFaqs = faqs.map((faq) => ({
        question: faq.question ?? faq.q,
        answer: faq.answer ?? faq.a,
    }));

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: normalizedFaqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <>
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            <div className="faq-list">
                {normalizedFaqs.map((faq, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                        <div className="faq-item" key={idx}>
                            <button
                                className={`faq-question ${isOpen ? 'open' : ''}`}
                                onClick={() => setOpenIndex(isOpen ? null : idx)}
                                aria-expanded={isOpen}
                            >
                                <span>{faq.question}</span>
                                <svg className="faq-chevron" viewBox="0 0 24 24">
                                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                                </svg>
                            </button>
                            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                                {faq.answer}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

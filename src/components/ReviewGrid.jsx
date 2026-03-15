import { REVIEWS } from '@/config/reviews';

export default function ReviewGrid({ reviews = REVIEWS }) {
    return (
        <div className="reviews-grid">
            {reviews.map((review, idx) => (
                <div key={idx} className="review-card">
                    <div className="review-stars">{'★'.repeat(review.rating)}</div>
                    <p className="review-text">"{review.text}"</p>
                    <div className="review-author">
                        <div className="review-avatar">{review.author[0]}</div>
                        <div>
                            <div className="review-name">{review.author}</div>
                            <div className="review-location">{review.location}</div>
                            <div className="review-service">{review.service}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

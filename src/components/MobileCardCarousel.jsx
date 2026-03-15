export default function MobileCardCarousel({
    items = [],
    renderItem,
    className = '',
    gridClassName = 'card-grid',
}) {
    if (!items.length) return null;

    return (
        <>
            <div className={`${gridClassName} ${className}`.trim()}>
                {items.map((item, index) => renderItem(item, index))}
            </div>
            <div className="mobile-card-marquee" aria-hidden="true">
                <div className="mobile-card-marquee-track">
                    {[...items, ...items].map((item, index) => (
                        <div key={index} className="mobile-card-marquee-item">
                            {renderItem(item, index % items.length)}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

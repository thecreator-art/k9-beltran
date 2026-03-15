import { TRUST_SIGNALS } from '@/config/siteConfig';

export default function TrustBar() {
    return (
        <div className="trust-bar">
            <div className="container">
                <div className="trust-bar-inner">
                    {TRUST_SIGNALS.map((signal, i) => (
                        <div key={signal.label} style={{ display: 'contents' }}>
                            <div className="trust-item">
                                <span className="trust-item-icon">{signal.icon}</span>
                                <span>{signal.label}</span>
                            </div>
                            {i < TRUST_SIGNALS.length - 1 && (
                                <span className="trust-sep" aria-hidden="true">|</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

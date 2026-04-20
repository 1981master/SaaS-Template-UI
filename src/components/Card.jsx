/**
 * Card Component
 * Props:
 *  - children: content inside card
 *  - className: optional additional classes
 */
export default function Card({ children, className = '' }) {
    return (
        <div
            className={`card glass ${className}`}
            style={{
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
        >
            {children}
        </div>
    )
}

import './Badge.css'

export default function Badge({
    count,
    children,
    showZero = false,
    max = 99,
    position = 'top-right', // top-right | top-left | bottom-right | bottom-left
    variant = 'error', // primary | success | warning | error
    size = 'md', // sm | md | lg
    dot = false,
    className = '',
}) {
    const displayCount =
        typeof count === 'number' && count > max ? `${max}+` : count

    const isVisible = dot || count > 0 || showZero

    return (
        <div className={`badge-wrapper ${className}`}>
            {children}

            {isVisible && (
                <span
                    className={`badge badge-${variant} badge-${size} badge-${position} ${
                        dot ? 'badge-dot' : ''
                    }`}
                >
                    {!dot && displayCount}
                </span>
            )}
        </div>
    )
}

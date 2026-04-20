import './Tag.css'

export default function Tag({
    children,
    color = 'primary',
    className = '',
    pill = false,
}) {
    return (
        <span
            className={`tag ${className} ${pill ? 'pill' : ''}`}
            style={{ '--tag-color': `var(--${color})` }}
        >
            {children}
        </span>
    )
}

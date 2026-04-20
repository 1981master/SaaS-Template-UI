import './Tooltip.css'

export default function Tooltip({
    children,
    text,
    position = 'top',
    className = '',
}) {
    return (
        <div className={`tooltip-wrapper ${className}`}>
            {children}

            <div className={`tooltip tooltip-${position}`}>{text}</div>
        </div>
    )
}

import './Button.css'

export default function Button({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    size = 'md',
    disabled = false,
    className = '',
    ...rest
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`btn btn-${variant} btn-${size} ${className} ${
                disabled ? 'btn-disabled' : ''
            }`}
            {...rest}
        >
            {children}
        </button>
    )
}

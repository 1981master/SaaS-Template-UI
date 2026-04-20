import './Switch.css'

export default function Switch({
    checked = false,
    onChange,
    disabled = false,
    size = 'md', // sm, md, lg
    className = '',
    ...rest
}) {
    return (
        <label
            className={`switch-wrapper switch-${size} ${disabled ? 'switch-disabled' : ''} ${className}`}
        >
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className="switch-input"
                {...rest}
            />
            <span className="switch-track">
                <span className="switch-thumb" />
            </span>
        </label>
    )
}

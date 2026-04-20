import './Radio.css'

export default function Radio({
    checked = false,
    onChange,
    disabled = false,
    label = '',
    name,
    value,
    className = '',
    ...rest
}) {
    return (
        <label
            className={`radio-wrapper ${className} ${
                disabled ? 'radio-disabled' : ''
            }`}
        >
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className="radio-input"
                {...rest}
            />
            <span className="radio-circle" />
            {label && <span className="radio-label">{label}</span>}
        </label>
    )
}

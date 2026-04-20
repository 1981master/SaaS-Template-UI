import './Checkbox.css'

export default function Checkbox({
    checked = false,
    onChange,
    disabled = false,
    label = '',
    className = '',
    ...rest
}) {
    return (
        <label
            className={`checkbox-wrapper ${className} ${
                disabled ? 'checkbox-disabled' : ''
            }`}
        >
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className="checkbox-input"
                {...rest}
            />
            <span className="checkbox-box" />
            {label && <span className="checkbox-label">{label}</span>}
        </label>
    )
}

import './Textarea.css'

export default function Textarea({
    value,
    onChange,
    placeholder = '',
    rows = 4,
    disabled = false,
    size = 'md',
    className = '',
    ...rest
}) {
    return (
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            disabled={disabled}
            className={`textarea textarea-${size} ${className} ${
                disabled ? 'textarea-disabled' : ''
            }`}
            {...rest}
        />
    )
}

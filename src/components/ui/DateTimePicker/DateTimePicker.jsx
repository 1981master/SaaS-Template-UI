import './DateTimePicker.css'

export default function DateTimePicker({
    type = 'date', // 'date' | 'time' | 'datetime-local'
    value,
    onChange,
    label,
    className = '',
    disabled = false,
    ...rest
}) {
    return (
        <div className={`datetime-picker-wrapper ${className}`}>
            {label && <label className="datetime-picker-label">{label}</label>}
            <input
                type={type}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className="datetime-picker-input"
                {...rest}
            />
        </div>
    )
}

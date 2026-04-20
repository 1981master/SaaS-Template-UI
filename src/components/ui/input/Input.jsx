import './input.css'

export default function Input({
    label,
    type = 'text',
    value,
    onChange,
    placeholder,
    size = 'md',
    variant = 'default',
    disabled = false,
    error,
    helperText,
    leftIcon,
    rightIcon,
    className = '',
    inputClassName = '',
    ...rest
}) {
    return (
        <div className={`input-wrapper input-${size} ${className}`}>
            {label && <label className="input-label">{label}</label>}

            <div
                className={`input-container input-${variant} ${
                    error ? 'input-error' : ''
                } ${disabled ? 'input-disabled' : ''}`}
            >
                {leftIcon && (
                    <span className="input-icon left">{leftIcon}</span>
                )}

                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={`input-field ${inputClassName}`}
                    {...rest}
                />

                {rightIcon && (
                    <span className="input-icon right">{rightIcon}</span>
                )}
            </div>

            {(error || helperText) && (
                <p className={`input-message ${error ? 'error' : ''}`}>
                    {error || helperText}
                </p>
            )}
        </div>
    )
}

import { useState } from 'react'
import './Selection.css'

export default function Selection({
    options = [],
    value,
    onChange,
    placeholder = 'Select...',
    disabled = false,
    className = '',
}) {
    const [open, setOpen] = useState(false)

    const handleSelect = (option) => {
        onChange(option)
        setOpen(false)
    }

    return (
        <div
            className={`selection-wrapper ${className} ${disabled ? 'disabled' : ''}`}
            onClick={() => !disabled && setOpen(!open)}
        >
            <div className="selection-display">
                {value ? value.label : placeholder}
                <span className={`selection-arrow ${open ? 'open' : ''}`} />
            </div>
            {open && (
                <ul className="selection-options">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className={`selection-option ${
                                value && value.value === option.value
                                    ? 'selected'
                                    : ''
                            }`}
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

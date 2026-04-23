import { useState } from 'react'
import './Accordion.css'

export default function Accordion({
    items = [], // [{ title, content }]
    defaultOpenIndex = null,
    allowMultiple = false,
    className = '',
    variant = 'default', // default | bordered | minimal
    iconPosition = 'right', // left | right
    rounded = true,
    shadow = false,
    onChange = () => {},
}) {
    const [openIndexes, setOpenIndexes] = useState(
        defaultOpenIndex !== null ? [defaultOpenIndex] : [],
    )

    const toggle = (index) => {
        let updated

        if (allowMultiple) {
            updated = openIndexes.includes(index)
                ? openIndexes.filter((i) => i !== index)
                : [...openIndexes, index]
        } else {
            updated = openIndexes.includes(index) ? [] : [index]
        }

        setOpenIndexes(updated)
        onChange(updated)
    }

    return (
        <div
            className={`accordion ${variant} ${rounded ? 'rounded' : ''} ${shadow ? 'shadow' : ''} ${className}`}
        >
            {items.map((item, index) => {
                const isOpen = openIndexes.includes(index)

                return (
                    <div
                        key={index}
                        className={`accordion-item ${isOpen ? 'open' : ''}`}
                    >
                        <div
                            className="accordion-header"
                            onClick={() => toggle(index)}
                        >
                            {iconPosition === 'left' && (
                                <span
                                    className={`icon ${isOpen ? 'rotate' : ''}`}
                                >
                                    ⌄
                                </span>
                            )}

                            <span className="title">{item.title}</span>

                            {iconPosition === 'right' && (
                                <span
                                    className={`icon ${isOpen ? 'rotate' : ''}`}
                                >
                                    ⌄
                                </span>
                            )}
                        </div>

                        <div className="accordion-content">{item.content}</div>
                    </div>
                )
            })}
        </div>
    )
}

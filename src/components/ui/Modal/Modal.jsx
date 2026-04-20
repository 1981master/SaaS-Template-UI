import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import Button from '../Button'
import './Modal.css'

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
    footer,
    size = 'md',
    closeOnOverlayClick = true,
    showCloseButton = true,
    className = '',
    ...rest
}) {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    if (!isOpen) return null

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget && closeOnOverlayClick) {
            onClose?.()
        }
    }

    return createPortal(
        <div
            className="modal-overlay"
            onClick={handleOverlayClick}
        >
            <div
                className={`modal modal-${size} ${className}`}
                {...rest}
            >
                {(title || showCloseButton) && (
                    <div className="modal-header">
                        {title && <h3 className="modal-title">{title}</h3>}

                        {showCloseButton && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={onClose}
                                className="btn-icon modal-close-btn"
                            >
                                <img
                                    src="/images/close.png"
                                    alt="close"
                                    className="close-icon"
                                />
                            </Button>
                        )}
                    </div>
                )}

                <div className="modal-body">{children}</div>

                {footer && <div className="modal-footer">{footer}</div>}
            </div>
        </div>,
        document.body,
    )
}

export default function Modal({ isOpen, onClose, children, title = '' }) {
    if (!isOpen) return null

    return (
        <div
            className="modal-overlay"
            onClick={onClose}
        >
            <div
                className="modal glass scale-in"
                onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside
            >
                {title && <h2 style={{ marginBottom: '1rem' }}>{title}</h2>}
                {children}
                <button
                    className="btn btn-outline mt-3"
                    onClick={onClose}
                    style={{ float: 'right' }}
                >
                    Close
                </button>
            </div>
        </div>
    )
}

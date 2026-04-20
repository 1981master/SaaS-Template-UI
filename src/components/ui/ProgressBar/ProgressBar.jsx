import './ProgressBar.css'

export default function ProgressBar({
    value,
    max = 100,
    indeterminate = false,
    showLabel = false,
    size = 'md',
    variant = 'primary',
    className = '',
    ...rest
}) {
    const percent = indeterminate
        ? 0
        : Math.min(100, Math.max(0, (value / max) * 100))

    return (
        <div
            className={`progress ${className}`}
            {...rest}
        >
            <div className={`progress-track progress-${size}`}>
                <div
                    className={`progress-fill progress-${variant} ${
                        indeterminate ? 'progress-indeterminate' : ''
                    }`}
                    style={!indeterminate ? { width: `${percent}%` } : {}}
                />
            </div>

            {showLabel && !indeterminate && (
                <span className="progress-label">{Math.round(percent)}%</span>
            )}
        </div>
    )
}

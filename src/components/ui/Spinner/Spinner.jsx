import './Spinner.css'

export default function Spinner({
    size = 'md',
    color = 'primary',
    className = '',
    ...rest
}) {
    return (
        <div
            className={`spinner spinner-${size} spinner-${color} ${className}`}
            {...rest}
        />
    )
}

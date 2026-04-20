import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeToast } from '../store/slice/toastSlice'

export default function Toast() {
    const dispatch = useDispatch()
    const toasts = useSelector((state) => state.toast)
    const timeoutMap = useRef(new Map()) // track timers

    useEffect(() => {
        const currentTimeoutMap = timeoutMap.current // capture for effect

        toasts.forEach((toast) => {
            if (!currentTimeoutMap.has(toast.id)) {
                const timer = setTimeout(() => {
                    dispatch(removeToast(toast.id))
                    currentTimeoutMap.delete(toast.id)
                }, toast.duration || 1000)

                currentTimeoutMap.set(toast.id, timer)
            }
        })

        // Clean up timers when component unmounts
        return () => {
            currentTimeoutMap.forEach((timer) => clearTimeout(timer))
            currentTimeoutMap.clear()
        }
    }, [toasts, dispatch])

    return (
        <div className="toast-container">
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className={`toast ${toast.type}`}
                    onClick={() => {
                        clearTimeout(timeoutMap.current.get(toast.id))
                        dispatch(removeToast(toast.id))
                        timeoutMap.current.delete(toast.id)
                    }}
                >
                    {toast.message}
                    <span
                        className="toast-close"
                        onClick={() => {
                            clearTimeout(timeoutMap.current.get(toast.id))
                            dispatch(removeToast(toast.id))
                            timeoutMap.current.delete(toast.id)
                        }}
                    >
                        ×
                    </span>
                </div>
            ))}
        </div>
    )
}

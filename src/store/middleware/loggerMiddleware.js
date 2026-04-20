// loggerMiddleware.js
export const loggerMiddleware = (store) => (next) => (action) => {
    if (process.env.NODE_ENV !== 'development') return next(action)

    const sanitize = (obj) => {
        if (obj === null || typeof obj !== 'object') return obj

        const copy = Array.isArray(obj) ? [...obj] : { ...obj }

        if (copy.payload?.token) {
            copy.payload = { ...copy.payload, token: '[SANITIZED]' }
        }

        if (copy.meta?.arg?.password) {
            copy.meta.arg = { ...copy.meta.arg, password: '[HIDDEN]' }
        }

        // ===== RECURSIVELY SANITIZE NESTED OBJECTS =====
        Object.keys(copy).forEach((key) => {
            if (typeof copy[key] === 'object' && copy[key] !== null) {
                copy[key] = sanitize(copy[key])
            }
        })

        return copy
    }

    console.log(
        '%cAction type:',
        'color: #03A9F4; font-weight: bold;',
        action.type,
    )

    console.log(
        '%cSanitized Action:',
        'color: #03A9F4; font-weight: bold;',
        sanitize(action),
    )

    console.log(
        '%cPrev state:',
        'color: #FF9800; font-weight: bold;',
        sanitize(store.getState()),
    )

    const result = next(action)

    console.log(
        '%cNext state:',
        'color: #4CAF50; font-weight: bold;',
        sanitize(store.getState()),
    )

    return result
}

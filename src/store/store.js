import { configureStore } from '@reduxjs/toolkit'
import { loggerMiddleware } from './middleware/loggerMiddleware'
import { authReducer, themeReducer, toastReducer } from './slice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        toast: toastReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
})

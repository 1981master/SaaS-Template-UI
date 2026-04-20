import { createSlice } from '@reduxjs/toolkit'

let nextId = 1

export const toastSlice = createSlice({
    name: 'toast',
    initialState: [],
    reducers: {
        addToast: (state, action) => {
            state.push({ id: nextId++, ...action.payload })
        },
        removeToast: (state, action) =>
            state.filter((toast) => toast.id !== action.payload),
        clearToasts: () => [],
    },
})

export const { addToast, removeToast, clearToasts } = toastSlice.actions
export default toastSlice.reducer

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../utils/axiosConfig'

const API_URL = `${process.env.REACT_APP_API_URL}api/auth`

// Load token and user from localStorage
const storedToken = localStorage.getItem('token')
const storedUser = localStorage.getItem('user')

export const fetchAllRoles = createAsyncThunk(
    'auth/fetchAllRoles',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_URL}/roles`)
            return response.data
        } catch (error) {
            return rejectWithValue(
                'Failed to fetch roles',
                // error.response?.data?.error || 'Failed to fetch roles',
            )
        }
    },
)

export const updateUserRoles = createAsyncThunk(
    'auth/updateUserRoles',
    async ({ userId, roles }, { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `/api/auth/updateRoles/${userId}`,
                roles,
            )
            return response.data
        } catch (err) {
            return rejectWithValue('Fail to Update User Roles')
            // return rejectWithValue(err.response.data || 'Fail to Update User Roles')
        }
    },
)

// ----------------- LOGIN -----------------
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API_URL}/login`, credentials)
            return response.data // { token, user }
        } catch (error) {
            return rejectWithValue(
                'Login failed Try Again Or consider Update your credentials in case of forget it. and it could be Network Issue try after some time.',
                // error.response?.data?.error || 'Login failed',
            )
        }
    },
)

// ----------------- SIGNUP -----------------
export const signupUser = createAsyncThunk(
    'auth/signupUser',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API_URL}/signup`, data)
            return response.data
        } catch (error) {
            return rejectWithValue(
                'Signup failed',
                // error.response?.data?.message || 'Signup failed',
            )
        }
    },
)

// ----------------- FETCH ALL USERS -----------------
export const fetchAllUsers = createAsyncThunk(
    'auth/fetchAllUsers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_URL}/all`)
            return response.data
        } catch (error) {
            return rejectWithValue(
                'Failed to fetch users',
                // error.response?.data?.error || 'Failed to fetch users',
            )
        }
    },
)

// ----------------- UPDATE USER -----------------
export const updateUser = createAsyncThunk(
    'auth/updateUser',
    async (user, { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `${API_URL}/update/${user.id}`,
                user,
            )
            return response.data
        } catch (error) {
            return rejectWithValue(
                'Failed to update user',
                // error.response?.data?.error || 'Failed to update user',
            )
        }
    },
)

// ----------------- DELETE USER -----------------
export const deleteUser = createAsyncThunk(
    'auth/deleteUser',
    async (id, { rejectWithValue }) => {
        try {
            await axios.delete(`${API_URL}/delete/${id}`)
            return id
        } catch (error) {
            return rejectWithValue(
                // error.response?.data?.error || 'Failed to delete user',
                'Failed to delete user',
            )
        }
    },
)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: storedToken || null,
        user: storedUser ? JSON.parse(storedUser) : null,
        users: [],
        roles: [],
        isAuthenticated: !!storedToken,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.token = null
            state.user = null
            state.users = []
            state.isAuthenticated = false
            state.loading = false
            state.error = null
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        },
    },
    extraReducers: (builder) => {
        builder
            // LOGIN
            .addCase(loginUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false
                state.token = action.payload.token
                state.user = action.payload.user
                state.isAuthenticated = true

                localStorage.setItem('token', action.payload.token)
                localStorage.setItem(
                    'user',
                    JSON.stringify(action.payload.user),
                )
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            // SIGNUP
            .addCase(signupUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(signupUser.fulfilled, (state) => {
                state.loading = false
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            // FETCH ALL USERS
            .addCase(fetchAllUsers.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            // UPDATE USER
            .addCase(updateUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false
                const index = state.users.findIndex(
                    (u) => u.id === action.payload.id,
                )
                if (index !== -1) {
                    state.users[index] = action.payload
                }
                // If the updated user is the currently logged-in user, update it in state & localStorage
                if (state.user?.id === action.payload.id) {
                    state.user = action.payload
                    localStorage.setItem('user', JSON.stringify(action.payload))
                }
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // DELETE USER
            .addCase(deleteUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false
                state.users = state.users.filter(
                    (user) => user.id !== action.payload,
                )
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            // ----------------- FETCH ALL ROLES -----------------
            .addCase(fetchAllRoles.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchAllRoles.fulfilled, (state, action) => {
                state.loading = false
                state.roles = action.payload // store fetched roles
            })
            .addCase(fetchAllRoles.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(updateUserRoles.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(updateUserRoles.fulfilled, (state, action) => {
                state.loading = false
                // Update the specific user's roles in state
                const updatedUser = action.payload
                const index = state.users.findIndex(
                    (u) => u.id === updatedUser.id,
                )
                if (index !== -1) {
                    state.users[index] = updatedUser
                }
            })
            .addCase(updateUserRoles.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload || action.error.message
            })
    },
})

export const { logout } = authSlice.actions
export default authSlice.reducer

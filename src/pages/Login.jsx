import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../store/slice/authSlice'
import { addToast } from '../store/slice/toastSlice'
import '../styles/login.css'

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { loading, error, isAuthenticated } = useSelector(
        (state) => state.auth,
    )

    const [form, setForm] = useState({
        username: '',
        password: '',
    })

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(
                addToast({
                    type: 'toast-success',
                    message: 'Login Successful',
                }),
            )
            navigate('/dashboard')
        }
    }, [isAuthenticated, dispatch, navigate])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser(form))
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-card glass scale-in">
                <h2 className="auth-title">DVS Login</h2>
                <p className="auth-subtitle">Login to continue</p>

                <form
                    onSubmit={handleSubmit}
                    className="auth-form"
                >
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="input"
                        value={form.username}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="input mt-2"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />

                    {error && (
                        <p style={{ color: 'red', marginTop: '10px' }}>
                            {error}
                        </p>
                    )}

                    <button
                        className="btn btn-success w-full mt-3"
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <p className="auth-footer">
                    Don’t have an account? <Link to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    )
}

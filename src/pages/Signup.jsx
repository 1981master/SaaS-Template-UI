import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axiosConfig'

export default function Signup() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage('')
        setIsError(false)

        // Check if passwords match
        if (password !== rePassword) {
            setMessage('Passwords do not match')
            setIsError(true)
            return
        }

        setLoading(true)

        try {
            const response = await axios.post('/api/auth/signup', {
                firstName,
                lastName,
                phoneNumber,
                username,
                email,
                password, // only send the main password
            })

            setMessage(response.data.message || 'Signup successful')
            setIsError(false)

            if (response.status === 200) {
                setTimeout(() => navigate('/login'), 1500)
                setFirstName('')
                setLastName('')
                setPhoneNumber('')
                setUsername('')
                setEmail('')
                setPassword('')
                setRePassword('')
            }
        } catch (error) {
            setIsError(true)
            if (error.response) {
                setMessage(error.response.data.message || 'Signup failed')
            } else {
                setMessage('Error connecting to server')
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-card glass scale-in">
                <h2 className="auth-title">DVS Create Account</h2>
                <p className="auth-subtitle">Sign up to get started</p>

                <form
                    className="auth-form"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="input mt-2"
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="input mt-2"
                        required
                    />
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="input mt-2"
                        required
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input mt-2"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input mt-2"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input mt-2"
                        required
                    />
                    <input
                        type="password"
                        name="rePassword"
                        placeholder="Re-enter Password"
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                        className="input mt-2"
                        required
                    />
                    {message && (
                        <p
                            style={{
                                marginTop: '10px',
                                color: isError ? 'red' : 'green',
                            }}
                        >
                            {message}
                        </p>
                    )}
                    <button
                        type="submit"
                        className="btn btn-primary w-full mt-3"
                        disabled={loading}
                    >
                        {loading ? 'Signing up...' : 'Signup'}
                    </button>
                </form>

                <p className="auth-footer">
                    Already have an account?{' '}
                    <span
                        style={{ color: 'var(--primary)', cursor: 'pointer' }}
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    )
}

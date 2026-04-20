import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/ui/Button'
import { logout } from '../store/slice/authSlice'
import { toggleTheme } from '../store/slice/themeSlice'

export default function Header() {
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme.mode)
    const user = useSelector((state) => state.auth.user)

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <header className="header">
            <div className="left">
                <div className="logo">MyApp</div>
            </div>

            <div className="center" />

            <div className="right">
                <div className="user">
                    <span>Welcome: {user?.name || 'User'}</span>
                </div>

                <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => dispatch(toggleTheme())}
                >
                    {theme === 'dark' ? ' Light Theme' : ' Dark Theme'}
                </Button>
                <Button
                    variant="danger"
                    size="sm"
                    onClick={handleLogout}
                >
                    Sign Out
                </Button>
            </div>
        </header>
    )
}

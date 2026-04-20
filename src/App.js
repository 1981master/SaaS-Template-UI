import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import AppRoutes from './routes/routes'

export default function App() {
    const theme = useSelector((state) => state.theme.mode)

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
        console.log(theme)
    }, [theme])

    return (
        <HashRouter>
            <AppRoutes />
        </HashRouter>
    )
}

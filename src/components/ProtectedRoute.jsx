import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
    const { isAuthenticated, token } = useSelector((state) => state.auth)

    if (!isAuthenticated || !token) {
        return (
            <Navigate
                to="/login"
                replace
            />
        )
    }

    return <Outlet />
}

import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'
import MainLayout from '../layouts/MainLayout'

import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

export default function AppRoutes() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route
                path="/login"
                element={<Login />}
            />
            <Route
                path="/signup"
                element={<Signup />}
            />

            {/* Protected Routes (App Shell) */}
            <Route element={<ProtectedRoute />}>
                <Route element={<MainLayout />}>
                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />
                </Route>
            </Route>

            {/* Catch-all */}
            <Route
                path="*"
                element={
                    <Navigate
                        to="/login"
                        replace
                    />
                }
            />
        </Routes>
    )
}

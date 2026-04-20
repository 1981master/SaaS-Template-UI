import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import DarkModeToggle from '../components/DarkModeToggle'

export default function Sidebar() {
    const location = useLocation()
    const [collapsed, setCollapsed] = useState(false)

    const user = useSelector((state) => state.auth.user)
    const roles = user?.roles || []

    const theme = useSelector((state) => state.theme?.mode) // if you store theme in redux

    const navItems = [
        {
            name: 'Dashboard',
            path: '/dashboard',
            rolesAllowed: ['ROLE_DATAENTRY', 'ROLE_ADMIN'],
        },
    ]

    const filteredNavItems = navItems.filter(
        (item) =>
            !item.rolesAllowed ||
            item.rolesAllowed.some((role) => roles.includes(role)),
    )

    return (
        <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            {/* TOP CONTROLS */}
            <div className="sidebar-top">
                {/* SIDEBAR TOGGLE */}
                <div className="toggle-item">
                    <span className="toggle-label">
                        Sidebar: {collapsed ? 'Collapsed' : 'Expanded'}
                    </span>

                    <button
                        className="sidebar-switch-btn"
                        onClick={() => setCollapsed((prev) => !prev)}
                    >
                        <span
                            className={`switch-track ${collapsed ? 'on' : 'off'}`}
                        >
                            <span className="switch-thumb">
                                {collapsed ? '→' : '←'}
                            </span>
                        </span>
                    </button>
                </div>

                {/* THEME TOGGLE */}
                <div className="toggle-item">
                    <span className="toggle-label">
                        {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
                    </span>

                    <DarkModeToggle />
                </div>
            </div>

            {/* NAVIGATION */}
            <nav className="sidebar-nav">
                {filteredNavItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`sidebar-link ${
                            location.pathname === item.path ? 'active' : ''
                        }`}
                    >
                        {collapsed ? item.name[0] : item.name}
                    </Link>
                ))}
            </nav>
        </aside>
    )
}

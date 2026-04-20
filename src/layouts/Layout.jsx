import { Outlet } from 'react-router-dom'
import Toast from '../components/Toast'
import '../styles/footer.css'
import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout() {
    const currentYear = new Date().getFullYear()
    return (
        <div className="app-layout">
            <Sidebar />

            <div style={{ flex: 1 }}>
                <Header />
                <main className="main-content">
                    <Outlet />
                </main>
            </div>

            <Toast />
            <footer className="footer">
                <div className="footer-content">
                    <span>
                        © DVS Vending Services – {currentYear} All rights
                        reserved
                    </span>
                </div>
            </footer>
        </div>
    )
}

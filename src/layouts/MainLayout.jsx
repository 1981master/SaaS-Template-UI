import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

export default function MainLayout() {
    return (
        <div className="app-layout">
            <Sidebar />

            <div className="main-area">
                <Header />

                <main className="content">
                    <Outlet />
                </main>

                <Footer />
            </div>
        </div>
    )
}

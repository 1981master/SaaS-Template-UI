export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
                © {new Date().getFullYear()} MyApp
            </div>

            <div className="footer-center">
                <span>Version 1.0.0</span>
            </div>

            <div className="footer-right">
                <a href="/privacy">Privacy</a>
                <a href="/terms">Terms</a>
            </div>
        </footer>
    )
}

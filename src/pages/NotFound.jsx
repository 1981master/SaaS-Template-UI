export default function NotFound() {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1 style={{ fontSize: '3rem', color: '#ff4040' }}>
                404 - Page Not Found
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#6c757d' }}>
                Sorry, the page you're looking for doesn't exist.
            </p>
            <a
                href="/login"
                style={{
                    fontSize: '1.2rem',
                    color: '#007bff',
                    textDecoration: 'underline',
                }}
            >
                Go back/Login Page
            </a>
        </div>
    )
}

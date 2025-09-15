    function ErrorPage() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h2 className="mb-3">Page Not Found</h2>
        <p className="text-muted mb-4">
            Sorry, the page you are looking for does not exist.
        </p>
        <a href="/" className="btn btn-primary">
            ⬅ Back to Home
        </a>
        </div>
    );
    }

    export default ErrorPage;

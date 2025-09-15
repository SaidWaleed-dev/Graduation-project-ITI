import { Link } from "react-router-dom";

function Home() {
    return (
        
        <div className="container text-center mt-5">
        
        <div className="p-5 bg-light rounded-3 shadow">
            <h1 className="display-4 fw-bold text-primary">أهلاً بيك في موقعنا 🛒</h1>
            <p className="lead mt-3">
            هنا هتلاقي أفضل المنتجات – تقدر تستعرضها وتضيف منتجات جديدة بكل سهولة.
            </p>

            
            <Link to="/products" className="btn btn-success btn-lg mt-4">
            تصفح المنتجات
            </Link>
        </div>

        
        <div className="container mt-5">
        <h2 className="text-center fw-bold mb-5">ازاي تستخدم موقعنا؟ 🚀</h2>

        <div className="d-flex justify-content-between align-items-center position-relative">
            
            <div
            className="position-absolute top-50 start-0 w-100"
            style={{ height: "4px", backgroundColor: "#e0e0e0", zIndex: 0 }}
            ></div>

            
            <div className="text-center position-relative" style={{ zIndex: 1 }}>
            <div
                className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto shadow"
                style={{ width: "80px", height: "80px", fontSize: "30px" }}
            >
                🔑
            </div>
            <h5 className="mt-3 fw-bold">سجل دخولك</h5>
            <p className="text-muted">ابدأ بتسجيل الدخول أو إنشاء حساب جديد.</p>
            </div>

            
            <div className="text-center position-relative" style={{ zIndex: 1 }}>
            <div
                className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center mx-auto shadow"
                style={{ width: "80px", height: "80px", fontSize: "30px" }}
            >
                🛒
            </div>
            <h5 className="mt-3 fw-bold">استعرض المنتجات</h5>
            <p className="text-muted">شوف المنتجات المعروضة بكل سهولة.</p>
            </div>

            
            <div className="text-center position-relative" style={{ zIndex: 1 }}>
            <div
                className="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center mx-auto shadow"
                style={{ width: "80px", height: "80px", fontSize: "30px" }}
            >
                ➕
            </div>
            <h5 className="mt-3 fw-bold">أضف أو عدل</h5>
            <p className="text-muted">ضيف منتجات جديدة أو عدل القديمة.</p>
            </div>

            
            <div className="text-center position-relative" style={{ zIndex: 1 }}>
            <div
                className="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center mx-auto shadow"
                style={{ width: "80px", height: "80px", fontSize: "30px" }}
            >
                🎉
            </div>
            <h5 className="mt-3 fw-bold">استمتع</h5>
            <p className="text-muted">كل حاجة سهلة وسريعة في مكان واحد.</p>
            </div>
        </div>
        </div>

    </div>
    );
}

export default Home;

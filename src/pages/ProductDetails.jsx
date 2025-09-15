    import { useEffect, useState } from "react";
    import { useParams, useNavigate } from "react-router-dom";
    import axios from "axios";

    function ProductDetails() {
    let { id } = useParams();
    let navigate = useNavigate();
    let [product, setProduct] = useState(null);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
        .get(`http://localhost:3000/products/${id}`)
        .then((res) => {
            setProduct(res.data);
            setLoading(false);
        })
        .catch((err) => {
            console.error("Error fetching product:", err);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <p className="text-center my-5">⏳ Loading product details...</p>;
    }

    if (!product) {
        return (
        <p className="text-center my-5 text-danger">❌ Product not found.</p>
        );
    }

    return (
        <div className="container my-5">
        <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: "600px" }}>
            <img
            src={product.image}
            alt={product.name}
            className="card-img-top mb-3"
            style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
            <h2 className="card-title">{product.name}</h2>
            <p className="text-muted">Category: {product.category}</p>
            <h4 className="fw-bold text-success">${product.price}</h4>
            <p className="card-text">{product.description}</p>

            <div className="d-flex justify-content-center gap-2 mt-3">
                <button
                onClick={() => navigate("/products")}
                className="btn btn-secondary"
                >
                ⬅ Back
                </button>
                <button
                onClick={() => navigate(`/products/edit/${product.id}`)}
                className="btn btn-warning"
                >
                ✏ Edit
                </button>
            </div>
            </div>
        </div>
        </div>
    );
    }

    export default ProductDetails;

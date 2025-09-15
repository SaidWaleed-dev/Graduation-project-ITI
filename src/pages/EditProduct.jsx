    import  { useEffect, useState } from "react";
    import { useParams, useNavigate } from "react-router-dom";
    import axios from "axios";

    function EditProduct() {
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

    const handleChange = async (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .put(`http://localhost:3000/products/${id}`, product)
        .then(() => {
            alert("✅ Product updated successfully!");
            navigate("/products");
        })
        .catch((err) => console.error("Error updating product:", err));
    };

    if (loading) {
        return <p className="text-center my-5">⏳ Loading product data...</p>;
    }

    if (!product) {
        return (
        <p className="text-center my-5 text-danger">❌ Product not found.</p>
        );
    }

    return (
        <div className="container my-5">
        <h1 className="text-center text-primary mb-4">✏ Edit Product</h1>
        <form
            onSubmit={handleSubmit}
            className="card shadow-lg p-4 mx-auto"
            style={{ maxWidth: "600px" }}
        >
            <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input
                type="text"
                name="name"
                value={product.name || ""}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter product name"
                required
            />
            </div>

            <div className="mb-3">
            <label className="form-label fw-semibold">Category</label>
            <input
                type="text"
                name="category"
                value={product.category || ""}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter category"
                required
            />
            </div>

            <div className="mb-3">
            <label className="form-label fw-semibold">Price</label>
            <input
                type="number"
                name="price"
                value={product.price || ""}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter price"
                required
            />
            </div>

            <div className="mb-3">
            <label className="form-label fw-semibold">Image URL</label>
            <input
                type="text"
                name="image"
                value={product.image || ""}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter image URL"
                required
            />
            </div>

            <div className="mb-3">
            <label className="form-label fw-semibold">Description</label>
            <textarea
                name="description"
                value={product.description || ""}
                onChange={handleChange}
                className="form-control"
                rows="3"
                placeholder="Enter product description"
            />
            </div>

            <div className="d-grid">
            <button type="submit" className="btn btn-success btn-lg">
                💾 Save Changes
            </button>
            </div>
        </form>
        </div>
    );
    }

    export default EditProduct;

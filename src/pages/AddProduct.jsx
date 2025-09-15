    import  { useState } from "react";
    import { useNavigate } from "react-router-dom";
    import axios from "axios";

    function AddProduct() {
    let navigate = useNavigate();
    let [product, setProduct] = useState({
        name: "",
        category: "",
        price: "",
        image: "",
        description: "",
    });

    const handleChange = async (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:3000/products", product)
        .then(() => {
            alert("✅ Product added successfully!");
            navigate("/products");
        })
        .catch((err) => console.error("Error adding product:", err));
    };

    return (
        <div className="container my-5">
        <h1 className="text-center text-success mb-4">➕ Add Product</h1>
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
                value={product.name}
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
                value={product.category}
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
                value={product.price}
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
                value={product.image}
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
                value={product.description}
                onChange={handleChange}
                className="form-control"
                rows="3"
                placeholder="Enter product description"
            />
            </div>

            <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg">
                💾 Save Product
            </button>
            </div>
        </form>
        </div>
    );
    }

    export default AddProduct;

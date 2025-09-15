import  { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  let [products, setProducts] = useState([]);
  let [search, setSearch] = useState("");
  let [sortBy, setSortBy] = useState("default");
  let [filterCategory, setFilterCategory] = useState("all");
  let [loading, setLoading] = useState(true);

  
  const fetchProducts = () => {
    setLoading(true);
    axios
    .get("http://localhost:3000/products")
    .then((res) => setProducts(res.data))
    .catch((err) => console.error("❌ Error fetching products:", err))
    .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:3000/products/${id}`);
        alert("✅ Product deleted successfully!");
        fetchProducts();
      } catch (err) {
        console.error("❌ Error deleting product:", err);
      }
    }
  };

  const filteredProducts = products
    .filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        (filterCategory === "all" || p.category === filterCategory)
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "priceLow") return a.price - b.price;
      if (sortBy === "priceHigh") return b.price - a.price;
      return 0;
    });

    let categories = ["all"];
    products.forEach((p) => {
      if (!categories.includes(p.category)) {
        categories.push(p.category);
      }
    });
    if (loading) {
      return <p className="text-center my-5">⏳ Loading products...</p>;
    }

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>All Products</h1>
        <Link to="/products/add" className="btn btn-success">
          ➕ Add Product
        </Link>
      </div>

      <div className="row mb-3">
        <div className="col-md-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Sort by</option>
            <option value="name">Name (A-Z)</option>
            <option value="priceLow">Price (Low → High)</option>
            <option value="priceHigh">Price (High → Low)</option>
          </select>
        </div>

        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted">
                    Category: {product.category}
                  </p>
                  <h6 className="fw-bold">${product.price}</h6>
                  <div className="mt-auto d-flex gap-2">
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      View
                    </Link>
                    <Link
                      to={`/products/edit/${product.id}`}
                      className="btn btn-warning btn-sm"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Products;

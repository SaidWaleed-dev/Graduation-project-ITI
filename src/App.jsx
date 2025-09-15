import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from "./layout/Default";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
function App() {
  return (
    <>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Default />}>
            
              <Route index element={<Home />} />

              <Route path="login" element={<Login />} />
              <Route path="profile" element={<Profile />} />

              <Route path="/products" element={<Products />} />
              <Route path="/products/add" element={<AddProduct />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/products/edit/:id" element={<EditProduct />} />

              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;

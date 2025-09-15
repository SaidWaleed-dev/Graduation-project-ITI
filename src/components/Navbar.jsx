import {  NavLink } from 'react-router'
import './styleComponent.css'
function Navbar() { 
    return (
        <>
            <nav className="navbar bg-body-tertiary">
            <div className="container-fluid d-flex justify-content-between flex-row-reverse">
                <span className="navbar-brand mb-0 h1">
                    <img src="/public/logo.jpg" alt="logo" width="80px" height="60px" />
                </span>
                <div className='hover'>
                    <NavLink className={({isActive})=> `me-3 text-decoration-none ${isActive ? "text-dark fw-bold" : "text-secondary"}`} to="/">Home</NavLink>
                    <NavLink className={({isActive})=> `me-3 text-decoration-none ${isActive ? "text-dark fw-bold" : "text-secondary"}`} to="/products">Products</NavLink>
                    {localStorage.getItem("token") ?<NavLink className={({isActive})=> `me-3 text-decoration-none ${isActive ? "text-dark fw-bold" : "text-secondary"}`} to="/profile">Profile</NavLink>
                    :<NavLink className={({isActive})=> `me-3 text-decoration-none ${isActive ? "text-dark fw-bold" : "text-secondary"}`} to="/login">Login</NavLink>}
                </div>
            </div>
            </nav>
        
    </>
    )
}

export default Navbar
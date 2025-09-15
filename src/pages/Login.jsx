import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import * as z from 'zod'
let userSchema = z.object({
    username : z.string().min(2).max(10),
    password : z.string().min(6)
})
const Login = () => {
    let [user,setUser]=useState({username :"" , password :""})
    let [errors , setErrors] =useState({})
    let navigate = useNavigate()

    const handelChange = async (e)=>{
        setUser({...user ,[e.target.name] : e.target.value})

    }
    const handelSubmit = async (e)=>{
        e.preventDefault()
        let res = userSchema.safeParse(user)
        if(!res.success){
            let newErrors ={}
            res.error.issues.forEach(err=>newErrors[err.path[0]] = err.message)
            setErrors(newErrors)
            toast.error("login faild")
            return;
        }
        setErrors({})
        let {data} = await axios.post('https://dummyjson.com/auth/login',user ,{credentials:'include'})
        localStorage.setItem("token", data.accessToken)
        toast.success("login succsess")
        setTimeout(()=>{
            navigate('/')
        },500)
    }
    return (
        <>  
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow-lg p-4 rounded-4" style={{ width: "400px" }}>
                <h2 className="text-center text-primary mb-4">🔐 Login</h2>
                <form onSubmit={handelSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label fw-semibold">
                    Username
                    </label>
                    <input
                    type="text"
                    id="username"
                    className="form-control"
                    value={user.username}
                    name="username"
                    onChange={handelChange}
                    placeholder="Enter your username"
                    />
                    {errors && errors.username && (
                    <small className="text-danger">{errors.username}</small>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-semibold">
                    Password
                    </label>
                    <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={user.password}
                    name="password"
                    onChange={handelChange}
                    placeholder="Enter your password"
                    />
                    {errors && errors.password && (
                    <small className="text-danger">{errors.password}</small>
                    )}
                </div>

                <div className="d-grid mt-4">
                    <button type="submit" className="btn btn-primary btn-lg rounded-3">
                    Login
                    </button>
                </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login

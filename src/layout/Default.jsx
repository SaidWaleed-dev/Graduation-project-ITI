import Footer from '../components/Footer'
import { Outlet } from 'react-router'
import  Navbar from '../components/Navbar'
function Default() {
    return (
    <>
    <div className='d-flex flex-column justify-content-between' style={{minHeight:"100vh"}}>
        <div >
        <Navbar/>
        <Outlet/>
        </div>
        <Footer/>
    </div>
    </>
)
}

export default Default
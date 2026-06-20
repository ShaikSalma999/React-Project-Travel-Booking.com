import {Link, Outlet} from "react-router-dom"
function Services(){
    return(
        <>
        <h1>Services</h1>
        <Link to = "flights">Flight Service</Link><br/>
        <Link to = "hotes">Hotel Service</Link><br/>
        <Link to = "cabs">Cab Service </Link>
        <Outlet/>
        </>
    )
}
export default Services;
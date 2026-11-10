import {Link} from "react-router-dom"

const Navbar = ()=> {
    return(
<>
<div>
    logo
</div>

<div>
    <Link to={/} >Home</Link>
    <Link to={/About}>About</Link>
    <Link to={/Service}>Service</Link>
    <Link to={/Contact}>Contact</Link>
</div>
</>

    )
}
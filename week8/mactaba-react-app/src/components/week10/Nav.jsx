import { Link } from "react-router";


export default function Navbar (){
    return(
    <nav>
        <Link to='/'>Home</Link>
        <Link to ='/about'>About</Link>
        <Link to ='/products'>Products</Link>
    </nav>
    )
}
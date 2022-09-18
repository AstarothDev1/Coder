import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav className="Navbar" > 
            <div className="title">
                <h1>Edwin Ecommerce</h1>
            </div>
            <div>
                <button className="Button">Niños</button>
                <button className="Button">Niñas</button>
                <button className="Button">Adultos</button>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default Navbar;
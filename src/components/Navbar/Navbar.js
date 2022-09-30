import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {

  return (
      <nav className="NavBar" >
          <div >
            <h3 className='Title'>Anní Store</h3>
          </div>
          <div className="Buttons">
              <button className="Option">Home</button>
              <button className="Option">About</button>
              <button className="Option">Contact</button>
              <button className="Option">Collections</button>
          </div>
          <CartWidget />
      </nav>
  )
}

export default Navbar
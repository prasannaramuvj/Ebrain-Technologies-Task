
import {NavLink} from 'react-router-dom'
import {Search, SearchIcon, ShoppingCartIcon, User} from "lucide-react"

function Navbar(){



  return(

    <>
    <nav className="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
      <div className="container-fluid px-3 px-lg-5">
        <NavLink to="/" className="navbar-brand ">Feane</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navitem">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navitem">
          
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0"  style={{marginLeft:"90px"}}>
             <li className="nav-item">
                <NavLink to="/" className="nav-link">HOME</NavLink>
            </li>
             <li className="nav-item">
                <NavLink to="/menu" className="nav-link">MENU</NavLink>
              
            </li>
             <li className="nav-item">
                <NavLink to="/about" className="nav-link">ABOUT</NavLink>
            </li>
             <li className="nav-item">
                <NavLink to="/book-table" className="nav-link">BOOK TABLE</NavLink>         
            </li>
          </ul>
          <div>
            <ul className='navbar-nav mb-2 mb-lg-0 me-0 me-lg-3'  style={{marginLeft:"90px"}}>
            <li className="nav-item">
              <NavLink to="/" className="nav-link"><User color='white' /></NavLink>
            </li>
             <li className="nav-item">
              <NavLink to="/menu" className="nav-link"><ShoppingCartIcon color='white' /></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link"><SearchIcon color='white' /></NavLink>
            </li>
            </ul>
          </div>
       <button className='btn btn-warning rounded-pill'  style={{marginLeft:"90px"}}>Order Online</button>
          
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
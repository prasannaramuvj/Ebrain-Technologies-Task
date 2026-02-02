import { Link } from 'react-router-dom'
import Menu from './Menu'
import Footer from '../component/Footer'
import About from './About'
function Home(){


  return(
    <>
    <div className="home-container">
    <section className="homepage d-flex flex-column justify-content-center align-items-start">
    <h1 className="py-5 text-white">Fast Food Restaurant</h1>
    <p className="text-white">Doloremque, itaque aperiam facilis rerum, commodi,temporibus sapiente <br />
     ad mollitia laborum quam quisquam esse error unde. Tempora ex <br />
     doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
    <Link to="/menu" className="btn btn-warning rounded-pills mt-4 text-white">Order Now</Link>
    </section>
    </div>
    <section className="menu-wrapper">
        <Menu />
      </section>
    <section>
      <About/>
    </section>
    
    </>
  )
}

export default Home



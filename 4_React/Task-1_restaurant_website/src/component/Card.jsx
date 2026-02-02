import { ShoppingCart } from 'lucide-react'
// import img1 from '../assets/burger.jpg'


function Card(props){


  return(
    <>
    <div className="card card-1 rounded-4">
      <div className="cards-img">
      <img src={props.img} className="card-img"alt="burger image" />
      </div>
      <div className="card-body">
        <h2 className="card-title">Delicious Pizza</h2>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusantium ex saepe deserunt mollitia animi laborum illo molestias corrupti eum.</p>
        <div className="card-detail text-white">
          <ul className="list-unstyled d-flex justify-content-between text-white">
            <li className='text-white'>{props.price}</li>
            <li className='d-flex justify-content-center icon'><ShoppingCart width={20} color='white'/></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}
export default Card
import Card from "../component/Card"
import HomeList from "../component/HomeList"
import img1 from '../assets/card-img/f1.jpg'
import img2 from '../assets/card-img/f2.png'
import img3 from '../assets/card-img/f3.png'
// import img4 from '../assets/card-img/f4.png'
import img5 from '../assets/card-img/f5.png'
import img6 from '../assets/card-img/f6.png'
import img7 from '../assets/card-img/f7.png'
import img8 from '../assets/card-img/f8.png'
import img9 from '../assets/card-img/f9.png'
import { useState } from "react"
import Footer from "../component/Footer"



function Menu(){

  const [selectedCategory,setSelectedCategory] = useState("All");


  const images = [
    { src:img1,alt:'burger-image',category:"Burger",price:"$20"},
    { src:img1, alt:'pizza-image',category: "Pizza",price:"$25"},
    { src:img3, alt:'pizza-image',category: "Pizza",price:"$30"},
    { src:img6, alt:'pizza-image',category: "Pasta",price:"$35"},
    { src:img6, alt:'pizza-image',category: "FRIES",price:"$40"},
    { src:img6, alt:'pizza-image',category:"Burger",price:"$45"},
    { src:img7, alt:'pizza-image',category: "Pizza",price:"$50"},
    { src:img8, alt:'pizza-image',category: "Fries",price:"$55"},
    { src:img9, alt:'pizza-image',category: "Pasta",price:"$60"}
  ];

  const filteresImages = selectedCategory === "All" ? images :
  images.filter((img)=>img.category === selectedCategory)

  


  return(
    <div className="d-flex flex-column justify-content-center align-items-center">
    <h1 className="my-5"> our Menu</h1>
        <HomeList  onSelectCategory={(category) => setSelectedCategory(category)}/>

        <div className="mt-5 card-grid">
          {filteresImages.map((images,index)=>(
            <Card img={images.src} key={index} price={images.price}/>
          ))}
        </div>
        <button className="btn btn-warning my-4">Click Me</button>
    </div>

    

    
  )
}

export default Menu
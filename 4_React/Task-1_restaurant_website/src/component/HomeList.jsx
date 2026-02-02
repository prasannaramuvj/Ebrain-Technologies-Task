import { useState } from "react";

function HomeList({onSelectCategory}){
  const list = ["All","Burger","Pizza","Pasta","Fries"];

  const [activeIndex,setActiveIndex]=useState(0)
  

  
const handleClick = (index) => {
  setActiveIndex(index);
  onSelectCategory(list[index])

}





  return(
    <div className="d-inline-flex list-unstyled">
        {list.map((list,index)=> <button className={`px-3 list-btn rounded-5  ${activeIndex === index ? "btn-active" : ""}`}
        onClick={()=>handleClick(index)}
        type="click" key={index}>{list}</button>)}
    </div>
  )
}

export default HomeList
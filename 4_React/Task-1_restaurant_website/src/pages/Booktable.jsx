import React, { useEffect, useState } from 'react'
import img from '../assets/hero-bg.jpg'
import toast , {Toaster} from 'react-hot-toast'
import axios from 'axios'
import { useNavigate,useLocation } from 'react-router-dom';






function Booktable(){

    const location = useLocation();

   const navigate = useNavigate();

   const isEditMode = location.state?.isEdit||false;
   const editBooking = location.state?.booking||null;




  let initialValue = {name:"",email:"",password:"",number:"",date:""}
  const [input,setInput] = useState(initialValue);
  const [user,setUser] = useState([]);
  console.log(user)

  const [error ,setError] = useState({})




   useEffect(() => {
    if(isEditMode && editBooking) {
      setInput({
        name: editBooking.name,
        email: editBooking.email,
        password: editBooking.password,
        number: editBooking.number,
        date: editBooking.date
      });
     const newErrors = {};
    Object.keys(editBooking).forEach((key) => {
      const message = validate(key, editBooking[key]);
      if (message) newErrors[key] = message;
    });
    setError(newErrors);
  }
}, [isEditMode, editBooking]);



  

async function apiCall(){

  const response = await axios.get("https://68b7bb2173b3ec66cec55e92.mockapi.io/users");
  setUser(response.data);
}

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setInput(prev =>({
      ...prev,[name]:value
    }));

    const validation = validate(name,value)
              setError((prev) => ({ ...prev, [name]: validation}));


  }

   useEffect(() => {
    apiCall();
  },[]);


  const validate = (name, value) => {
    switch (name) {
      case "name":
        if (!value) return "required";
        if (value.length < 3) return "Name must be at least 3 characters";
        return "";

      case "email":
        if (!value) return "required";
        if (!/^\S+@\S+\.\S+$/.test(value)) return "Invalid email address";
        return "";

      case "password":
        if (!value) return "required";
        if (value.length < 6)
          return "Password must be at least 6 characters long";
        return "";

      case "number":
        if (!value) return "required";
        if (value.length !== 10)
          return "Phone number must be 10 digits long";
        return "";

      case "date":
        if (!value) return "required";
        return "";

      default:
        return "";
    }
  };




  const handleSubmit = async  (e)=>{
    e.preventDefault();
    
      const newErrors = {};
    Object.keys(input).forEach((key) => {
      const message = validate(key, input[key]);
      if (message) newErrors[key] = message;
    });

    setError(newErrors);

    if(Object.keys(newErrors).length === 0){

      

      try{
      if(isEditMode){
      await axios.put(`https://68b7bb2173b3ec66cec55e92.mockapi.io/users/${editBooking.id}`,input);
      toast.success('successfully edited your credential!');
      navigate('/table')
      }

      else{
        await axios.post("https://68b7bb2173b3ec66cec55e92.mockapi.io/users",input);
        toast.success('Bookin created successfully');
        setInput(initialValue);
        navigate('/table');

      }
    }
      
     
      catch (err){
        console.log(err);
      toast.error(err)

      }
      


    }
    else{
      toast.error("Create a Valid Credential by entering all field values")
    }
  }

  return(
       <>
       <Toaster/>
       <div className="container my-3">
        <div className="row">
          <div className="col-md-6">
             <h1><i>Book a table</i></h1>
             <form action="" style={{width:"400px"}} onSubmit={handleSubmit}>
                <div className="form-floating mt-2">
                  <input type="text" className="form-control" id="name" value={input.name}  name="name" onChange={handleChange} placeholder="Enter the name" />
                  <label htmlFor="name">Name</label>
                  {error.name && <span className='text-danger'>{error.name}</span>}
                 </div> 
                <div className="form-floating mt-2">
                  <input type="email"  className="form-control" id="mail" value={input.email} name="email" onChange={handleChange} placeholder="Enter the valid Email"/>
                  <label htmlFor="mail">Mail</label>
                   {error.email && <span className='text-danger'>{error.email}</span>}

                </div>
                 <div className="form-floating mt-2">
                  <input type="password"  className="form-control" id="password" value={input.password} name="password" onChange={handleChange} placeholder="Enter the password"/>
                  <label htmlFor="password">Password</label>
                   {error.password && <span className='text-danger'>{error.password}</span>}

                </div>
                <div className="form-floating mt-2">
                  <input type="number"  className="form-control" id="number" value={input.number}  name="number" onChange={handleChange} placeholder="Enter the valid phone no"/>
                  <label htmlFor="number">Enter Valid phone number</label>
                    {error.number && <span className='text-danger'>{error.number}</span>}
                </div>
                <div className="form-floating mt-2">
                  <input type="date"  className="form-control" id="date" value={input.date}  name="date"  onChange={handleChange}  placeholder="Enter the valid Email"/>
                  <label htmlFor="date">Date</label>
                   {error.date && <span className='text-danger'>{error.date}</span>}
                  
                </div>
                <button type="submit" className='btn btn-success px-4 mt-3'>Place Order</button>
             </form>
             </div>
                     <div className="col-lg-6 col-md-12 order-1 order-lg-2 booktable-image-container">

              <div className='img-box'>
                 <img src={img} alt="login side image" /> 
              </div>
             </div>
       </div>
       </div>
      
       </>
  )
}

export default Booktable
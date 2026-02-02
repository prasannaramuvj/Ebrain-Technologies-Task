import axios from 'axios'
import { Delete, DeleteIcon, Edit2Icon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast , {Toaster} from 'react-hot-toast'


function Table(){

  const navigate = useNavigate();

const [user,setUser] = useState([])


async function apiCall(){
  try
  {

  const response = await axios.get("https://68b7bb2173b3ec66cec55e92.mockapi.io/users");
  setUser(response.data);
  }
  catch(err){
    console.log(err)
  }
}

useEffect(()=>{
  apiCall()
},[])





const  handleDelete = async (id)=>{
  if(window.confirm('Are you sure want to delete this message ?')){
    try{
        await axios.delete(`https://68b7bb2173b3ec66cec55e92.mockapi.io/users/${id}`);
        toast.success('data deleted successfully');
        apiCall()

    }
    catch(err){
      console.log(err);
      console.log(user.id)
      toast.error("not deleted ")
    }
  }
}


const handleEdit = (booking)=>{
  navigate('/book-table',{
    state:{
      booking:booking,
      isEdit:true
    }
  });
}



  return(
    <>
    <Toaster/>

    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">S.No</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone:no</th>
          <th scope="col">Date</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {user.map((users,index)=>(
          <tr key={users.id}>
            <th scope='row'>{index+1}</th>
            <td scope='row'>{users.name}</td>
            <td scope='row'>{users.email}</td>
            <td scope='row'>{users.number}</td>
            <td scope='row'>{users.date}</td>
            <td className='d-flex'>
              <button className='btn btn-success px-3 mx-3' onClick={()=> handleEdit(users)}>
                <Edit2Icon size={20}/>
                Edit</button>
              <button className='btn btn-danger px-3' onClick={()=> handleDelete(users.id)}>Delete
                <DeleteIcon size={20}/>
              </button>
            </td>

          </tr>
        )
        )}
      </tbody>
    </table>
    <div className="d-flex justify-content-center aligns-item-center">
       <button className='btn btn-success p-3 my-2' onClick={()=>{
        navigate('/book-table')
       }}>Back to  home page</button>
    </div>
    

    
   

    </>


  )
}

export default Table
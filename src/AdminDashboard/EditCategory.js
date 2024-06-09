import React, {useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const EditCategory = () => {
  
const [name, setname]=useState("")
const [content,setcontent]=useState("")

let{id}=useParams();
useEffect(()=>{
    axios.get(`https://mern-server-ur1u.onrender.com/addcategory/${id}`)
    .then((res)=>{
        console.log('success');
        setname(res.data.name);
        setcontent(res.data.description)
    })
    .catch((err)=>{
        console.log(err);
    })
},[id])
const editcategory = (e)=>{
  if (!name || !content) {
    alert("please fill all the fields")
  }else{
    console.log("clicked");
    axios.put(`https://mern-server-ur1u.onrender.com/addcategory/${id}`,{name:name,description:content})
    .then(()=>{
      alert('😌updated...');
      console.log('updated');
      setname('');
      setcontent('')
    })
    .catch((err)=>{
        alert('unable to update😒');
        console.log(err.message);
    })
  }
  

}


  return (
    <div className='container-fluid mb-5'>
      <div className='container-fluid rounded text-center p-2 mb-5'><h1>Edit Category</h1></div>
      <form className='container w-50'>
      <div className="mb-4">
        <label htmlFor="Input1" className="form-label mb-3"><h2>Category :</h2></label>
        <input type="text" value={name} onChange={(e)=>{setname(e.target.value); console.log(e.target.value);}} className="form-control" id="Input1" placeholder="Enter your Caterory Name"/>
      </div>
      <div className="mb-3">
        <label htmlFor="Textarea1" className="form-label mb-3"><h2>Description :</h2></label>
        <textarea value={content} onChange={(e)=>{setcontent(e.target.value); console.log(e.target.value);}} className="form-control"  id="Textarea1" rows="6" cols="5" placeholder='Enter Details' style={{resize:"none"}}></textarea>
      </div>
      <button type="button" className='btn btn-primary btn-lg' onClick={editcategory}>Update Category</button>
      </form>
    </div>
  )
}

export default EditCategory
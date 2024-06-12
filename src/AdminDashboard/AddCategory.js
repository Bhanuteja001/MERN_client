import React, {useContext, useState } from 'react'
import axios from 'axios'
import context from "../Context/context";

const AddCategory = () => {
  
const [name, setname]=useState("")
const [content,setcontent]=useState("")
const value = useContext(context)
const addcategory = ()=>{
if (!name || !content) {
  value.showAlert("danger","please fill all the fields")
} else {
  console.log("clicked");
    axios.post('https://mern-server-ur1u.onrender.com/addcategory',{name:name,content:content})
    .then(()=>{
     alert('Category Added..🩺');
      setname('');
      setcontent('')
    })
    .catch((err)=>{
      console.log(err.message);
    })
}


}

  return (
    <>
      <div className='w-100 rounded' style={{height:"100%",paddingBottom:"100px"}}>
      <div className='container-fluid mt-2 rounded text-center p-2 mb-3'><h1>Add Category</h1></div>
      <form className='container bg-info-subtle p-5 rounded w-75'>
      <div className="form-floating mb-4">
        <input type="text" value={name} onChange={(e)=>{setname(e.target.value); console.log(e.target.value);}} className="form-control" id="Input1" placeholder=""/>
        <label htmlFor="Input1" className="form-label mb-3"><h6>Category :</h6></label>
      </div>
      <div className="form-floating mb-3 mt-5 ">
        <textarea value={content} onChange={(e)=>{setcontent(e.target.value); console.log(e.target.value);}} className="form-control"  id="Textarea1" rows="6" cols="5" placeholder='' style={{height: " 200px",resize:"none"}}></textarea>
        <label htmlFor="Textarea1" className="form-label mb-3"><h6>Description :</h6></label>
      </div>
      <button type="button" className="btn btn-outline-primary btn-lg " onClick={addcategory}>Add Category</button>
      </form>
      </div>
    </>
    
  )
}

export default AddCategory
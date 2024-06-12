import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";

const DeleteTestimonials = () => {
  const [data,setdata]=useState([]);
  const getdata=()=>{
    axios.get('https://mern-server-ur1u.onrender.com/testimonial/addTestimonial')
    .then((req)=>{
      setdata(req.data)
    })
    .catch((err)=>console.log(err.message))
  }
useEffect(()=>{
  getdata()
},[])
 
const delTestimonial=(id)=>{
  axios.delete(`https://mern-server-ur1u.onrender.com/testimonial/addTestimonial/${id}`)
  .then((req)=>{
    getdata()
  })
  .catch((err)=>{console.log(err.message)})
}

  return (
    <>
      <div className="container rounded text-center p-2 mb-5">
        <h1>Delete & Edit Testimonials</h1>
      </div>
      <div style={{width:"100%",overflow:"auto",height:"100%"}}>
      <table className="container table table-hover table-bordered">
        <thead className="table-dark text-center">
          <tr>
            <th>TESTIMONIAL</th>
            <th>USER NAME</th>
            <th>DELETE</th>
            <th>EDIT</th>
          </tr>
        </thead>
        <tbody>
         {data.map((item)=>{
          return (
            <tr key={item._id}>
            <td>{item.testimonial}</td>
            <td>{item.username}</td>
            <td className="text-center"><button type="button" className="btn btn-danger" onClick={()=>{delTestimonial(item._id)}}><i class="bi bi-trash3-fill"></i></button></td>
            <td className="text-center"><Link type="button" className="btn btn-primary" to={`/editTestimonial/${item._id}`}><i class="bi bi-pencil-fill"></i></Link></td>
          </tr>
          )
         })}
        </tbody>
      </table>
      </div>
      
    </>
  );
};

export default DeleteTestimonials;

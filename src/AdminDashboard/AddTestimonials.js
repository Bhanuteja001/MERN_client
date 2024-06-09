import axios from "axios";
import React, { useState } from "react";

const AddTestimonials = () => {

  const [Testimonial,setTestimonial]=useState('');
  const [Uname,setUname]=useState('');

  const addTestimonial=()=>{
    if (!Testimonial || !Uname) {
      alert("Fill all the fields")
    } else{
      console.log(Testimonial, Uname)
      axios.post('https://mern-server-ur1u.onrender.com/testimonial/addTestimonial',{testimonial:Testimonial,username:Uname})
      .then((req)=>{
        console.log('success');
        setTestimonial('')
        setUname('')
      })
      .catch((err)=>{console.log(err)})
    }
    
  }

  return (
    <>
      <div className="container-fluid rounded text-center p-2 mb-5">
        <h1>Add Testimonials</h1>
      </div>

      <form className="container w-75 bg-body-secondary rounded mt-4 p-5">
        <div className="form-floating mb-5">
          <textarea
            className="form-control mb-5 "
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            rows="8"
            cols="5" value={Testimonial} onChange={(e)=>{setTestimonial(e.target.value);}}
            style={{ height: " 200px", resize: "none" }}
          ></textarea>
          <label htmlFor="floatingTextarea2">
            <h6>Add Testimonial</h6>
          </label>
        </div>
 
        <div className="form-floating mt-5">
          <input
            type="text"
            className="form-control mt-5 "
            id="floatingPassword" value={Uname} onChange={(e)=>{setUname(e.target.value)}}
            placeholder="" 
          />
          <label htmlFor="floatingPassword"><h6>User Name</h6></label>
        </div>
        <button type="button" className="btn btn-outline-secondary mt-4 btn-lg" onClick={addTestimonial}>Add Details</button>
      </form>
    </>
  );
};

export default AddTestimonials;

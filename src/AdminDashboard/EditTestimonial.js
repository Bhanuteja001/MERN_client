import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditTestimonial = () => {
  const [Testimonial, setTestimonial] = useState("");
  const [Uname, setUname] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://mern-server-ur1u.onrender.com/testimonial/addTestimonial/${id}`)
      .then((res) => {
        console.log(res.data);
        setTestimonial(res.data.testimonial);
        setUname(res.data.username);
      })
      .catch((err) => console.log(err.message));
  },[id]);

  const editTestimonial = () => {
    if (!Testimonial || !Uname) {
      alert("Fill all the fields")
    } 
     else{
      axios.put(`https://mern-server-ur1u.onrender.com/testimonial/addTestimonial/${id}`,{testimonial:Testimonial,username:Uname})
     .then((req)=>{
      return navigate('/Dashboard')
     })
     .catch((err)=>{
      console.log(err.message);
     })

     }
  };
  return (
    <>
      <div className="container-fluid  rounded text-center p-2 mb-3">
        <h1>Delete & Edit Testimonials</h1>
      </div>

      <form className="container w-75 bg-body-secondary rounded mt-3 p-5">
        <div className="form-floating mb-5">
          <textarea
            className="form-control mb-5 "
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            rows="8"
            cols="5"
            value={Testimonial}
            onChange={(e) => {
              setTestimonial(e.target.value);
            }}
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
            id="floatingPassword"
            value={Uname}
            onChange={(e) => {
              setUname(e.target.value);
            }}
            placeholder=""
          />
          <label htmlFor="floatingPassword">
            <h6>User Name</h6>
          </label>
        </div>
        <button
          type="button"
          className="btn btn-outline-secondary mt-4 btn-lg"
          onClick={editTestimonial}
        >
          Add Details
        </button>
      </form>
    </>
  );
};

export default EditTestimonial;

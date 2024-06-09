import axios from "axios";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import context from "../Context/context"
const BookAppointment = () => {
  

  const value = useContext(context)

  const {name, hospital}=useParams();
  const [data,setdata]=useState({name:"",email:'',subject:"",phone:"",message:"",doctorname:name,hospital:hospital});
  const bookAppointment=()=>{

    if (!data.name || !data.email || !data.subject || !data.phone || !data.message) {
      value.showAlert('danger',"please fill all the details correctly")
    }
    
    else{
      axios.post(`https://mern-server-ur1u.onrender.com/appointment/bookAppointment`,data)
    .then((req)=>{
      console.log(req.data);
      setdata({name:"",email:'',subject:"",phone:"",message:"",doctorname:name,hospital:hospital})
    })
    .catch((err)=>{console.log(err.message)})
    }
  }
  
  return (
    <>
      <form className="container mt-3 mb-5 w-50 bg-info-subtle p-5 rounded">
        <div className="row mb-3">
          <div className="col-6 ">
            <div className="mb-3 form-floating">
              <input
                type="text"
                className="form-control "
                placeholder=""
                value={data.name}
                onChange={(e)=>{setdata({...data, name:e.target.value})}}
              />
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Yourname
              </label>
            </div>
          </div>

          <div className="col-6">
            <div className="mb-3 form-floating">
              <input
                type="email"
                className="form-control "
                placeholder="name@example.com"
                value={data.email}
                onChange={(e)=>{setdata({...data ,email: e.target.value})}}
              />
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-6">
            <div className="mb-3 form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="subject"
                value={data.subject}
                onChange={(e)=>{setdata({...data ,subject: e.target.value})}}
              />
              <label htmlFor="exampleFormControlInput1" className="form-label">
                subject
              </label>
            </div>
          </div>

          <div className="col-6">
            <div className="mb-3 form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="phone"
                value={data.phone}
                onChange={(e)=>{setdata({...data ,phone: e.target.value})}}
              />
              <label htmlFor="exampleFormControlInput1" className="form-label">
                phone
              </label>
            </div>
          </div>
        </div>

        <div className="mb-5 form-floating">
          <div className="form-floating mb-3 mt-5 ">
            <textarea
              className="form-control"
              rows="6"
              cols="5"
              placeholder="Enter Details"
              style={{ height: " 200px", resize: "none" }}
              value={data.message}
                onChange={(e)=>{setdata({...data ,message: e.target.value})}}
            ></textarea>
            <label htmlFor="Textarea1" className="form-label mb-3">
              <h5>Message :</h5>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-3 ps-5"></div>
          <div className="col-3 ps-5"></div>
          <div className="col-3 ps-5"></div>
          <div className="col-3 mb-4 ps-4"><button type="button" className="btn btn-primary p-3 w-100" onClick={bookAppointment}>BOOK APPOINMENT</button></div>
        </div>
      </form>
    </>
  );
};

export default BookAppointment;

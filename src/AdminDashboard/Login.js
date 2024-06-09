import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
    const [data,setdata]=useState({username:"",password:""});


    const login = ()=>{

      axios.post('https://mern-server-ur1u.onrender.com/auth/login' , {username:data.username , password:data.password})
      .then((req)=>{
        console.log(req.data.token)

        if(req.data.success){
          localStorage.setItem('token', req.data.token)
          setdata({username:"",password:""})
          return navigate('/Dashboard')
  
        }
        else{
          alert("Invalid Credentials")
        }
        
      })
      .catch((err)=>console.log(err.message))
    }



    useEffect(()=>{
      if (localStorage.getItem('token')) {
        return navigate('/Dashboard')
      }
    },[])

  return (
    <main className="bg-danger-subtle p-5" style={{height:"100dvh"}}>
      <div className="container mt-5 p-5">
        <form className=" mt-5 w-50 mx-auto bg-body-tertiary p-5 rounded mb-5 shadow-lg border-top border-5 border-primary">
        <h1 className="text-center">Admin</h1>
          <div className="mb-5 mt-5 form-floating input-group">
            <input
              type="text"
              className="form-control bg-white"
              placeholder=""
              value={data.username}
              onChange={(e)=>{setdata({...data,username:e.target.value})}}
            />
            <span className="input-group-text rounded-end "><h4><i className="bi bi-envelope-fill"></i></h4></span>
           
            <label htmlFor="exampleInputEmail1" className="form-label">
            <h6>Username</h6>
            </label>
          </div>
          <div className="mb-5 form-floating input-group">
            <input
              type="password"
              className="form-control"
              placeholder=""
              value={data.password}
              onChange={(e)=>{setdata({...data,password:e.target.value})}}
            />
             <span className="input-group-text rounded-end "><h4><i className="bi bi-key-fill"></i></h4></span>
            <label for="exampleInputPassword1" className="form-label">
            <h6>password:</h6>
            </label>
          </div>
          
          <button type="button" onClick={login} className="btn btn-primary btn-lg">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;

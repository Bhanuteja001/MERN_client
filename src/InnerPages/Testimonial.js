import axios from "axios";
import React ,{useState , useEffect} from "react";


const Testimonial = () => {

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
  
   
  return (
    <>
    <div className="container mt-5">

       {data.map((item)=>{
         return (
     
          <div className="card bg-secondary-subtle d-flex flex-column mb-5 p-5 justify-content-between" style={{fontSize:'22px',lineHeight:'56.5px'}}>
          <p className="p-2 mb-5"><i className="bi bi-quote " style={{fontSize:'45px'}}> </i>   <em>{item.testimonial}</em></p>
          <p className="p-3 text-end"><h5>{item.username}</h5></p>
        </div>
           
          )
        })}
        </div>
    </>
  );
};

export default Testimonial;

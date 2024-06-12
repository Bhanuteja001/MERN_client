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
     
          <div className="testimonial card bg-secondary-subtle d-flex flex-column mb-5 justify-content-between">
          <p className="p-2 mb-4"><i className="bi bi-quote " style={{fontSize:'40px'}}> </i>   <em>{item.testimonial}</em></p>
          <p className="p-2 text-end"><h6>{item.username}</h6></p>
          </div>
           
          )
        })}
        </div>
    </>
  );
};

export default Testimonial;

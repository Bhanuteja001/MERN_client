import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function BookAppointmentforcustomer() {

    const [dlist, setdlist] = useState([]);
    useEffect(() => {
        axios
          .get(`https://mern-server-ur1u.onrender.com/doctor/addDoctor`)
          .then((res) => {
            setdlist(res.data);
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      }, []);
  return (
    <div className="container">
    {dlist
      .map((e) => {
        return (
          <div className=" mt-2 p-4 w-75 " key={e._id}>
            <div className="row d-flex justify-content-between">
              <div className="col-md-4">
                <div className="mb-3 mt-2">
                  <strong>{e.name}</strong>
                </div>
                <div className="mb-3">
                  {e.qualification}
                </div>
                <div className="mb-3">
                  {e.treatmentname}
                </div>
                <div className="mb-4">
                 {e.hospital}
                </div>
              </div>

              

              <div className="col-md-4">
              <Link to={`/bookAppointment/${e.name}/${e.hospital}`} type="button" className="btn btn-warning  p-3 mt-3 ">
              BOOK APPOINTMENT
            </Link>
              </div>
            </div>
            <hr/>
          </div>
          
        );
      })}
  </div>
  )
}

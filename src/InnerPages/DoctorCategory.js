import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DoctorCategory = () => {
  const [dlist, setdlist] = useState([]);

  const { treatmentname } = useParams();

  console.log(treatmentname);

  useEffect(() => {
    axios
      .get(`https://mern-server-ur1u.onrender.com/doctor/addDoctor`)
      .then((res) => {
        setdlist(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [treatmentname]);

  return (
    <>
      <div className="container-fluid text-light bg-success rounded text-center p-2 mb-5 bread">
        <h1>DOCTORS -</h1> &nbsp;
        <h3 className="text-warning">{treatmentname}</h3>
      </div>

      <div className="container">
        {dlist
          .filter((e) => {
            return e.treatmentname === treatmentname;
          })
          .map((e) => {
            return (
              <div className="mb-5 p-4 w-75" key={e._id}>
                <div className="row">
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
                  <Link to={`/bookAppointment/${e.name}/${e.hospital}`} type="button" className="btn btn-warning  p-3  ms-5 mt-5 ">
                  Book Appointment
                </Link>
                  </div>
                </div>

                <hr/>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default DoctorCategory;
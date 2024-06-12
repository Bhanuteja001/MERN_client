import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const DeleteDoctor = () => {
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

  const DelDoctor = (id) => {
    console.log(id);
    axios
      .delete(`https://mern-server-ur1u.onrender.com/doctor/addDoctor/${id}`)
      .then((res) => {
        axios
          .get(`https://mern-server-ur1u.onrender.com/doctor/addDoctor`)
          .then((res) => {
            setdlist(res.data);
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container-fluid rounded text-center p-2 mb-5">
        <h1>Delete & Edit Doctor</h1>
      </div>
      <div style={{width:"100%",overflow:"auto",height:"100%"}}> 
      <table className="container table  text-justify table-hover table-bordered">
        <thead className="table-dark text-center">
          <tr>
            <th>Treatments</th>
            <th>Name</th>
            <th>Qualification</th>
            <th>Experience</th>
            <th>Hospital</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {dlist.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.treatmentname}</td>
                <td>{item.name}</td>
                <td className="text-uppercase">{item.qualification}</td>
                <td>{item.experience}</td>
                <td>{item.hospital}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      DelDoctor(item._id);
                    }}
                    >
                    <i class="bi bi-trash3-fill"></i>
                  </button>
                </td>
                <td>
                 <NavLink to={`/EditDoctor/${item._id}`}> <button type="button" className="btn btn-warning">
                 <i class="bi bi-pencil"></i>
                  </button></NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default DeleteDoctor;

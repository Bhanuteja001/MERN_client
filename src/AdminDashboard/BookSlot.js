import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import context from '../Context/context'

const BookSlot = () => {
  const [data, setdata] = useState([]);
  const value = useContext(context)
  const [status , setstatus] = useState([]);


  const getData = ()=>{
    axios
    .get(`https://mern-server-ur1u.onrender.com/appointment/bookAppointment`)
    .then((res) => {
      setdata(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }

  useEffect(() => {
  getData()
  }, []);

  const DelSlot = (id) => {
    console.log(id);
    axios
      .delete(`https://mern-server-ur1u.onrender.com/appointment/bookAppointment/${id}`)
      .then((res) => {
          getData()
      })
      .catch((err) => console.log(err));
  };


  const editStatus = (id)=>{
    if (!status) {
      value.showAlert('please select one option..!')
    }
    else{
      console.log(id);
    axios
    .put(`https://mern-server-ur1u.onrender.com/appointment/bookAppointment/${id}`,{status:status})
    .then((res) => {
        getData()
    })
    .catch((err) => console.log(err));
    }
  }



  return (
    <>
      <div className="container-fluid rounded text-center p-2 mb-5">
        <h1>Book Slot</h1>
      </div>
      <div className="table-responsive "style={{width:"100%",overflow:"auto",height:"100%"}}>
        <table className="container-fluid table  text-justify table-hover table-bordered ">
          <thead className="table-dark text-center">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Doctorname</th>
              <th>Hospital</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.subject}</td>
                  <td>{item.phone}</td>
                  <td>{item.message}</td>
                  <td>{item.doctorname}</td>
                  <td>{item.hospital}</td>
                  <td>
                    <select onChange={(e)=>{setstatus(e.target.value)}} className="form-select" aria-label="Default select example">
                      <option hidden defaultValue={item.status}>{item.status}</option>
                      <option value="Pending">Pending</option>
                      <option value="Progress">Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                  <td><button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      DelSlot(item._id);
                    }}
                  >
                    <i className="bi bi-trash3-fill"></i>
                  </button></td>
                  <td><button type="button" className="btn btn-warning" onClick={()=>editStatus(item._id)}>
                 <i className="bi bi-pencil"></i>
                  </button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookSlot;

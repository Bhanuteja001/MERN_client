import axios from "axios";
import React, { useEffect, useState } from "react";

const AddDoctor = () => {
  const [category, setcategory] = useState([]);
  const [data, setdata] = useState({
    treatmentname: "",
    name: "",
    qualification: "",
    experience: 0,
    hospital: "",
  });

  const getData = () => {
    axios
      .get(`https://mern-server-ur1u.onrender.com/addCategory`)
      .then((res) => {
        setcategory(res.data.data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getData();
  }, []);

  const addDoctor = () => {
    if (
      !data.treatmentname ||
      !data.name ||
      !data.qualification ||
      !data.experience ||
      !data.hospital
    ) {
      alert("Fill all the details please")
    }
   else{
    axios
    .post(`https://mern-server-ur1u.onrender.com/doctor/addDoctor`, {
      treatmentname: data.treatmentname,
      name: data.name,
      qualification: data.qualification,
      experience: data.experience,
      hospital: data.hospital,
    })
    .then((res) => {
      setdata({
        treatmentname: "",
        name: "",
        qualification: "",
        experience: 0,
        hospital: "",
      });
    })
    .catch((err) => console.log(err.message))
   }
  };
  return (
    <>
      <div className="container-fluid rounded text-center p-2 mb-5">
        <h1>Add Doctor</h1>
      </div>
      <form className="container w-75">
        <div className="form-group mb-3">
          <label htmlFor="category">
            <h2>Treatment</h2>
          </label>
          <select
            className="form-control"
            id="category"
            value={data.treatmentname}
            onChange={(e) => {
              setdata({ ...data, treatmentname: e.target.value });
            }}
          >
            <option hidden>Select Treatment Name</option>
            {category.map((e) => {
              return (
                <option key={e._id} value={e.name}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="Input1" className="form-label mb-3">
            <h2>Doctor :</h2>
          </label>
          <input
            type="text"
            className="form-control"
            id="Input1"
            placeholder="Enter your Doctor Name"
            value={data.name}
            onChange={(e) => {
              setdata({ ...data, name: e.target.value });
            }}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Input1" className="form-label mb-3">
            <h2>Qualification :</h2>
          </label>
          <input
            type="text"
            className="form-control"
            id="Input1"
            placeholder="Enter Doctor Qualification"
            value={data.qualification}
            onChange={(e) => {
              setdata({ ...data, qualification: e.target.value });
            }}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Input1" className="form-label mb-3">
            <h2>Experience :</h2>
          </label>
          <input
            type="number"
            className="form-control"
            id="Input1"
            placeholder="Enter Doctor Experience"
            value={data.experience}
            onChange={(e) => {
              setdata({ ...data, experience: e.target.value });
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Textarea1" className="form-label mb-3">
            <h2>Enter Hospital:</h2>
          </label>
          <textarea
            className="form-control"
            id="Textarea1"
            rows="6"
            cols="5"
            placeholder="Enter Hospital name and Address"
            style={{ resize: "none" }}
            value={data.hospital}
            onChange={(e) => {
              setdata({ ...data, hospital: e.target.value });
            }}
          ></textarea>
        </div>
        <button type="button" className="btn btn-success" onClick={addDoctor}>
          Add Docter
        </button>
      </form>
    </>
  );
};

export default AddDoctor;
// {
//   "treatmentname":"ENT",
//    "name":"Shekar",
//    "qualification":"MBBS",
//    "experience":5,
//    "hospital":"Nizam institute of Medical Sciences"

// }

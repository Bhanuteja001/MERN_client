import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditDoctor = () => {
  const [treatment, setTreatment] = useState("");
  const [name, setname] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [hospital, setHospital] = useState("");

  const [category, setcategory] = useState([]);
  const navigate=useNavigate();
  const { id } = useParams();

  const getData = () => {
    axios
      .get("https://mern-server-ur1u.onrender.com/addcategory")
      .then((res) => {
        setcategory(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
    axios
      .get(`https://mern-server-ur1u.onrender.com/doctor/addDoctor/${id}`)
      .then((res) => {
        setTreatment(res.data.treatmentname);
        console.log(res.data.treatmentname);

        setname(res.data.name);
        setQualification(res.data.qualification);
        setExperience(res.data.experience);
        setHospital(res.data.hospital);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  
  const editDoct = () => {

    if (
      !treatment ||
      !name ||
      !qualification ||
      !experience ||
      !hospital 
    ) {
      alert("Fill all the details please")
    } else{
      axios.put(`https://mern-server-ur1u.onrender.com/doctor/addDoctor/${id}`, {
        treatmentname: treatment,
        name: name,
        qualification: qualification,
        experience: experience,
        hospital: hospital,
      })
      .then((req)=>{
        return navigate('/deleteDoctor')
      })
      .catch(err=>console.log(err))
    }
   
  };

  return (
    <>
      <div className="container-fluid rounded text-center p-2 mb-5">
        <h1>Edit Doctor</h1>
      </div>
      <form className="container w-75 mb-5">
        <div className="form-group mb-3">
          <label htmlFor="category">
            <h2>Treatment</h2>
          </label>
          <select
            className="form-control"
            id="category"
            value={treatment}
            onChange={(e) => {
              setTreatment(e.target.value);
            }}
          >
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
            value={name}
            onChange={(e) => {
              setname(e.target.value);
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
            value={qualification}
            onChange={(e) => {
              setQualification(e.target.value);
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
            value={experience}
            onChange={(e) => {
              setExperience(e.target.value);
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
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
            style={{ resize: "none" }}
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={editDoct}>
          Edit Doctor
        </button>
      </form>
    </>
  );
};

export default EditDoctor;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Treatment = () => {
  const [data, setdata] = useState([]);
  const getData = () => {
    axios
      .get("https://mern-server-ur1u.onrender.com/addcategory")
      .then((res) => {
        setdata(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container d-flex mb-5 mt-5">
        <div className="row">
          {data
            .sort((a, b) => {
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              return 0;
            })
            .map((item) => {
              return (
                <div className="col-md-3 " key={item._id}>
               
                    <Link to={`/doctorcategory/${item.name}`} className="btn bg-danger-subtle text-dark m-4 p-4 w-75 text-dark"><h5>{item.name}</h5></Link>
                  
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Treatment;

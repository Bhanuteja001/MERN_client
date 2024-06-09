import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
const DeleteCategory = () => {
  const [dataList, setdataList] = useState([]);

  const getData = () => {
    axios
      .get("https://mern-server-ur1u.onrender.com/addcategory")
      .then((res) => {
        setdataList(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const DeleteData = (sid) => {
    console.log(sid);
    axios
      .delete(`https://mern-server-ur1u.onrender.com/addcategory/${sid}`)
      .then((res) => {
        alert("deleted");
        console.log(res.deleted);
        getData();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container-fluid rounded text-center p-2 mb-2">
        <h1>Delete & Edit Category</h1>
      </div>
      <div className="mb-5">
        <table className="container table table-hover table-bordered">
          <thead className="table-dark text-center">
            <tr>
              <th>CATEGORY</th>
              <th>DESCRIPTION</th>
              <th>DELETE</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((item) => {
              return (
                <tr key={item._id}>
                  <td>
                    <h6 className="text-uppercase">{item.name}</h6>
                  </td>
                  <td>{item.description}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-danger"
                      onClick={() => DeleteData(item._id)}
                    >
                      <i className="bi bi-trash3-fill"></i>
                    </button>
                  </td>
                  <td>
                    <NavLink to={`/EditCategory/${item._id}`}>
                      <button className="btn btn-primary">
                        <i class="bi bi-pencil"></i>
                      </button>
                    </NavLink>
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

export default DeleteCategory;

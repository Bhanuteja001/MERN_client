import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AddCategory from './AddCategory';
import AddDoctor from './AddDoctor';
import AddTestimonials from './AddTestimonials';
import BookSlot from './BookSlot';
import DeleteTestimonials from './DeleteTestimonials';
import Login from './Login';

import "./Dashboard.css"
import DeleteCategory from './DeleteCategory';
import DeleteDoctor from './DeleteDoctor';

const Dashboard = () => {
  const navigate = useNavigate();
  const sidebarRef = useRef(null);
  const [login, setLogin] = useState(false);
  const [open,setopen] = useState(true)
  let token = localStorage.getItem('token');

  const isLogin = () => {
    if (token) {
      setLogin(true);
      navigate('/Dashboard');
    } else {
      setLogin(false);
      navigate('/login');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    isLogin()
  }, [login, token]);

 
  const [view, setView] = useState("");
  const DashboardView = () => {
    let output = "";
    if (view === "") {
      output = login ? <AddCategory /> : <Login />;
    } else if (view === "Add Category") {
      output = login ? <AddCategory /> : <Login />;
    } else if (view === "Add Testimonials") {
      output = login ? <AddTestimonials /> : <Login />;
    } else if (view === "Add Doctor") {
      output = login ? <AddDoctor /> : <Login />;
    } else if (view === "Book Slot") {
      output = login ? <BookSlot /> : <Login />;
    } else if (view === "Del Category") {
      output = login ? <DeleteCategory /> : <Login />;
    } else if (view === "Del Doctor") {
      output = login ? <DeleteDoctor /> : <Login />;
    } else if (view === "Del Testimonials") {
      output = login ? <DeleteTestimonials /> : <Login />;
    }
    return output;
  };

  return (
    <>

{open &&  <aside className='text-center' id='sidebar' ref={sidebarRef}>
      <button onClick={()=>{setopen(!open)}} className="btn" id='closebtn'>
       <i class="bi bi-x-lg"></i></button>
          <h4 className='p-2'>Dashboard</h4>  
          <button onClick={() => setView("Add Category")} className='btn btn-secondary mb-3'>Add Category</button>
          <button onClick={() => setView("Del Category")} className='btn btn-secondary mb-3'>Edit / Delete Category</button>
          <button onClick={() => setView("Add Doctor")} className='btn btn-secondary mb-3'>Add Doctor</button>
          <button onClick={() => setView("Del Doctor")} className='btn btn-secondary mb-3'>Edit / Delete Doctor</button>
          <button onClick={() => setView("Add Testimonials")} className='btn btn-secondary mb-3'>Add Testimonials</button>
          <button onClick={() => setView("Del Testimonials")} className='btn btn-secondary mb-3'>Edit / Delete Testimonials</button>
          <button onClick={() => setView("Book Slot")} className='btn btn-secondary mb-3'>Book Slot</button>
          <button onClick={logout} className='btn btn-secondary mb-3'>Logout</button>
        </aside>}




       { !open && <button className='btn btn-secondary' id="openbtn" onClick={()=>{setopen(!open)}}><i class="bi bi-arrow-right"></i></button>}

        <div className='mt-2' id='dashboard-view'>
          {DashboardView()}
        </div>

        
     
   
    </>
  );
};

export default Dashboard;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./InnerPages/Home";
import AboutUs from "./InnerPages/AboutUs";
import Treatment from "./InnerPages/Treatment";
import BookAppointment from "./InnerPages/BookAppointment";
import Testimonial from "./InnerPages/Testimonial";
import ContactUs from "./InnerPages/ContactUs";
import Dashboard from "./AdminDashboard/Dashbaord";
import EditCategory from "./AdminDashboard/EditCategory";
import DeleteCategory from "./AdminDashboard/DeleteCategory";
import EditDoctor from "./AdminDashboard/EditDoctor";
import DeleteDoctor from "./AdminDashboard/DeleteDoctor";
import EditTestimonial from "./AdminDashboard/EditTestimonial"
import DeleteTestimonials from "./AdminDashboard/DeleteTestimonials";
import DoctorCategory from "./InnerPages/DoctorCategory";
import BookAppointmentforcustomer from "./InnerPages/BookAppointmentforcustomer";
import Login from "./AdminDashboard/Login";


const Routing = ({login}) => {

 

  return (
    
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/deleteCategory" element={<DeleteCategory />} />
        <Route path="/editCategory/:id" element={<EditCategory />} />
        <Route path="/deleteDoctor" element={<DeleteDoctor />} />
        <Route path="/editDoctor/:id" element={<EditDoctor />} />
        <Route path="/editTestimonial/:id" element={<EditTestimonial/>} />
        <Route path="/deleteTestimonial" element={<DeleteTestimonials/>} />
        <Route path="/doctorCategory/:treatmentname" element={<DoctorCategory/>} />
        <Route path="/bookAppointment" element={<BookAppointmentforcustomer/>} />
        <Route path="/bookAppointment/:name/:hospital" element={<BookAppointment/>} />
      </Routes>
    
  );
};

export default Routing;

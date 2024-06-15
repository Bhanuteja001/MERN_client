import axios from "axios";
import React, { useContext, useState } from "react";
import context from "../Context/context";

const ContactUs = () => {

  const value = useContext(context)

  const [data, setdata] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });


  const sendMail = () => {
    if (
      !data.name ||
      !data.email ||
      !data.subject ||
      !data.phone ||
      !data.message
    ) {
      value.showAlert("danger", "please fill all the details correctly");
    } else {
      axios
        .post("https://mern-server-ur1u.onrender.com/sendMail", {
          name: data.name,
          email: data.email,
          subject: data.subject,
          phone: data.phone,
          message: data.message,
        })
        .then((req) => {
          setdata({ name: "", email: "", subject: "", phone: "", message: "" });
          value.showAlert("danger","Mail Sent😀👍");
        })
        .catch((err) => console.log(err.message));
    }
  };
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row d-flex">

          <div className="col-md-6 contact-col">

            <form className=" container mt-3 mb-5 bg-info-subtle p-5 rounded">
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="mb-3 form-floating">
                    <input
                      type="text"
                      className="form-control "
                      id="Input1"
                      placeholder=""
                      value={data.name}
                      onChange={(e) =>
                        setdata({ ...data, name: e.target.value })}/>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label">
                      Yourname
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className=" form-floating">
                    <input
                      type="email"
                      className="form-control "
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                      value={data.email}
                      onChange={(e) =>
                        setdata({ ...data, email: e.target.value })
                      }
                    />
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label">
                      Email address
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-6">
                  <div className="mb-3 form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="subject"
                      value={data.subject}
                      onChange={(e) =>
                        setdata({ ...data, subject: e.target.value })
                      }
                    />
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      subject
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3 form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="password"
                      value={data.phone}
                      onChange={(e) =>
                        setdata({ ...data, phone: e.target.value })
                      }
                    />
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      phone
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-5 form-floating">
                <div className="form-floating mb-3 mt-5 ">
                  <textarea
                    className="form-control"
                    id="Textarea1"
                    rows="3"
                    cols="3"
                    placeholder="Enter Details"
                    style={{ height: " 150px", resize: "none" }}
                    value={data.message}
                    onChange={(e) =>
                      setdata({ ...data, message: e.target.value })
                    }
                  ></textarea>
                  <label htmlFor="Textarea1" className="form-label mb-3">
                    <h5>Message :</h5>
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6 mb-4">
                  <button
                    type="button"
                    className="btn btn-primary p-3 ms-5 w-75"
                    onClick={sendMail}
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="gmap col-md-6 mt-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.640552703767!2d78.45168477516587!3d17.429029383465277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb912d20ab5c7f%3A0xcdc7623e855882e0!2sSurgyLife%20-%20Surgeries%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1717391206897!5m2!1sen!2sin"

              title="slife"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

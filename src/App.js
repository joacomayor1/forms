import "./App.css";
import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdAllInbox } from "react-icons/md";
import { BiSolidCity, BiSolidSmile } from "react-icons/bi";
import { AiFillBank } from "react-icons/ai";

function StudentForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.length < 2) {
      alert("Username should be at least 2 characters long.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (address.length < 10) {
      alert("Address should be at least 10 characters long.");
      return;
    }

    if (!course) {
      alert("Please select a course.");
      return;
    }

    if (!gender) {
      alert("Please select a gender.");
      return;
    }

    console.log("Form submitted:", {
      username,
      email,
      address,
      course,
      gender,
    });
  };

  return (
    <div className="alert alert-success" role="alert">
      <div className="container">
        <div className="text-center">
          <h1 className="alert-heading">Student Details</h1>
          <h4>Hello Sutdent! Please fill in your details</h4>
        </div>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-5">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <FaUserAlt />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Username"
                    aria-label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">
                      <MdAllInbox />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <BiSolidCity />
                    </span>
                  </div>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    placeholder="Street, number, city, zip"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="input-group">
                <div className="input-group-prepend">
                  <label className="input-group-text" htmlFor="course">
                    <AiFillBank />
                  </label>
                </div>
                <select
                  className="custom-select"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  required
                >
                  <option value="">Select Course</option>
                  <option value="node">Node</option>
                  <option value="react">React</option>
                  <option value="Agriculture">Agriculture</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <div className="input-group-prepend">
                  <label className="input-group-text">
                    <BiSolidSmile />
                  </label>
                </div>
                <div
                  className="btn-group btn-group-toggle"
                  data-toggle="buttons"
                >
                  <label className="btn btn-secondary active">
                    <input
                      type="radio"
                      value="Female"
                      checked={gender === "Female"}
                      onChange={() => setGender("Female")}
                      required
                    />{" "}
                    Female
                  </label>
                  <label className="btn btn-secondary">
                    <input
                      type="radio"
                      value="Male"
                      checked={gender === "Male"}
                      onChange={() => setGender("Male")}
                      required
                    />{" "}
                    Male
                  </label>
                  <label className="btn btn-secondary">
                    <input
                      type="radio"
                      value="Other"
                      checked={gender === "Other"}
                      onChange={() => setGender("Other")}
                      required
                    />{" "}
                    Other
                  </label>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;

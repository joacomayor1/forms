import "./App.css";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdAllInbox } from "react-icons/md";
import { BiSolidCity,BiSolidSmile } from "react-icons/bi";
import { AiFillBank } from "react-icons/ai";

function StudentForm() {
  return (
    <div className="alert alert-success" role="alert">
      <div className="container">
        <div className="text-center">
          <h1 className="alert-heading">Student Details</h1>
          <h4>Hello Sutdent! Please fill in your details</h4>
        </div>
        <hr />
        <form>
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
                    <span className="input-group-text"><BiSolidCity/></span>
                  </div>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    placeholder="Street, number, city, zip"
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
                    <AiFillBank/>
                  </label>
                </div>
                <select className="custom-select">
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
                  <label className="input-group-text"><BiSolidSmile/></label>
                </div>
                <div
                  className="btn-group btn-group-toggle"
                  data-toggle="buttons"
                >
                  <label className="btn btn-secondary active">
                    <input type="radio" value="Female" /> Female
                  </label>
                  <label className="btn btn-secondary">
                    <input type="radio" value="Male" /> Male
                  </label>
                  <label className="btn btn-secondary">
                    <input type="radio" value="Other" /> Other
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

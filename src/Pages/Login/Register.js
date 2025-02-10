import React, { useState } from "react";
import "./login.css";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import { api } from "../../api/api";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Password and Confirm Password Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Clear any previous errors
    setError("");

    let payload = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
    };

    // const formdata = new FormData();
    // formdata.append("fullName", "vishnu");
    // formdata.append("password", "Vishnu@11");
    // formdata.append("email", "vishnu1@oneehr.net");

    try {
      let res = await api(
        `api/v1/users/create`,
        payload,
        "postMultipart",
        "",
        "Account Created Successfully",
        ""
      );

      if (res) {
        console.log("Registration successful", res);
        // You can redirect or show a success message here
        setFormData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  return (
    <>
      <Breadcrumb name={"Register"} pageName={"Register"} />
      <div className="register-area overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" style={{ margin: "0 auto" }}>
              <div className="contact-form-wrap">
                <h4 className="title">Create Your Account</h4>
                <p>
                  Hey there! Ready to join the party? We just need a few details
                  from you to get <br />
                  started. Let's do this!
                </p>
                <form className="mt-4" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="Yourname" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      id="Yourname"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="Youremail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      id="Youremail"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="Password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="Password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="ConfirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      id="ConfirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>

                  {error && <p style={{ color: "red" }}>{error}</p>}

                  <button
                    className="btn_secondary btn_md w-100 mt-3"
                    type="submit"
                  >
                    Sign Up
                  </button>

                  <p className="already">
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

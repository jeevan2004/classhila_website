import React, { useState } from "react";
import "./login.css";
import { Tab, Tabs } from "react-bootstrap";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import login_img from "../../assets/image/login_img.png";
import { api } from "../../api/api";
const Register = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    schoolName: "",
    district: "",
    village: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // let payload = {
    //   email: formData.email,
    //   password: formData.password,
    // };
    // let res = await api(
    //   `api/v1/users/userlogin`,
    //   payload,
    //   "post",
    //   "",
    //   // currUserData?.token,
    //   "Login Successfully",
    //   ""
    // );
    // if (res) {
    //   navigate("/");
    //   localStorage.setItem("user", JSON.stringify(res));
    //   console.log(res, "card login");
    // }
  };
  return (
    <>
      <div className="register-area register overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <h3 className="text-center mb-4">
                Register to join us
                <span> Welcome ! Please Enter Your Details.</span>
              </h3>
              <div className="img_sec">
                <img src={login_img} />
              </div>
              <div className="contact-form">
                <form className="mt-4" onSubmit={(e) => handleSubmit(e)}>
                  <div className="mb-3">
                    <input
                      type="name"
                      className="form-control"
                      placeholder="*Full Name"
                      id="Youremail"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="*Email"
                      id="Youremail"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="*Phone"
                      id=""
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="*School Name"
                      id=""
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="*Village/Town"
                      id=""
                      name="village"
                      value={formData.village}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="*District"
                      id=""
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="Password"
                      name="password"
                      placeholder="*Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      name="confirmPassword"
                      placeholder="*Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>

                  {/* <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      By checking this box, you agree to our privacy policy and
                      terms of service.{" "}
                      <Link to={"#"}>
                        <b>Privacy Policy</b>
                      </Link>
                    </label>
                  </div> */}
                  <button
                    className=" btn_secondary btn_md w-100 mt-5 text-center"
                    type="submit"
                  >
                    Sign Up
                  </button>

                  <p className="already">
                    Already have an account?
                    <Link to={"/login"}> Sign In</Link>
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

import React, { useState } from "react";
import "./login.css";
import { Tab, Tabs } from "react-bootstrap";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import login_img from "../../assets/image/login_img.png";
import { api } from "../../api/api";
const Login = () => {
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
      <div className="register-area overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto"></div>
          </div>
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <h3 className="text-center mb-4">Welcome To Login</h3>
              <div className="img_sec">
                <img src={login_img} />
              </div>
              <div className="contact-form">
                <form className="mt-4" onSubmit={(e) => handleSubmit(e)}>
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      <div className="mb-3 px-2">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="*Email / Phone"
                          id="Youremail"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-10 mx-auto">
                      <div className="mb-3 px-2">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="*password"
                          id=""
                          name="password"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <button
                        className=" btn_secondary btn_md w-100 mt-4 text-center"
                        type="submit"
                      >
                        Login
                      </button>
                      <p className="already">
                        Forgot Password ?
                        <Link to={"/forgot-password"} className="ms-2">
                          Click here
                        </Link>
                      </p>
                      <p className="already mt-1">
                        Don't have an account?
                        <Link to={"/register"} className="ms-2">
                          Sign Up
                        </Link>
                      </p>
                    </div>
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import React, { useState } from "react";
import "./login.css";
import { Tab, Tabs } from "react-bootstrap";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api/api";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    let payload = {
      email: formData.email,
      password: formData.password,
    };
    let res = await api(
      `api/v1/users/userlogin`,
      payload,
      "post",
      "",
      // currUserData?.token,
      "Login Successfully",
      ""
    );
    if (res) {
      navigate("/");
      localStorage.setItem("user", JSON.stringify(res));
      console.log(res, "card login");
    }
  };
  return (
    <>
      <Breadcrumb name={"Login"} pageName={"Login"} />
      <div className="register-area overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" style={{ margin: "0 auto" }}>
              <div className="contact-form-wrap">
                <h4 class="title">Welcome back!</h4>
                <p>
                  Hey there! Ready to log in? Just enter your email and password
                  below and you will be back in action in no time. Lets go!
                </p>
                <form className="mt-4" onSubmit={(e) => handleSubmit(e)}>
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
                      type="text"
                      className="form-control"
                      id="Password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
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
                    className=" btn_secondary btn_md w-100 mt-3"
                    type="submit"
                  >
                    Sign In
                  </button>

                  <p className="already">
                    Dont have an account?
                    <Link to={"/register"}>Sign Up</Link>
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

export default Login;

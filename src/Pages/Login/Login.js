import React, { useState } from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import login_img from "../../assets/image/login_img.png";
import eye from "../../assets/image/login_img.png";

import { api } from "../../api/api";
import { useAuthContext } from "../../AuthContextAPI";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const { doLogin, setProfileData } = useAuthContext();
  const [password, setPassword] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerOptions = {
    email: {
      required: "Email is required",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Enter a valid email address",
      },
    },
    password: {
      required: "Password is required",
    },
  };

  const onSubmit = async (formData) => {
    const payload = {
      email: formData.email,
      password: formData.password,
    };

    const res = await api("api/v1/student/login", payload, "postWithoutToken");

    if (res) {
      if (res?.data?.isVerified === false) {
        navigate(`/otp?email=${formData.email}&page=login`);
        return;
      }

      if (res?.success) {
        const user = jwtDecode(res?.data?.token);
        doLogin({ token: res?.data?.token, ...user });
        await getProfile(res?.data?.token);
        navigate("/");
      }
    }
  };

  const getProfile = async (token) => {
    const res = await api("api/v1/auth/getProfileData", {}, "get", token);
    if (res?.status) {
      localStorage.setItem("profile", JSON.stringify(res?.data));
      setProfileData(res?.data);
    }
  };

  return (
    <div className="register-area overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <h3 className="text-center mb-4">Welcome To Login</h3>
            <div className="img_sec">
              <img src={login_img} alt="Login Visual" />
            </div>
            <div className="contact-form">
              <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-10 mx-auto">
                    <div className="mb-3 px-2">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="*Email / Phone"
                        {...register("email", registerOptions.email)}
                      />
                      {errors.email && (
                        <p className="text-danger">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-10 mx-auto">
                    <div className="mb-3 px-2">
                      <div className="password">
                        <input
                          type={password ? "text" : "password"}
                          className="form-control"
                          placeholder="*Password"
                          {...register("password", registerOptions.password)}
                        />
                        <span className="icon">
                          {/* <img onClick={() => setPassword(!password)} src={eye} /> */}
                          <i
                            className="fas fa-eye"
                            onClick={() => setPassword(!password)}
                          ></i>
                        </span>
                        {errors.password && (
                          <p className="text-danger">
                            {errors.password.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      className="btn_secondary btn_md w-100 mt-4 text-center"
                      type="submit"
                    >
                      Login
                    </button>
                    <p className="already">
                      Forgot Password?
                      <Link to="/forgot-password" className="ms-2">
                        Click here
                      </Link>
                    </p>
                    <p className="already mt-1">
                      Don't have an account?
                      <Link to="/register" className="ms-2">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

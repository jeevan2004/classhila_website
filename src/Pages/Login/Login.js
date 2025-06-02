


import React from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import login_img from "../../assets/image/login_img.png";
import { api } from "../../api/api";
import { useAuthContext } from "../../AuthContextAPI";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const { doLogin } = useAuthContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    const payload = {
      email: formData.email,
      password: formData.password,
    };

    const res = await api(
      "api/v1/student/login", // ✅ corrected API endpoint format
      payload,
      "postWithoutToken",
      "",
      "",
      ""
    );
    console.log(res, 'res');
    
    if (res  ) {
      console.log(res , "res.viviviiviviv");
      
        if (res?.data?.isVerified ===true) {     
          const getUserFromToken = async () => {
            try {
              return jwtDecode(res?.data?.token);
            } catch (error) {
              return null;
            }
          };
          doLogin({
            token: res?.data?.token,
            ...(await getUserFromToken()),
          });
          navigate("/");
        } 
        
        else {
          // ✅ Redirect to OTP if not verified
          navigate(`/otp?email=${formData.email}&page=login`);
          console.log("not verified");
          
        }
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
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                      {errors.email && (
                        <p className="text-danger">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-10 mx-auto">
                    <div className="mb-3 px-2">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="*Password"
                        {...register("password", {
                          required: "Password is required",
                        })}
                      />
                      {errors.password && (
                        <p className="text-danger">
                          {errors.password.message}
                        </p>
                      )}
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

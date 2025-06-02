import React, { useEffect } from "react";
import "./login.css";
import login_img from "../../assets/image/login_img.png";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const emailsFromURL = queryParams.get("email");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // If email is in URL, prefill it
    if (emailsFromURL) {
      setValue("email", emailsFromURL);
    }
  }, [emailsFromURL, setValue]);

  const onSubmit = async (data) => {
    const payload = {
      email: data.email,
    };

    let res = await api(
      `api/v1/student/forgotPassword`,
      payload,
      "postWithoutToken",
      "",
      ""
    );

    if (res && res.success) {
      navigate(`/reset-password?email=${data.email}`);
    }
  };

  return (
    <div className="register-area overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <h3 className="text-center mb-4">Confirm Your Email</h3>
            <div className="img_sec">
              <img src={login_img} alt="Login" />
            </div>
            <div className="contact-form">
              <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-9 mx-auto">
                    <div className="mb-3 px-2">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        {...register("email", {
                          required: "Please enter your email address.",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email address.",
                          },
                        })}
                      />
                      {errors.email && (
                        <div
                          className="text-danger mt-1"
                          style={{ fontSize: "14px" }}
                        >
                          {errors.email.message}
                        </div>
                      )}
                    </div>
                    <button
                      className="btn_secondary btn_md w-100 mt-4 text-center"
                      type="submit"
                    >
                      Submit
                    </button>
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

export default ForgotPassword;

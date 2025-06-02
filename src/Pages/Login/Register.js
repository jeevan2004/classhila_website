import React, { useEffect, useRef, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import login_img from "../../assets/image/login_img.png";
import { api } from "../../api/api";
import { useForm } from "react-hook-form";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [countdown, setCountdown] = useState(600);
  const [resendCountdown, setResendCountdown] = useState(30); // ← updated to 30 seconds
  const [isExpired, setIsExpired] = useState(false);
  const [isResend, setIsResend] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpShow, setOtpShow] = useState(false);
  const inputRefs = useRef([]);
  const [error, setError] = useState("");

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsExpired(true);
    }
  }, [countdown]);

  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setInterval(() => {
        setResendCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsResend(true);
    }
  }, [resendCountdown]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== "" && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (otp[index]) {
        newOtp[index] = "";
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
      setOtp(newOtp);
    }
  };

  const handleRegister = async (data) => {
    let payload = {
      email: data.email,
      name: data.name,
      phone: `+91${data.phone}`,
      password: data.password,
    };
    let res = await api(
      `api/v1/student/register`,
      payload,
      "postWithoutToken",
      "",
      ""
    );
    if (res && res.success) {
      setOtpShow(true);
      setEmail(data?.email);
      setResendCountdown(30); // ← reset to 30 on register
    }
  };

  const handleVerify = async () => {
    if (otp.some((digit) => digit.trim() === "")) {
      setError("Please enter all OTP fields.");
      return;
    } else {
      setError("");
    }

    const otpNumber = otp.join("");
    const payload = { email, otp: otpNumber };

    let res = await api(
      `api/v1/student/verifyEmail`,
      payload,
      "postWithoutToken",
      "",
      ""
    );

    if (res && res.success) {
      navigate("/login");
    }
  };

  const handleResendOTP = async () => {
    const payload = { email };
    let res = await api(
      `api/v1/student/resendOTP`,
      payload,
      "postWithoutToken",
      "",
      ""
    );

    if (res && res.success) {
      setOtp(["", "", "", "", "", ""]);
      setCountdown(60);
      setResendCountdown(30); // ← reset to 30 on resend
      setIsExpired(false);
      setIsResend(false);
      inputRefs.current[0]?.focus();
    }
  };

  const password = watch("password");

  const registerOptions = {
    name: { required: "name is required" },
    email: { required: "email is required" },
    phone: {
      required: "Phone is required",
      pattern: {
        value: /^[0-9]{10}$/,
        message: "Phone number must be exactly 10 digits",
      },
    },
    password: { required: "password is required" },
    confirmPassword: {
      required: "confirm password is required",
      validate: (value) => value === password || "Passwords do not match",
    },
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
                <img src={login_img} alt="login" />
              </div>
              <div className="contact-form">
                {otpShow ? (
                  <div className="otp_section mx-auto">
                    <h6>
                      <span onClick={() => setOtpShow(false)}></span>
                      Verify OTP
                    </h6>
                    <div className="mb-3 ">
                      <p className="mb-3">
                        Please enter the OTP sent to {email}
                      </p>
                      <div className="d-flex justify-content-between otp_outer mx-auto">
                        {otp.map((digit, index) => (
                          <input
                            key={index}
                            type="text"
                            className="form-control text-center otp-input"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            ref={(el) => (inputRefs.current[index] = el)}
                            disabled={isExpired}
                          />
                        ))}
                      </div>
                      <small className="error">{error}</small>
                    </div>
                    <p className="dont_recived text-center">
                      {!isExpired &&
                        `Expires in ${Math.floor(countdown / 60)}:${
                          countdown % 60
                        }`}
                    </p>
                    <button
                      className="mx-auto d-block btn_primary w-100 mb-4 mt-5"
                      type="submit"
                      disabled={isExpired}
                      onClick={handleVerify}
                    >
                      Submit
                    </button>
                    <p className="dont_recived text-center">
                      <span
                        className={`btn-link ps-1 ${
                          isResend ? "text-primary" : "text-muted"
                        }`}
                        onClick={isResend ? handleResendOTP : undefined}
                        style={{
                          cursor: isResend ? "pointer" : "default",
                        }}
                      >
                        <span className="text-dark">Didn't get OTP? </span>
                        Resend OTP{" "}
                        {resendCountdown > 0 ? `(${resendCountdown})` : ""}
                      </span>
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(handleRegister)}
                    className="mt-4"
                  >
                    <div className="mb-3">
                      <input
                        {...register("name", registerOptions.name)}
                        type="text"
                        className="form-control"
                        placeholder="*Full Name"
                      />
                      {errors.name && (
                        <span className="text-danger small">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div className="mb-3">
                      <input
                        {...register("email", registerOptions.email)}
                        type="text"
                        className="form-control"
                        placeholder="*Email"
                      />
                      {errors.email && (
                        <span className="text-danger small">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                    <div className="mb-3">
                      <input
                        {...register("phone", registerOptions.phone)}
                        type="number"
                        className="form-control"
                        placeholder="*Phone"
                      />
                      {errors.phone && (
                        <span className="text-danger small">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                    <div className="mb-3">
                      <input
                        {...register("password", registerOptions.password)}
                        type="password"
                        className="form-control"
                        placeholder="*Password"
                      />
                      {errors.password && (
                        <span className="text-danger small">
                          {errors.password.message}
                        </span>
                      )}
                    </div>
                    <div className="mb-3">
                      <input
                        {...register(
                          "confirmPassword",
                          registerOptions.confirmPassword
                        )}
                        type="password"
                        className="form-control"
                        placeholder="*Confirm Password"
                      />
                      {errors.confirmPassword && (
                        <span className="text-danger small">
                          {errors.confirmPassword.message}
                        </span>
                      )}
                    </div>
                    <button
                      className="btn_secondary btn_md w-100 mt-5 text-center"
                      type="submit"
                    >
                      Sign Up
                    </button>
                    <p className="already">
                      Already have an account? <Link to="/login">Sign In</Link>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

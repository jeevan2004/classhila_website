import React, { useEffect, useRef, useState } from "react";
import "./login.css";
import { Tab, Tabs } from "react-bootstrap";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import login_img from "../../assets/image/login_img.png";
import { api } from "../../api/api";
import { useForm } from "react-hook-form";
const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [countdown, setCountdown] = useState(600);
  const [resendCountdown, setResendCountdown] = useState(60);
  const [isExpired, setIsExpired] = useState(false);
  const [isResend, setIsResend] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpShow, setOtpShow] = useState(false);
  const inputRefs = useRef([]);
  const [error, setError] = useState("");

  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleVerify = async () => {
    if (otp.some((digit) => digit.trim() === "")) {
      setError("Please enter all OTP fields.");
      return;
    } else {
      setError();
    }

    const otpNumber = otp.join("");
    var payload = {
      email: email,
      otp: otpNumber,
    };

    let res = await api(
      `api/v1/student/verifyEmail`,
      payload,
      "postWithoutToken",
      "",
      "OTP Verified Successfully"
    );

    if (res && res.success) {
      navigate("/login");
    }
  };

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

  // Handle OTP input change
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if a digit is entered
      if (value !== "" && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  // Handle Backspace for previous input
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (otp[index]) {
        newOtp[index] = ""; // Clear current input
      } else if (index > 0) {
        inputRefs.current[index - 1].focus(); // Move to previous input
      }
      setOtp(newOtp);
    }
  };
  const handleRegister = async (data) => {
    // event.preventDefault();
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
      // currUserData?.token,
      "Registered Successfully",
      ""
    );
    if (res && res.success) {
      setOtpShow(true);
      setEmail(data?.email);
    }
  };

  const handleResendOTP = async () => {
    var payload = {
      email: email,
    };

    let res = await api(
      `api/v1/student/resendOTP`,
      payload,
      "postWithoutToken",
      "",
      "OTP Send Successfully"
    );

    if (res && res.success) {
      setOtp(["", "", "", "", "", ""]); // Clear OTP
      setCountdown(60); // Reset timer
      setIsExpired(false);
      inputRefs.current[0]?.focus(); // Auto-focus first input
    }
  };
  const password = watch("password");

  const registerOptions = {
    name: { required: "name is required" },
    email: { required: "email is required" },
    phone: { required: "phone is required" },
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
                <img src={login_img} />
              </div>
              <div className="contact-form">
                {otpShow ? (
                  <>
                    <div className="otp_section mx-auto">
                      <h6>
                        <span onClick={() => setOtpShow(false)}>
                          {/* <Arrow /> */}
                          {/* <img src={Arrow} /> */}
                        </span>
                        Verify OTP
                      </h6>
                      <div className="mb-3 ">
                        <p className="mb-3">
                          Please enter the otp that sent to {email}
                        </p>
                        <div className="d-flex justify-content-between">
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
                        {isExpired ? (
                          <></>
                        ) : (
                          `Expires in ${Math.floor(countdown / 60)} : ${
                            countdown % 60
                          } `
                        )}
                      </p>

                      <button
                        className="mx-auto d-block btn_primary w-100 mb-4 mt-5"
                        type="submit"
                        disabled={isExpired}
                        onClick={() => handleVerify()}
                      >
                        Submit
                      </button>
                      <p className="dont_recived text-center">
                        <>
                          <span
                            className={`btn-link ps-1 ${
                              isResend ? "text-primary" : "text-muted"
                            }`}
                            onClick={isResend ? handleResendOTP : undefined}
                            style={{
                              cursor: isResend ? "pointer" : "default",
                            }}
                          >
                            <span className="text-dark">Didn't get OTP ? </span>{" "}
                            Resend OTP{" "}
                            {resendCountdown > 0
                              ? Math.floor(resendCountdown)
                              : ""}
                          </span>
                        </>
                      </p>
                    </div>
                  </>
                ) : (
                  <form
                    className="mt-4"
                    onSubmit={handleSubmit(handleRegister)}
                  >
                    <div className="mb-3">
                      <input
                        {...register("name", registerOptions.name)}
                        type="text"
                        className="form-control"
                        placeholder="*Full Name"
                        id="Youremail"
                      />
                      {errors.name && (
                        <span style={{ color: "red", fontSize: "14px" }}>
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
                        id="Youremail"
                      />
                      {errors.email && (
                        <span style={{ color: "red", fontSize: "14px" }}>
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
                        id=""
                      />
                      {errors.phone && (
                        <span style={{ color: "red", fontSize: "14px" }}>
                          {errors.phone.message}
                        </span>
                      )}
                    </div>

                    <div className="mb-3">
                      <input
                        {...register("password", registerOptions.password)}
                        type="text"
                        className="form-control"
                        id="Password"
                        placeholder="*Password"
                      />
                      {errors.password && (
                        <span style={{ color: "red", fontSize: "14px" }}>
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
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="*Confirm Password"
                      />
                      {errors.confirmPassword && (
                        <span style={{ color: "red", fontSize: "14px" }}>
                          {errors.confirmPassword.message}
                        </span>
                      )}
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

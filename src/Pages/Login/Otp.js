import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import login_img from "../../assets/image/login_img.png";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(60);
  const [isExpired, setIsExpired] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  // Countdown Timer
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

  // Handle OTP input change
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if filled
      if (value !== "" && index < 5) {
        inputRefs.current[index + 1].focus();
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

  // Handle OTP Submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isExpired) {
      alert("OTP has expired. Please request a new one.");
      return;
    }

    const enteredOtp = otp.join("");
    if (enteredOtp.length === 6) {
      navigate("/create-password");
    } else {
      alert("Please enter a valid 6-digit OTP.");
    }
  };

  // Resend OTP
  const handleResendOTP = () => {
    setOtp(["", "", "", "", "", ""]); // Clear OTP
    setCountdown(60); // Reset timer
    setIsExpired(false);
    inputRefs.current[0]?.focus(); // Auto-focus first input




    
  };

  return (
    <div className="register-area overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <h3 className="text-center mb-4">Verify OTP</h3>
            <div className="img_sec">
              <img src={login_img} alt="Login" />
            </div>
            <div className="contact-form">
              <form className="mt-4" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-9 mx-auto">
                    <div className="mb-3 px-3">
                      <p className="mb-3">
                        Please enter the 6-digit code sent to your Email
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
                    </div>
                    <p className="text-danger text-center">
                      {isExpired
                        ? "OTP has expired!"
                        : `OTP expires in ${countdown}s`}
                    </p>

                    <button
                      className="btn_secondary btn_md w-100 mt-3 text-center"
                      type="submit"
                      disabled={isExpired}
                    >
                      Verify OTP
                    </button>

                    <p className="d-flex align-items-center justify-content-center mt-3">
                      Didn't receive code?
                      <span
                        className={`btn-link ps-1 ${
                          isExpired ? "text-primary" : "text-muted"
                        }`}
                        onClick={isExpired ? handleResendOTP : undefined}
                        style={{ cursor: isExpired ? "pointer" : "default" }}
                      >
                        Resend OTP
                      </span>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Add styles for OTP input boxes */}
      <style>
        {`
          .otp-input {
            width: 45px;
            height: 45px;
            font-size: 20px;
            text-align: center;
            margin: 0 5px;
            border: 1px solid #ced4da;
            border-radius: 5px;
          }

          .otp-input:focus {
            border-color: #007bff;
            outline: none;
          }

          .btn-link {
            cursor: pointer;
          }

          .btn-link.text-muted {
            cursor: not-allowed;
          }
        `}
      </style>
    </div>
  );
};

export default Otp;

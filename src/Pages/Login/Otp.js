import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import login_img from "../../assets/image/login_img.png";
import { api } from "../../api/api";
import { toast } from "react-toastify";

const Otp = () => {
  const [countdown, setCountdown] = useState(180);
  const [isExpired, setIsExpired] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  const isLogin = queryParams.get("page");

  const { register, handleSubmit, setValue, watch, setFocus, getValues } =
    useForm({
      defaultValues: Object.fromEntries(
        Array.from({ length: 6 }, (_, i) => [`otp${i}`, ""])
      ),
    });

  const otpValues = watch();

  // Start countdown
  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else {
      setIsExpired(true);
    }
  }, [countdown]);

  // Auto-focus first input on mount
  useEffect(() => {
    setFocus("otp0");
  }, [setFocus]);

  // Automatically resend OTP if `isLogin === "login"`
  useEffect(() => {
    if (isLogin === "login") {
      handleResendOTP();
    }
  }, [isLogin]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      setValue(`otp${index}`, value);
      if (value && index < 5) {
        setFocus(`otp${index + 1}`);
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const val = getValues(`otp${index}`);
      if (!val && index > 0) {
        setFocus(`otp${index - 1}`);
      }
    }
  };

  const onSubmit = async (data) => {
    const otpNumber = Object.values(data).join("");

    const payload = { email, otp: otpNumber };

    if (otpNumber.length === 6) {
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
    } else {
      toast.error("Please enter a valid 6-digit OTP.");
    }
  };

  const handleResendOTP = async () => {
    if (!email) return;

    setCountdown(60);
    setIsExpired(false);
    for (let i = 0; i < 6; i++) setValue(`otp${i}`, "");
    setFocus("otp0");

    await api(
      `api/v1/student/resendOTP`,
      { email },
      "postWithoutToken",
      "",
      ""
    );
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
              <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-9 mx-auto">
                    <div className="mb-3 px-3">
                      <p className="mb-3">
                        Enter the 6-digit code sent to your email
                      </p>
                      <div className="d-flex justify-content-between">
                        {Array.from({ length: 6 }).map((_, index) => (
                          <input
                            key={index}
                            type="text"
                            maxLength={1}
                            className="form-control text-center otp-input"
                            {...register(`otp${index}`)}
                            value={otpValues[`otp${index}`]}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            disabled={isExpired}
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-danger text-center">
                      {isExpired
                        ? "OTP has expired!"
                        : `Expires in ${String(
                            Math.floor(countdown / 60)
                          ).padStart(2, "0")}:${String(countdown % 60).padStart(
                            2,
                            "0"
                          )}`}
                    </p>

                    <button
                      className="btn_secondary btn_md w-100 mt-3"
                      type="submit"
                      disabled={isExpired}
                    >
                      Forgot Password
                    </button>

                    <p className="text-center mt-3">
                      Didn't receive code?{" "}
                      <span
                        className={`btn-link ps-1 ${
                          isExpired ? "text-primary" : "text-muted"
                        }`}
                        onClick={isExpired ? handleResendOTP : undefined}
                        style={{
                          cursor: isExpired ? "pointer" : "not-allowed",
                        }}
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

      {/* Inline styles */}
      <style>{`
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
      `}</style>
    </div>
  );
};

export default Otp;

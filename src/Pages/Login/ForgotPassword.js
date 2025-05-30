import React, { useState } from "react";
import "./login.css";
import login_img from "../../assets/image/login_img.png";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    phone: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only digits
    if (name === "phone" && !/^\d{0,10}$/.test(value)) return;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError(""); // clear error on typing
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate phone number
    if (!formData.phone || formData.phone.length !== 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    // Send OTP or proceed
    // const res = await api(...);
    navigate(`/otp?phone=${formData.phone}`);
  };

  return (
    <div className="register-area overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <h3 className="text-center mb-4">Confirm Your Phone Number</h3>
            <div className="img_sec">
              <img src={login_img} alt="Login" />
            </div>
            <div className="contact-form">
              <form className="mt-4" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-9 mx-auto">
                    <div className="mb-3 px-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="*Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength="10"
                      />
                      {error && (
                        <div className="text-danger mt-1" style={{ fontSize: "14px" }}>
                          {error}
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

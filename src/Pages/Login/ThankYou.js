import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();
  return (
    <div className="register-area overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mx-auto">
            <h3 className="text-center mb-4">Thank You !</h3>
            <h2 className="text-center">Successfully Created New Password</h2>
            <button
              onClick={() => navigate("/login")}
              className="btn_secondary btn_md w-100 mt-3 text-center"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Add styles for OTP input boxes */}
    </div>
  );
};

export default ThankYou;

import React from "react";
import check from "../../assets/image/icon/check.png";
import "./plan.css";

const Plan = () => {
  return (
    <div>
      <div className="plan_card">
        <h6 className="plan_name">Monthly</h6>
        <h4>
          ₹500 <span>/Yearly</span>
        </h4>
        <ul>
          <li>
            <img src={check} alt="" />
            Unlimited Access Courses
          </li>
          <li>
            <img src={check} alt="" />
            Certificate After Completion
          </li>
          <li>
            <img src={check} alt="" />
            Excercise Files & Notes
          </li>
          <li>
            <img src={check} alt="" />
            Personalized Feedback
          </li>
          <li>
            <img src={check} alt="" />
            Community Support
          </li>
        </ul>
        <button>Buy This Plan</button>
      </div>
    </div>
  );
};

export default Plan;

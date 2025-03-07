import React from "react";
import { useNavigate } from "react-router-dom";
import check from "../../assets/image/icon/check.png";
import "./plan.css";

const Plan = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="plan_card">
        <h6 className="plan_name">{data?.plan}</h6>
        <h4>
          ₹{data?.price} <span>/ {data?.duration}</span>
        </h4>
        <ul>
          {data?.services.map((item) => {
            return (
              <>
                <li>
                  <img src={check} alt="" />
                  {item}
                </li>
              </>
            );
          })}
        </ul>
        <button onClick={() => navigate("/login")}>Buy This Plan</button>
      </div>
    </div>
  );
};

export default Plan;

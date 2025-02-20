import React from "react";
import "./Counter.css";
const Counter = () => {
  const data = [
    { icon: "", couter: "", heading: "" },
    { icon: "", couter: "", heading: "" },
    { icon: "", couter: "", heading: "" },
    { icon: "", couter: "", heading: "" },
  ];
  return (
    <>
      <div className="counter_sec">
        <div className="container">
          <div className="row">
            {data?.map((item) => {
              return (
                <>
                  <div className="col-md-3">
                    <div className="counter-box">
                      <i className="fa fa-users"></i>
                      <h2 className="counter">29.3 K</h2>
                      <p>Student Enrolled</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;

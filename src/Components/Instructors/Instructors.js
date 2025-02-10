import React from "react";

import "./instructors.css";
import shape from "../../assets/image/shap.png";

import InstructorsItem from "./InstructorsItem";

const Instructors = ({ heading = true, className }) => {
  let arr = [1, 1, 1];
  return (
    <section class="instructor__area" className={className}>
      <div class="container">
        {heading && (
          <div className="row justify-content-center mb-5 pb-4">
            <div className="col-md-6 text-center">
              <h3 className="sub_heading">Instructors</h3>
              <h1 className="main_heading">Course Instructors</h1>
              <img className="heading_shape mt-3" src={shape} alt="" />
            </div>
          </div>
        )}

        <div class="row align-items-center">
          <div class="col">
            <div class="instructor  ">
              <div class="row">
                {arr.map((item) => {
                  return (
                    <div class="col-lg-4">
                      {" "}
                      <InstructorsItem />{" "}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;

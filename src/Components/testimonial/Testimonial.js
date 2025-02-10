import React from "react";
import "./testimonial.css";
import shape from "../../assets/image/shap.png";
import TestimonialCard from "../TestimonialItem/TestimonialCard";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="brand-section-heading">
              <div className="section-title section-left ">
                <h3 className="sub_heading">Testimonials</h3>
                <h1 className="main_heading">What Our Students Have To Say</h1>
                <img className="heading_shape mt-3 mb-4" src={shape} alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectur adipiscing elit sed
                  eiusmod tempor incididunt labore dolore magna aliquaenim ad
                  minim.
                </p>

                <button className="btn_secondary mt-2">View All</button>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row">
              <div className="col-6">
                <TestimonialCard />
              </div>
              <div className="col-6">
                <TestimonialCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

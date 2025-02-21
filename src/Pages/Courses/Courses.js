import React from "react";
import "./course.css";
import BestCoaching from "../../Components/BestCoaching/BestCoaching";
import Plan from "../../Components/Plan/Plan";

import star_grey from "../../assets/image/icon/star_grey.png";
import star_orange from "../../assets/image/icon/star_orange.png";
import ellipse_yellow from "../../assets/image/icon/ellipse_yellow.png";
import ellipse_orange from "../../assets/image/icon/ellipse_orange.png";

const Courses = () => {
  return (
    <div>
      <div className="courses">
        <div className="container">
          <h2 className="second_heading">Courses We Offer.</h2>
        </div>
      </div>
      <BestCoaching />
      <div className="discover mt-5">
        <div
          className="container-fluid"
          style={{ backgroundColor: "#FFF5F0", padding: "80px 0" }}
        >
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-8">
              <div className="mb-2">
                <span>DISCOVER NEW SKILLS</span>
              </div>

              <h2
                style={{
                  color: "#FF6B00",
                  fontSize: "45px",
                  fontWeight: "700",
                  marginBottom: "1.5rem",
                  lineHeight: "1.2",
                }}
              >
                Join Our Community Of
                <br />
                Learners!
              </h2>

              <div className="mb-4">
                <p>
                  Connect with like-minded individuals and engage in
                  collaborative learning.
                  <br />
                  Sign up now to be part of our vibrant community!
                </p>
              </div>

              <button
                className="btn_secondary mx-auto"
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#9e8466")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#8B7355")}
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="plan p-100">
        <div className="container ">
          {/* Header Section */}
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="text-center mb-5">
                <h1
                  className="main_heading mb-3"
                  style={{ color: "rgba(237, 115, 48, 1)" }}
                >
                  Select a Plan That Suits You.
                </h1>
                <p className="main_text">
                  Explore flexible pricing options tailored to fit your learning
                  needs. Choose from our affordable plans
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center gx-5">
            <div className="col-md-4">
              <Plan />
            </div>
            <div className="col-md-4">
              <Plan />
            </div>
          </div>
          <div className="shape">
            <img src={star_grey} alt="" className="shape1" />
            <img src={star_orange} alt="" className="shape2" />
            <img src={ellipse_orange} alt="" className="shape3" />
            <img src={ellipse_yellow} alt="" className="shape4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

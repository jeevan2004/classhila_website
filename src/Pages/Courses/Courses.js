import React from "react";
import "./course.css";
import BestCoaching from "../../Components/BestCoaching/BestCoaching";
import Plan from "../../Components/Plan/Plan";

const Courses = () => {
  return (
    <div>
      <div className="courses">
        <div className="container">
          <h2 className="second_heading">Courses We Offer.</h2>
        </div>
      </div>
      <BestCoaching />
      <div className="discover">
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
          <div className="text-center mb-5">
            <h1
              className="display-4 mb-3"
              style={{ color: "rgba(237, 115, 48, 1)" }}
            >
              Select a Plan That Suits You.
            </h1>
            <p className="text-muted">
              Explore flexible pricing options tailored to fit your learning
              needs. Choose from our affordable plans
            </p>
          </div>
          <div className="row justify-content-center gx-5">
            <div className="col-md-4">
              <Plan />
            </div>
            <div className="col-md-4">
              <Plan />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

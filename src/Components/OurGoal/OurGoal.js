import React from "react";
import "./ourgoal.css";
import badge from "../../assets/image/icon/badge.png";
import qualified from "../../assets/image/icon/qualified.png";
import cloud from "../../assets/image/icon/cloud.png";

const OurGoal = () => {
  return (
    <div className="our_goal">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="content">
              <img src={qualified} alt="" />
              <h5>Inclusive Education</h5>
              <p className="main_text">
                Complete assignments from a remote location, such as their
                workplace.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content">
              <img src={badge} alt="" />
              <h5>Affordable Learning</h5>
              <p className="main_text">
                Access to quality education for just ₹599/month.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content">
              <img src={qualified} alt="" />
              <h5>Ed-Zen</h5>
              <p className="main_text">
                Multi-Exam Preparation: Prepare for multiple exams
                simultaneously in the same time frame, with a blended learning
                experience.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content">
              <img src={cloud} alt="" />
              <h5>Expert Guidance & Community Support</h5>
              <p className="main_text">
                Live Q&A, mentorship, and a supportive community to keep
                students motivated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGoal;

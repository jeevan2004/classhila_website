import React, { useState } from "react";
import "./ourgoal.css";
import badge from "../../assets/image/icon/badge.svg";
import badge_o from "../../assets/image/icon/badge_o.svg";
import qualified from "../../assets/image/icon/qualified.svg";
import qualified_o from "../../assets/image/icon/qualified_o.svg";
import cloud from "../../assets/image/icon/cloud.svg";
import cloud_o from "../../assets/image/icon/cloud_o.svg";

const OurGoal = () => {
  // Store hover states for multiple boxes
  const [hovered, setHovered] = useState({});

  const handleMouseEnter = (key) => {
    setHovered((prev) => ({ ...prev, [key]: true }));
  };

  const handleMouseLeave = (key) => {
    setHovered((prev) => ({ ...prev, [key]: false }));
  };

  return (
    <div className="our_goal px-md-4 ">
      <div className="container ">
        <div className="row">
          {/* Box 1 - Inclusive Education */}
          <div
            className="col-lg-3 col-md-6 box"
            onMouseEnter={() => handleMouseEnter("qualified1")}
            onMouseLeave={() => handleMouseLeave("qualified1")}
          >
            <div className="content">
              <img
                src={hovered["qualified1"] ? qualified_o : qualified}
                alt="Qualified"
              />
              <h5>Inclusive Education</h5>
              <p className="main_text">
                Complete assignments from a remote location, such as their
                workplace.
              </p>
            </div>
          </div>

          {/* Box 2 - Affordable Learning (Uses the same "badge" icon) */}
          <div
            className="col-lg-3 col-md-6 box"
            onMouseEnter={() => handleMouseEnter("badge")}
            onMouseLeave={() => handleMouseLeave("badge")}
          >
            <div className="content">
              <img src={hovered["badge"] ? badge_o : badge} alt="Badge" />
              <h5>Affordable Learning</h5>
              <p className="main_text">
                Access to quality education for just ₹599/month.
              </p>
            </div>
          </div>

          {/* Box 3 - Ed-Zen (Same icon as Box 1) */}
          <div
            className="col-lg-3 col-md-6 box"
            onMouseEnter={() => handleMouseEnter("qualified2")}
            onMouseLeave={() => handleMouseLeave("qualified2")}
          >
            <div className="content">
              <img
                src={hovered["qualified2"] ? qualified_o : qualified}
                alt="Ed-Zen"
              />
              <h5>Ed-Zen</h5>
              <p className="main_text">
                Multi-Exam Preparation: Prepare for multiple exams
                simultaneously in the same time frame, with a blended learning
                experience.
              </p>
            </div>
          </div>

          {/* Box 4 - Expert Guidance (Different icon) */}
          <div
            className="col-lg-3 col-md-6 box"
            onMouseEnter={() => handleMouseEnter("cloud")}
            onMouseLeave={() => handleMouseLeave("cloud")}
          >
            <div className="content">
              <img src={hovered["cloud"] ? cloud_o : cloud} alt="Cloud" />
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

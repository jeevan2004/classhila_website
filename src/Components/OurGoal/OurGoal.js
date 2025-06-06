import React, { useState } from "react";
import "./ourgoal.css";
import badge from "../../assets/image/icon/badge.svg";
import badge_o from "../../assets/image/icon/badge_o.svg";
import qualified from "../../assets/image/icon/qualified.svg";
import qualified_o from "../../assets/image/icon/qualified_o.svg";
import cloud from "../../assets/image/icon/cloud.svg";
import cloud_o from "../../assets/image/icon/cloud_o.svg";

const goalItems = [
  {
    key: "qualified1",
    title: "Inclusive Education",
    icon: qualified,
    iconHover: qualified_o,
    text:
      "Classhila believes in inclusive education, ensuring every learner thrives in a supportive environment. Together, we celebrate diversity and empower all students to succeed.",
  },
  {
    key: "badge",
    title: "Affordable Learning",
    icon: badge,
    iconHover: badge_o,
    text:
      "Affordable and student-friendly courses open doors to quality education for all. Our courses deliver premium learning without the premium price.",
  },
  {
    key: "qualified2",
    title: "Ed-Zen",
    icon: qualified,
    iconHover: qualified_o,
    text:
      "More than just another coaching program, Ed-Zen is a new-age program that redefines exam preparation, giving aspirants the unbeatable edge they deserve.",
  },
  {
    key: "cloud",
    title: "Expert Guidance & Community Support",
    icon: cloud,
    iconHover: cloud_o,
    text:
      "Beyond textbooks, our mentors provide the winning mindset, exam-day tactics, and mistake-proofing techniques that turn an average student into a top ranker.",
  },
];

const OurGoal = () => {
  const [hovered, setHovered] = useState({});

  const handleMouseEnter = (key) => {
    setHovered((prev) => ({ ...prev, [key]: true }));
  };

  const handleMouseLeave = (key) => {
    setHovered((prev) => ({ ...prev, [key]: false }));
  };

  return (
    <div className="our_goal px-md-4 ">
      <div className="container">
        <div className="row">
          {goalItems.map((item) => (
            <div
              key={item.key}
              className="col-lg-3 col-md-6 box"
              onMouseEnter={() => handleMouseEnter(item.key)}
              onMouseLeave={() => handleMouseLeave(item.key)}
            >
              <div className="content">
                <img
                  src={hovered[item.key] ? item.iconHover : item.icon}
                  alt={item.title}
                />
                <h5>{item.title}</h5>
                <p className="main_text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurGoal;

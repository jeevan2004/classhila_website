import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import teacher from "../../assets/image/teacher.png";
import team from "../../assets/image/team.png";
import Ourmenters from "../../assets/image/ourmenters.png";
import RebeccaSky from "../../assets/image/RebeccaSky.png";
import MarkRobinson from "../../assets/image/MarkRobinson.png";

import "./ourMentor.css";

const mentorData = [
  { id: 1, name: "Arnold Troy", role: "Mentor", img: Ourmenters },
];

const OurMentor = ({ viewMore, viewAll }) => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  // Toggle View More / View Less
  const toggleMentorView = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="our_mentor p-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="content">
              <h6 className="pre_heading">Our Mentor</h6>
              <h3 className="main_heading">
                Let's See Our Dedicated Mentorship Team.
              </h3>
              <div className="comment">
                <span>
                  "Online courses are the gateway to limitless learning. In this
                  digital age, education knows no boundaries—Unlock your
                  potential and explore a world of knowledge at your
                  fingertips!"
                </span>
                <p>Popper Pots</p>
                <small>Founder ProLearn</small>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <img className="w-100" src={teacher} alt="Mentor" />
          </div>
        </div>

        <div className="row mt-5">
          {mentorData
            .slice(0, showAll ? mentorData.length : 3) // Show 3 initially
            .map((mentor) => (
              <div className="col-md-4" key={mentor.id}>
                <div className="team_member text-center">
                  <img src={mentor.img} alt={mentor.name} />
                  <h4>{mentor.name}</h4>
                  <span>{mentor.role}</span>
                </div>
              </div>
            ))}
        </div>

        {/* View More / View Less Button */}
        {viewMore && (
          <div className="text-center mt-4">
            <button
              className="btn_secondary mx-auto"
              onClick={toggleMentorView}
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}

        {/* View All Mentors Button */}
        {viewAll && (
          <div className="text-center mt-3">
            <button
              className="btn_secondary mx-auto"
              onClick={() => navigate("/mentor")}
            >
              View All Mentor/Faculty
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurMentor;

import React from "react";
import teacher from "../../assets/image/teacher.png";
import team from "../../assets/image/team.png";
import "./ourMentor.css";

const OurMentor = () => {
  return (
    <div className="our_mentor p-100">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="content">
              <h6 className="pre_heading">Our Mentor</h6>
              <h3 className="main_heading">
                Let’s See Our Dedicated Mentorship Team.
              </h3>
              <div className="comment">
                <span>
                  "Online courses are the gateway to limitless learning. In this
                  digital age, education knows no boundaries—uUnlock your
                  potential and explore a world of knowledge at your
                  fingertips!"
                </span>
                <p>Popper Pots</p>
                <small>Founder ProLearn</small>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={teacher} alt="" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="team_member text-center">
              <img src={team} alt="" />
              <h4>Arnold Troy</h4>
              <span>Mentor</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team_member text-center">
              <img src={team} alt="" />
              <h4>Arnold Troy</h4>
              <span>Mentor</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team_member text-center">
              <img src={team} alt="" />
              <h4>Arnold Troy</h4>
              <span>Mentor</span>
            </div>
          </div>
        </div>

        <button className="btn_secondary mt-4 mx-auto">
          View All Mentor/Faculty
        </button>
      </div>
    </div>
  );
};

export default OurMentor;

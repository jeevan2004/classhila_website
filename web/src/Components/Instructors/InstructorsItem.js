import React from "react";
import "./instructors.css";
import team1 from "../../assets/image/team1.webp";
const InstructorsItem = () => {
  return (
    <div class="instructor  ">
      {" "}
      <div class="team_inner">
        <div class="inner">
          <div class="thumbnail-wrap">
            <div class="thumbnail">
              <a href="team-details.html">
                <img className="w-100" src={team1} alt="team images" />
              </a>
            </div>
            <ul class="team-share-info">
              <li>
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="content">
            <h5 class="title">
              <a href="team-details.html">Jane Seymour</a>
            </h5>
            <span class="designation">UI Designer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorsItem;

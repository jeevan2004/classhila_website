import React from "react";
import mask from "../../assets/image/mask.png";
import blank from "../../assets/image/blank.png";
import star from "../../assets/image/Star.png";
import star_yellow from "../../assets/image/icon/star_yellow.png";
import "./review.css";

const Review = () => {
  return (
    <div className="review p-100">
      <div className="container">
        <div className="review_inner">
          <img src={mask} alt="" />
          <div className="review_content">
            <div className="author">
              <img src={blank} alt="" />
              <h2>Surender Reddy</h2>
              <p>Crazy Guy</p>
            </div>
            <div className="author_content">
              <img src={star} alt="" />
              <p>
                "Taking the ProLearn was an incredible experience! I gained
                valuable skills that I can apply right away. Highly recommend it
                for anyone looking to level up!"
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="shape">
        <img src={star_yellow} alt="" className="shape1" />
      </div>
    </div>
  );
};

export default Review;

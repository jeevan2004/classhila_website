import React from "react";
import mask from "../../assets/image/mask.png";
import blank from "../../assets/image/blank.png";
import star from "../../assets/image/Star.png";
import star_yellow from "../../assets/image/icon/star_yellow.png";
import "./review.css";
import Slider from "react-slick";

const Review = () => {
  var tabSlider = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="review p-100">
      <div className="container">
        <div className="review_inner">
          <img src={mask} alt="" />
          <div className="review_content">
            <Slider {...tabSlider}>
              <div>
                <div className="review_content_inner">
                  <div className="author">
                    <img src={blank} alt="" />
                    <h2>Surender Reddy</h2>
                    <p>Crazy Guy</p>
                  </div>
                  <div className="author_content">
                    <img src={star} alt="" />
                    <p>
                      "Taking the ProLearn was an incredible experience! I
                      gained valuable skills that I can apply right away. Highly
                      recommend it for anyone looking to level up!"
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="review_content_inner">
                  <div className="author">
                    <img src={blank} alt="" />
                    <h2>Surender Reddy</h2>
                    <p>Crazy Guy</p>
                  </div>
                  <div className="author_content">
                    <img src={star} alt="" />
                    <p>
                      "Taking the ProLearn was an incredible experience! I
                      gained valuable skills that I can apply right away. Highly
                      recommend it for anyone looking to level up!"
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="review_content_inner">
                  <div className="author">
                    <img src={blank} alt="" />
                    <h2>Surender Reddy</h2>
                    <p>Crazy Guy</p>
                  </div>
                  <div className="author_content">
                    <img src={star} alt="" />
                    <p>
                      "Taking the ProLearn was an incredible experience! I
                      gained valuable skills that I can apply right away. Highly
                      recommend it for anyone looking to level up!"
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
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

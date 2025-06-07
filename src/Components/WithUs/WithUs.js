import React from "react";
import boy from "../../assets/image/boy.png";
import banner_about from "../../assets/image/banner_about.jpg";
import phone from "../../assets/image/icon/phone.png";
import ellipse_grey from "../../assets/image/icon/ellipse_grey.png";
import ellipse_orange from "../../assets/image/icon/ellipse_orange.png";
import star_orange from "../../assets/image/icon/star_orange.png";
import star_yellow from "../../assets/image/icon/star_yellow.png";
import "./withus.css";
import { Link } from "react-router-dom";
const WithUs = ({ btn }) => {
  return (
    <div className="with_us p-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="content">
              <h2 className="main_heading mb-3">
              We boost your performance beyond your expectations
              </h2>
              <p className="main_text mb-2">
              Classhila is a subscription-based online learning platform that provides access to a wide range of educational resources and expert guidance.
              We strongly believe that our digital solutions can provide students with the opportunity to learn anytime, anywhere, and be equipped with the right knowledge and skills to achieve their dreams and goals. Through our strong focus on technology and innovative educational content, we are changing the landscape of learning for students in India. </p>
              {btn && (
                <Link to={"/about-us"} className="btn_secondary fit_auto">
                  Learn More
                </Link>
              )}
            </div>
            <div className="with_us_button btn_secondary d-block mt-3">
                  <div className="inner d-flex">

                    <img src={phone} alt="" />
                    <div>
                      <p>Contact Us</p>
                      <span>+91 9553460456</span>
                    </div>
                    </div>
                    <div className="inner d-flex align-items-center">

<img src={phone} alt="" />
<div>

  <span>+91 8333812323</span>
</div>
</div>
                  </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="images">
              <div className="row">
               
                <div className="col-sm-12">
                  <div className="img_box">
                    <img src={banner_about} alt="" className="w-100" />
                  </div>
                </div>
              </div>

              <div className="shape">
                <img src={ellipse_grey} alt="" className="shape1" />
                <img src={ellipse_orange} alt="" className="shape2" />
                <img src={star_orange} alt="" className="shape3" />
                <img src={star_yellow} alt="" className="shape4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithUs;

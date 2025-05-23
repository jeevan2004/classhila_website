import React from "react";
import "./homeBanner.css";
import banner from "../../assets/image/banner.png";
import activeStudent from "../../assets/image/active_student.png";
import star from "../../assets/image/Star.png";
import ipsum from "../../assets/image/logo_ipsum.png";
import logo1 from "../../assets/image/logo1.png";
import logo2 from "../../assets/image/logo2.png";
import logo3 from "../../assets/image/logo3.png";
import logo4 from "../../assets/image/logo4.png";
import logo5 from "../../assets/image/logo5.png";

import star_yellow from "../../assets/image/icon/star_yellow.png";
import ellipse_orange from "../../assets/image/icon/ellipse_orange.png";
import { Link, useNavigate } from "react-router-dom";

const HomeBanner = ({ handleScroll }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero-banner hero-style-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto">
              <div className="banner-content">
                {/* <p className="top">World's First AI Online Club</p>
                <p className="top">
                  India's First EduTech Platform to be Backed by Osmania
                  Technology Business Incubation (OTBI) in Osmania University
                </p> */}
                <h6>EXCELLENCE IN EDUCATION</h6>
                <h1
                  className="title sal-animate"
                  data-sal-delay="100"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                >
                  Learn Better and Achieve More with Our Expert Coaching &
                  Guidance
                </h1>
                <p
                  data-sal-delay="200"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  className="sal-animate"
                >
                
From foundations to advanced tricks, our coaches handpick techniques that give you an unbeatable edge.

                </p>

                <div
                  className="banner-btn sal-animate d-flex align-items-center"
                  data-sal-delay="400"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                >
                  <button
                    onClick={() => navigate("/register")}
                    className="btn_primary mt-3"
                  >
                    Get Started Today
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mx-auto">
              <div className="banner-thumbnail">
                <div
                  className="thumbnail sal-animate"
                  data-sal-delay="500"
                  data-sal="slide-left"
                  data-sal-duration="1000"
                >
                  <img src={banner} alt="Banner" />
                </div>

                <div
                  className="instructor-info first sal-animate"
                  data-sal-delay="600"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                >
                  <div className="inner">
                    <div className="media">
                      <div className="content">
                        <span>
                          <img
                            src={activeStudent}
                            alt="Images"
                            className="me-2"
                          />
                          100K+
                        </span>{" "}
                        Active Students
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="instructor-info sal-animate"
                  data-sal-delay="600"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                >
                  <div className="inner">
                    <div className="media d-flex">
                      <div className="thumb">
                        <img src={star} alt="Images" />
                      </div>
                      <div className="content">
                        <span className="mt-1">
                          <small>(4.5/5)</small>
                        </span>{" "}
                        Star Rating
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape">
          <img src={star_yellow} alt="" className="shape1" />
          <img src={ellipse_orange} alt="" className="shape2" />
        </div>
      </div>
      {/* <div className="notify">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <h6>Empowering Careers, Enabling Success—One Nation 5.0</h6>
              <p>
                Your one-stop solution for global education pathways, skill
                development, and career readiness.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div class="features-area">
        <div class="container">
          <div class="features-grid-wrap">
            <div class="features-box features-style-2 edublink-svg-animate">
              <div class="icon">
                <img src={logo1} alt="" />
              </div>
            </div>
            <div class="features-box features-style-2 edublink-svg-animate">
              <div class="icon">
                <img src={logo2} alt="" />
              </div>
            </div>
            <div class="features-box features-style-2 edublink-svg-animate">
              <div class="icon">
                <img src={logo3} alt="" />
              </div>
            </div>
            <div class="features-box features-style-2 edublink-svg-animate">
              <div class="icon">
                <img src={logo4} alt="" />
              </div>
            </div>
            <div class="features-box features-style-2 edublink-svg-animate">
              <div class="icon">
                <img src={logo5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HomeBanner;

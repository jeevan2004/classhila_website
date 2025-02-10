import React from "react";
import logo from "../../assets/image/logo.png";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="container">
          <div className="default-padding">
            <div className="row gy-5">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer_about wow animate__animated animate__fadeInLeft">
                  <img src={logo} alt="" />
                  {/* <p className="">
                    We offer a wide range of courses in various subjects, from
                    business and technology to art and personal development
                  </p> */}
                  {/* <p>
                    Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm
                    tempor incidid unt labore dolore.
                  </p> */}
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                <div className="footer_link wow animate__animated animate__fadeInUp">
                  <h4>Online Platform</h4>
                  <ul>
                    <li>
                      {/* <a href="">Home</a> */}
                      <Link to={"#"}>Nextgen Academy</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Talent Hub</Link>
                    </li>
                    {/* <li>
                      <a href="">Blog</a>

                    </li> */}
                    <li>
                      <Link to={"#"}>Skill Sprint 5.0</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                <div className="footer_link wow animate__animated animate__fadeInUp">
                  <h4>Links</h4>
                  <ul>
                    <li>
                      <Link to={"#"}>vvGrad Abroad</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Nxt PrepX</Link>
                    </li>
                    <li>
                      <Link to={"#"}>HireX</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer_address wow animate__animated animate__fadeInUp">
                  <h4>Email</h4>
                  <ul>
                    <li>
                      <p>hello@vvgrad.com | 8074 943 404</p>
                    </li>
                    <li>
                      <i class="fab fa-google"></i>
                      <i class="fab fa-facebook-f"></i>
                      <i class="fab fa-twitter"></i>
                      <i class="fab fa-linkedin-in"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer_bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 wow animate__animated animate__fadeInLeft">
              <p className=" main_text text-center mb-3">
                Copyright © 2024 vvGrad | All Rights Reserved
              </p>
              <p className="main_text text-center">Privacy policy | Terms</p>
            </div>
            {/* <div className="col-md-6 wow animate__animated animate__fadeInRight">
              <ul>
                <li>
                  <Link to={"/privacy-policy"}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to={"/terms-conditions"}>Terms & Conditions</Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

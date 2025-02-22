import React from "react";
import logo from "../../assets/image/logo_footer.png";
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
                  <p className="">
                    Classhila Education Privite Limited 19/3RT MIGH Vijayanagar
                    Colony Hyderabad-500057
                  </p>
                  {/* <p>
                    Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm
                    tempor incidid unt labore dolore.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="footer_link wow animate__animated animate__fadeInUp">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    {/* <a href="">Home</a> */}
                    <Link to={"/about-us"}>About Us</Link>
                  </li>
                  <li>
                    <Link to={"/mentor"}>Our Mentor</Link>
                  </li>
                  {/* <li>
                      <a href="">Blog</a>

                    </li> */}
                  <li>
                    <Link to={"#"}>Pricing</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Blogs</Link>
                  </li>
                  <li>
                    <Link to={"/faq"}>FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="footer_link wow animate__animated animate__fadeInUp">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <Link to={"#"}>+91 9553460456</Link>
                  </li>
                  <li>
                    <Link to={"#"}>+91 8333812323</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Support@classhila.com</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div className="footer_address wow animate__animated animate__fadeInUp">
                <h4>Subscribe for more useful updates</h4>

                <div className="group_email">
                  <input type="text" placeholder="Email Address" />
                  <button className="btn_secondary">Subscribe</button>
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
              <p className=" main_text text-center ">
                Copyright © 2024 Classhila.com All Rights Reserved.
              </p>
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

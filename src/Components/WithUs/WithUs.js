import React from "react";
import boy from "../../assets/image/boy.png";
import video from "../../assets/image/Video.png";
import phone from "../../assets/image/icon/phone.png";
import ellipse_grey from "../../assets/image/icon/ellipse_grey.png";
import ellipse_orange from "../../assets/image/icon/ellipse_orange.png";
import star_orange from "../../assets/image/icon/star_orange.png";
import star_yellow from "../../assets/image/icon/star_yellow.png";
import "./withus.css";
const WithUs = () => {
  return (
    <div className="with_us p-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <h2 className="main_heading mb-3">
                Start Better Learning <br />
                <span className="secondary_text">with Us.</span>
              </h2>
              <p className="main_text mb-2">
                To create a world where every student, regardless of their
                background, is empowered with a well-rounded education that
                nurtures resilience, critical thinking, and a passion for
                lifelong learning, equipping them to confidently navigate and
                succeed in the complexities of the modern world.
              </p>
              <p className="main_text mb-3">
                With a team of experienced educators and industry professionals,
                we offer engaging content designed to inspire and motivate
                learners from all backgrounds. Join our vibrant community of
                learners and start your journey with us today!
              </p>
              <button className="btn_secondary ">Learn More</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="images">
              <div className="row">
                <div className="col-md-6">
                  <img src={boy} alt="" className="rounded-4" />
                  <div className="with_us_button btn_secondary mt-3">
                    <img src={phone} alt="" />
                    <div>
                      <p>Contact Us</p>
                      <span>+91-7036816361</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src={video} alt="" className="mt-5" />
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

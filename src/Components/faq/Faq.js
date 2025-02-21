import React from "react";
import { Accordion } from "react-bootstrap";
import CountUp from "react-countup";
import shape from "../../assets/image/shap.png";
import faq from "../../assets/image/faq.png";
import "./faq.css";

const Faq = ({ questions }) => {
  return (
    <>
      {/* <section class="fact__area mt-5 pt-5">
        <div class="container">
          <div class="fact__inner-wrap">
            <div class="row">
              <div class="col-lg-3 col-sm-6">
                <div class="fact__item">
                  <div class="odometer-inside">
                    <CountUp end={900} />
                    <p>Active Students</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-sm-6">
                <div class="fact__item">
                  <CountUp end={1600} />

                  <p>Faculty Courses</p>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="fact__item">
                  <CountUp end={1400} />
                  <p>Best Professors</p>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="fact__item">
                  <CountUp end={100} />
                  <p>Award Achieved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section class="faq__area">
        <div class="container">
          <div className="row justify-content-center mb-5 pb-4">
            <div className="col-lg-6 text-center">
              <h3 className="sub_heading">FAQ</h3>
              <h1 className="main_heading">frequently asked questions</h1>
              <img className="heading_shape mt-3" src={shape} alt="" />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="faq__img-wrap tg-svg">
                <div class="faq__img">
                  <img src={faq} alt="img" />
                  <div class="shape-one">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="243"
                      height="201"
                      viewBox="0 0 243 201"
                      fill="none"
                      data-inject-url="https://skillgro.websolutionus.com/frontend/img/others/faq_shape01.svg"
                      class="injectable tg-motion-effects4"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M33.4888 2.33732C51.0788 -4.90402 74.7375 10.3492 95.1583 10.1059C112.054 9.90458 124.917 -1.94773 142.286 1.04108C161.229 4.30087 182.771 11.4675 196.311 27.5126C209.823 43.525 204.073 64.7482 211.768 83.3776C219.978 103.254 244.371 120.756 242.796 140.051C241.244 159.064 219.234 165.093 204.324 174.576C191.463 182.756 177.07 187.574 161.728 191.613C144.966 196.024 128.585 200.247 110.135 199.366C85.6793 198.199 52.9607 207.808 36.8703 185.654C19.1764 161.292 51.8095 136.455 44.5608 109.082C38.4883 86.1502 3.04428 71.7681 0.682568 48.9991C-1.5703 27.2795 15.2076 9.8632 33.4888 2.33732Z"
                        fill="currentcolor"
                      ></path>
                    </svg>
                  </div>
                  <div class="shape-two">
                    <span
                      class="svg-icon"
                      id="faq-svg"
                      data-svg-icon="https://skillgro.websolutionus.com/frontend/img/others/faq_shape02.svg"
                    >
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 54 66"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.76256 36.4136C7.34334 29.8191 15.1459 14.2331 17.71 4.64484"
                          stroke="#031333"
                          stroke-width="3.07158"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M18.1469 52.3203C25.5569 51.1365 42.6675 47.8153 51.8301 44"
                          stroke="#031333"
                          stroke-width="3.07158"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M12.9399 41.2119C17.218 38.6967 26.7978 32.5534 30.8916 28.1021"
                          stroke="#031333"
                          stroke-width="3.07158"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="faq__content">
                <div class="section__title pb-10">
                  {/* <span class="sub-title">FAQs</span> */}
                  {/* <h2 class="main_heading">
                      Start Learning From World’s Pro Instructors
                    </h2> */}
                </div>
                {/* <p>
                  Groove’s intuitive shared inbox makes it easy for team members
                  to organize, prioritize and.In this episode.
                </p> */}
                <div class="faq__wrap">
                  <Accordion defaultActiveKey="0">
                    {questions.map((question, index) => (
                      <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>{question.title}</Accordion.Header>
                        <Accordion.Body>{question.content}</Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;

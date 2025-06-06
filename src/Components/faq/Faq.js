import React from "react";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";

import phone from "../../assets/image/icon/phone.png";
import star from "../../assets/image/icon/star_big.png";
import ellipse_grey from "../../assets/image/icon/ellipse_grey.png";
import "./faq.css";

const Faq = () => {
  const questions = [
    {
      title: "How do I get started?",
      content:
        "Download the app or connect with our team at +91 9553460456, 8333812323 or mail to support@classhila.com",
    },
    {
      title: "What languages are the learning programs available in?",
      content:
        "Classhila's programs are presently available in English and we will shortly provide classes/subtitles in regional languages – Malayalam, Kannada, Telugu, Bengali, Gujarati, Hindi and Tamil.",
    },
    {
      title: "Is the Classhila app available for free?",
      content:
        "Yes, the Classhila app is free to download and some content is free of charge. You have to purchase the program to access the complete learning program.",
    },
    {
      title: "What makes Classhila so affordable?",
      content:
        "At Classhila, we ignite the potential in every learner—because dreams deserve wings, not price tags. We believe that it's the passion, not privilege that determines success.",
    },
    {
      title: "Do you provide customer support?",
      content:
        "Yes, we provide customer support for all our users. You can write to us at support@classhila.com",
    },
    {
      title: "What is the procedure to get a refund of my money?",
      content:
        "You need to drop an email with the course details and registered email id to support@classhila.com. Once you send the email the concerned team will connect with you shortly.",
    },
  ];
  
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
      <div className="faq-page pt-5">
        <Container className="py-5">
          <Row>
            <Col lg={5}>
              <div className="mb-4">
                <h6 className="pre_heading">FAQS</h6>
                <h2 className="main_heading mb-3">
                  Your Guide To Online Learning Success.
                </h2>
                <p className="main_text">
                  We've got answers! Here you'll find information on enrollment,
                  course structure, payment options, and technical support.
                </p>

                <Card
                  className="border-0 mt-3 fit_auto"
                  style={{ backgroundColor: "#F47F24", borderRadius: "8px" }}
                >
                  <Card.Body className=" faq_contact">
                    <div className="d-flex align-items-center">
                      <div className="me-3">
                        <span style={{ fontSize: "24px", color: "white" }}>
                          <img src={phone} alt="" />
                        </span>
                      </div>
                      <div>
                        <h5 className="mb-0 text-white">
                          Any Question? Ask Us !
                        </h5>
                        <p className="mb-0 text-white">+91 9553460456</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col lg={7} className="ps-5">
              <div className="custom-accordion">
                <div class="faq__wrap">
                  <Accordion defaultActiveKey="0">
                    {questions.map((question, index) => (
                      <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>
                          {" "}
                          <span className="faq-question">{question.title}</span>
                        </Accordion.Header>
                        <Accordion.Body>{question.content}</Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>
            </Col>
          </Row>
          <div className="shape">
            <img src={star} alt="" className="shape1" />
            <img src={ellipse_grey} alt="" className="shape2" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Faq;

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import phone from "../../assets/image/icon/phone.png";
import star from "../../assets/image/icon/star_big.png";
import ellipse_grey from "../../assets/image/icon/ellipse_grey.png";
import "./FAQPage.css";
import Support from "../Support/Support";
import ipsum from "../../assets/image/logo_ipsum.png";
const FAQPage = () => {
  const questions = [
    {
      title: "Industry Company-Ready Certification (ICRC)",
      content:
        "Earn India’s first Company-Ready Certification (ICRC 5.0 ), ensuring you stand out in the competitive tech job market.",
    },
    {
      title: "Top Company Mentorship",
      content:
        "Learn from alumni and company experts from top companies like Google, Microsoft, and Amazon.etc…",
    },
    {
      title: "Hands-On Projects",
      content:
        "Build cutting-edge solutions using AI, Machine Learning, IoT, Blockchain, and more.",
    },
    {
      title: "Job-Ready Skills",
      content:
        "Gain expertise in full-stack development, competitive programming, and real-world problem-solving.",
    },
    {
      title: "Flexible Learning",
      content:
        "Juggle studies and vvGrad’s curriculum with just 10 hours of weekly effort alongside your college education.",
    },
    {
      title: "Direct Job Placement Support",
      content:
        "Benefit from placement assistance, career coaching, and a direct pipeline to hiring partners, with salaries Upto ₹30 LPA.",
    },
  ];
  return (
    <>
      <div className="faq-page pt_150">
        <Container className="">
          {/* <h1 className="text-center mb-5 fw-bold" style={{ color: "#333" }}>
          FAQs<span style={{ color: "#F47F24" }}>.</span>
        </h1> */}
          <div className="heading">
            <h4>
              FAQs <span>.</span>
            </h4>
          </div>

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
                  className="border-0 mt-3"
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
                          Any Question? Ask Us!
                        </h5>
                        <p className="mb-0 text-white">+91-70368 16361</p>
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
      <div class="features-area features_faq">
        <div class="container">
          <div class="features-grid-wrap">
            <div class="features-box features-style-2 edublink-svg-animate">
              <div class="icon">
                <img src={ipsum} alt="" />
              </div>
            </div>
            <div class="features-box features-style-2 edublink-svg-animate">
              <div class="icon">
                <img src={ipsum} alt="" />
              </div>
            </div>
            <div class="features-box features-style-2 edublink-svg-animate">
              <div class="icon">
                <img src={ipsum} alt="" />
              </div>
            </div>
            <div class="features-box features-style-2 edublink-svg-animate">
              <div class="icon">
                <img src={ipsum} alt="" />
              </div>
            </div>
            <div class="features-box features-style-2 edublink-svg-animate">
              <div class="icon">
                <img src={ipsum} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 my-5">
        <Support Contact_box={true} />
      </div>
    </>
  );
};

export default FAQPage;

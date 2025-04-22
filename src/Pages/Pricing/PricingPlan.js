import React, { useEffect, useState } from "react";
import "./PricingPlan.css";
import BestCoaching from "../../Components/BestCoaching/BestCoaching";
import Plan from "../../Components/Plan/Plan";
import { useLocation, useNavigate } from "react-router-dom";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import coaching from "../../assets/image/coaching.png";
import notebook from "../../assets/image/icon/notebook.png";
import group from "../../assets/image/icon/user-group.png";
import blank from "../../assets/image/blank.png";
import OurMentor from "../../Components/OurMentor/OurMentor";

const PricingPlan = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("tab1");
  const handleSelect = (key) => setActiveTab(key);
  const planData = [
    {
      plan: "Monthly",
      price: "599",
      duration: "Monthly",
      services: [
        `Unlimited Access Courses`,
        `Certificate After Completion`,
        `Excercise Files & Notes`,
        `Personalized Feedback`,
        `Community Support`,
      ],
    },
    {
      plan: "Quarterly",
      price: "3594",
      duration: "Quarterly",
      services: [
        `Unlimited Access Courses`,
        `Certificate After Completion`,
        `Excercise Files & Notes`,
        `Personalized Feedback`,
        `Community Support`,
      ],
    },
    {
      plan: "Yearly",
      price: "7189",
      duration: "Yearly",
      services: [
        `Unlimited Access Courses`,
        `Certificate After Completion`,
        `Excercise Files & Notes`,
        `Personalized Feedback`,
        `Community Support`,
      ],
    },
  ];
  return (
    <div>
      <div className="courses">
        <div className="container">
          <h2 className="second_heading">Price List.</h2>
        </div>
      </div>

      {/* Header Section */}

      <section className=" best_coaching_tab pt-3 d-none">
        <Tab.Container
          defaultActiveKey="tab1"
          activeKey={activeTab}
          onSelect={handleSelect}
        >
          {/* Left-Side Tabs */}
          <div className="tabs-nav">
            <Nav variant="pills" className="">
              <Nav.Item>
                <Nav.Link eventKey="tab1">
                  <h4>Monthly</h4>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tab2">
                  {" "}
                  <h4>Monthly</h4>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Row>
            {/* Right-Side Content */}
            <Col md={12} className="tabs-content mt-5 ">
              <Tab.Content>
                <Tab.Pane eventKey="tab1">
                  <div className="row gx-5">
                    <div className="col-md-4">
                      <Plan />
                    </div>
                    <div className="col-md-4">
                      <Plan />
                    </div>
                    <div className="col-md-4">
                      <Plan />
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="tab2">
                  <div className="row gx-5">
                    <div className="col-md-4">
                      <Plan />
                    </div>
                    <div className="col-md-4">
                      <Plan />
                    </div>
                    <div className="col-md-4">
                      <Plan />
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </section>
      <div className="plan">
        <div className="container ">
          {/* Header Section */}
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center mb-5">
                <h1
                  className="main_heading mb-3"
                  style={{ color: "rgba(237, 115, 48, 1)" }}
                >
                  Select a Plan That Suits You.
                </h1>
                <p className="main_text">
                  Explore flexible pricing options tailored to fit your learning
                  needs. Choose from our affordable plans
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center gx-5">
            {planData?.map((item) => {
              return (
                <>
                  <div className="col-md-6 col-lg-4">
                    <Plan data={item} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <div className="discover mt-5">
        <div
          className="container-fluid"
          style={{ backgroundColor: "#FFF5F0", padding: "80px 0" }}
        >
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-8">
              <div className="mb-2">
                <span>DISCOVER NEW SKILLS</span>
              </div>

              <h2
                style={{
                  color: "#FF6B00",
                  fontSize: "45px",
                  fontWeight: "700",
                  marginBottom: "1.5rem",
                  lineHeight: "1.2",
                }}
              >
                Join Our Community Of
                <br />
                Learners!
              </h2>

              <div className="mb-4">
                <p>
                  Connect with like-minded individuals and engage in
                  collaborative learning.
                  <br />
                  Sign up now to be part of our vibrant community!
                </p>
              </div>

              <button
                className="btn_secondary mx-auto"
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#9e8466")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#8B7355")}
                onClick={() => navigate("/register")}
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <OurMentor viewMore={true} viewAll={false} /> */}
    </div>
  );
};

export default PricingPlan;

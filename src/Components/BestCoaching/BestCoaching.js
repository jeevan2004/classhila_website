// import "bootstrap-icons/font/bootstrap-icons.css";

import { useState } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import coaching from "../../assets/image/coaching.png";
import notebook from "../../assets/image/icon/notebook.png";
import group from "../../assets/image/icon/user-group.png";
import blank from "../../assets/image/blank.png";
import "./coaching.css";

const BestCoaching = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleSelect = (key) => setActiveTab(key);
  const categories = ["All", "SSC", "CBSC", "Groups", "RRB", "Civil Services"];

  const courseCards = [
    {
      subject: "Maths",
      title: "How To Solve This Problem?",
      students: 150,
      lessons: 14,
      mentor: "Maths",
      mentorRole: "Mentor",
    },
    {
      subject: "Science",
      title: "How To Understand Women?",
      students: 250,
      lessons: 8,
      mentor: "Archana Sabba",
      mentorRole: "Mentor",
    },
    {
      subject: "Subject",
      title: "I Dont Know What To Say",
      students: 100,
      lessons: 12,
      mentor: "Surender Reddy",
      mentorRole: "Mentor",
    },
    {
      subject: "Maths",
      title: "How To Solve This Problem?",
      students: 150,
      lessons: 14,
      mentor: "Maths",
      mentorRole: "Mentor",
    },
    {
      subject: "Maths",
      title: "How To Solve This Problem?",
      students: 150,
      lessons: 14,
      mentor: "Maths",
      mentorRole: "Mentor",
    },
    {
      subject: "Maths",
      title: "How To Solve This Problem?",
      students: 150,
      lessons: 14,
      mentor: "Maths",
      mentorRole: "Mentor",
    },
  ];

  return (
    <div className="best_coaching">
      <div className="container">
        {/* Header Section */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="text-center mb-5">
              <h1 className="main_heading mb-3">
                Best Coaching At The Lowest
                <br />
                Prices In The Market
              </h1>
              <p className="main_text">
                We offers an affordable and accessible solution compared to the
                high costs associated with other coaching institutes.
              </p>
            </div>
          </div>
        </div>

        <section className=" best_coaching_tab pt-3">
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
                    <h4>All</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab2">
                    {" "}
                    <h4>SSC</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab3">
                    {" "}
                    <h4>CBSC</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab4">
                    {" "}
                    <h4>Groups</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab5">
                    {" "}
                    <h4>RRB</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab6">
                    {" "}
                    <h4>Civil Services</h4>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <Row>
              {/* Right-Side Content */}
              <Col md={12} className="tabs-content mt-5 ">
                <Tab.Content>
                  <Tab.Pane eventKey="tab1">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="coaching_box">
                          <img src={coaching} alt="" />
                          <div className="content">
                            <ul>
                              <li>
                                <img src={group} alt="" />
                                150 students
                              </li>
                              <li>
                                <img src={notebook} alt="" />
                                14 Lessons
                              </li>
                            </ul>
                            <h4>How to solve this problem?</h4>
                            <div className="author mt-5">
                              <div className="author_name">
                                <img src={blank} alt="" />
                                <p>
                                  <span>Maths</span>
                                  <small>Mentor</small>
                                </p>
                              </div>
                              <div className="plus_icon">+</div>
                            </div>
                            <div className="tag">Maths</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab2">
                    <div className="row">
                      <div className="col-md-6">
                        <h4 className="second_heading mb-3">
                          Fundamentals <br /> (Duration: 2 Months)
                        </h4>
                        <div className="inner_content">
                          <h5
                            className="main_text mb-3"
                            style={{
                              color: "rgba(242, 99, 34, 1)",
                              fontWeight: "600",
                            }}
                          >
                            Daily Classes:
                          </h5>
                          <ul className="ps-4">
                            <li>4 Hours Classes + 4 Hours Labs</li>
                          </ul>{" "}
                          <h4
                            className="main_text mb-1 mt-3"
                            style={{
                              color: "rgba(242, 99, 34, 1)",
                              fontWeight: "600",
                            }}
                          >
                            Courses Include:
                          </h4>
                          <ul className="ps-4">
                            <li>HTML, CSS, Python, SQL, DSA</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab3">
                    <div className="row">
                      <div className="col-md-6">
                        <h4 className="second_heading mb-3">
                          Fundamentals <br /> (Duration: 2 Months)
                        </h4>
                        <div className="inner_content">
                          <h5
                            className="main_text mb-3"
                            style={{
                              color: "rgba(242, 99, 34, 1)",
                              fontWeight: "600",
                            }}
                          >
                            Daily Classes:
                          </h5>
                          <ul className="ps-4">
                            <li>4 Hours Classes + 4 Hours Labs</li>
                          </ul>{" "}
                          <h4
                            className="main_text mb-1 mt-3"
                            style={{
                              color: "rgba(242, 99, 34, 1)",
                              fontWeight: "600",
                            }}
                          >
                            Courses Include:
                          </h4>
                          <ul className="ps-4">
                            <li>HTML, CSS, Python, SQL, DSA</li>
                          </ul>
                        </div>
                      </div>
                      =
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </section>
      </div>
    </div>
  );
};

export default BestCoaching;

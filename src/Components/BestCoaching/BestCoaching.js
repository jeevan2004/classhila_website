import { useState } from "react";
import { Col, Nav, Row, Tab, Button } from "react-bootstrap";
import coaching from "../../assets/image/coaching.png";
import notebook from "../../assets/image/icon/notebook.png";
import group from "../../assets/image/icon/user-group.png";
import blank from "../../assets/image/blank.png";
import "./coaching.css";
import ArchanaSabba from "../../assets/image/ArchanaSabba.png";
import Maths from "../../assets/image/Maths.png";
import SurenderReddy from "../../assets/image/SurenderReddy.png";
import { Link } from "react-router-dom";
const BestCoaching = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleSelect = (key) => {
    setActiveTab(key);
    setCurrentPage(1); // Reset to first page when switching tabs
  };

  const categories = ["All", "SSC", "CBSC", "Groups", "RRB", "Civil Services"];

  const courseCards = [
    {
      subject: "SSC",
      title: "How To Solve This Problem?",
      students: 150,
      lessons: 14,
      mentor: "Maths",
      img: Maths,
      mentorRole: "Mentor",
    },
    {
      subject: "SSC",
      title: "How to Understand Women?",
      students: 250,
      lessons: 8,
      mentor: "Archana Sabba",
      img: ArchanaSabba,
      mentorRole: "Mentor",
    },
    {
      subject: "Groups",
      title: "I Don't Know What To Say",
      students: 100,
      lessons: 12,
      mentor: "Surender Reddy",
      img: SurenderReddy,
      mentorRole: "Mentor",
    },
    {
      subject: "RRB",
      title: "Mastering Algebra",
      students: 120,
      lessons: 10,
      mentor: "Ravi Sharma",
      img: Maths,
      mentorRole: "Mentor",
    },
    {
      subject: "Civil Services",
      title: "Understanding Politics",
      students: 200,
      lessons: 18,
      mentor: "Dr. Anil Kumar",
      img: Maths,
      mentorRole: "Mentor",
    },
    {
      subject: "SSC",
      title: "How To Solve This Problem?",
      students: 150,
      lessons: 14,
      mentor: "Maths",
      img: Maths,
      mentorRole: "Mentor",
    },
    {
      subject: "SSC",
      title: "How to Understand Women?",
      students: 250,
      lessons: 8,
      mentor: "Archana Sabba",
      img: ArchanaSabba,
      mentorRole: "Mentor",
    },
    {
      subject: "Civil Services",
      title: "Understanding Politics",
      students: 200,
      lessons: 18,
      mentor: "Dr. Anil Kumar",
      img: Maths,
      mentorRole: "Mentor",
    },
    {
      subject: "SSC",
      title: "How To Solve This Problem?",
      students: 150,
      lessons: 14,
      mentor: "Maths",
      img: Maths,
      mentorRole: "Mentor",
    },
    {
      subject: "SSC",
      title: "How to Understand Women?",
      students: 250,
      lessons: 8,
      mentor: "Archana Sabba",
      img: ArchanaSabba,
      mentorRole: "Mentor",
    },
  ];

  // Filter courses based on selected tab
  const filteredCourses =
    activeTab === "tab1"
      ? courseCards
      : courseCards.filter(
          (course) =>
            course.subject ===
            categories[parseInt(activeTab.replace("tab", "")) - 1]
        );

  // Pagination Logic
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Pagination Function to Show "1 2 3 ... 6 7 8"
  const getPagination = () => {
    const pages = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage < 4) {
        pages.push(1, 2, 3, "...", totalPages - 1, totalPages);
      } else if (currentPage > totalPages - 3) {
        pages.push(
          1,
          2,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  return (
    <div className="best_coaching">
      <div className="container">
        {/* Header Section */}
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="text-center mb-5">
              <div className="pre_heading">Our Courses</div>
              <h1 className="main_heading mb-3">
                Best Coaching At The Lowest
                <br />
                Prices In The Market
              </h1>
              <p className="main_text">
                We offer an affordable and accessible solution compared to the
                high costs associated with other coaching institutes.
              </p>
              {/* <div
                className="btn-group mt-4"
                role="group"
                aria-label="Basic outlined example"
              >
                <button type="button" className="btn btn-outline-primary">
                  Learn new skills
                </button>
                <button type="button" className="btn btn-outline-primary">
                  Get Certified
                </button>
                <button type="button" className="btn btn-outline-primary">
                  Best courses offered
                </button>
              </div> */}
            </div>
          </div>
        </div>

        <section className="best_coaching_tab pt-3">
          <Tab.Container
            defaultActiveKey="tab1"
            activeKey={activeTab}
            onSelect={handleSelect}
          >
            {/* Left-Side Tabs */}
            <div className="tabs-nav">
              <Nav variant="pills">
                {categories.map((category, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={`tab${index + 1}`}>
                      <h4>{category}</h4>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </div>
            <Row>
              {/* Right-Side Content */}
              <Col md={12} className="tabs-content mt-5">
                <Tab.Content>
                  <Tab.Pane eventKey={activeTab}>
                    <div className="row">
                      {currentCourses.length > 0 ? (
                        currentCourses.map((item, index) => (
                          <div className="col-md-4 mb-4" key={index}>
                            <div className="coaching_box">
                              <img className="w-100" src={item?.img} alt="" />
                              <div className="content">
                                <ul>
                                  <li>
                                    <img src={group} alt="" />
                                    {item.students} students
                                  </li>
                                  <li>
                                    <img src={notebook} alt="" />
                                    {item.lessons} Lessons
                                  </li>
                                </ul>
                                <h4>{item.title}</h4>
                                <div className="author mt-5">
                                  <div className="author_name">
                                    <img src={blank} alt="" />
                                    <p>
                                      <span>{item.mentor}</span>
                                      <span className="staff">Mentor</span>
                                    </p>
                                  </div>
                                  <div className="plus_icon">
                                    <Link className=" " to={"/login"}>
                                      +
                                    </Link>
                                  </div>
                                </div>
                                <div className="tag">{item.subject}</div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-center">
                          No courses available for this category.
                        </p>
                      )}
                    </div>

                    {/* Pagination Controls */}
                    <div className="pagination-container text-center mt-4">
                      <Button
                        variant="primary"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className="me-2"
                      >
                        Previous
                      </Button>

                      {getPagination().map((page, index) =>
                        page === "..." ? (
                          <span key={index} className="mx-2">
                            ...
                          </span>
                        ) : (
                          <Button
                            key={index}
                            variant={
                              currentPage === page ? "dark" : "outline-primary"
                            }
                            onClick={() => setCurrentPage(page)}
                            className="mx-1"
                          >
                            {page}
                          </Button>
                        )
                      )}

                      <Button
                        variant="primary"
                        disabled={
                          currentPage === totalPages || totalPages === 0
                        }
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className="ms-2"
                      >
                        Next
                      </Button>
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

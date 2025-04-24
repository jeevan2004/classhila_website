import { useState, useEffect } from "react";
import { Col, Nav, Row, Tab, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { useAuthContext } from "../../AuthContextAPI";
import { getTemporaryUrl, loadRazorpay } from "../../Utils";
import coaching from "../../assets/image/coaching.png";
import notebook from "../../assets/image/icon/notebook.png";
import group from "../../assets/image/icon/user-group.png";
import blank from "../../assets/image/blank.png";
import "./coaching.css";

const BestCoaching = () => {
  const [activeTab, setActiveTab] = useState(""); // "All" as default
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { currUserData } = useAuthContext();
  const [categories, setCategories] = useState([]);
  const [course, setCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 6;
  const navigate = useNavigate();

  // Fetch Categories
  const getCategory = async () => {
    setIsLoading(true);
    let res = await api(
      `api/v1/student/getCategories?page=1&limit=10`,
      "",
      "get",
      currUserData?.token,
      ""
    );

    if (res?.success) {
      setCategories(res?.data || []);
      setActiveTab(res?.data[0]._id);
    }
    setIsLoading(false);
  };

  // Fetch Courses
  const getAllCourse = async () => {
    if (!activeTab) return;
    setIsLoading(true);

    if (currUserData && currUserData?.token) {
      let res = await api(
        `api/v1/student/getAllCoursesBasedOnUser?page=${currentPage}&limit=10&category=${activeTab}`,
        "",
        "get",
        currUserData.token,
        ""
      );

      if (res?.success) {
        console.log(res, "resauth");
        setTotalPages(res?.totalPages);

        setCourse(res?.data || []);
      }
    } else {
      let res = await api(
        `api/v1/student/getliveCourses?page=${currentPage}&limit=10&category=${activeTab}`,
        "",
        "get",
        "",
        ""
      );

      if (res?.success) {
        setCourse(res?.data || []);
        setTotalPages(res?.totalPages);
      }
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getCategory();
  }, []);
  useEffect(() => {
    getAllCourse();
  }, [activeTab, currentPage]);

  // Pagination Display Logic

  const [status, setStatus] = useState("");

  const handelCategory = (e) => {
    setActiveTab(e);
  };

  console.log(categories, activeTab, "currentCourses");

  return (
    <div className="best_coaching">
      <div className="container">
        {/* Header Section */}
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="text-center mb-5">
              <div className="pre_heading">Our Courses</div>
              <h1 className="main_heading mb-3">
                Best Coaching At The Lowest Prices In The Market
              </h1>
              <p className="main_text">
                We offer an affordable and accessible solution compared to the
                high costs associated with other coaching institutes.
              </p>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <section className="best_coaching_tab pt-3">
          <Tab.Container
            defaultActiveKey="tab0"
            activeKey={activeTab}
            onSelect={(e) => handelCategory(e)}
          >
            <div className="tabs-nav">
              <Nav variant="pills">
                {categories?.map((category, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={category?._id}>
                      <h4>{category?.name}</h4>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </div>

            {/* Course Listings */}
            <Row>
              <Col md={12} className="tabs-content mt-5">
                <Tab.Content>
                  <Tab.Pane eventKey={activeTab}>
                    <div className="row">
                      {course?.length > 0 ? (
                        course?.map((item, index) => (
                          <div className="col-md-4 mb-4" key={index}>
                            <div className="coaching_box">
                              <img
                                className="w-100"
                                // src={
                                //   "https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                // }
                                src={item?.image}
                                alt={item?.title}
                              />

                              <div className="content">
                                <ul>
                                  <li>
                                    <img src={group} alt="Students" />{" "}
                                    {item?.enrolledStudentCount} students
                                  </li>
                                  <li>
                                    <img src={notebook} alt="Lessons" />{" "}
                                    {item?.content?.length} Lessons
                                  </li>
                                </ul>
                                <h4
                                  onClick={() =>
                                    navigate(`/courses/${item?._id}`)
                                  }
                                >
                                  {item?.title}
                                </h4>
                                <div className="author mt-5">
                                  <div className="author_name">
                                    <img src={blank} alt="Mentor" />
                                    <p>
                                      <span>
                                        {item?.instructor?.name ||
                                          "Unknown Instructor"}
                                      </span>
                                      <span className="staff">Mentor</span>
                                    </p>
                                  </div>
                                  <div className="plus_icon">
                                    <Link to={`/courses/${item?._id}`}>+</Link>
                                  </div>
                                </div>
                                <div className="tag">
                                  {item?.category?.name || "General"}
                                </div>
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

                    {status && (
                      <div
                        className={`alert ${
                          status.includes("successful")
                            ? "alert-success"
                            : "alert-danger"
                        }`}
                      >
                        {status}
                      </div>
                    )}

                    <div className="pagination-container text-center mt-4">
                      <Button
                        variant="primary"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className="me-2"
                      >
                        Previous
                      </Button>
                      <Button variant="primary" type="button" className="me-2">
                        {currentPage}
                      </Button>

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

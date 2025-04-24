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
import Skeleton from "react-loading-skeleton";
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

    const [imageLoaded, setImageLoaded] = useState(false);
      const [contentLoaded, setContentLoaded] = useState(false);
 useEffect(() => {
        const timer = setTimeout(() => {
          setContentLoaded(true);
        }, 800); // Adjust this delay as needed
        return () => clearTimeout(timer);
      }, []);
  // Fetch Categories
  const getCategory = async () => {
    setIsLoading(true);
    let res = await api(
      `api/v1/student/getCategories?page=${currentPage}&limit=10`,
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
                               {!imageLoaded && <Skeleton height={200} />}
                              <img
                                className="w-100"
                                src={item?.image}
                                alt={item?.title}
                                onLoad={() => setImageLoaded(true)}
                              />
                              

                              <div className="content">
                           {contentLoaded ? (
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
                                    ) : (
                                      <Skeleton width={`80%`} height={20} />
                                    )}

                                {contentLoaded ? (
                                   <h4
                                   onClick={() =>
                                     navigate(`/courses/${item?._id}`)
                                   }
                                 >
                                   {item?.title}
                                 </h4>
                                    ) : (
                                      <Skeleton width={`80%`} height={20} />
                                    )}
                               {contentLoaded ? (
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
                                    ) : (
                                      <Skeleton width={`80%`} height={20} />
                                    )}
                                
                                {contentLoaded ? (
                                  <div className="tag">
                                  {item?.category?.name || "General"}
                                </div>
                                    ) : (
                                      <Skeleton width={`80%`} height={10} />
                                    )}
                               
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
 {/* Pagination */}
 <div className="pagination-container text-center my-4 mb-5">
  <ul className="pagination justify-content-center">
    {/* Previous Button */}
    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
      <button
        className="page-link"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      >
        Previous
      </button>
    </li>

    {/* Pagination Items */}
    {Array.from({ length: totalPages }, (_, i) => i + 1)
      .filter((page) => {
        return (
          page === 1 ||
          page === 2 ||
          page === totalPages ||
          page === totalPages - 1 ||
          (page >= currentPage - 1 && page <= currentPage + 1)
        );
      })
      .reduce((acc, page, i, arr) => {
        if (i > 0 && page - arr[i - 1] > 1) {
          acc.push("dots");
        }
        acc.push(page);
        return acc;
      }, [])
      .map((item, index) =>
        item === "dots" ? (
          <li className="page-item disabled" key={`dots-${index}`}>
            <span className="page-link">...</span>
          </li>
        ) : (
          <li
            key={item}
            className={`page-item ${item === currentPage ? "active" : ""}`}
          >
            <button className="page-link" onClick={() => setCurrentPage(item)}>
              {item}
            </button>
          </li>
        )
      )}

    {/* Next Button */}
    <li
      className={`page-item ${
        currentPage === totalPages || totalPages === 0 ? "disabled" : ""
      }`}
    >
      <button
        className="page-link"
        onClick={() =>
          setCurrentPage((prev) => Math.min(prev + 1, totalPages))
        }
      >
        Next
      </button>
    </li>
  </ul>
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

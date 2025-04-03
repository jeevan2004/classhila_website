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
  const [activeTab, setActiveTab] = useState("tab0"); // "All" as default
  const [currentPage, setCurrentPage] = useState(1);
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
    }
    setIsLoading(false);
  };

  // Fetch Courses
  const getAllCourse = async () => {
    setIsLoading(true);
    let res = await api(
      `api/v1/student/getliveCourses?page=1&limit=10`,
      "",
      "get",
      currUserData?.token,
      ""
    );

    if (res?.success) {
      setCourse(res?.data || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getCategory();
    getAllCourse();
  }, []);

  // Filter Courses based on selected Tab
  const filteredCourses =
    activeTab === "tab0"
      ? course
      : course.filter(
          (c) =>
            c.category &&
            c.category._id ===
              categories[parseInt(activeTab.replace("tab", "")) - 1]?._id
        );

  // Pagination Logic
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const currentCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Pagination Display Logic
  const getPagination = () => {
    const pages = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage < 4) {
        pages.push(1, 2, 3, "...", totalPages - 1, totalPages);
      } else if (currentPage > totalPages - 3) {
        pages.push(1, 2, "...", totalPages - 2, totalPages - 1, totalPages);
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

  const [status, setStatus] = useState("");
  const handlePurchase = async (courseId) => {
    try {
      // Load Razorpay dynamically
      const Razorpay = await loadRazorpay();
      if (!Razorpay) throw new Error("Failed to load Razorpay SDK");

      // Step 1: Create Order
      const payload = { courseId };
      const res = await api(
        "api/v1/payment/createOrder",
        payload,
        "post",
        currUserData?.token,
        ""
      );
      if (!res?.status)
        throw new Error(res?.response || "Order creation failed");

      const orderData = res.data;
      console.log(orderData, "Order Created");

      // Step 2: Configure Razorpay
      const options = {
        key: orderData.key,
        amount: orderData.amount * 100, // Convert to paise
        currency: orderData.currency,
        name: "Your Learning Platform",
        description: "Course Purchase",
        order_id: orderData.orderId,
        handler: async (response) => {
          try {
            // Step 3: Verify Payment
            const verificationRes = await api(
              `api/v1/payment/verifyPayment/${orderData.paymentId}`,
              response,
              "post",
              currUserData?.token,
              ""
            );

            console.log(verificationRes, "Payment Verified");

            if (!verificationRes?.status)
              throw new Error(
                verificationRes?.response || "Payment verification failed"
              );

            setStatus("✅ Payment successful! Course enrolled.");
          } catch (error) {
            setStatus("❌ Verification failed: " + error.message);
          }
        },
        prefill: {
          name: currUserData?.name || "Test User",
          email: currUserData?.email || "test@example.com",
          contact: currUserData?.phone || "9999999999",
        },
        theme: { color: "#4CAF50" },
      };

      // Step 4: Open Razorpay Checkout
      const rzp = new Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error.message);
      setStatus("❌ Error: " + error.message);
    }
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
            onSelect={setActiveTab}
          >
            <div className="tabs-nav">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="tab0">
                    <h4>All</h4>
                  </Nav.Link>
                </Nav.Item>
                {categories.map((category, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={`tab${index + 1}`}>
                      <h4>{category.name}</h4>
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
                      {currentCourses.length > 0 ? (
                        currentCourses.map((item, index) => (
                          <div className="col-md-4 mb-4" key={index}>
                            <div className="coaching_box">
                              <img
                                className="w-100"
                                src={item.image}
                                alt={item.title}
                              />

                              <div className="content">
                                <ul>
                                  <li>
                                    <img src={group} alt="Students" />{" "}
                                    {item.enrolledStudentCount} students
                                  </li>
                                  <li>
                                    <img src={notebook} alt="Lessons" />{" "}
                                    {item.content.length} Lessons
                                  </li>
                                </ul>
                                <h4
                                  onClick={() =>
                                    navigate(`/courses/${item._id}`)
                                  }
                                  // onClick={() => handlePurchase(item._id)}
                                >
                                  {item.title}
                                </h4>
                                <div className="author mt-5">
                                  <div className="author_name">
                                    <img src={blank} alt="Mentor" />
                                    <p>
                                      <span>
                                        {item.instructor ||
                                          "Unknown Instructor"}
                                      </span>
                                      <span className="staff">Mentor</span>
                                    </p>
                                  </div>
                                  <div className="plus_icon">
                                    <Link to={`/courses/${item._id}`}>+</Link>
                                  </div>
                                </div>
                                <div className="tag">
                                  {item.category?.name || "General"}
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

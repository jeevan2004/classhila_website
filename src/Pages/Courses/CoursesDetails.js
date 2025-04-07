import React, { useEffect } from "react";
import "./course.css";
import ReactPlayer from "react-player";
import { Container } from "react-bootstrap";
import profile from "../../assets/image/icon/profile.jpeg";
import { ReactComponent as Play } from "../../assets/image/icon/play.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../../AuthContextAPI";
import { api } from "../../api/api";
import { getTemporaryUrl, loadRazorpay } from "../../Utils";

const CoursesDetails = () => {
  const [course, setCourse] = useState();
  const [currentVideo, setCurrentVideo] = useState({
    videoUrl: `https://www.w3schools.com/html/mov_bbb.mp4`,
    title: "Drawing Fundamentals 1: Basic Skills & Sketching Accurately",
  });
  const [status, setStatus] = useState("");

  const { currUserData } = useAuthContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const courseId = useParams();
  console.log(course, "coursecourse");
  const courseModules = [
    {
      title: "Foreword",
      videos: [
        { id: 1, name: "Foreword", duration: "1:00", url: "" },
        {
          id: 2,
          name: "Download Practice Material",
          duration: "1:00",
          url: "",
        },
      ],
    },
    {
      title: "Introduction",
      videos: [
        { id: 3, name: "Introduction Video", duration: "2:30", url: "" },
      ],
    },
    {
      title: "Getting Started",
      videos: [
        { id: 4, name: "Setup & Installation", duration: "3:00", url: "" },
      ],
    },
    {
      title: "Tools",
      videos: [
        { id: 5, name: "Essential Drawing Tools", duration: "4:00", url: "" },
      ],
    },
    {
      title: "Plugins",
      videos: [
        { id: 6, name: "Recommended Plugins", duration: "2:45", url: "" },
      ],
    },
  ];

  const parentAccordions = [
    { id: "videoCourses", title: "Video Courses" },
    { id: "module", title: "Modul" },
    { id: "audio", title: "Audio" },
    { id: "quiz", title: "Quiz" },
  ];

  // Fetch Courses
  const getCourseData = async () => {
    setIsLoading(true);
    let res = await api(
      `api/v1/student/getliveCourses?page=1&limit=10`,
      "",
      "get",
      currUserData?.token,
      ""
    );

    if (res?.success) {
      // setCourse(res?.data || []);
      console.log(res, "neeneeees");
      const filteredData = res?.data.find((item) => item._id === courseId.name);
      //const filteredData = res?.data.filter((item) => item._id === courseId);

      console.log(filteredData, "filteredData");
      setCourse(filteredData);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getCourseData();
  }, []);
  console.log(currentVideo, "currentVideocurrentVideo");

  const handlePurchase = async (courseId) => {
    if (!currUserData?.token) {
      navigate("/login");
    }
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

  const handelCurrentVideo = async (video) => {
    const newVideo = await getTemporaryUrl(video.videoUrl);
    console.log(newVideo, "newv");

    setCurrentVideo({ ...video, videoUrl: newVideo });
  };

  console.log(currentVideo, "course");
  return (
    <div className="course_single pt_150">
      <Container>
        <div className="row">
          <div className="col-md-8">
            <div className="left_side">
              <div className="player">
                <ReactPlayer
                  url={
                    "https://d1lraevgtuc0pz.cloudfront.net/1744008624088-SampleVideo_1280x720_1mb.mp4?Expires=1744009923&Key-Pair-Id=KDMBJ5ZV896UG&Signature=PbcxK4dUUTfq9pzY0gSwOgVF3gqDQfZnn-SBJJ2I46xD3bjZEdG7N1N5OWmWuDyZNhba20qBQqhcLxpf1nvUBH7jpPJvDcgRCbOZVvi5z6NF0WR8SZ6yGk7iGvPMKvQKf1UXVy2udgh2aF16PTwuncDd9hfreHnJO~99NsCaQS-Y2GcjXsjfz4TXjec-xGIcRqWUhSDTr1sRCopIi8aYneAbsaKhQDD8LQcVXFFLPN4cjC~1R0rh8xNY24m-jj67A8urS5hIkyIebGwvvEUcJ2FyKR5tjeWkXWA4y0VNycIX440m6wK~n5bAaaldwIP7psasYkwyrV1I4S1CTlUyPw__"
                  }
                  light="https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  controls
                  className="video_player"
                />
              </div>
              <div className="course_heading">
                <h2>{currentVideo?.title}</h2>
                <ul>
                  <li>
                    <i class="far fa-flag"></i>
                  </li>
                  <li>
                    <i class="far fa-calendar-alt"></i>
                  </li>
                  <li>
                    <i class="fas fa-share-alt"></i>
                  </li>
                </ul>
              </div>
              <ul className="course_detail">
                <li className="course_author">
                  <img src={profile} alt="" />
                  <p>
                    <p>Leslie Alexander</p>
                    <span>Graphic Designer</span>
                  </p>
                </li>
                <li className="course_review">
                  <i class="fas fa-star"></i> 4.8 (Review 2K)
                </li>
                <li className="course_video">
                  <i class="fas fa-play-circle"></i> 120 Video Course
                </li>
                <li className="course_student">
                  <i class="fas fa-user-graduate"></i> 15k Students
                </li>
              </ul>
              <div className="courses__details-content">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link  active"
                      id="about-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#about-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="about-tab-pane"
                      aria-selected="true"
                    >
                      About
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link "
                      id="discussion-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#discussion-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="discussion-tab-pane"
                      aria-selected="false"
                      tabindex="-1"
                    >
                      Discussion
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link "
                      id="assignment-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#assignment-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="assignment-tab-pane"
                      aria-selected="false"
                      tabindex="-1"
                    >
                      Assignment
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link "
                      id="reviews-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#reviews-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="reviews-tab-pane"
                      aria-selected="false"
                      tabindex="-1"
                    >
                      reviews
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="about-tab-pane"
                    role="tabpanel"
                    aria-labelledby="about-tab"
                    tabindex="0"
                  >
                    <div class="courses_about">
                      <p>
                        Donec sed erat ut magna suscipit mattis. Aliquam erat
                        volutpat. Morbi in orci risus. Donec pretium fringilla
                        blandit. Etiam ut accumsan leo. Aliquam id mi quam.
                        Vivamus dictum ut erat nec congue. Etiam facilisis lacus
                        ut arcu vulputate, non pellentesque sem convallis. Proin
                        tempus sapien nisl, nec varius risus tristique a. Etiam
                        ligula lacus, ultricies at cursus id, fringilla nec
                        nulla.
                      </p>
                      <p>
                        Fusce pretium laoreet diam a mollis. In finibus purus
                        sed tortor fringilla, eu luctus lorem sodales.Ut
                        dignissim ante ac augue vulputate tristique. Mauris
                        venenatis tincidunt nibh, sit amet fringilla augue
                        malesuada a. Mauris a nunc congue, viverra lectus sed,
                        imperdiet quam. Aenean tempor sem sed lorem ultricies
                        lacinia.
                      </p>

                      <p>
                        Sed sit amet tortor nibh. Donec condimentum posuere
                        nunc, et hendrerit sapien dictum ut. Aliquam congue non
                        purus eu suscipit. Integer eu dui tortor. Donec ut dolor
                        vitae ipsum ultrices semper. Morbi imperdiet dictum urna
                        nec blandit. Curabitur interdum diam ut porta vulputate.
                        Fusce ultrices efficitur lectus et ornare. Morbi
                        vulputate condimentum metus eu viverra. Integer iaculis
                        volutpat lobortis.
                      </p>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="discussion-tab-pane"
                    role="tabpanel"
                    aria-labelledby="discussion-tab"
                    tabindex="0"
                  >
                    <div class="courses_discussion">
                      <h3 class="title">Discussion</h3>
                      <p></p>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="assignment-tab-pane"
                    role="tabpanel"
                    aria-labelledby="assignment-tab"
                    tabindex="0"
                  >
                    <>
                      <div class="courses_assignment">Assignment</div>
                    </>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="reviews-tab-pane"
                    role="tabpanel"
                    aria-labelledby="reviews-tab"
                    tabindex="0"
                  >
                    <div class="courses__rating-wrap">
                      <h2 class="title">Reviews</h2>
                      <div class="course-rate">
                        <div class="course-rate__summary">
                          <div class="course-rate__summary-value">5.0</div>
                          <div class="course-rate__summary-stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                          <div class="course-rate__summary-text">1 Ratings</div>
                        </div>
                        <div class="course-rate__details">
                          <div class="course-rate__details-row">
                            <div class="course-rate__details-row-star">
                              5<i class="fas fa-star"></i>
                            </div>
                            <div class="course-rate__details-row-value">
                              <div class="rating-gray"></div>
                              <div
                                class="rating"
                                style={{ width: "100%" }}
                                title="100%"
                              ></div>
                              <span class="rating-count">1</span>
                            </div>
                          </div>
                          <div class="course-rate__details-row">
                            <div class="course-rate__details-row-star">
                              4<i class="fas fa-star"></i>
                            </div>
                            <div class="course-rate__details-row-value">
                              <div class="rating-gray"></div>
                              <div
                                style={{ width: "0%" }}
                                class="rating"
                                title="0%"
                              ></div>
                              <span class="rating-count">0</span>
                            </div>
                          </div>
                          <div class="course-rate__details-row">
                            <div class="course-rate__details-row-star">
                              3<i class="fas fa-star"></i>
                            </div>
                            <div class="course-rate__details-row-value">
                              <div class="rating-gray"></div>
                              <div
                                class="rating"
                                style={{ width: "0%" }}
                                title="0%"
                              ></div>
                              <span class="rating-count">0</span>
                            </div>
                          </div>
                          <div class="course-rate__details-row">
                            <div class="course-rate__details-row-star">
                              2<i class="fas fa-star"></i>
                            </div>
                            <div class="course-rate__details-row-value">
                              <div class="rating-gray"></div>
                              <div
                                class="rating"
                                style={{ width: "0%" }}
                                title="0%"
                              ></div>
                              <span class="rating-count">0</span>
                            </div>
                          </div>
                          <div class="course-rate__details-row">
                            <div class="course-rate__details-row-star">
                              1<i class="fas fa-star"></i>
                            </div>
                            <div class="course-rate__details-row-value">
                              <div class="rating-gray"></div>
                              <div
                                class="rating"
                                style={{ width: "0%" }}
                                title="0%"
                              ></div>
                              <span class="rating-count">0</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <>
                        <div class="course-review-head">
                          <div class="review-author-thumb">
                            <img
                              src="https://skillgro.websolutionus.com/uploads/website-images/frontend-avatar.png"
                              alt="img"
                            />
                          </div>

                          <div class="review-author-content">
                            <div class="author-name">
                              <h5 class="name">
                                Cain Buck
                                <span>23 Jun, 2024</span>
                              </h5>
                              <div class="author-rating">
                                {/* {item.rating.map((star)=>{
                                        return (
                                          <>
                                            {" "}
                                            <i class="fas fa-star"></i>
                                          </>
                                        );
                                      })} */}
                                {/* {Array.from({ length: totalStars }, (v, i) => (
                              <span
                                key={i}
                                style={{
                                  color: i < item.rating ? "gold" : "gray",
                                }}
                              >
                                ★
                              </span>
                            ))} */}
                                <span
                                  style={{
                                    color: "gold",
                                  }}
                                >
                                  ★
                                </span>
                              </div>
                            </div>
                            <p>Good course loved it a lot</p>
                          </div>
                        </div>
                      </>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Parent Accordion */}
          <div className="col-md-4">
            <div className="right_side">
              <div className="accordion" id="parentAccordion">
                {parentAccordions.map((parent, parentIndex) => (
                  <div className="accordion-item" key={`parent-${parentIndex}`}>
                    {/* Parent Accordion Header */}
                    <h2
                      className="accordion-header"
                      id={`parentHeading${parentIndex}`}
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#parentCollapse${parentIndex}`}
                        aria-expanded={parentIndex === 0 ? "true" : "false"}
                        aria-controls={`parentCollapse${parentIndex}`}
                      >
                        {parent.title}
                      </button>
                    </h2>

                    {/* Parent Accordion Body - Child Accordion */}
                    <div
                      id={`parentCollapse${parentIndex}`}
                      className={`accordion-collapse collapse ${
                        parentIndex === 0 ? "show" : ""
                      }`}
                      aria-labelledby={`parentHeading${parentIndex}`}
                      data-bs-parent="#parentAccordion"
                    >
                      <div className="accordion-body">
                        <div
                          className="accordion"
                          id={`childAccordion${parentIndex}`}
                        >
                          {course?.content.map((module, childIndex) => (
                            <div
                              className="accordion-item"
                              key={`child-${childIndex}`}
                            >
                              {/* Child Accordion Header */}
                              <h2
                                className="accordion-header"
                                id={`childHeading${parentIndex}-${childIndex}`}
                              >
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#childCollapse${parentIndex}-${childIndex}`}
                                  aria-expanded={
                                    childIndex === 0 ? "true" : "false"
                                  }
                                  aria-controls={`childCollapse${parentIndex}-${childIndex}`}
                                >
                                  {module.moduleTitle}
                                </button>
                              </h2>

                              {/* Child Accordion Body - List of Videos */}
                              <div
                                id={`childCollapse${parentIndex}-${childIndex}`}
                                className={`accordion-collapse collapse ${
                                  childIndex === 0 ? "show" : ""
                                }`}
                                aria-labelledby={`childHeading${parentIndex}-${childIndex}`}
                                data-bs-parent={`#childAccordion${parentIndex}`}
                              >
                                <div className="accordion-body p-0">
                                  <ul className="course_videos">
                                    {module.videos.map((video) => (
                                      <li
                                        key={video.id}
                                        onClick={() =>
                                          handelCurrentVideo(video)
                                        }
                                      >
                                        <Play
                                          width={8}
                                          height={8}
                                          className="play-icon"
                                        />{" "}
                                        <span className="ps-3 d-flex   justify-content-between video_link w-100">
                                          {" "}
                                          <span> {video.title} </span>{" "}
                                          <span> {video.duration} </span>
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Download Material Button */}
              <button
                className="btn_border w-100 mb-3"
                onClick={() => handlePurchase(course?._id)}
              >
                {/* Download Material */}
                Price : {course?.price}
              </button>
              <button
                className="download_button"
                onClick={() => handlePurchase(course?._id)}
              >
                {/* Download Material */}
                Purchase Now
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CoursesDetails;

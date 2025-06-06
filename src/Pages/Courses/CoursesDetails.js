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
import CommonTabs from "../../Components/CommonTabs/CommonTabs";
import { List } from "lucide-react";
import CustomPopup from "../../Components/CustomPopup/CustomPopup";
import Plan, { SubscriptionPlan } from "../../Components/Plan/Plan";

const CoursesDetails = () => {
  const [course, setCourse] = useState();
  const [currentVideo, setCurrentVideo] = useState({
    videoUrl: ``,
    title: "",
  });
  const [status, setStatus] = useState("");

  const { currUserData } = useAuthContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPlan, setShowPlan] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState(null);

  const courseId = useParams();

  
  const tabs = [
    {
      id: "about",
      label: "About",
      title: "The SSC Telangana Mathematics Course",
      para: [
        "Class: 10th (SSC - Secondary School Certificate)",
        `Board: Telangana State Board of Secondary Education (TSBSE)`,
      ],
      heading: "Importance of Mathematics in SSC Telangana ",
      content: [
        "Mathematics is a fundamental subject that develops logical thinking, problem-solving skills, and analytical abilities. It is crucial for students aspiring to pursue careers in engineering, medicine, commerce, data science, and competitive exams. A strong foundation in SSC Maths helps in:  ",
      ],
      List: [
        "- Scoring high marks in board exams. ",
        "- Preparing for competitive exams like JEE, NEET, EAMCET, and NTSE.",
        "- Enhancing reasoning and computational skills for real-life applications. ",
      ],
      heading2: "Why is this Course Essential?",
      List2: [
        "Board Exam Focus: Covers all TSBSE-prescribed topics.  ",
        "Competitive Exam Prep: Builds a strong base for future competitive exams.",
        `Practical Applications:Financial Maths useful in daily life (finance, interest, profit/loss, measurements, data analysis).  `,
        `Scoring Subject: With practice, students can achieve 90+ marks.`,
      ],
      para2: [
        "This structured course ensures conceptual clarity and problem-solving efficiency, making it ideal for SSC Telangana students. ",
      ],
    },
    {
      id: "Importance",
      label: "Importance",
      title: "Why Enroll in Our SSC Telangana Maths Course?",
      para: ["Here’s why every SSC Telangana student MUST join NOW "],
      // heading: "Importance of Mathematics in SSC Telangana ",
      // content: [
      //   "Mathematics is a fundamental subject that develops logical thinking, problem-solving skills, and analytical abilities. It is crucial for students aspiring to pursue careers in engineering, medicine, commerce, data science, and competitive exams. A strong foundation in SSC Maths helps in:  ",

      // ],
      List: [
        `1. No More Fear of Maths! - Build Unshakable Confidence`,
        `- We break down complex concepts into simple, easy-to-understand lessons.`,
        `- Step-by-step problem-solving techniques that even weak students can master. `,
        `- No boring lectures—only engaging, high-retention teaching methods.`,
        `2. Score good marks in SSC Boards! - Exam-Centric Approach`,
        `- Important Questions Coverage with TSBSE-focused shortcuts & tricks.`,
        `- Previous Year Question (PYQ) Analysis - Know exactly what's asked in exams! `,
        `- Chapter-wise Weightage Tips- Spend time wisely on high-mark topics. `,
        `3. Save Time, Study Smart!- No More Wasted Hours `,
        `- Shortcut Formulas & Memory Tricks to solve problems 10x faster. `,
        `- Common Mistakes to Avoid - Learn from others' errors & score flawlessly.`,
        `- Quick Revision Sheets - Last-minute prep made super easy!`,
        `4. Beat the Competition! - Stand Out in Exams `,
        `- Strong Foundation for IIT, NEET, EAMCET, Olympiads, and coding exams - Maths is the backbone of all competitive exams!`,
        `- Logical & Analytical Skill Development - Crucial for future engineering/medical careers.`,
        `- Good for Emergency Last-Minute Revision Plan - For panic-free exam days!`,
        `5. Guaranteed Improvement or Your Money Back!`,
        `- Personalized Doubt Solving - Stuck? Get instant expert help!`,
        `- Mock Tests with Instant Results- Track progress & improve weak areas.`,
        `- Proven Success Stories- Hundreds of students improved from 50% to 90%+`,
        ``,
      ],
      //       heading2: "Why is this Course Essential?",
      //       List2: ["Board Exam Focus: Covers all TSBSE-prescribed topics.  ", "Competitive Exam Prep: Builds a strong base for future competitive exams.",`Practical Applications:Financial Maths useful in daily life (finance, interest, profit/loss, measurements, data analysis).  `,`Scoring Subject: With practice, students can achieve 90+ marks.
      // `],
      // para2: ["This structured course ensures conceptual clarity and problem-solving efficiency, making it ideal for SSC Telangana students. "],
    },

    {
      id: "LearningOutcomes",
      label: "Learning Outcomes",
      title: "",
      para: [
        "Enrolling in this course doesn’t just help you score high marks—it transforms you into a logical thinker, problem solver, and future-ready student! Here’s how:  ",
      ],
      // heading: "Importance of Mathematics in SSC Telangana ",
      // content: [
      //   "Mathematics is a fundamental subject that develops logical thinking, problem-solving skills, and analytical abilities. It is crucial for students aspiring to pursue careers in engineering, medicine, commerce, data science, and competitive exams. A strong foundation in SSC Maths helps in:  ",

      // ],
      List: [
        `1. Supercharged Problem-Solving Skills`,
        `- Break down complex problems into simple steps.`,
        `- Think critically and apply the right formulas in exams.`,
        `- Solve real-world Maths puzzles (time, money, measurements) effortlessly.  `,
        `2. Lightning-Fast Calculation & Accuracy `,
        `- Mental Maths tricks to solve problems without pen/paper.`,
        `- Avoid silly mistakes with error-spotting techniques.`,
        `- Speed & precision to finish exams 20% faster.`,
        `3. Analytical & Logical Reasoning`,
        `- Decode tricky questions using structured approaches.`,
        `- Course Designed by Top Educators for easy understanding`,
        `- Data interpretation skills (graphs, statistics) for future careers.`,
        `4. Exam Strategy & Time Management`,
        `- Prioritize high-weightage topics to maximize scores.`,
        `- Smart guessing techniques for MCQs. `,
        `- Time-bound mock tests to build exam stamina.`,
        `5. Confidence & Stress-Free Learning`,
        `- No more fear of Maths—face exams with 100% confidence.`,
        `- Overcome mental blocks with easy-to-grasp teaching.`,
        `- Stay calm under pressure with proven revision strategies.`,
        `6. Competitive Edge for Future Success `,
        `- Outshine peers in board & entrance exams.`,
        `- Build a strong Maths base for engineering, medicine, or commerce.`,
        `- Develop a "can-do" attitude that helps in any career path.  
`,
      ],
      heading2: "Why Do These Skills Matter? ",
      List2: [
        "Higher Scores → Better college & career opportunities.",
        `Stronger Brainpower → Excel in any field (coding, finance, research).  
`,
        `Lifelong Learning → Maths skills never go out of demand!`,
      ],
      // para2: ["This structured course ensures conceptual clarity and problem-solving efficiency, making it ideal for SSC Telangana students. "],
    },
  ];

  // console.log(course?.image, "course?.imagecourse?.imagecourse?.imagecourse?.image");

  const parentAccordions = [
    { id: "videoCourses", title: "Video Courses" },
    // { id: "Documenr", title: "Modul" },
  ];

  // Fetch Courses
  const getCourseData = async () => {
    setIsLoading(true);

    if (currUserData) {
      let res = await api(
        `api/v1/student/getAllCoursesBasedOnUser?page=1&limit=10`,
        "",
        "get",
        currUserData.token,
        ""
      );

      if (res?.success) {
        const filteredData = res?.data.find(
          (item) => item._id === courseId.name
        );
        //const filteredData = res?.data.filter((item) => item._id === courseId);

        console.log(filteredData, "filteredData");
        setCourse(filteredData);
      }
    } else {
      let res = await api(
        `api/v1/student/getliveCourses?page=1&limit=10`,
        "",
        "get",
        "",
        ""
      );

      if (res?.success) {
        const filteredData = res?.data.find(
          (item) => item._id === courseId.name
        );
        //const filteredData = res?.data.filter((item) => item._id === courseId);

        console.log(filteredData, "filteredData live");
        setCourse(filteredData);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getCourseData();
  }, []);
  console.log(currentVideo, "currentVideocurrentVideo");

  const handlePurchase = async (planNumber, courseId) => {
    if (!currUserData?.token) {
      navigate("/login");
    }

    setShowPlan(false);
    try {
      // Load Razorpay dynamically
      const Razorpay = await loadRazorpay();
      if (!Razorpay) throw new Error("Failed to load Razorpay SDK");

      // Step 1: Create Order
      const payload = { courseId, subscriptionType: planNumber };
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

  // const handelCurrentVideo = async (video , index) => {
  //   const newVideo = await getTemporaryUrl(video.videoUrl);
  //   console.log(video._id , video, "videovideovideo ssss");
  //   setCurrentVideo({ ...video, videoUrl: newVideo });


  // };
  const handelCurrentVideo = async (video) => {
    const newVideo = await getTemporaryUrl(video.videoUrl);
    setCurrentVideo({ ...video, videoUrl: newVideo });
    setActiveVideoId(video._id); // ✅ Keep track of selected video
  };

  // console.log(currentVideo, "course");

  const handleSubscription = (planNumber) => {
    if (course && course._id) {
      handlePurchase(planNumber, course?._id);
    }
  };
  return (
    <>
      <div className="course_single pt_150">
        <Container>
          <div className="row">
            <div className="col-md-8">
              <div className="left_side">

{currentVideo?.videoUrl ?<div className="player">
                 
                 <ReactPlayer
                   url={currentVideo.videoUrl}
                   light={course?.image}
                   playing={true}
                   controls
                   className="video_player"
                 />
               </div>:
               <div className="videp_thumbline">
                <div className="player_icon" data-tooltip="Please Select a video"></div>
               <img src={course?.image} />
               </div>
}
                
                {/* <div className="player">
                 
                  <ReactPlayer
                    url={currentVideo.videoUrl}
                    light={course?.image}
                    playing={true}
                    controls
                    className="video_player"
                  />
                </div> */}
                <div className="course_heading">
                  <h2>{currentVideo?.title}</h2>
                  {/* <ul>
                    <li>
                      <i class="far fa-flag"></i>
                    </li>
                    <li>
                      <i class="far fa-calendar-alt"></i>
                    </li>
                    <li>
                      <i class="fas fa-share-alt"></i>
                    </li>
                  </ul> */}
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
                  {/* <li className="course_video">
                    <i class="fas fa-play-circle"></i> 120 Video Course
                  </li>
                  <li className="course_student">
                    <i class="fas fa-user-graduate"></i> 15k Students
                  </li> */}
                </ul>

                <CommonTabs tabs={tabs} defaultActive={0} />

                {/* this code for backup */}
                <div className="courses__details-content d-none">
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
                        id="Importance-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#Importance-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="Importance-tab-pane"
                        aria-selected="false"
                        tabindex="-1"
                      >
                        Importance
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link "
                        id="LearningOutcomes-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#LearningOutcomes-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="LearningOutcomes-tab-pane"
                        aria-selected="false"
                        tabindex="-1"
                      >
                        LearningOutcomes
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
                          Vivamus dictum ut erat nec congue. Etiam facilisis
                          lacus ut arcu vulputate, non pellentesque sem
                          convallis. Proin tempus sapien nisl, nec varius risus
                          tristique a. Etiam ligula lacus, ultricies at cursus
                          id, fringilla nec nulla.
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
                          nunc, et hendrerit sapien dictum ut. Aliquam congue
                          non purus eu suscipit. Integer eu dui tortor. Donec ut
                          dolor vitae ipsum ultrices semper. Morbi imperdiet
                          dictum urna nec blandit. Curabitur interdum diam ut
                          porta vulputate. Fusce ultrices efficitur lectus et
                          ornare. Morbi vulputate condimentum metus eu viverra.
                          Integer iaculis volutpat lobortis.
                        </p>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="Importance-tab-pane"
                      role="tabpanel"
                      aria-labelledby="Importance-tab"
                      tabindex="0"
                    >
                      <div class="courses_Importance">
                        <h3 class="title">Importance</h3>
                        <p></p>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="LearningOutcomes-tab-pane"
                      role="tabpanel"
                      aria-labelledby="LearningOutcomes-tab"
                      tabindex="0"
                    >
                      <>
                        <div class="courses_LearningOutcomes">
                          LearningOutcomes
                        </div>
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
                            <div class="course-rate__summary-text">
                              1 Ratings
                            </div>
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
                    <div
                      className="accordion-item"
                      key={`parent-${parentIndex}`}
                    >
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
                                      {module.videos.map(
                                        (video, childIndex) => {
                                          const isLocked =
                                            !course?.coursePurchased &&
                                            !video?.isFreeAccess;

                                          return (
                                            <li
                                              key={video._id}  className={`video-item ${isLocked ? "disabled-video" : ""} 
                                              ${ activeVideoId === video._id ? "active" : ""
        }`}
                                              onClick={() => {
                                                if (!isLocked) {
                                                  handelCurrentVideo(video , childIndex);
                                                }
                                              }}
                                              // onClick={() =>
                                              //   handelCurrentVideo(video)
                                              // }
                                            >
                                              {console.log(
                                                course?.isPurchased !== true &&
                                                  childIndex !== 0,
                                                "DISABLED?"
                                              )}
                                              <Play
                                                width={8}
                                                height={8}
                                                className="play-icon"
                                              />{" "}
                                              <span className="ps-3 d-flex   justify-content-between video_link w-100">
                                                {" "}
                                                <span>
                                                  {" "}
                                                  {video.title}{" "}
                                                </span>{" "}
                                                <span> {video.duration} </span>
                                              </span>
                                            </li>
                                          );
                                        }
                                      )}
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
                {course && !course?.coursePurchased ? (
                  <>
                    <button
                      className="download_button"
                      onClick={() => setShowPlan(true)}
                    >
                      {/* Download Material */}
                      Purchase Now
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <CustomPopup size={"xl"} show={showPlan} close={setShowPlan} title="">
        <div className="row justify-content-center gx-3 p-5">
          {course?.monthlyPrice && course?.monthlyDescription && (
            <div className="col-md-6 col-lg-4">
              <SubscriptionPlan
                planNumber={1}
                name={"Monthly"}
                price={course?.monthlyPrice}
                description={course?.monthlyDescription}
                handleSubscription={handleSubscription}
              />
            </div>
          )}

          {course?.yearlyPrice && course?.yearlyDescription && (
            <div className="col-md-6 col-lg-4">
              <SubscriptionPlan
                planNumber={2}
                name={"Yearly"}
                price={course?.yearlyPrice}
                description={course?.yearlyDescription}
                handleSubscription={handleSubscription}
              />
            </div>
          )}
          {course?.quaterlyPrice && course?.quaterlyDescription && (
            <div className="col-md-6 col-lg-4">
              <SubscriptionPlan
                planNumber={3}
                name={"Quaterly"}
                price={course?.quaterlyPrice}
                description={course?.quaterlyDescription}
                handleSubscription={handleSubscription}
              />
            </div>
          )}
        </div>
      </CustomPopup>
    </>
  );
};

export default CoursesDetails;

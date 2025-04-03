import React from "react";
import "./course.css";
import ReactPlayer from "react-player";
import profile from "../../assets/image/icon/profile.jpeg";
import { Container } from "react-bootstrap";
// import { ReactComponent as Like } from "../../assets/images/icon/like.svg";
// import { ReactComponent as Heart } from "../../assets/images/icon/heart.svg";
// import { ReactComponent as Share } from "../../assets/images/icon/share.svg";
const CoursesDetails2 = () => {
  return (
    <div className="course_single pt_150">
      <Container>
        <div className="row">
          <div className="col-md-8">
            <div className="left_side">
              <div className="player">
                <ReactPlayer
                  url="https://www.w3schools.com/html/mov_bbb.mp4"
                  light="https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  controls
                  className="video_player"
                />
              </div>
              <div className="course_heading">
                <h2>
                  Drawing Fundamentals 1: Basic Skills & Sketching Accurately
                </h2>
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
          <div className="col-md-4">
            <div className="right_side">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Video Courses
                      <span>(1/115)</span>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">1</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Modul
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">2</div>
                  </div>
                </div>
              </div>

              <button className="download_button">Download Material</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CoursesDetails2;

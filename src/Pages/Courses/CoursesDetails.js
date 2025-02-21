import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import course_image from "../../assets/image/course_image.png";
import Duration from "../../assets/image/duration.svg";
import Students from "../../assets/image/students.svg";
import Lessons from "../../assets/image/lessons.svg";
import SkillLevel from "../../assets/image/skill_level.svg";
import Language from "../../assets/image/language.svg";
import Certification from "../../assets/image/certification.svg";
import Mentor from "../../assets/image/mentor.svg";
import "./course.css";
import JoinOurCommunity from "../../Components/JoinOurCommunity/JoinOurCommunity";
const CoursesDetails = () => {
  return (
    <>
      <div className="courses_details pt_150">
        <Container>
          <div className="course_sec">
            <div className="course_image">
              <img src={course_image} />
            </div>
            <Row>
              <Col md={8}>
                <h4>Data Science for Beginner Learner Course</h4>
                <h5>Course Description :</h5>
                <p>
                  This course is perfect for those starting their journey in
                  data science, requiring no prior experience. You'll explore
                  the fundamental concepts of data analysis, learn how to use
                  tools like Python and R, and gain practical skills in data
                  cleaning, visualization, and interpretation.
                </p>
                <p>
                  Through engaging lessons and hands-on projects, you’ll build a
                  solid foundation in data science, empowering you to make
                  data-driven decisions. Join us and take your first step
                  towards becoming a data scientist!
                </p>
                <h5>Benefits From This Course :</h5>
                <ul className="list_check">
                  <li>
                    Gain a solid understanding of data science concepts, tools,
                    and techniques.
                  </li>
                  <li>
                    Engage in practical exercises and projects that allow you to
                    apply your knowledge in real-world scenarios
                  </li>
                  <li>
                    Engage in practical exercises and projects that allow you to
                    apply your knowledge in real-world scenarios
                  </li>
                  <li>
                    Engage in practical exercises and projects that allow you to
                    apply your knowledge in real-world scenarios
                  </li>
                  <li>
                    Engage in practical exercises and projects that allow you to
                    apply your knowledge in real-world scenarios
                  </li>
                  <li>
                    Engage in practical exercises and projects that allow you to
                    apply your knowledge in real-world scenarios
                  </li>
                </ul>
              </Col>
              <Col md={4}>
                <div className="course_detail_box">
                  <span className="price">$105.00</span>
                  <h5>Course Detail :</h5>
                  <ul>
                    <li>
                      <span>
                        {" "}
                        <img src={Duration} />
                        Duration
                      </span>
                      <span>4 Weeks</span>
                    </li>
                    <li>
                      <span>
                        {" "}
                        <img src={Students} />
                        Students
                      </span>
                      <span>250</span>
                    </li>
                    <li>
                      <span>
                        {" "}
                        <img src={Lessons} />
                        Lessons
                      </span>
                      <span>8</span>
                    </li>
                    <li>
                      <span>
                        {" "}
                        <img src={SkillLevel} />
                        Skill Level
                      </span>
                      <span>Beginner</span>
                    </li>
                    <li>
                      <span>
                        {" "}
                        <img src={Language} />
                        Language
                      </span>
                      <span>English</span>
                    </li>
                    <li>
                      <span>
                        {" "}
                        <img src={Certification} />
                        Certification
                      </span>
                      <span>Yes</span>
                    </li>
                    <li>
                      <span>
                        {" "}
                        <img src={Mentor} />
                        Mentor
                      </span>
                      <span>Rebecca Sky</span>
                    </li>
                  </ul>
                  <button className="join_course">Join Course</button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <JoinOurCommunity />
    </>
  );
};

export default CoursesDetails;

import React, { useEffect, useState } from "react";
import "./course.css";
import { api } from "../../api/api";
import { useAuthContext } from "../../AuthContextAPI";
import notebook from "../../assets/image/icon/notebook.png";
import group from "../../assets/image/icon/user-group.png";
import blank from "../../assets/image/blank.png";
import { Link, useNavigate } from "react-router-dom";

const MyCourse = () => {
  const { currUserData } = useAuthContext();
  const [categories, setCategories] = useState([]);
  const [course, setCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getAllCourse = async () => {
    setIsLoading(true);

    let res = await api(
      `api/v1/student/getMyCourses?page=1&limit=10`,
      "",
      "get",
      currUserData.token,
      ""
    );

    if (res?.success) {
      console.log(res, "resauth");

      setCourse(res?.data || []);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getAllCourse();
  }, []);
  return (
    <div className="my_course">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="text-center mb-5">
              {/* <div className="pre_heading">Our Courses</div> */}
              <h1 className="main_heading mb-3">My Course</h1>
            </div>
          </div>
        </div>
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
                    <h4 onClick={() => navigate(`/courses/${item?._id}`)}>
                      {item?.title}
                    </h4>
                    <div className="author mt-5">
                      <div className="author_name">
                        <img src={blank} alt="Mentor" />
                        <p>
                          <span>
                            {item?.instructor?.name || "Unknown Instructor"}
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
      </div>
    </div>
  );
};

export default MyCourse;

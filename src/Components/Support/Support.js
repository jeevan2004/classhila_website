import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import login_img from "../../assets/image/login_img.png";
import "./Support.css";
const Support = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    schoolName: "",
    district: "",
    village: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // let payload = {
    //   email: formData.email,
    //   password: formData.password,
    // };
    // let res = await api(
    //   `api/v1/users/userlogin`,
    //   payload,
    //   "post",
    //   "",
    //   // currUserData?.token,
    //   "Login Successfully",
    //   ""
    // );
    // if (res) {
    //   navigate("/");
    //   localStorage.setItem("user", JSON.stringify(res));
    //   console.log(res, "card login");
    // }
  };
  return (
    <div className="support">
      <Container>
        <Row>
          <Col md={6}>
            <img className="w-100" src={login_img} />
          </Col>
          <Col md={6}>
            <div className="content">
              <small>Let's Ask</small>
              <h5>Our friendly support team is here to help.</h5>
              <p>
                Here, you'll find answers to the most common questions about our
                courses, enrollment process, and learning experience.
              </p>
              <form className="mt-4" onSubmit={(e) => handleSubmit(e)}>
                <Row>
                  <Col md={12}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        id="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        id="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="*Phone"
                        id=""
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="form-group">
                      <textarea
                        type="text"
                        className="form-control"
                        placeholder="Message"
                        id="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                </Row>
                <button className=" btn_secondary btn_md w-100 mt-5 text-center d-block">
                  Send Message
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Support;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import login_img from "../../assets/image/login_img.png";
import phone from "../../assets/image/phone.svg";

import ContactImg from '../../assets/image/contact.png'
import "./Support.css";

const Support = ({ Contact_box }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Add your API call here
    reset();
  };

  return (
    <div className="support">
      <Container>
        <Row>
          <Col md={6}>
            <div className="image_sec">
              {Contact_box && (
                <div className="contact_box d-flex">
                  <img src={phone} alt="phone" />
                  <div>
                    <h5>Contact Us</h5>
                    <p>0761-8523-398</p>
                  </div>
                </div>
              )}
              <img className="w-100" src={ContactImg} alt="login" />
            </div>
          </Col>

          <Col md={6}>
            <div className="content">
              <small>Let's Ask</small>
              <h5>Our friendly support team is here to help.</h5>
              <p>
                Here, you'll find answers to the most common questions about our
                courses, enrollment process, and learning experience.
              </p>

              <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col md={12}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <small className="text-danger">{errors.name.message}</small>
                      )}
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      {errors.email && (
                        <small className="text-danger">{errors.email.message}</small>
                      )}
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="*Phone"
                        maxLength={10}
                        {...register("phone", {
                          required: "Phone is required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Phone must be exactly 10 digits",
                          },
                        })}
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(/[^0-9]/g, "");
                        }}
                      />
                      {errors.phone && (
                        <small className="text-danger">{errors.phone.message}</small>
                      )}
                    </div>
                  </Col>

                  <Col md={12}>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        rows="4"
                        {...register("message", { required: "Message is required" })}
                      />
                      {errors.message && (
                        <small className="text-danger">{errors.message.message}</small>
                      )}
                    </div>
                  </Col>
                </Row>

                <button className="btn_secondary btn_md w-100 mt-5 text-center d-block" type="submit">
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

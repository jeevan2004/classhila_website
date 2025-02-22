import React, { useState } from "react";
import "./contactUs.css";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import { api } from "../../api/api";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import CustomInput from "../../Components/common/Input/Input";
import Support from "../../Components/Support/Support";
import phone from "../../assets/image/phone.svg";
import location from "../../assets/image/location.svg";
import email from "../../assets/image/email.svg";
import website from "../../assets/image/website.svg";
const data = [
  { image: phone, heading: `Phone Number`, content: `+91-7036816361` },
  {
    image: location,
    heading: `Location`,
    content: `19/3RT MIGH Vijayanagar Colony,Hyderabad-500057`,
  },
  { image: email, heading: `Email`, content: `Support@classhila.com` },
  { image: website, heading: `Website`, content: `www.classhila.com` },
];
const ContactUs = () => {
  return (
    <>
      <div className="pt_150">
        <div className="heading">
          <h4>
            Support <span>.</span>
          </h4>
        </div>
        <Support />
        <div className="contact-area overflow-hidden">
          <Container>
            <Row className="top_120">
              {data?.map((item) => {
                return (
                  <>
                    <Col md={3}>
                      <div className="box">
                        <img src={item?.image} />
                        <h5>{item?.heading}</h5>
                        <p>{item?.content}</p>
                      </div>
                    </Col>
                  </>
                );
              })}
            </Row>
          </Container>
          <div className="contact_map mb-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7614.715994706699!2d78.44468506131497!3d17.394599002034045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb976ce45dfabb%3A0x5fb3ca8c59740e5!2sVijaya%20Nagar%20Colony%2C%20Hyderabad%2C%20Telangana%20500057!5e0!3m2!1sen!2sin!4v1740211893744!5m2!1sen!2sin"
              height="500"
              allowfullscreen=""
              loading="lazy"
              style={{ border: "0" }}
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

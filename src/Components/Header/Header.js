import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import { api } from "../../api/api";
import { useForm } from "react-hook-form";
import UserIcon from "../../assets/image/icon/RTM_users.png";
import { useAuthContext } from "../../AuthContextAPI";
import UserMenu from "./UserMenu";

function Header() {
  const { popupOpen, setPopupOpen, currUserData } = useAuthContext();
  const [activeSubmenu, setActiveSubmenu] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(popupOpen);
  const [value, setValue] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [fullPhone, setFullPhone] = useState("");
  const [categoriesList, setCategoriesList] = useState([]);
  const [isSticky, setIsSticky] = useState(false);

  const handlePhoneChange = (value, country) => {
    const dialCode = country.dialCode;
    setFullPhone(value);
    setCountryCode(country?.dialCode);

    const phoneStr = `+${value}`;
    const codeStr = `+${dialCode}`;

    if (phoneStr.startsWith(codeStr)) {
      setPhone(phoneStr.slice(codeStr.length));
    } else {
      setPhone(phoneStr);
    }
  };

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerOptions = {
    name: { required: "name required" },
    email: { required: "required" },
    dreamCompany: { required: "required" },
    companyName: { required: "required" },
    experience: { required: "required" },
  };

  const handleScroll = () => {
    if (window.scrollY > 160) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRegistration = async (data) => {
    const payload = {
      fullName: data?.name,
      emailId: data?.email,
      phoneNumber: `+${countryCode}${phone}`,
      companyName: data?.companyName,
      experienceInYears: data?.experience,
      dreamCompany: data?.dreamCompany,
      topicsOfInterest: data?.Interest,
      occupation: "Software Engineer",
    };

    let res = await api(
      `api/v1/application/create`,
      payload,
      "postWithoutToken",
      "",
      "Send Successfully",
      ""
    );

    if (res && res.success) {
      setPopupOpen(!popupOpen);
      reset();
    }
  };

  const headerMenu = [
    { title: "Home", path: "/", subMenu: false },
    { title: "About", path: "/about-us", subMenu: false },
    { title: "Courses", path: "/courses", subMenu: false },
    {
      title: "Online AI Club",
      path: "#",
      subMenu: [
        { title: "Guest Lectures", path: "/comming-soon" },
        { title: "Online Workshops", path: "/comming-soon" },
        { title: "Mentorship programs", path: "/comming-soon" },
        { title: "Project Showcase", path: "/comming-soon" },
        { title: "AI Hackathons", path: "/comming-soon" },
        { title: "Resources Repository", path: "/comming-soon" },
      ],
    },
    { title: "Blog", path: "/blog", subMenu: false },
    { title: "Contact Us", path: "/contact-us", subMenu: false },
  ];

  const getHeaderStyle = () => {
    switch (location.pathname) {
      case "/talent-hub":
      case "/skill-sprint":
        return "header_white";
      default:
        return "";
    }
  };

  return (
    <>
      <header className={isSticky ? "sticky-menu" : ""}>
        <div className="container">
          <nav className={`navbar navbar-expand-lg navbar-light p-0 ${getHeaderStyle()}`}>
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="Logo" />
            </Link>

            {/* Toggle and User Menu in one row */}
            <div className="call_box d-flex align-items-center ms-auto">
              <button
                className="navbar-toggler me-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {!currUserData ? (
                <button
                  className="btn_secondary"
                  onClick={() => navigate("/login")}
                >
                  <img src={UserIcon} alt="" />
                  Login/Register
                </button>
              ) : (
                <UserMenu />
              )}
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                {headerMenu.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <Link
                      className={`navbar_link ${location.pathname === item.path ? "active" : ""}`}
                      to={item.path}
                      id={item.title}
                      role="button"
                    >
                      {item.title}
                    </Link>

                    {item.subMenu && (
                      <div className="dropdown-menu sub_first">
                        <ul className="sub_first_ul" aria-labelledby={item.title}>
                          {item.subMenu.map((subFirst, subIndex) => (
                            <li
                              key={subIndex}
                              className={`nav-item dropdown dropdown-item sub_first_item ${
                                activeSubmenu === subFirst.title ? "active" : ""
                              }`}
                            >
                              <Link
                                className="navbar_link"
                                to={subFirst.path}
                                id={subFirst.title}
                                role="button"
                              >
                                {subFirst.title}
                              </Link>

                              {subFirst.subMenu && (
                                <div className="dropdown-menu sub_sec">
                                  <ul className="sub_sec_ul" aria-labelledby={subFirst.title}>
                                    {subFirst.subMenu.map((subSec, i) => (
                                      <li key={i}>
                                        <Link
                                          className={`navbar_link dropdown-item ${
                                            location.pathname === subSec.path ? "active" : ""
                                          }`}
                                          to={subSec.path}
                                        >
                                          {subSec.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;

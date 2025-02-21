import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import { api } from "../../api/api";
import { useForm } from "react-hook-form";
import UserIcon from "../../assets/image/icon/RTM_users.png";
import { useAuthContext } from "../../AuthContextAPI";

function Header() {
  const { popupOpen, setPopupOpen } = useAuthContext();

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
    const dialCode = country.dialCode; // Get dial code

    setFullPhone(value);
    setCountryCode(country?.dialCode);

    const phoneStr = `+${value}`;
    const codeStr = `+${dialCode}`;

    // Check if the phone number starts with the code and remove it
    if (phoneStr.startsWith(codeStr)) {
      setPhone(phoneStr.slice(codeStr.length)); // Remove the code from the phone number
    } else {
      // Return the phone number unchanged if it doesn't start with the code

      setPhone(phoneStr); // Remove the code from the phone number
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
  const handelError = (error) => {
    console.log(error);
  };

  const handleScroll = () => {
    if (window.scrollY > 160) {
      // Adjust the scroll position where the header becomes sticky
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleRegistration = async (data) => {
    console.log(data, "data");
    var payload = {
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
      // setPetTypeData(res?.data);
      console.log(res.data, res, "card");
      setPopupOpen(!popupOpen);
      reset();
    }
  };

  const headerMenu = [
    {
      title: "Home",
      path: "/",
      subMenu: false,
    },

    {
      title: "About",
      path: "/about-us",
      subMenu: false,
    },
    // {
    //   title: "vvGrad Abroad",
    //   path: "/vvgard-abroad",
    //   subMenu: false,
    // },
    // {
    //   title: "Prepare Job",
    //   path: "#",
    //   subMenu: false,
    // },
    // {
    //   title: "Hire with Us",
    //   path: "#",
    //   subMenu: false,
    // },

    {
      title: "Courses",
      path: "/courses",
      subMenu: false,
    },
    {
      title: "Blog",
      path: "/blog",
      subMenu: false,
    },
    {
      title: "Contact Us",
      path: "",
      subMenu: false,
    },
  ];
  const getHeaderStyle = () => {
    switch (location.pathname) {
      case "/talent-hub":
        return "header_white";
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
          <nav
            className={`navbar navbar-expand-lg navbar-light p-0 ${getHeaderStyle()}`}
          >
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                {headerMenu?.map((item, index) => {
                  return (
                    <li className="nav-item" key={index}>
                      {item.scrollToId ? (
                        // Render a button for scroll-to-section functionality
                        <Link
                          className="navbar_link Link-link"
                          onClick={() => {
                            const section = document.getElementById(
                              item.scrollToId
                            );
                            if (section) {
                              section.scrollIntoView({ behavior: "smooth" });
                            }
                          }}
                        >
                          {item.title}
                        </Link>
                      ) : (
                        // Render a Link for navigation
                        <Link
                          className={`${
                            location.pathname === item.path ? "active" : ""
                          } navbar_link`}
                          to={item.path}
                          id={item.title}
                          role="button"
                        >
                          {item.title}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="call_box d-flex">
              <button
                className="btn_secondary"
                onClick={() => navigate("/login")}
              >
                <img src={UserIcon} alt="" />
                Login/Register
              </button>
              {/* <a href="#" target="_self" class="btn_primary ">
              Try for free <i class="icon-4"></i>
            </a> */}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;

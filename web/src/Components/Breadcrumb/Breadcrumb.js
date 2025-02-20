import React from "react";

import "./breadcrumb.css";
import { Link } from "react-router-dom";
const Breadcrumb = ({ name, pageName, pageName2 }) => {
  return (
    <>
      <ul className="breadcrumb">
        <li>
          <Link to={"/"}>{name} </Link>
          <i className="fas fa-chevron-right"></i>
        </li>
        <li>
          <Link to={"#"}>{pageName} </Link>
          <i className="fas fa-chevron-right"></i>
        </li>
        <li>
          <Link to={"#"}>{pageName2} </Link>
        </li>
      </ul>
    </>
  );
};

export default Breadcrumb;

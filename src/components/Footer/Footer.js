import React from "react";
import vtLogo from "./Horizontal_VT_Full_Color_RGB.png";
import "./Footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img className="logo" src={vtLogo} alt="Virginia Tech Logo" />
      </div>
      {/* <div>
        <h4>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;&nbsp;
          </span>
          Contact Us
        </h4>
      </div> */}
    </div>
  );
};

export default Footer;

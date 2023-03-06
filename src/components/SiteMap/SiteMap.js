import React from "react";
import SiteMapImage from "./Jefferson_Exercise_Plot_Stand_Map_Close_Aerial.jpg";
import "./SiteMap.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const SiteMap = () => {
  return (
    <Router>
      <div className="image">
        <Link to={"./Plot1"}>
          <button className="point1 points"></button>
        </Link>
        <Link to={"./Plot1"}>
          <button className="point2 points"></button>
        </Link>

        <Link to={"./Plot1"}>
          <button className="point3 points"></button>
        </Link>

        <Link to={"./Plot1"}>
          <button className="point4 points"></button>
        </Link>
        <Link to={"./Plot1"}>
          <button className="point5 points"></button>
        </Link>

        <Link to={"./Plot1"}>
          <button className="point6 points"></button>
        </Link>

        <Link to={"./Plot1"}>
          <button className="point7 points"></button>
        </Link>

        <Link to={"./Plot1"}>
          <button className="point8 points"></button>
        </Link>

        <img
          src={SiteMapImage}
          width="100%"
          heigth="100%"
          useMap="#workmap"
          alt="Site Map"
        ></img>
      </div>
    </Router>
  );
};

export default SiteMap;

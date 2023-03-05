import React from "react";
import SiteMapImage from "./Jefferson_Exercise_Plot_Stand_Map_Close_Aerial.jpg";
import "./SiteMap.css";

const SiteMap = () => {
  return (
    <div className="image">
      <map name="workmap">
        <area
          shape="circle"
          coords="550,100,14"
          alt="Plot 1"
          href="./Plot1.html"
        />
        <area
          shape="circle"
          coords="423,127,14"
          alt="Plot 2"
          href="./Plot2.html"
        />
        <area
          shape="circle"
          coords="432,208,14"
          alt="Plot 3"
          href="./Plot3.html"
        />
        <area
          shape="circle"
          coords="315,214,14"
          alt="Plot 4"
          href="./Plot4.html"
        />
        <area
          shape="circle"
          coords="320,282,14"
          alt="Plot 5"
          href="./Plot5.html"
        />
        <area
          shape="circle"
          coords="192,312,14"
          alt="Plot 6"
          href="./Plot6.html"
        />
        <area
          shape="circle"
          coords="110,405,14"
          alt="Plot 7"
          href="./Plot7.html"
        />
        <area
          shape="circle"
          coords="212,381,14"
          alt="Plot 8"
          href="./Plot8.html"
        />
      </map>
      <img
        className="image"
        src={SiteMapImage}
        width="700"
        heigth="650"
        useMap="#workmap"
      ></img>
    </div>
  );
};

export default SiteMap;

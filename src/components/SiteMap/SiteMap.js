import React from "react";
import { siteMapImage } from "../../Data/Data";
import "./SiteMap.css";
import { AppContext } from "../../App";
import { useContext } from "react";

const SiteMap = () => {
  // *****************************
  // * Getting states from App
  // *****************************
  const { setPlotId } = useContext(AppContext);

  // *****************************
  // * Functions
  // *****************************
  const handlePlotPointClick = (id) => {
    setPlotId(id);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="image">
      <button
        className="point1 points"
        onClick={() => handlePlotPointClick(1)}
      ></button>

      <button
        className="point2 points"
        onClick={() => handlePlotPointClick(2)}
      ></button>

      <button
        className="point3 points"
        onClick={() => handlePlotPointClick(3)}
      ></button>

      <button
        className="point4 points"
        onClick={() => handlePlotPointClick(4)}
      ></button>

      <button
        className="point5 points"
        onClick={() => handlePlotPointClick(5)}
      ></button>

      <button
        className="point6 points"
        onClick={() => handlePlotPointClick(6)}
      ></button>

      <button
        className="point7 points"
        onClick={() => handlePlotPointClick(7)}
      ></button>

      <button
        className="point8 points"
        onClick={() => handlePlotPointClick(8)}
      ></button>

      <img
        src={siteMapImage}
        width="100%"
        heigth="100%"
        useMap="#workmap"
        alt="Site Map"
      ></img>
    </div>
  );
};

export default SiteMap;

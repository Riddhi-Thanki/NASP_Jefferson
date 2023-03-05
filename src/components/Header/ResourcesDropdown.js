import React, { useState } from "react";
import { resourcesDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./DropdownItems.css";
import pdf from "./asset/Jefferson_Exercise_Environmental_and_Soil_Report.pdf";
import aerialImage from "./asset/Jefferson_Exercise_Plot_Stand_Map_Landscape_Aerial.jpg";
import topoImage from "./asset/Jefferson_Exercise_Plot_Stand_Map_Landscape_Topo_Aerial.jpg";

const ResourcesDropdown = ({ setTableState, tableState }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <ul
        className={dropdown ? "plots-submenu clicked" : "plots-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {resourcesDropdown.map((item) => {
          if (item.title === "Table") {
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={item.cName}
                  onClick={() => {
                    setDropdown(false);
                    setTableState(!tableState);
                  }}
                >
                  {item.title}
                </Link>
              </li>
            );
          }
          if (item.title === "Env report") {
            return (
              <li key={item.id}>
                <Link
                  to={pdf}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className={item.cName}
                  onClick={() => {
                    setDropdown(false);
                  }}
                >
                  {item.title}
                </Link>
              </li>
            );
          }
          if (item.title === "Aerial Image") {
            return (
              <li key={item.id}>
                <Link
                  to={aerialImage}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className={item.cName}
                  onClick={() => {
                    setDropdown(false);
                  }}
                >
                  {item.title}
                </Link>
              </li>
            );
          }

          if (item.title === "Topo Image") {
            return (
              <li key={item.id}>
                <Link
                  to={topoImage}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className={item.cName}
                  onClick={() => {
                    setDropdown(false);
                  }}
                >
                  {item.title}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default ResourcesDropdown;

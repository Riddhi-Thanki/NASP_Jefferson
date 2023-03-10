import React, { useState } from "react";
import { plotsDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./DropdownItems.css";

const PlotsDropdown = ({ setPlotState }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <ul
        className={dropdown ? "plots-submenu clicked" : "plots-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {plotsDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => {
                  setDropdown(false);
                  setPlotState(item.id);
                }}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PlotsDropdown;

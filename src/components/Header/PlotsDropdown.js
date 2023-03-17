import React, { useState, useContext } from "react";
import { directionDropdownItems } from "../../Data/Data";
import { Link } from "react-router-dom";
import "./DropdownItems.css";
import { AppContext } from "../../App";

const PlotsDropdown = () => {
  // *****************************
  // * Getting states from App
  // *****************************
  const { setDirectionState } = useContext(AppContext);

  // *****************************
  // * Component States
  // *****************************
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul className="plots-submenu" onClick={() => setDropdown(!dropdown)}>
        {directionDropdownItems.map((item) => {
          return (
            <li key={item.id}>
              <Link
                className="submenu-item"
                onClick={() => {
                  setDropdown(false);
                  setDirectionState(item.id);
                }}
              >
                From the {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PlotsDropdown;

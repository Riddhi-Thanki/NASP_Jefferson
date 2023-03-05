import React from "react";
import "./Header.css";
import { useState } from "react";
import { NavItems } from "./NavItems";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PlotsDropdown from "./PlotsDropdown";
import ResourcesDropdown from "./ResourcesDropdown";

const Header = ({
  mobileView,
  setMobileView,
  tableState,
  setPlotState,
  setTableState,
}) => {
  const [plotsDropdown, setPlotsDropdown] = useState(false);
  const [resourcesDropdown, setResourcesDropdown] = useState(false);

  const buttonClicked = () => {
    if (mobileView === "off") {
      setMobileView("on");
    } else {
      setMobileView("off");
    }
    console.log(mobileView);
  };
  return (
    <Router>
      <nav className="header">
        <Link to={"/"} className="heading">
          Forestry Data- Jefferson
        </Link>

        <ul className="nav-items">
          {NavItems.map((item) => {
            if (item.title === "Plots") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onClick={() => setPlotsDropdown(!plotsDropdown)}
                  onMouseLeave={() => setPlotsDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {plotsDropdown && (
                    <PlotsDropdown setPlotState={setPlotState} />
                  )}
                </li>
              );
            }

            if (item.title === "Resources") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onClick={() => setResourcesDropdown(!resourcesDropdown)}
                  onMouseLeave={() => setResourcesDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {resourcesDropdown && (
                    <ResourcesDropdown
                      setTableState={setTableState}
                      tableState={tableState}
                    />
                  )}
                </li>
              );
            }

            if (item.title === "Mobile") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onClick={buttonClicked}
                >
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Router>
  );
};

export default Header;

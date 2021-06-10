import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const [active, changeActive] = useState({ hot: "", regular: classes.active });

  const clickHandler = (e) => {
    if (e.target.innerText === "Regular") {
      changeActive({ hot: "", regular: classes.active });
    } else if (e.target.innerText === "Hot") {
      changeActive({ hot: classes.active, regular: "" });
    }
  };

  return (
    <div className={classes.navContainer}>
      <ul>
        <li className={`${classes.navLink} ${active.regular}`}>
          <NavLink onClick={clickHandler} to="/regular">
            Regular
          </NavLink>
        </li>
        <li className={`${classes.navLink} ${active.hot}`}>
          <NavLink onClick={clickHandler} to="/hot">
            Hot
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

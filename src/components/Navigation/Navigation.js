import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const [active, changeActive] = useState({
    hot: "",
    regular: classes.active,
    generate: "",
  });

  const clickHandler = (e) => {
    if (e.target.innerText === "Regular") {
      changeActive({ hot: "", regular: classes.active, generate: "" });
    }
    if (e.target.innerText === "Hot") {
      changeActive({ hot: classes.active, regular: "", generate: "" });
    }
    if (e.target.innerText === "Generate") {
      changeActive({ hot: "", regular: "", generate: classes.active });
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
        <li className={`${classes.navLink} ${active.generate}`}>
          <NavLink onClick={clickHandler} to="/generate">
            Generate
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

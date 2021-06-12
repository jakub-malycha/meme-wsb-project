import classes from "./Header.module.css";
import logo from "../img/memeFace.png";

const Header = () => {
  return (
    <div className={classes.headerContainer}>
      <div className={classes.logoContainer}>
        <img src={logo} alt="logo"></img>
      </div>
    </div>
  );
};

export default Header;

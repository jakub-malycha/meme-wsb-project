import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/regular">Regular!!</NavLink>
        </li>
        <li>
          <NavLink to="/hot">HOT!!</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

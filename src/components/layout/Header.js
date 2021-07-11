import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../../assets/img/header/logo.png";

const Header = () => {
  return (
    <header className={`${classes.header} fixed z-10`}>
      <div className={classes.logo}>
        <img src={logo} alt="Logo" />
        <div>PAWS</div>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/home" activeClassName={`${classes.active} `}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName={classes.active}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/adopt" activeClassName={classes.active}>
              Adopt
            </NavLink>
          </li>
          <li>
            <NavLink to="/shelter" activeClassName={classes.active}>
              Shelter
            </NavLink>
          </li>
          <li>
            <NavLink to="/donate" activeClassName={classes.active}>
              Donate
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

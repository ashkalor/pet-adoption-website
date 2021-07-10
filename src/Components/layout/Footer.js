import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import logo from "../../assets/img/header/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={classes.wrapper}>
      <div className={classes.footer}>
        <div className={classes["footer-element"]}>
          <img src={logo} alt="websiteicon" />
          <h3>PAWS</h3>
          <div>
            <span>
              <FiFacebook />
            </span>
            <span>
              <AiFillInstagram />
            </span>
            <span>
              <AiOutlineTwitter />
            </span>
          </div>
        </div>

        <div className={classes["footer-element"]}>
          <h3>
            <Link to="/home" activeClassName={classes.active}>
              Contact Us
            </Link>
          </h3>
          <div>
            <span>
              <FaPhoneAlt />
            </span>
            <span>+91-9980785789</span>
          </div>
          <div>
            <span>
              {" "}
              <FaEnvelope />
            </span>
            <span>paws@gmail.com</span>
          </div>
        </div>
        <div className={classes["footer-element"]}>
          <h3>
            <Link to="/about" activeClassName={classes.active}>
              About Us
            </Link>
          </h3>
          <div>
            <div>Lorem ipsum dolor sit amet </div>
            <div>Lorem ipsum dolor sit amet </div>
          </div>
        </div>
        <div className={classes["footer-element"]}>
          <h3>Join our newsletter</h3>
          <div>
            <form className={classes.form}>
              <label htmlFor="newsletter" />
              <input
                className={classes["footer-email"]}
                type="text"
                placeholder=" Enter your email address"
              />
              <button className={classes["email-btn"]}>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

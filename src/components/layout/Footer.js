import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import logo from "../../assets/img/header/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={`${classes.wrapper}`}>
      <div className={classes.footer}>
        <div className={classes["footer-element"]}>
          <img src={logo} alt="websiteicon" />
          <h3 className="font-medium text-base ml-1 mt-2 ">PAWS</h3>
          <div className="flex">
            <span className="hover:text-black">
              <FaFacebookF />
            </span>
            <span className="hover:text-black">
              <AiFillInstagram />
            </span>
            <span className="hover:text-black">
              <AiOutlineTwitter />
            </span>
          </div>
        </div>

        <div className={classes["footer-element"]}>
          <h3>
            <Link to="/home" className="font-medium">
              Contact Us
            </Link>
          </h3>
          <div className="flex items-center">
            <span>
              <FaPhoneAlt />
            </span>
            <span>+91-9980785789</span>
          </div>
          <div className="flex items-center">
            <span>
              <FaEnvelope />
            </span>
            <span>paws@gmail.com</span>
          </div>
        </div>
        <div className={classes["footer-element"]}>
          <h3>
            <Link to="/about" className="font-medium">
              About Us
            </Link>
          </h3>
          <div>
            <div>Lorem ipsum dolor sit amet </div>
            <div>Lorem ipsum dolor sit amet </div>
          </div>
        </div>
        <div className={classes["footer-element"]}>
          <h3 className="font-medium">Join our newsletter</h3>
          <div>
            <form className={classes.form}>
              <label htmlFor="newsletter" />
              <input
                className="rounded-sm p-1 border-2 border-gray-200 rounded-l-md"
                type="text"
                placeholder=" Enter your email address"
              />
              <button className="bg-purple-700 p-1 border-2 border-purple-700 text-white hover:bg-purple-600 rounded-r-md      ">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

import { Link } from "react-router-dom";

const Hero = (props) => {
  return (
    <div className="bg-hero-background-home w-full h-auto">
      <div>{props.title}</div>
      <div>
        <img src={props.hero} alt="Hero" className="" />
      </div>

      {props.page && (
        <div>
          <Link to="/home">Home</Link>
          <div>{">"}</div>
          <div>{props.page}</div>
        </div>
      )}
    </div>
  );
};
export default Hero;

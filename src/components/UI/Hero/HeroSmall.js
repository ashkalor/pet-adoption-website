import { Link } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";

const HeroSmall = (props) => {
  const { heroImg, title } = props;
  return (
    <div className="relative w-screen h-96 bg-black">
      <img
        src={heroImg}
        alt=""
        className="w-screen h-96 object-center object-cover opacity-40"
      />
      <div
        className="absolute text-5xl font-semibold text-white "
        style={{ bottom: "30%", left: "10%" }}
      >
        {title}
      </div>
      <div
        className="absolute rounded-md inline-flex gap-5 items-center justify-center w-52 h-9 bg-purple-700 "
        style={{ bottom: "16%", left: "10%" }}
      >
        <Link
          to="/home"
          className=" text-md font-roboto font-light text-white hover:text-gray-300 "
        >
          Home
        </Link>

        <div>
          <HiOutlineChevronRight
            color="white"
            size="0.7rem"
            className="origin-center"
          />
        </div>

        <Link
          to={`/${title}`}
          className=" text-md font-roboto font-light text-gray-300 hover:text-gray-400 "
        >
          {title}
        </Link>
      </div>
    </div>
  );
};
export default HeroSmall;

import { Link } from "react-router-dom";
import about from "../../assets/img/home/hero-about.png";
const HomeAbout = () => {
  return (
    <div
      className="grid w-screen grid-cols-2 justify-center align-middle bg-white"
      style={{ padding: "0% 10%" }}
    >
      <div className="flex flex-col justify-center text-left">
        <div className="font-bold text-5xl ">Our Mission</div>
        <p className="text-xl mt-6">
          Aliquam erat volutpat In id fermentum augue, ut pellentesque leo.
          Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet
          nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam
          rhoncus leo a dolor placerat, nec elementum ipsum convall.
        </p>
        <p className="text-xl">
          Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet
          nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam
          rhoncus leo a dolor placerat, nec elementum ipsum convall.
        </p>
        <Link to="/contact" className="w-30 h-50 flex-none border-auto ">
          <button className="bg-purple-700 px-8 py-2 mt-6 rounded-3xl text-white hover:bg-purple-600">
            Contact Us
          </button>
        </Link>
      </div>
      <img
        src={about}
        alt="dog-about"
        className="object-right m-auto object-contain"
      />
    </div>
  );
};
export default HomeAbout;

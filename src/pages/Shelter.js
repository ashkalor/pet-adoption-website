import HeroSmall from "../components/UI/Hero/HeroSmall";
import contactCover from "../assets/img/contact/contactCover.jpg";
import Card from "../components/UI/Card/Card";
import { NavLink } from "react-router-dom";

const Shelter = () => {
  return (
    <>
      <HeroSmall title="Shelter" heroImg={contactCover} />
      <Card className="my-12 py-12">
        <div className="text-5xl text-center">Find Shelter Homes</div>
        <nav className="flex items-start justify-center">
          <ul className="h-12 w-1/2 m-12 p-6 gap-x-6 flex justify-center items-center rounded-3xl bg-gray-300">
            <li>
              <NavLink
                to="/donate/search-by-pin"
                activeClassName="bg-purple-700"
              >
                Search by PIN
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donate/search-by-district"
                activeClassName="bg-purple-700"
              >
                Search by District
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donate/search-by-state"
                activeClassName="bg-purple-700"
              >
                Search by State
              </NavLink>
            </li>
          </ul>
        </nav>
      </Card>
    </>
  );
};

export default Shelter;

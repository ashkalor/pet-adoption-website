import HeroSmall from "../components/UI/Hero/HeroSmall";
import contactCover from "../assets/img/contact/contactCover.jpg";
import Card from "../components/UI/Card/Card";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import { ShelterData } from "../components/shelter/ShelterData";
import { useState, useEffect } from "react";
import Button from "../components/UI/Button/Button";
import contentCover from "../assets/img/content-cover.jpg";
import SearchByPin from "../components/shelter/SearchByPin";

const Shelter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [totalPages, setTotalPages] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);

  useEffect(() => {
    setTotalPages(Math.round(ShelterData.length / itemsPerPage));
    if (currentPage === totalPages) {
      setIsNextDisabled(true);
    }
    if (currentPage === 1) setIsPrevDisabled(true);
  }, [itemsPerPage, currentPage, totalPages]);

  const nextHandler = (event) => {
    if (currentPage < totalPages) {
      setIsPrevDisabled(false);
      setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
    }
  };
  const prevHandler = (event) => {
    if (currentPage > 1) {
      setIsNextDisabled(false);
      setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
    }
  };
  return (
    <>
      <div>
        <Redirect to="/shelter/search-by-pin" />
        <HeroSmall title="Shelter" heroImg={contactCover} />
        <div
          className="w-screen z-3 bg-center bg-no-repeat bg-cover bg-fixed py-10"
          style={{
            backgroundImage: `url(${contentCover})`,
          }}
        >
          <Card>
            <div style={{ padding: "3rem 10%" }}>
              <div className="text-5xl text-center font-semibold">
                Find Shelter Homes
              </div>
              <nav className="flex items-start justify-center">
                <ul className="h-12 mt-24 mb-12 py-6 gap-x-3 flex justify-center items-center rounded-3xl bg-gray-300">
                  <li>
                    <NavLink
                      to="/shelter/search-by-pin"
                      activeClassName=" bg-purple-700 text-white"
                      className="py-3.5 px-7 rounded-3xl text-black"
                    >
                      Search by PIN
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/shelter/search-by-district"
                      activeClassName=" bg-purple-700 text-white"
                      className="py-3.5 px-7 rounded-3xl text-black"
                    >
                      Search by District
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/shelter/show-all-places"
                      activeClassName=" bg-purple-700 text-white"
                      className="py-3.5  px-7 rounded-3xl text-black"
                    >
                      Show All Places
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <Switch>
                <Route path="/shelter/search-by-pin" exact>
                  <SearchByPin />
                </Route>
                <Route path="/shelter/search-by-district" exact></Route>
                <Route path="/shelter/show-all-places" exact>
                  <div className="flex flex-col gap-8 mb-16">
                    {ShelterData.slice(
                      currentPage * itemsPerPage - itemsPerPage,
                      currentPage * itemsPerPage
                    ).map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="flex items-start p-8 bg-gray-300  rounded-xl gap-12"
                        >
                          <div className="overflow-hidden h-36 w-36 ">
                            <img
                              src={item.logo}
                              alt="Shelter Logo"
                              className="object-cover h-36 w-36 rounded-full"
                            />
                          </div>
                          <div>
                            <p className=" text-xl font-semibold mb-3">
                              {item.name}
                            </p>
                            <p>{`${item.address}`}</p>
                            <p>{`${item.city}-${item.pin}, ${item.state}.`}</p>
                            <span className="">{`Timings: `}</span>
                            <span>{item.timings}</span>
                            <p>{`Contact: ${item.contact} `}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex gap-4 justify-end -mt-8">
                    <Button
                      onClick={prevHandler}
                      disabled={isPrevDisabled}
                      className="disabled:opacity-20"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={nextHandler}
                      disabled={isNextDisabled}
                      className="disabled:opacity-20"
                    >
                      Next
                    </Button>
                  </div>
                </Route>
              </Switch>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Shelter;

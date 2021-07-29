import heroAdopt from "../assets/img/adopt/hero-adopt.jpg";
import AdoptAbout from "../components/Adopt/AdoptAbout";
import AdoptCard from "../components/Adopt/AdoptCard";
import Filter from "../components/Adopt/Filter";
import "../components/Adopt/AdoptCard.css";
import Card from "../components/UI/Card/Card";
import HeroSmall from "../components/UI/Hero/HeroSmall";
import { useState, useEffect } from "react";
import { AdoptData } from "../components/Adopt/AdoptData";
import Button from "../components/UI/Button/Button";
import contentCover from "../assets/img/content-cover.jpg";

const Adopt = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [totalPages, setTotalPages] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);

  useEffect(() => {
    setTotalPages(Math.round(AdoptData.length / itemsPerPage));
    console.log(currentPage, totalPages);
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
      <HeroSmall title="Adoption" heroImg={heroAdopt} page="Adopt" />
      <div
        className="w-screen z-3 bg-center bg-no-repeat bg-cover bg-fixed py-10"
        style={{
          backgroundImage: `url(${contentCover})`,
        }}
      >
        <Card>
          <div style={{ margin: "0 0", padding: "3rem 10%" }}>
            <AdoptAbout />
            <Filter />
            <div className="grid grid-cols-2 gap-12 w-full">
              {AdoptData.slice(
                currentPage * itemsPerPage - itemsPerPage,
                currentPage * itemsPerPage
              ).map((item) => {
                return (
                  <AdoptCard
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    gender={item.gender}
                    age={item.age}
                    breed={item.breed}
                    vaccinated={item.vaccinated}
                    petFriendly={item.petFriendly}
                    specialNeeds={item.specialNeeds}
                    childFriendly={item.childFriendly}
                  />
                );
              })}
            </div>
            <div className="flex gap-4 justify-end mt-6">
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
          </div>
        </Card>
      </div>
    </>
  );
};

export default Adopt;

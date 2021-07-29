import HeroSmall from "../components/UI/Hero/HeroSmall";
import contactCover from "../assets/img/contact/contactCover.jpg";
import Card from "../components/UI/Card/Card";
import { CharityList } from "../components/donate/CharityList";
import Button from "../components/UI/Button/Button";
import { useEffect, useState } from "react";
import CharityItem from "../components/donate/CharityItem";
import contentCover from "../assets/img/content-cover.jpg";

const Donate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [totalPages, setTotalPages] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);

  useEffect(() => {
    setTotalPages(Math.round(CharityList.length / itemsPerPage));
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
      <HeroSmall title="Donate" heroImg={contactCover} />
      <div
        className="w-screen z-3 bg-center bg-no-repeat bg-cover bg-fixed py-10"
        style={{
          backgroundImage: `url(${contentCover})`,
        }}
      >
        <Card>
          <div style={{ margin: "0 0", padding: "3rem 10%" }}>
            <div className="text-4xl font-semibold ">Pet Charity Links</div>
            <div>
              {CharityList.slice(
                currentPage * itemsPerPage - itemsPerPage,
                currentPage * itemsPerPage
              ).map((item) => {
                return (
                  <CharityItem
                    key={item.id}
                    logo={item.logo}
                    title={item.title}
                    url={item.url}
                    donateLink={item.donateLink}
                  />
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
          </div>
        </Card>
      </div>
    </>
  );
};

export default Donate;

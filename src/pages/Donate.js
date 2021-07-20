import HeroSmall from "../components/UI/Hero/HeroSmall";
import contactCover from "../assets/img/contact/contactCover.jpg";
import Card from "../components/UI/Card/Card";
import { CharityList } from "../components/donate/CharityList";
import Button from "../components/UI/Button/Button";
import { useEffect, useState } from "react";

const Donate = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [totalPages, setTotalPages] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);

  useEffect(() => {
    setTotalPages(CharityList.length / itemsPerPage);
  }, [itemsPerPage, CharityList]);

  const nextHandler = (event) => {
    if (currentPage < totalPages) {
      setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
    } else {
      setIsNextDisabled(true);
    }
  };
  const prevHandler = (event) => {
    if (currentPage > 0) {
      setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
    } else {
      setIsPrevDisabled(true);
    }
  };

  return (
    <>
      <HeroSmall title="Donate" heroImg={contactCover} />
      <div>
        <Card>
          <div style={{ margin: "3rem 0", padding: "3rem 10%" }}>
            <div className="text-4xl font-semibold ">Pet Charity Links</div>
            <div>
              {CharityList.map((item) => {
                return (
                  <div className="flex items-center p-8 bg-gray-300 my-16 rounded-xl gap-12">
                    <div className="overflow-hidden h-36 w-36 ">
                      <img
                        src={item.logo}
                        alt="Charity Logo"
                        className=" object-cover object-top h-36 w-36 rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-2xl font-medium">{item.title}</p>
                      <p>{item.url}</p>
                      <Button className="">Donate</Button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4 justify-end -mt-8">
              <Button onClick={nextHandler}>Back</Button>
              <Button onClick={prevHandler}>Next</Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Donate;

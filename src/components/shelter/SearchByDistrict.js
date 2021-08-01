import useInput from "../../hooks/use-input";
import Button from "../UI/Button/Button";
import { ShelterData } from "./ShelterData";
import { useEffect, useState } from "react";

const SearchByPin = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [totalPages, setTotalPages] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);
  const [formPin, setFormPin] = useState(null);
  const [formPinExists, setFormPinExists] = useState(null);

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

  const isPin = (value) => {
    const regex = new RegExp("^[1-9][0-9]{5}$");
    return regex.test(value);
  };
  const {
    value: pinValue,
    isValid: pinIsValid,
    hasError: pinHasError,
    inputBlurHandler: pinBlurHandler,
    inputChangeHandler: pinChangeHandler,
    reset: resetPin,
  } = useInput(isPin);

  let formIsValid = false;

  if (pinIsValid) {
    formIsValid = true;
  }
  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    setFormPin(pinValue);

    setFormPinExists(
      ShelterData.map((item) => {
        if (Object.values(item).indexOf("test1") > -1) {
          return true;
        }
        return false;
      })
    );

    console.log(pinValue);
    resetPin();
  };
  const errorText = "text-red-400 text-center";
  return (
    <div>
      <div>
        <form onSubmit={submitHandler}>
          <div className="flex items-center gap-6 mb-12 justify-center">
            <label htmlFor="pin" />
            <input
              type="text"
              id="pin"
              pattern="^[1-9][0-9]{5}$"
              value={pinValue}
              onChange={pinChangeHandler}
              onBlur={pinBlurHandler}
              className="appearance-none block w-3/5 text-gray-700 border-2 border-gray-200 rounded-3xl py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-purple-700"
            />
            <button className="bg-purple-700 w-1/6 py-3 px-4  rounded-3xl text-white hover:bg-purple-600">
              Search
            </button>
          </div>
          {pinHasError && (
            <p className={errorText}>Please enter a valid PIN.</p>
          )}
        </form>

        {formPinExists && (
          <div>
            <div className="flex flex-col gap-8">
              {ShelterData.slice(
                currentPage * itemsPerPage - itemsPerPage,
                currentPage * itemsPerPage
              )
                .filter((item) => item.pin === formPin)
                .map((item) => {
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
            <div className="flex gap-4 justify-end mt-8">
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
        )}
      </div>
    </div>
  );
};

export default SearchByPin;

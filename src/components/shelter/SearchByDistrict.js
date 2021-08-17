import React, { useState, useEffect } from "react";
import { StateNDistrict } from "./StateNDistrictData";
import Button from "../UI/Button/Button";
import firebase from "../../firebase";

const SearchByDistrict = () => {
  const [stateData, setStateData] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [totalPages, setTotalPages] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);
  const [searchState, setSearchState] = useState("");
  const [searchDistrict, setSearchDistrict] = useState("");
  const [shelterData, setShelterData] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    db.collection("Shelter")
      .get()
      .then((querySnapshot) => {
        const documents = querySnapshot.docs.map((doc) => doc.data());
        setShelterData(documents);
      });
  }, []);

  const districtHandler = (event) => {
    setSelectedDistrict(event.target.value);
  };
  const checkInsertInArray = (newState) => {
    let findStatus = stateData.find((x) => {
      return x === newState;
    });
    if (!findStatus) {
      setStateData([...stateData, newState]);
    }
  };
  useEffect(() => {
    setTotalPages(Math.round(shelterData.length / itemsPerPage));
    if (currentPage === totalPages) {
      setIsNextDisabled(true);
    }
    if (currentPage === 1) setIsPrevDisabled(true);
  }, [itemsPerPage, currentPage, totalPages, shelterData.length]);

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

  const stateChangeHandler = (event) => {
    if (event.target.value) {
      setSelectedState(event.target.value);
    }
  };
  const districtChangeHandler = (event) => {
    if (event.target.value) {
      setSelectedDistrict(event.target.value);
    }
  };

  useEffect(() => {
    Object.keys(StateNDistrict).forEach((state) => {
      checkInsertInArray(state);
    });
  });

  const searchHandler = () => {
    setSearchState(selectedState);
    setSearchDistrict(selectedDistrict.toLowerCase());
  };
  return (
    <>
      <div className="flex gap-3 items-center justify-center ">
        <select
          value={selectedState}
          className="appearance-none block w-1/4 text-gray-700 border-2 border-gray-200 rounded-3xl py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-purple-700"
          onChange={stateChangeHandler}
        >
          <option disabled hidden value="">
            Please select State
          </option>
          {stateData.map((allStates, index) => {
            return (
              <option key={index} value={allStates}>
                {allStates}
              </option>
            );
          })}
        </select>
        {StateNDistrict[selectedState] ? (
          <select
            onChange={districtChangeHandler}
            className="appearance-none block w-1/4 text-gray-700 border-2 border-gray-200 rounded-3xl py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-purple-700"
          >
            {StateNDistrict[selectedState].map((allStates, index) => {
              return (
                <option key={index} value={allStates}>
                  {allStates}
                </option>
              );
            })}
          </select>
        ) : (
          <select
            value="Please select District"
            disabled
            onChange={districtHandler}
            className="appearance-none block w-1/4 text-gray-700 border-2 border-gray-200 rounded-3xl py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-purple-700"
          >
            <option value="">Please select District</option>
          </select>
        )}
        <button
          onClick={searchHandler}
          className="bg-purple-700 w-32 py-3 px-4  rounded-3xl text-white hover:bg-purple-600"
        >
          Search
        </button>
      </div>
      {searchState && searchDistrict && (
        <div className="mt-16">
          <div className="flex flex-col gap-8">
            {shelterData
              .slice(
                currentPage * itemsPerPage - itemsPerPage,
                currentPage * itemsPerPage
              )
              .filter((item) => item.state === searchState)
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
                      <p className=" text-xl font-semibold mb-3">{item.name}</p>
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
          {!(
            shelterData
              .slice(
                currentPage * itemsPerPage - itemsPerPage,
                currentPage * itemsPerPage
              )
              .filter((item) => item.state === searchState).length === 0
          ) && (
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
          )}
        </div>
      )}
    </>
  );
};

export default SearchByDistrict;

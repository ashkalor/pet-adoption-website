import React, { useState, useEffect } from "react";
import { StateNDistrict } from "./StateNDistrictData";

const SearchByDistrict = () => {
  const [stateData, setStateData] = useState(["Usa"]);
  const [selectedState, setSelectedState] = useState("");

  const checkInsertInArray = (newState) => {
    let findStatus = stateData.find((x) => {
      return x === newState;
    });
    if (!findStatus) {
      setStateData([...stateData, newState]);
    }
  };

  const stateChange = (event) => {
    if (event.target.value) {
      setSelectedState(event.target.value);
    }
  };

  useEffect(() => {
    Object.keys(StateNDistrict).forEach((state) => {
      checkInsertInArray(state);
    });
  });

  return (
    <>
      <div className="flex gap-3 items-center justify-center ">
        <select
          className="appearance-none block w-1/4 text-gray-700 border-2 border-gray-200 rounded-3xl py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-purple-700"
          onChange={stateChange}
        >
          <option value="" disabled selected hidden>
            Please select State
          </option>
          {stateData.map((allStates) => {
            return <option value={allStates}>{allStates}</option>;
          })}
        </select>
        {selectedState ? (
          <select className="appearance-none block w-1/4 text-gray-700 border-2 border-gray-200 rounded-3xl py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-purple-700">
            <option value="" disabled selected hidden>
              Please select District
            </option>
            {StateNDistrict[selectedState].map((allStates) => {
              return <option value={allStates}>{allStates}</option>;
            })}
          </select>
        ) : (
          <select className="appearance-none block w-1/4 text-gray-700 border-2 border-gray-200 rounded-3xl py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-purple-700">
            <option value="" disabled selected hidden>
              Please select District
            </option>
          </select>
        )}
        <button className="bg-purple-700 w-32 py-3 px-4  rounded-3xl text-white hover:bg-purple-600">
          Search
        </button>
      </div>
    </>
  );
};

export default SearchByDistrict;

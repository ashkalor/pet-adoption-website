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
      <select onChange={stateChange}>
        <option value="" disabled selected hidden>
          Please select State
        </option>
        {stateData.map((allStates) => {
          return <option value={allStates}>{allStates}</option>;
        })}
      </select>
      <br />
      {selectedState ? (
        <>
          <select>
            <option value="" disabled selected hidden>
              Please select District
            </option>
            {StateNDistrict[selectedState].map((allStates) => {
              return <option value={allStates}>{allStates}</option>;
            })}
          </select>
        </>
      ) : (
        <span>Please select a State first</span>
      )}
    </>
  );
};

export default SearchByDistrict;

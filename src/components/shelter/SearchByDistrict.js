import React, { useState, useEffect } from "react";

const countries = {
  France: ["Paris", "Marseille", "Lille", "Lyon"],
  Usa: ["New York", "San Francisco", "Austin", "Dallas"],
};

const SearchByDistrict = () => {
  const [countryData, setCountryData] = useState(["Usa"]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const checkInsertInArray = (newCountry) => {
    let findStatus = countryData.find((x) => {
      return x === newCountry;
    });
    if (!findStatus) {
      setCountryData([...countryData, newCountry]);
    }
  };

  const countryChange = (event) => {
    if (event.target.value) {
      setSelectedCountry(event.target.value);
    }
  };

  useEffect(() => {
    Object.keys(countries).forEach((country) => {
      checkInsertInArray(country);
    });
  });

  return (
    <>
      <span>Country:</span>
      <select onChange={countryChange}>
        <option value="" />
        {countryData.map((allCountries) => {
          return <option value={allCountries}>{allCountries}</option>;
        })}
      </select>
      <br />
      {selectedCountry ? (
        <>
          <span>City:</span>{" "}
          <select>
            <option value="" />
            {countries[selectedCountry].map((allCountries) => {
              return <option value={allCountries}>{allCountries}</option>;
            })}
          </select>
        </>
      ) : (
        <span>City: Please select a country first</span>
      )}
    </>
  );
};

export default SearchByDistrict;

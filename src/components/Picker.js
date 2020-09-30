import React, { useContext } from "react";
import { DataContext } from "../context";

const Picker = () => {
  const { countriesList, setCountry } = useContext(DataContext);

  return (
    <select
      onChange={(e) => {
        if (e.target.value !== "") {
          setCountry(`countries/${e.target.value}?yesterday=false`);
        } else {
          setCountry(`all`);
        }
      }}
    >
      <option value="">All Countries</option>
      {countriesList.map((country, i) => (
        <option key={i} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default Picker;

import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const rootURL = "https://disease.sh/v3/covid-19";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [stats, setStats] = useState();
  const [country, setCountry] = useState("all");
  const [countriesList, setCountriesList] = useState([]);

  const fetchStats = async () => {
    try {
      const response = await axios(`${rootURL}/${country}`);
      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCountries = async () => {
    try {
      const response = await axios(`${rootURL}/countries`);
      setCountriesList(response.data.map((item) => item.country));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, [country]);
  useEffect(() => {
    fetchCountries();
  }, [setCountriesList]);

  return (
    <DataContext.Provider value={{ setCountry, stats, countriesList }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };

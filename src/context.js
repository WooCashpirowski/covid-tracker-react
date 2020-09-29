import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const rootURL = "https://disease.sh/v3/covid-19";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [stats, setStats] = useState();
  const [country, setCountry] = useState("all");
  const [countriesList, setCountriesList] = useState([]);
  const [allCountriesData, setAllCountriesData] = useState([]);

  const fetchCountries = async () => {
    try {
      const response = await axios(`${rootURL}/countries`);
      setCountriesList(response.data.map((item) => item.country));
      setAllCountriesData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios(`${rootURL}/${country}`);
        setStats(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStats();
  }, [country]);
  useEffect(() => {
    fetchCountries();
  }, [setCountriesList, setAllCountriesData]);

  return (
    <DataContext.Provider
      value={{ setCountry, stats, countriesList, allCountriesData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };

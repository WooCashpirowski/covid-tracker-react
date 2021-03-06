import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const rootURL = "https://disease.sh/v3/covid-19";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const currentCountry = localStorage.getItem("country")
    ? JSON.parse(localStorage.getItem("country"))
    : "all";

  const [stats, setStats] = useState();
  const [country, setCountry] = useState(currentCountry);
  const [countriesList, setCountriesList] = useState([]);
  const [allCountriesData, setAllCountriesData] = useState([]);
  const [yesterdayCountriesData, setYesterdayCountriesData] = useState([]);
  const [previousDay, setPreviousDay] = useState();
  const [history, setHistory] = useState({});

  useEffect(() => {
    localStorage.setItem("country", JSON.stringify(country));
    return () => {};
  }, [country]);

  const fetchCountries = async () => {
    try {
      const response = await axios(`${rootURL}/countries`);
      setCountriesList(response.data.map((item) => item.country));
      setAllCountriesData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchYesterdayData = async () => {
    try {
      const response = await axios(`${rootURL}/countries?yesterday=true`);
      setYesterdayCountriesData(response.data);
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
    const fetchPreviousDay = async () => {
      try {
        const response = await axios(`${rootURL}/${country}/?yesterday=true`);
        setPreviousDay(response.data.todayCases);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchHistory = async () => {
      try {
        const response = await axios(
          `${rootURL}/historical/${country.replace(
            "countries/",
            ""
          )}?lastdays=all`
        );
        setHistory(response.data.timeline.cases);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHistory();
    fetchPreviousDay();
  }, [country]);
  useEffect(() => {
    fetchCountries();
    fetchYesterdayData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        setCountry,
        previousDay,
        stats,
        countriesList,
        allCountriesData,
        history,
        yesterdayCountriesData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };

import React, { useState } from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MiddleCarousel from "./components/MiddleCarousel";

const App = () => {
  const [data, setData] = useState({});
  // console.log(data?.courseList?.tabsData, "data");

  useEffect(() => {
    fetch("https://almaazkhan1055.github.io/udemy_data/udemy-data.json")
      .then((res) => res.json())
      .then((dat) => setData(dat))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header header={data?.header} />
      <Hero hero={data} />
      <MiddleCarousel middledata={data?.courseList?.tabsData} />
    </>
  );
};

export default App;

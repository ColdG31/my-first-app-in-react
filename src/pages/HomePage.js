import React, { useEffect, useState } from "react";
import MealsContainer from "../containers/MealsContainer";
import TopbarContainer from "../containers/TopbarContainer";
import RandomMealsContainer from "../containers/RandomMealsContainer";
import SideContainer from "../containers/SidebarContainer";

const HomePage = () => {
  const [meals, setMeals] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [title, setTitle] = useState("Latest Meals");
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMeals = (query) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals || []);
        setCurrentPage(1);
      });
  };

  useEffect(() => {
    fetchMeals(searchValue);
  }, [searchValue]);

  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    setSearchValue(value);
    setTitle(value ? `Meals with: ${value}` : "Latest Meals");
  };

  return (
    <>
      <TopbarContainer
        searchValue={searchValue}
        handleInputChange={handleInputChange}
      />
      <div className="d-flex">
        <SideContainer />
        <div className="w-100 p-4">
          <RandomMealsContainer />
          <MealsContainer
            data={meals}
            title={title}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;

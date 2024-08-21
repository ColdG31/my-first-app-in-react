import React, { useEffect, useState } from "react";
import SidebarComponent from "../components/SidebarComponent";
import { Link } from "react-router-dom";

const SideContainer = () => {
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((response) => response.json())
      .then((data) => setCategories(data.meals || []));

    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((response) => response.json())
      .then((data) => setAreas(data.meals || []));
  }, []);

  return (
    <div
      className="d-flex flex-column ps-1 pe-2 py-2 d-none d-md-flex overflow-y-scroll"
      style={{ width: "200px" }}
    >
      <Link
        to="/favorites"
        className="btn bg-white text-start border-bottom text-dark fw-bold px-0 rounded-0"
      >
        ♡ Favorites
      </Link>

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header text-start" id="flush-headingOne">
            <button
              className="accordion-button px-0 bg-white text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Categories
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <SidebarComponent data={categories} field="strCategory" />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header text-start" id="flush-headingTwo">
            <button
              className="accordion-button px-0 collapsed bg-white text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Areas
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <SidebarComponent data={areas} field="strArea" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideContainer;

import React, { useState } from "react";
import MealComponent from "../components/MealComponent";
import TitleComponent from "../components/TitleComponent";

const MealsContainer = ({ data, title, currentPage, setCurrentPage }) => {
  const [mealsPerPage, setMealsPerPage] = useState(9);
  const totalMeals = data?.length || 0;
  const totalPages = Math.ceil(totalMeals / mealsPerPage);

  const paginateMeals = () => {
    const start = (currentPage - 1) * mealsPerPage;
    const end = start + mealsPerPage;
    return data.slice(start, end);
  };

  const handleMealsPerPageChange = (e) => {
    setMealsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="w-100 p-3">
      <Header
        title={title}
        totalMeals={totalMeals}
        mealsPerPage={mealsPerPage}
        handleMealsPerPageChange={handleMealsPerPageChange}
      />

      {/* Display Meals */}
      <div className="row row-gap-5">
        {paginateMeals().map((meal) => (
          <MealComponent
            key={meal.idMeal}
            idMeal={meal.idMeal}
            imageSRC={meal.strMealThumb}
            title={meal.strMeal}
            area={meal.strArea}
          />
        ))}
      </div>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        handleNextPage={() => setCurrentPage(currentPage + 1)}
        handlePreviousPage={() => setCurrentPage(currentPage - 1)}
      />
    </div>
  );
};

const Header = ({
  title,
  totalMeals,
  mealsPerPage,
  handleMealsPerPageChange,
}) => (
  <div className="mb-4">
    <div className="row mb-2">
      <div className="col">
        <TitleComponent text={title} />
      </div>
    </div>
    <div className="row mb-2">
      <div className="col-md-6">
        <span className="fs-4 fw-light">
          {totalMeals} {totalMeals === 1 ? "Meal" : "Meals"} found
        </span>
      </div>
      <div className="col-md-6 d-flex justify-content-end">
        <div className="d-flex align-items-center">
          <label
            htmlFor="mealsPerPage"
            className="me-2"
            style={{ whiteSpace: "nowrap" }}
          >
            Show per page:
          </label>
          <select
            id="mealsPerPage"
            className="form-select w-auto"
            value={mealsPerPage}
            onChange={handleMealsPerPageChange}
          >
            <option value={9}>9</option>
            <option value={45}>45</option>
            <option value={90}>90</option>
          </select>
        </div>
      </div>
    </div>
  </div>
);

const PaginationControls = ({
  currentPage,
  totalPages,
  handleNextPage,
  handlePreviousPage,
}) => (
  <div className="d-flex justify-content-between align-items-center mt-4">
    <button
      className="btn btn-outline-primary"
      disabled={currentPage === 1}
      onClick={handlePreviousPage}
    >
      Previous
    </button>
    <span>
      Page {currentPage} of {totalPages}
    </span>
    <button
      className="btn btn-outline-primary"
      disabled={currentPage === totalPages}
      onClick={handleNextPage}
    >
      Next
    </button>
  </div>
);

export default MealsContainer;

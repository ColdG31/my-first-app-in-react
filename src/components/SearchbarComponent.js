import React from "react";

const SearchbarComponent = ({ searchValue, handleInputChange }) => {
  return (
    <div className="container-fluid d-flex gap-3 align-items-center p-2">
      <div className="d-flex ms-auto w-50 align-items-center">
        <input
          type="search"
          className="form-control"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Search for meals..."
          aria-label="Search"
        />
      </div>
    </div>
  );
};

export default SearchbarComponent;

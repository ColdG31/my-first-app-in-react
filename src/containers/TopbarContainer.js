import React from "react";
import logo from "./../assets/logo.png";
import { Link } from "react-router-dom";

const TopbarContainer = ({ searchValue, handleInputChange, noSearchBar }) => {
  return (
    <div className="d-flex p-1 sticky-top bg-white align-items-center">
      <div className="navbar-brand" style={{ width: "200px", height: "40px" }}>
        <Link to="/">
          <img src={logo} className="img-fluid h-100" alt="logo" />
        </Link>
      </div>

      {!noSearchBar && (
        <div className="text-muted w-100">
          <form className="form form-control-group d-flex">
            <input
              type="text"
              className="form-control form-control-lg self-center border-bottom border-0 rounded-0"
              placeholder="🔎 Search meals"
              value={searchValue}
              onChange={handleInputChange}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default TopbarContainer;

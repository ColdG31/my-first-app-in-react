import React from "react";
import { Link } from "react-router-dom";

const MealComponent = ({ idMeal, imageSRC, title, area }) => {
  return (
    <div className="col-12 col-md-4 gx-4 py-4">
      <Link to={`/meals/${idMeal}`} className="text-decoration-none">
        <div className="d-flex align-items-center">
          <div className="w-100 position-relative">
            <img
              src={imageSRC}
              alt={title}
              className="position-absolute"
              style={{
                borderRadius: "50%",
                border: "2px solid black",
                width: "120px",
                height: "120px",
                top: "-50%",
                left: "-10px",
                zIndex: 1,
              }}
            />
            <div className="card w-75">
              <p className="mb-0 card-body text-truncate text-end text-dark lead">
                {title}
              </p>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark opacity-75">
                {area}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MealComponent;

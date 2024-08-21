import React from "react";
import { Link } from "react-router-dom";

const SidebarComponent = ({ data, field }) => {
  return (
    <div className="btn-group-vertical w-100">
      {data?.map((item) => (
        <Link
          key={item[field]}
          to={`/category/${item[field]}`}
          className="btn text-start btn-white my-1"
        >
          {item[field]}
        </Link>
      ))}
    </div>
  );
};

export default SidebarComponent;

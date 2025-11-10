import React from "react";
import { Link } from "react-router";

const PetCards = ({ data }) => {
  const { name, price, category, location, image, _id } = data;
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure className="h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">
            Category: <span className="linear-text">{category}</span>
          </h2>
          <h2 className="card-title">
            Location: <span className="linear-text">{location}</span>
          </h2>
          <h2 className="card-title">
            Price: <span className="linear-text">{price}</span>
          </h2>
          <div className="card-actions ">
            <Link
              to={`/productDetails/${_id}`}
              className="btn w-full linear-btn font-semibold"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCards;

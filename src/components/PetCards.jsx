import React from "react";
import { BiCategory, BiDollarCircle } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { FaMapLocation } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { TbCoinTaka, TbListDetails } from "react-icons/tb";
import { Link } from "react-router";

const PetCards = ({ data }) => {
  console.log(data);
  const { name, Price, category, location, image, _id, description, date } =
    data;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm h-100 border border-blue-100">
        <figure className="h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2 className="">
            Description : <span className="linear-text">{description}</span>
          </h2>

          <div className="flex justify-between text-sm">
            <div>
              <h2 className="flex gap-1 items-center">
                <IoLocationOutline size={17}/>:{" "}
                <span className="linear-text">{location}</span>
              </h2>
              <h2 className="flex gap-1 items-center">
                <TbCoinTaka size={17}/>: <span className="linear-text">{Price}</span>
              </h2>
            </div>
            <div>
              {" "}
              <h2 className="flex gap-1 items-center">
                <BsCalendarDate size={17} />: <span className="linear-text">{date}</span>
              </h2>
              <h2 className="flex gap-1 items-center">
                <BiCategory size={17}/>: <span className="linear-text">{category}</span>
              </h2>
            </div>
          </div>

          <div className="card-actions ">
            {/* /productDetails/${_id} */}
            <Link
              to={`/petDetails/${_id}`}
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

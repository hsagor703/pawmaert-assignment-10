import React, { use } from "react";
import PetCards from "../components/PetCards";

const promise = fetch("http://localhost:3000/allListing").then((res) =>
  res.json()
);
const PetSupplies = () => {
  const allListing = use(promise);
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold my-10 text-center blue-text ">
        All <span className="linear-text">Products</span> (
        {allListing.length})
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
        {allListing.map((data) => (
          <PetCards key={data._id} data={data}></PetCards>
        ))}
      </div>
    </div>
  );
};

export default PetSupplies;

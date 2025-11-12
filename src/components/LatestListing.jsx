import React, { use } from "react";
import { Link } from "react-router";
import PetCards from "./PetCards";

const fetchPromise = fetch('http://localhost:3000/latestList').then(res => res.json())
const LatestListing = () => {
    const latestAllData = use(fetchPromise) 
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold mb-15 text-center blue-text ">Latest <span className="linear-text">Products</span> ({latestAllData.length})</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-5 md:px-0">
        {latestAllData.map((data) => <PetCards key={data._id} data={data}></PetCards>)}
      </div>
      <Link to='/pet-supplies' className="btn linear-btn my-10  mx-auto grid w-25">Show All</Link>
    </div>
  );
};

export default LatestListing ;

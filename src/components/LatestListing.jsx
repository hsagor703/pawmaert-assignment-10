import React, { use, useEffect } from "react";
import { Link } from "react-router";
import PetCards from "./PetCards";
import Aos from "aos";
import "aos/dist/aos.css";

const fetchPromise = fetch(
  "https://pawmaert-assignment-10-server.vercel.app/latestList"
).then((res) => res.json());
const LatestListing = () => {
  const latestAllData = use(fetchPromise);
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      offset: 120,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-15 text-center ">
        Latest <span className="linear-text">Products</span> (
        {latestAllData.length})
      </h1>
      <div
        data-aos="fade-up"
        className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 px-5 md:px-0"
      >
        {latestAllData.map((data) => (
          <PetCards key={data._id} data={data}></PetCards>
        ))}
      </div>
      <Link
        to="/pet-supplies"
        className="btn linear-btn my-10  mx-auto grid w-25"
      >
        Show All
      </Link>
    </div>
  );
};

export default LatestListing;

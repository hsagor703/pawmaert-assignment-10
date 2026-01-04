import React, { use, useEffect, useState } from "react";
import PetCards from "../components/PetCards";
import Aos from "aos";
import "aos/dist/aos.css";
const promise = fetch(
  "https://pawmaert-assignment-10-server.vercel.app/allListing"
).then((res) => res.json());
const PetSupplies = () => {
  const allListing = use(promise);
  const [search, setSearch] = useState(allListing);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      offset: 120,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    fetch(
      `https://pawmaert-assignment-10-server.vercel.app/search?search=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearch(data);
      });
  };

  const handleFilter = (e) => {
    const filter = e.target.value;
    fetch(
      `https://pawmaert-assignment-10-server.vercel.app/filter?filter=${filter}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearch(data);
      });
  };

  return (
    <div className="container mx-auto pb-15 pt-30">
      <h1 className="text-3xl font-bold  text-center  ">
        All <span className="linear-text">Products</span> ({search.length})
      </h1>

      <div className="justify-between flex gap-3 px-5 md:px-0">
        <form
          onSubmit={handleSearch}
          className="join mb-5 border border-[#045B98] rounded-sm"
        >
          <div>
            <label className="input join-item">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="text" name="search" placeholder="search by name" />
            </label>
          </div>
          <button className="btn join-item border-l bg-[#045B98] text-white">
            Search
          </button>
        </form>

        <select
          onChange={handleFilter}
          defaultValue="Filter By Category"
          className="select border-[#045B98] "
        >
          <option disabled>Filter By Category</option>
          <option className="linear-text">Pets</option>
          <option className="linear-text">Pet Food</option>
          <option className="linear-text">Accessories</option>
          <option className="linear-text">Pet Care Products</option>
        </select>
      </div>

      {search.length === 0 && (
        <>
          <div className="flex flex-col items-center justify-center bg-gray-100 text-center p-4 mb-5">
            <h2 className="text-3xl font-semibold mt-4 text-gray-800">
              No Data Found
            </h2>
            <p className="text-gray-600 mt-2 max-w-md">
              Oops! The data you’re looking for doesn’t exist or may have been
              moved.
            </p>

            <button className="mt-6 btn border border-[#053345] linear-text rounded-lg transition duration-200">
              Re-Search again
            </button>
          </div>
        </>
      )}

      <div
        data-aos="fade-up"
        className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 px-5 md:px-0"
      >
        {search.map((data) => (
          <PetCards key={data._id} data={data}></PetCards>
        ))}
      </div>
    </div>
  );
};

export default PetSupplies;

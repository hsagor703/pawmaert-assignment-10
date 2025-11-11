import React, { use, useState } from "react";
import PetCards from "../components/PetCards";

const promise = fetch("http://localhost:3000/allListing").then((res) =>
  res.json()
);
const PetSupplies = () => {
  const allListing = use(promise);
  const [search, setSearch] = useState(allListing);


  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    console.log("search successfully", search);
    fetch(`http://localhost:3000/search?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearch(data);
      });
  };

  const handleFilter = (e) => {
    const filter = e.target.value;
    fetch(`http://localhost:3000/filter?filter=${filter}`).then(res => res.json()).then(data => {
      console.log(data);
      setSearch(data)
    })
  }
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold my-15 text-center blue-text ">
        All <span className="linear-text">Products</span> ({search.length})
      </h1>

      <div className="justify-between flex">
        <form onSubmit={handleSearch} className="join mb-5">
          <div>
            <label className="input input-info join-item">
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
              <input
                type="text"
                name="search"
                placeholder="search by name"
              />
            </label>
          </div>
          <button className="btn join-item linear-btn ">Search</button>
        </form>

        <select onChange={handleFilter} defaultValue="Filter By Category" className="select select-info border-linear-text ">
          <option disabled >Filter By Category</option>
          <option className="linear-text">Pets</option>
          <option className="linear-text">Pet Food</option>
          <option className="linear-text">Accessories</option>
          <option className="linear-text">Pet Care Products</option>
        </select>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
        {search.map((data) => (
          <PetCards key={data._id} data={data}></PetCards>
        ))}
      </div>
    </div>
  );
};

export default PetSupplies;

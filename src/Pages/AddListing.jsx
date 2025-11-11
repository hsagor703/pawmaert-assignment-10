import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AddListing = () => {
  const { user } = use(AuthContext);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const handleCategoryChange = (e) => {
    const selectCategory = e.target.value;
    setCategory(selectCategory);
    if (selectCategory === "Pets") {
      setPrice(0);
    } else {
      setPrice("");
    }
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const category = e.target.category.value;
    const Price = e.target.price.value;
    const location = e.target.location.value;
    const description = e.target.textarea.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const date = new Date();
    console.log(name, category, Price, location, description, image, email, date);
  };
  
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleAdd} className="card-body">
              <h1 className="text-2xl font-bold text-center">
                Add New Listing
              </h1>

              <fieldset className="space-y-1">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                  name="name"
                  required
                />

                <label className="label">Category</label>
                <select
                  onChange={handleCategoryChange}
                  //   defaultValue={model.category}
                  name="category"
                  required
                  className="select appearance-none"
                >
                  <option disabled>choose category</option>
                  <option>Foods</option>
                  <option>Accessories</option>
                  <option>Pets</option>
                  <option>Care Products</option>
                </select>

                <label className="label">price</label>
                <input
                  onChange={handlePrice}
                  type="number"
                  value={price}
                  name="price"
                  placeholder="your price here"
                  required
                  readOnly={category === "Pets"}
                  className="input"
                ></input>

                <label className="label">Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="your location here"
                  required
                  className="input"
                ></input>

                <label className="label">Description</label>
                <textarea
                  placeholder="Enter Description"
                  name="textarea"
                  rows="6"
                  required
                  className="textarea border-[#045B98]"
                ></textarea>

                <label className="label">image URL</label>
                <input
                  type="text"
                  className="input"
                  placeholder="image_url"
                  name="image"
                  required
                />

                <label className="label">Date</label>
                <input
                  type="text"
                  name="date"
                  required
                  placeholder="Date(Pick Up)"
                  className="input"
                ></input>

                <label className="label">Email</label>
                <input
                  defaultValue={user.email}
                  name="email"
                  readOnly
                  className="input"
                ></input>

                <button className="btn w-full my-2 linear-btn">Add</button>
                <div className="flex items-center gap-5 justify-center">
                  <div className="h-px w-1/2 bg-white/30"></div>
                  <p className="mb-2 text-white/70">or</p>
                  <div className="h-px w-1/2 bg-white/30"></div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddListing;

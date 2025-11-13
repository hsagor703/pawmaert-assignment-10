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
    const date = e.target.date.value;

    const data = {
      name,
      category,
      Price,
      location,
      description,
      image,
      email,
      date,
    };


    fetch("http://localhost:3000/allListing", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-[#045b9520] py-10">
      <div
        className="card bg-[#045b9510]
      shrink-0 shadow-2xl md:w-130 md:mx-auto  mx-5"
      >
        <form onSubmit={handleAdd} className="card-body ">
          <h1 className="text-2xl font-bold text-center linear-text">
            Add New Listing
          </h1>

          <fieldset className="space-y-1 ">
            <label className="label">Name</label>
            <br />
            <input
              type="text"
              className="input w-full bg-[#045b9520]"
              placeholder="Name"
              name="name"
              required
            />{" "}
            <br />
            <label className="label">Category</label>
            <br />
            <select
              onChange={handleCategoryChange}
              //   defaultValue={model.category}
              name="category"
              required
              className="select appearance-none w-full bg-[#045b9520]"
            >
              <option disabled>choose category</option>
              <option>Foods</option>
              <option>Accessories</option>
              <option>Pets</option>
              <option>Care Products</option>
            </select>
            <br />
            <label className="label">price</label>
            <br />
            <input
              onChange={handlePrice}
              type="number"
              value={price}
              name="price"
              placeholder="your price here"
              required
              readOnly={category === "Pets"}
              className="input w-full bg-[#045b9520]"
            ></input>
            <br />
            <label className="label">Location</label>
            <br />
            <input
              type="text"
              name="location"
              placeholder="your location here"
              required
              className="input w-full bg-[#045b9520]"
            ></input>
            <br />
            <label className="label">Description</label>
            <br />
            <textarea
              placeholder="Enter Description"
              name="textarea"
              rows="6"
              required
              className="textarea w-full bg-[#045b9520] border-[#045B98]"
            ></textarea>
            <br />
            <label className="label">image URL</label>
            <br />
            <input
              type="text"
              className="input w-full bg-[#045b9520]"
              placeholder="image_url"
              name="image"
              required
            />
            <br />
            <label className="label">Date</label>
            <br />
            <input
              type="text"
              name="date"
              defaultValue={new Date().toLocaleDateString().split("/").reverse().join("-")}
              required
              placeholder="Date(Pick Up)"
              className="input w-full bg-[#045b9520]"
            ></input>
            <br />
            <label className="label">Email</label>
            <br />
            <input
              defaultValue={user.email}
              name="email"
              readOnly
              className="input w-full bg-[#045b9520]"
            ></input>
            <br />
            <button className="btn w-full my-2 linear-btn">Add</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddListing;

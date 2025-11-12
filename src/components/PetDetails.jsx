import React, { use, useRef } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const promise = fetch("http://localhost:3000/allListing").then((res) =>
  res.json()
);

const PetDetails = () => {
  const details = use(promise);
  const { id } = useParams();
  const {user} = use(AuthContext);
  const modalRef = useRef(null);
  const pet = details.find((data) => data._id === id);

  const handleOrder = () => {
    modalRef.current.showModal();
  };

  return (
    <div>
      <section className="py-12 bg-gray-50 p-5">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden md:flex items-center">
          <div className="">
            <img
              src={pet.image}
              alt={pet.name}
              className="w-full h-100 object-cover"
            />
          </div>

          <div className="p-8 space-y-3">
            <h2 className="text-3xl font-bold text-gray-800 ">{pet.name}</h2>
            <p className="font-semibold text-gray-700 ">
              Category: <span className="linear-text">{pet.category}</span>
            </p>

            <p className="text-gray-700">
              <span className="font-semibold">Description:</span>{" "}
              {pet.description}
            </p>

            <div className="  gap-4 text-gray-700 space-y-3">
              <p>
                <span className="font-semibold">Owner’s Email:</span>{" "}
                {pet.email}
              </p>
              <p>
                <span className="font-semibold">Location:</span> {pet.location}
              </p>
              <p>
                <span className="font-semibold">Price: </span>
                <span
                  className={
                    pet.Price === 0
                      ? "text-green-600 font-semibold"
                      : "text-blue-600 font-semibold"
                  }
                >
                  {pet.Price}
                </span>
              </p>
            </div>

            <div className=" flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleOrder}
                className="linear-btn btn rounded-full transition"
              >
                Order Now
              </button>
              <Link
                to={"/pet-supplies"}
                className="btn rounded-full transition linear-text border-[#065C99]"
              >
                <IoMdArrowRoundBack />
                Back to Listings
              </Link>

              {/* Open the modal using document.getElementById('ID').showModal() method */}
              {/* <button
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                open modal
              </button> */}
              <dialog
                ref={modalRef}
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form
                          onSubmit={"handleUpdateProduct"}
                          className="card-body"
                        >
                          <h1 className="text-2xl font-bold text-center">
                            Order <span className="linear-text">Info</span>
                          </h1>

                          <fieldset className="space-y-1">
                            <label className="label">Buyer Name</label>
                            <input
                              type="text"
                              defaultValue={user.displayName}
                              className="input"
                              placeholder="Name"
                              name="name"
                              required
                              readOnly
                            />

                            <label className="label">Email</label>
                            <input
                              type="text"
                              defaultValue={user.email}
                              className="input"
                              placeholder="Email"
                              name="email"
                              readOnly
                              required
                            />

                            <label className="label">Product Id</label>
                            <input
                              type="text"
                              defaultValue={pet._id}
                              className="input"
                              placeholder="Product Id"
                              name="productId"
                              required
                              readOnly
                            />

                            <label className="label">Product Name</label>
                            <input
                              type="text"
                              defaultValue={pet.name}
                              className="input"
                              placeholder="Product Name"
                              name="productName"
                              required
                              readOnly
                            />

                            <label className="label">Product Quantity</label>
                            <input
                              type="text"
                              // defaultValue={pet.name}
                              className="input"
                              placeholder="Product Quantity"
                              name="productQuantity"
                              required
                              readOnly
                            />

                            <label className="label">Product Price</label>
                            <input
                              type="text"
                              defaultValue={pet.Price}
                              className="input"
                              placeholder="Product Price"
                              name="productPrice"
                              required
                              readOnly
                            />

                            <label className="label">Address</label>
                            <input
                              type="text"
                              defaultValue={pet.location}
                              className="input"
                              placeholder="Address"
                              name="address"
                              required
                            />

                            <label className="label">Date</label>
                            <input
                              type="text"
                              defaultValue={new Date()}
                              className="input"
                              placeholder="Date (pick up)"
                              name="date"
                              required
                            />

                            <label className="label">Phone</label>
                            <input
                              type="number"
                              // defaultValue={model.name}
                              className="input"
                              placeholder="Phone Number"
                              name="phone"
                              required
                            />

                            <label className="label">Additional Note</label>
                            <textarea
                              placeholder="Enter Additional Note"
                              // defaultValue={model.description}
                              name="textarea"
                              rows="6"
                              required
                              className="textarea textarea-primary"
                            ></textarea>

                            <button className="btn w-full my-2 linear-btn">
                              Submission
                            </button>
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

                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PetDetails;

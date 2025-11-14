import React, { use, useEffect, useRef, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const promise = fetch(
  "https://pawmart-assignment-10-server.vercel.app/allListing"
).then((res) => res.json());

const PetDetails = () => {
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const details = use(promise);
  const { id } = useParams();
  const { user } = use(AuthContext);
  const modalRef = useRef(null);
  const pet = details.find((data) => data._id === id);
  useEffect(() => {
    setCategory(pet.category);
    if (category === "Pets") {
      setQuantity(1);
    } else {
      setQuantity("");
    }
  }, [pet, category]);

  const handleOrder = () => {
    modalRef.current.showModal();
  };

  const handleQuantity = (e) => {
    const quantity = e.target.value;
    setQuantity(quantity);
  };

  const handleOrderSubmission = (e) => {
    e.preventDefault();
    const productId = e.target.productId.value;
    const productName = e.target.productName.value;
    const buyerName = e.target.buyerName.value;
    const email = e.target.email.value;
    const quantity = e.target.quantity.value;
    const price = e.target.price.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const date = e.target.date.value;
    const additionalNotes = e.target.additionalNotes.value;

    const orderInfo = {
      productId,
      productName,
      buyerName,
      email,
      quantity,
      price,
      address,
      phone,
      date,
      additionalNotes,
    };

    fetch("https://pawmart-assignment-10-server.vercel.app/orderList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        modalRef.current.close();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Ordered successfully Submitted",
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
    <div>
      <section className="py-12  p-5">
        <div className="max-w-5xl mx-auto  shadow-lg rounded-2xl overflow-hidden md:flex items-center">
          <div className="">
            <img
              src={pet.image}
              alt={pet.name}
              className="w-full h-100 object-cover"
            />
          </div>

          <div className="p-8 space-y-3">
            <h2 className="text-3xl font-bold  ">{pet.name}</h2>
            <p className="font-semibold  ">
              Category: <span className="linear-text">{pet.category}</span>
            </p>

            <p className="">
              <span className="font-semibold">Description:</span>{" "}
              {pet.description}
            </p>

            <div className="  gap-4  space-y-3">
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
                      <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl">
                        <form
                          onSubmit={handleOrderSubmission}
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
                              name="buyerName"
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
                              onChange={handleQuantity}
                              type="text"
                              defaultValue={quantity}
                              className="input"
                              placeholder="Product Quantity"
                              name="quantity"
                              required
                              readOnly={category === "Pets"}
                            />

                            <label className="label">Product Price</label>
                            <input
                              type="text"
                              defaultValue={pet.Price}
                              className="input"
                              placeholder="Product Price"
                              name="price"
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
                              defaultValue={new Date()
                                .toLocaleDateString()
                                .split("/")
                                .reverse()
                                .join("-")}
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
                              name="additionalNotes"
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

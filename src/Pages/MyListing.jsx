import React, { use, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import Loading2 from "./Loading2";

const MyListing = () => {
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(true);
  const modalRef = useRef(null);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch(
      `https://pawmart-assignment-10-server.vercel.app/myListing?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setListings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      fetch(
        `https://pawmart-assignment-10-server.vercel.app/allListing/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("success fully deleted", data);
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });

            const remainingListings = listings.filter(
              (list) => list._id !== id
            );
            setListings(remainingListings);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const handleUpdate = () => {
    modalRef.current.showModal();
  };

  const handleUpdateSubmission = (e, id) => {
    e.preventDefault();
    const name = e.target.name.value;
    const category = e.target.category.value;
    const Price = e.target.price.value;
    const location = e.target.location.value;
    const updateData = {
      name,
      category,
      Price,
      location,
    };

    fetch(`https://pawmart-assignment-10-server.vercel.app/myListing/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setListings(data)
        modalRef.current.close();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Update successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        const updatedData = listings.map((list) =>
          list._id === id ? { ...list, ...updateData } : list
        );
        setListings(updatedData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className=" py-10 ">
      <div className="max-w-6xl mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-8 text-center">
          My <span className="linear-text">Listings</span>
        </h2>

        <div className="overflow-x-auto  shadow-md rounded-lg border-2 border-[#001931]">
          <table className="min-w-full border border-gray-200 text-left">
            <thead className="bg-blue-100 text-gray-700">
              <tr>
                <th className="py-3 px-4 border-b">#</th>
                <th className="py-3 px-4 border-b">Name</th>
                <th className="py-3 px-4 border-b">Category</th>
                <th className="py-3 px-4 border-b">Price</th>
                <th className="py-3 px-4 border-b">Location</th>
                <th className="py-3 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings?.map((item, index) => (
                <tr
                  key={item._id}
                  className="hover:bg-blue-300 transition duration-200"
                >
                  <td className="py-3 px-4 border-b">{index + 1}</td>
                  <td className="py-3 px-4 border-b font-medium">
                    {item.name}
                  </td>
                  <td className="py-3 px-4 border-b">{item.category}</td>
                  <td className="py-3 px-4 border-b">
                    <span
                      className={
                        item.Price === "0"
                          ? "text-green-600 font-semibold"
                          : "linear-text font-semibold"
                      }
                    >
                      {item.Price}
                    </span>
                  </td>
                  <td className="py-3 px-4 border-b">{item.location}</td>
                  <td className="py-3 px-4 border-b flex flex-wrap gap-2">
                    <button
                      onClick={() => handleUpdate(item._id)}
                      className="linear-btn px-3 rounded-full"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded-full transition"
                    >
                      Delete
                    </button>
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
                      id="my_modal_5"
                      ref={modalRef}
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        <div className="hero bg-base-200 ">
                          <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl">
                              <form
                                onSubmit={(e) =>
                                  handleUpdateSubmission(e, item._id)
                                }
                                className="card-body"
                              >
                                <h1 className="text-2xl font-bold text-center">
                                  Update
                                  <span className="linear-text"> Info</span>
                                </h1>

                                <fieldset className="space-y-1">
                                  <label className="label">Buyer Name</label>
                                  <input
                                    type="text"
                                    className="input"
                                    placeholder="Name"
                                    name="name"
                                    required
                                  />

                                  <label className="label">Category</label>
                                  <select
                                    name="category"
                                    required
                                    className="select appearance-none bg-[#045b9520]"
                                  >
                                    <option disabled>choose category</option>
                                    <option>Foods</option>
                                    <option>Accessories</option>
                                    <option>Pets</option>
                                    <option>Care Products</option>
                                  </select>

                                  <label className="label">Price</label>
                                  <input
                                    type="text"
                                    className="input"
                                    placeholder="price"
                                    name="price"
                                    required
                                  />

                                  <label className="label">Location</label>
                                  <input
                                    type="text"
                                    className="input"
                                    placeholder="Location"
                                    name="location"
                                    required
                                  />

                                  <button className="btn linear-btn w-full">
                                    Submit
                                  </button>
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {loading ? (
          <Loading2 />
        ) : (
          listings.length === 0 && (
            <p className="text-center text-gray-500 mt-6">
              No listings found. Add a pet or product to get started!
            </p>
          )
        )}
      </div>
    </section>
  );
};

export default MyListing;

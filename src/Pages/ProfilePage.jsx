import { use, useRef } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

export default function ProfilePage() {
  const { updateUserProfile, logOut, user, setUser } = use(AuthContext);
  const modalRef = useRef(null);
  // const photoURL = user?.reloadUserInfo?.photoUrl;
  console.log(user?.photoURL);
  console.log(user);
  // console.log(user?.reloadUserInfo?.photoUrl);
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "login successfully",
          icon: "success",
          draggable: true,
        });
      })
      .catch((err) => {
        Swal.fire({
          title: err.code,
          icon: "error",
          draggable: true,
        });
      });
  };

  const handleProfile = () => {
    modalRef.current.showModal();
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    updateUserProfile(name, photoUrl)
      .then(() => {
        setUser({
          ...user,
          displayName: name,
          photoURL: photoUrl,
        });
        e.target.reset();
        modalRef.current.close();
        Swal.fire({
          title: "Update successfully",
          icon: "success",
          draggable: true,
        });
      })
      .catch((err) => {
        Swal.fire({
          title: err.code,
          icon: "error",
          draggable: true,
        });
      });
  };

  return (
    <section className="min-h-screen  pt-16">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button> */}
      <dialog ref={modalRef} id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleProfileUpdate} className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Your Name"
                  name="name"
                  required
                />
                <label className="label">PhotoUrl</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Photo URL"
                  name="photoUrl"
                  required
                />

                <button className="btn btn-neutral mt-4">Submit</button>
              </form>
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

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow overflow-hidden">
          {/* Cover */}
          <div className="h-40 bg-linear-to-r from-emerald-500 to-sky-500"></div>

          {/* Profile Info */}
          <div className="relative px-6 pb-6">
            {/* Avatar */}
            <div className="-mt-16">
              {user?.reloadUserInfo?.photoUrl ? (
                <img
                  src={user?.photoURL}
                  alt="User Avatar"
                  className="w-32 h-32 rounded-full border-4 border-white shadow"
                />
              ) : (
                <img
                  src="https://i.pravatar.cc/150"
                  alt="User Avatar"
                  className="w-32 h-32 rounded-full border-4 border-white shadow"
                />
              )}
            </div>

            {/* User Info */}
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {user?.displayName}
              </h2>
              <p className="text-sm text-emerald-600">
                Pet Adopter • PawMart Member
              </p>
              <p className="text-gray-600 mt-3 max-w-xl">
                Passionate pet lover who believes every animal deserves a safe
                and loving home. Active member of the PawMart community.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-6">
              <button onClick={handleProfile} className="btn linear-btn ">
                Edit Profile
              </button>
              <button onClick={handleLogout} className="btn linear-btn">
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {[
            { label: "Pets Adopted", value: 3 },
            { label: "Listings", value: 5 },
            { label: "Orders", value: 12 },
            { label: "Wishlist", value: 8 },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center shadow"
            >
              <h3 className="text-3xl font-bold text-emerald-600">
                {stat.value}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div> */}

        {/* Account Details */}
        <div className="bg-white rounded-2xl shadow mt-10 p-6">
          <h3 className="text-xl font-semibold mb-4">Account Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-gray-500">Email</p>
              <p className="font-medium">{user?.email}</p>
            </div>

            <div>
              <p className="text-gray-500">Phone</p>
              <p className="font-medium">+880 1234 567890</p>
            </div>

            <div>
              <p className="text-gray-500">Location</p>
              <p className="font-medium">Dhaka, Bangladesh</p>
            </div>

            <div>
              <p className="text-gray-500">Member Since</p>
              <p className="font-medium">January 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

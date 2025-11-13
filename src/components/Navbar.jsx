import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/1762692019828-removebg-preview.png";
import { FaHome } from "react-icons/fa";
import { MdFormatListBulletedAdd, MdPets } from "react-icons/md";
import { PiUserListFill } from "react-icons/pi";
import { RiListOrdered2 } from "react-icons/ri";
import { LuLogIn } from "react-icons/lu";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import avatar from "../assets/avatar.png";
import { TbLogout2 } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const { logOut, user } = use(AuthContext);
  const [hover, setHover] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };
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

  const links = (
    <>
      <li>
        <NavLink to="/">
          <FaHome className="text-xl" /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/pet-supplies">
          <MdPets className="text-xl" /> Pets &amp; Supplies
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/add-listing">
              <MdFormatListBulletedAdd className="text-xl" /> Add Listing
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-listing">
              <PiUserListFill className="text-2xl" />
              My Listing
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-orders">
              <RiListOrdered2 className="text-xl" /> My Orders
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-base-300 shadow-sm">
      <div className="navbar container mx-auto  px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <div className="md:flex items-center">
            <img className="h-20" src={logo} alt="" />

            <a className="text-3xl font-bold">
              Paw
              <span className="text-[#045B98]">Mart</span>
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller mr-5"
          />

          <div
            className="relative"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <img
              className="w-13 rounded-full mr-2"
              src={user ? user?.photoURL : avatar}
              alt={user ? user.displayName : "guest"}
            />

            {hover && (
              <p className="absolute top-14 left-6 -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded-md shadow-md whitespace-nowrap">
                {user?.displayName}
              </p>
            )}
          </div>

          {user ? (
            <button onClick={handleLogout} className="btn linear-btn">
              <CiLogout className="text-md" />
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn linear-btn ">
              <LuLogIn />
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/1762692019828-removebg-preview.png";
import { FaHome } from "react-icons/fa";
import { MdFormatListBulletedAdd, MdPets } from "react-icons/md";
import { PiUserListFill } from "react-icons/pi";
import { RiListOrdered2 } from "react-icons/ri";
import { LuLogIn } from "react-icons/lu";
const Navbar = () => {
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
      {/* {user && (
        <>
          <li>
            <NavLink to="/myProducts">My Products</NavLink>
          </li>
          <li>
            <NavLink to="/myBid">My Bid</NavLink>
          </li>
          <li>
            <NavLink to="/create-product">Create Product</NavLink>
          </li>
        </>
      )} */}
    </>
  );

  return (
    <div className="bg-base-300 shadow-sm">
      <div className="navbar  container mx-auto">
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

          <div className="flex items-center">
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
          <Link to="/login" className="btn linear-btn ">
            <LuLogIn />
            Login
          </Link>
          <button onClick={"handleLogout"} className="btn linear-btn">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, signinWithGoogle } = use(AuthContext);
  const [show, setShow] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const strongPasswordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
    if (!strongPasswordPattern.test(password)) {
      return Swal.fire({
        title:
          "❌ Password must contain uppercase, lowercase, number, special character, and be at least 6 characters long.",
        icon: "error",
        draggable: true,
      });
    }
    createUser(email, password)
      .then((user) => {
        console.log(user.user);
        e.target.reset();
        Swal.fire({
          title: "register successfully",
          icon: "success",
          draggable: true,
        });
        navigate('/')

      })
      .catch((err) => {
        console.log(err.code);
        Swal.fire({
          title: err.code,
          icon: "error",
          draggable: true,
        });
      });
  };

  // signin with google
  const handleLoginWithGoogle = () => {
    signinWithGoogle()
      .then((user) => {
        console.log(user.user);
        Swal.fire({
          title: "login successfully",
          icon: "success",
          draggable: true,
        });
        navigate(`${location.state? location.state : '/'}`)
      })
      .catch((err) => {
        console.log(err.code);
        Swal.fire({
          title: err.code,
          icon: "error",
          draggable: true,
        });
      });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center linear-text mb-6">
            Sign Up
          </h1>

          {/* Signup Form */}
          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                required
                placeholder="Enter your photo URL"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type={show ? "password" : "text"}
                name="password"
                required
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute top-9 right-3"
              >
                {show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full linear-btn font-semibold py-2 rounded-lg transition duration-200"
            >
              Register
            </button>

            {/* Google */}
            <button
              type="button"
              onClick={() => handleLoginWithGoogle()}
              className="btn bg-white text-black border-[#e5e5e5] w-full mb-5"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

            {/* Already have account */}
            <p className="text-center text-sm text-gray-600 mt-3">
              Already have an account?{" "}
              <Link
                to="/login"
                className="linear-text hover:underline font-medium"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

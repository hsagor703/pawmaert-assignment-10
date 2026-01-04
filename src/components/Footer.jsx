import React from "react";
import logo from "../assets/1762692019828-removebg-preview.png";
import { FaXTwitter } from "react-icons/fa6";
// import { Link } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-cyan-950 text-blue-100
">
      <div className="footer sm:footer-horizontal  py-10 container mx-auto px-3 md:px-0 gray-text border-b border-gray-600 ">
        <div className=" items-center">
          {/* <img className="h-10" src={logo} alt="logo" /> */}
          <div className="flex items-center">
            <img className="h-10 " src={logo} alt="" />

            <a className="text-2xl font-bold text-white">
              Paw
              <span className="text-[#126aa8]">Mart</span>
            </a>
          </div>
          <p className="md:w-88">
            PawMart connects local pet owners and buyers for adoption and pet
            care products.
          </p>
        </div>

        <div>
          <h6 className="white-text">Home</h6>
          <a className="link link-hover">All Products</a>
          <a className="link link-hover">DashBoard</a>
          <a className="link link-hover">Login</a>
          <a className="link link-hover">Register</a>
        </div>

        <div>
          <h6 className="white-text">PawMart Terms & Conditions</h6>
          <h1 className="link link-hover md:w-60">
            By using PawMart, you agree to share accurate info and use our
            platform responsibly. PawMart isn’t responsible for disputes,
            product issues, or adoption problems. We respect your privacy and
            may update these terms anytime.
          </h1>
        </div>

        <div>
          <h6 className="white-text">Contact Information</h6>
          <a className="link link-hover">✉ Email: support@yourwebsite.com</a>
          <a className="link link-hover"> 📞 Phone: +880 1700-123456</a>
          <a className="link link-hover">
            👁‍🗨 Address: 123 Green Street, Dhaka, Bangladesh
          </a>
        </div>

        <div>
          <h6 className="white-text">Social</h6>
          <div className="grid grid-flow-col gap-4 items-center">
            <a href="https://x.com" target="blank">
              <FaXTwitter />
            </a>
            <a href="https://www.youtube.com" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-[#FF0000]"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-[#1877F2]"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <a className=" gray-text flex justify-center py-7">
          © 2025 PawMart. All rights reserved..
        </a>
      </div>
    </footer>
  );
};

export default Footer;

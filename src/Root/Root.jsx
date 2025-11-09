import React from "react";
import Home from "../Pages/Home";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="">
      <header>
        <nav>
            <Navbar></Navbar>
        </nav>
      </header>

      <main className="min-h-[calc(100vh-430px)]">
        <Outlet />
      </main>

      <footer className="">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;

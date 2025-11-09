import React from "react";
import Home from "../Pages/Home";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div>
      <header>
        <nav>
            <Navbar></Navbar>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
};

export default Root;

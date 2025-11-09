// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

const Slider = () => {
//   useEffect(() => {
//     AOS.init(); // 👈 AOS ready!
//   }, [])
  return (
    <div  className="mt-15 mb-12">
      <div className="carousel w-full h-80 mb-5 ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.postimg.cc/4y52ZzbX/360-F-390123053-d-Ldh2Ygg-DNr-XYl-GP9Og-BGf-Td-Iw-UKU2Hx.jpg"
            className="w-full rounded-xl relative"
          />
         <h1 className="absolute left-70 top-37 text-6xl text-[#045B9880] font-bold">Find Your Furry Friend Today!</h1>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.postimg.cc/Gt7tZ5NL/animal-shelter-linkedin-banner-free-editor-template.jpg"
            alt="title"
            className="w-full rounded-xl"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.postimg.cc/bv9z75Dx/360-F-481320874-0y-Sypk-Y4m-ZYl4j-Em-COGXMb-Pg-Vhocmw2t.jpg"
            className="w-full rounded-xl"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.postimg.cc/kGz9N3zv/istockphoto-1131381748-612x612.jpg"
            className="w-full rounded-xl"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

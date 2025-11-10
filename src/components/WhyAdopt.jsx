import React from "react";

const WhyAdopt = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Why Adopt from <span className="linear-text">PawMart?</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Every year, countless loving pets wait for a second chance at life.
          When you adopt from{" "}
          <span className="font-semibold linear-text">PawMart</span>, you’re
          not just giving a home — you’re saving a life. Our mission is to
          connect kind-hearted people with animals in need, spreading love,
          care, and happiness to both families and furry friends. Adopt, don’t
          shop — because every pet deserves love and a forever home.
        </p>

        <button className="mt-8 linear-btn text-white px-6 py-3 rounded-full font-medium transition">
          Start Your Adoption Journey
        </button>
      </div>
    </section>
  );
};

export default WhyAdopt;

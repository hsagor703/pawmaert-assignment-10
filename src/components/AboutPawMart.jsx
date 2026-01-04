import { Link } from "react-router";
import logo from "../assets/1762692019828-removebg-preview.png";

export default function AboutPawMart() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 " />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl justify-center font-bold mb-4 flex items-center">
            About{" "}
            <Link to={"/"} className="flex items-center">
              <img className="h-10" src={logo} alt="" />

              <a className="text-2xl font-bold">
                Paw
                <span className="text-[#045B98]">Mart</span>
              </a>
            </Link>
          </h2>
          <p className=" text-lg">
            A community-driven platform connecting pet lovers, trusted sellers,
            and responsible adopters in one place.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className=" text-lg leading-relaxed">
              <strong className="text-2xl font-bold">
                Paw
                <span className="text-[#045B98]">Mart</span>
              </strong>{" "}
              is built for people who care deeply about pets. We bring together
              pet owners, breeders, and pet shops to create a safe and
              transparent marketplace for pet adoption and pet-related products.
            </p>

            <p className=" text-lg leading-relaxed">
              From finding a loving home for a pet to purchasing everyday
              essentials like food, toys, and accessories, PawMart makes the
              process smooth, ethical, and trustworthy.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                🐶 Pet Adoption
              </span>
              <span className="px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">
                🛍️ Pet Marketplace
              </span>
              <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                💬 Direct Contact
              </span>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Community First",
                desc: "Built around trust, care, and responsible pet ownership.",
                color: "from-emerald-100 to-emerald-50",
              },
              {
                title: "Easy & Secure",
                desc: "Browse listings, chat, and order with confidence.",
                color: "from-sky-100 to-sky-50",
              },
              {
                title: "Verified Sellers",
                desc: "Connect with trusted breeders and pet shops.",
                color: "from-indigo-100 to-indigo-50",
              },
              {
                title: "Pet-Lover Friendly",
                desc: "Designed for humans who truly love animals.",
                color: "from-pink-100 to-pink-50",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 bg-linear-to-br ${item.color} shadow-sm hover:shadow-md transition`}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

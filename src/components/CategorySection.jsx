import { Link } from "react-router";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const categories = [
  {
    name: "Pets",
    icon: "🐾",
    description: "Find adorable pets ready for a loving home.",
  },
  {
    name: "Pet Food",
    icon: "🍖",
    description: "Nutritious food and treats to keep your pets healthy.",
  },
  {
    name: "Accessories",
    icon: "🎽",
    description: "Collars, toys, beds, and all your pet essentials.",
  },
  {
    name: "Pet Care Products",
    icon: "🧴",
    description: "Shampoos, brushes, and grooming supplies for pet care.",
  },
];

const CategorySection = () => {
  useEffect(() => {
        Aos.init({
          duration: 1000, 
          once: false, 
          offset: 120, 
          easing: "ease-in-out", 
          delay: 100,
        });
      }, []);
  
  return (
    <section className="py-12 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Explore Our Categories
        </h2>

        <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <Link to={`/productListing/${cat.name}`}
              onClick={'handleFilter'}
              key={index}
              className="bg-blue-200 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="text-5xl mb-4">{cat.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                {cat.name}
              </h3>
              <p className="text-gray-500 text-sm">{cat.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

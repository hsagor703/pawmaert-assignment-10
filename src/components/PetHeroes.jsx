// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
const PetHeroes = () => {
  const vets = [
    {
      id: 1,
      name: "Dr. Ayesha Rahman",
      specialty: "Veterinary Surgeon",
      experience: "8+ Years Experience",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 2,
      name: "Dr. Rafiul Hasan",
      specialty: "Animal Nutrition Specialist",
      experience: "6+ Years Experience",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Dr. Tasnim Akter",
      specialty: "Pet Behavior Consultant",
      experience: "5+ Years Experience",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      name: "Dr. Anisur Rahman",
      specialty: "Exotic Animal Specialist",
      experience: "7+ Years Experience",
      img: "https://randomuser.me/api/portraits/men/60.jpg",
    },
  ];
  //   useEffect(() => {
  //     Aos.init({
  //       duration: 1000,
  //       once: false,
  //       offset: 120,
  //       easing: "ease-in-out",
  //       delay: 100,
  //     });
  //   }, []);
  return (
    <section className="py-12 bg-base-200 mb-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          🩺 Meet Our <span className="linear-text">Pet Heroes</span>
        </h2>
        <p className="text-gray-500 mb-8">
          Dedicated professionals ensuring the best care for your beloved pets.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {vets.map((vet) => (
            <div
              data-aos="fade-up"
              key={vet.id}
              className="card bg-base-200 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <figure className="pt-4">
                <img
                  src={vet.img}
                  alt={vet.name}
                  className="w-28 h-28 rounded-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-lg font-semibold linear-text">
                  {vet.name}
                </h3>
                <p className="text-gray-600 text-sm">{vet.specialty}</p>
                <p className="text-gray-500 text-xs mb-3">{vet.experience}</p>
                <div className="card-actions">
                  <button className="btn linear-btn btn-sm">Contact</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetHeroes;

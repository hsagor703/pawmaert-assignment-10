export function Highlights() {
  const items = [
    { title: "Trusted Adoption", desc: "Responsible pet listings from verified owners and breeders." },
    { title: "Pet Marketplace", desc: "Food, toys, and accessories from trusted pet shops." },
    { title: "Direct Contact", desc: "Chat directly with sellers and adopters." },
    { title: "Community Driven", desc: "Built for pet lovers, by pet lovers." },
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto md:px-0 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">✨ Highlights</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="p-6 bg-base-200 border border-gray-300 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

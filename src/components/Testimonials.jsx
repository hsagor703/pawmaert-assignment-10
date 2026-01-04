export function Testimonials() {
  const reviews = [
    {
      name: "Arafat Hossain",
      role: "Pet Adopter",
      text: "PawMart helped me find my puppy easily and safely. Amazing experience!",
    },
    {
      name: "Nusrat Jahan",
      role: "Pet Shop Owner",
      text: "Managing products and orders is super easy. Highly recommended.",
    },
    {
      name: "Rafi Ahmed",
      role: "Pet Lover",
      text: "A trustworthy platform that truly cares about pets.",
    },
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto md:px-0 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">💬 Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-base-200 border border-gray-300 p-6 rounded-2xl shadow">
              <p className="text-gray-700 mb-4">“{r.text}”</p>
              <h4 className="font-semibold">{r.name}</h4>
              <span className="text-sm text-gray-500">{r.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

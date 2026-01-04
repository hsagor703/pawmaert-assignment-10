export function Statistics() {
  const stats = [
    { value: "5K+", label: "Pets Adopted" },
    { value: "2K+", label: "Active Sellers" },
    { value: "10K+", label: "Happy Users" },
    { value: "1K+", label: "Pet Products" },
    { value: "10K+", label: "Join People" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto md:px-0 px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">📊 Our Impact</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-base-200 border border-gray-300 p-4 rounded-xl">
              <h3 className="text-4xl font-bold text-blue-600">{stat.value}</h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

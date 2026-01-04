export function CTA() {
  return (
    // bg-linear-to-r from-emerald-600 to-sky-600 text-white
    <section className="py-20 container mx-auto text-center">
      <div className=" bg-base-200 border border-gray-300 py-20 rounded-xl container mx-auto md:px-0 px-4">
        <h2 className="text-4xl font-bold mb-6">
          Join the PawMart Community 🐾
        </h2>
        <p className="mb-8 text-lg">
          Adopt pets responsibly or grow your pet business with PawMart today.
        </p>

        <div className="flex justify-center gap-4">
          <button className="btn linear-btn">
            Get Started
          </button>
          <button className="btn linear-btn">
            Browse Pets
          </button>
        </div>
      </div>
    </section>
  );
}

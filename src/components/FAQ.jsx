export function FAQ() {
  const faqs = [
    { q: "Is PawMart free to use?", a: "Yes, browsing and pet adoption listings are free." },
    { q: "Can I sell pet products?", a: "Yes, verified shops and sellers can list products." },
    { q: "How do I contact a seller?", a: "You can directly message them through the platform." },
    { q: "Is pet adoption safe?", a: "We promote responsible adoption and verified listings." },
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-4xl  mx-auto md:px-0 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">❓ FAQ</h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-300 rounded-xl bg-base-200 p-5">
              <h3 className="font-semibold">{faq.q}</h3>
              <p className="text-gray-600 mt-2">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

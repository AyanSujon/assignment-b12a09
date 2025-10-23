import React from 'react';

const Testimonials = () => {
 const items = [
    {
      id: 1,
      name: "Jessie Carter",
      role: "Game Developer",
      text: "GameHub helped our small studio get discovered by players who actually loved our style. The feedback loop is excellent.",
    },
    {
      id: 2,
      name: "Marcus Lee",
      role: "Gamer",
      text: "I found two favorites on GameHub last month. Clean layout, honest info, and quick download links — love it.",
    },
  ];

  return (
    <section className="py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h4 className="text-xl text-primary font-semibold mb-6">What people say</h4>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((t) => (
            <div key={t.id} className="bg-gray-800 rounded-2xl p-6">
              <p className="text-gray-300">“{t.text}”</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-semibold">
                  {t.name.split(" ").map(n => n[0]).slice(0,2).join("")}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
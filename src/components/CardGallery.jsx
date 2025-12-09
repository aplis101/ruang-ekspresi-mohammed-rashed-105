import React from "react";

export default function CardGallery() {
  const items = [
    { title: "Ekspresi 1", desc: "Karya visual modern." },
    { title: "Ekspresi 2", desc: "Seni dan ide kreatif." },
    { title: "Ekspresi 3", desc: "Desain unik dan ekspresif." },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {items.map((item, i) => (
        <div key={i} className="p-6 border rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.desc}</p>
        </div>
      ))}
    </section>
  );
}

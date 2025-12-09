import React from "react";
import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";

export default function Testimonials() {
  const testimonials = [
    {
      img: member1,
      name: "Ali Hassan",
      role: "UI/UX Student",
      text: "Program ini sangat membantu saya memahami arah karir saya. Mentornya ramah dan proyeknya membuat saya lebih percaya diri!",
    },
    {
      img: member2,
      name: "Sara Ahmed",
      role: "Frontend Student",
      text: "Materinya sangat bagus dan mudah diikuti. Saya merasa berkembang sangat cepat dan mendapatkan pengalaman nyata.",
    },
    {
      img: member3,
      name: "Omar Khalid",
      role: "Backend Student",
      text: "Kualitas mentoringnya luar biasa. Saya berhasil membangun project akhir yang siap dipamerkan ke perusahaan.",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center">
          Apa Kata <span className="text-blue-600">Peserta?</span>
        </h2>

        <p className="text-center text-gray-600 mt-2 mb-10">
          Testimoni nyata dari peserta Ruang Ekspresi
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {testimonials.map((t, i) => (
            <div 
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 border border-gray-200"
            >

              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={t.img} 
                  className="w-16 h-16 rounded-full border-2 border-blue-600"
                />
                <div>
                  <p className="font-bold text-lg">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>

              <p className="text-gray-700 italic leading-relaxed">
                "{t.text}"
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

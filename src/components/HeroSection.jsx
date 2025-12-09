import React from "react";
import heroImg from "../assets/hero.jpg";

export default function HeroSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          Ruang Ekspresi  
          <span className="text-blue-600 block">Kreativitas Tanpa Batas</span>
        </h1>

        <p className="text-gray-700 mt-4 leading-relaxed">
          Program pembelajaran inovatif yang membantu siswa mengembangkan keterampilan,
          membangun portofolio, dan menemukan arah karir mereka melalui proyek nyata
          dan mentoring ahli.
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Mulai Sekarang
        </button>
      </div>

      <div className="flex justify-center lg:justify-end">
        <img 
          src={heroImg}
          className="w-full max-w-md rounded-2xl shadow-md"
        />
      </div>
    </div>
  );
}

import React from "react";
import { FiMail, FiInstagram, FiTwitter, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-blue-600">Ruang Ekspresi</h2>
          <p className="text-gray-600 mt-3 leading-relaxed">
            Program pembelajaran kreatif yang membantu siswa mengembangkan bakat,
            portofolio, dan percaya diri melalui proyek nyata dan mentoring ahli.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Navigasi</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
            <li><a href="#pilar" className="hover:text-blue-600">4 Pilar</a></li>
            <li><a href="#jadwal" className="hover:text-blue-600">Jadwal</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#testimonials" className="hover:text-blue-600">Testimonials</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Kontak</h3>

          <div className="flex items-center gap-3 text-gray-700 mb-3">
            <FiMail />
            <p>support@ruangexpresi.com</p>
          </div>

          <div className="flex items-center gap-3 text-gray-700 mb-3">
            <FiPhone />
            <p>+62 812-3456-7890</p>
          </div>

          <div className="flex items-center gap-4 mt-4 text-gray-700">
            <FiInstagram className="cursor-pointer hover:text-blue-600" size={22} />
            <FiTwitter className="cursor-pointer hover:text-blue-600" size={22} />
          </div>
        </div>

      </div>

      <div className="border-t border-gray-200 py-4 text-center text-gray-600 text-sm">
        © 2025 Ruang Ekspresi. All rights reserved.
      </div>
    </footer>
  );
}

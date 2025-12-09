import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <h1 className="text-xl font-bold text-blue-600">Ruang Ekspresi</h1>

        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#hero" className="hover:text-blue-600">Home</a>
          <a href="#pilar" className="hover:text-blue-600">4 Pilar</a>
          <a href="#jadwal" className="hover:text-blue-600">Jadwal</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-4 gap-4 text-gray-700 font-medium">
            <a href="#hero" onClick={() => setOpen(false)}>Home</a>
            <a href="#pilar" onClick={() => setOpen(false)}>4 Pilar</a>
            <a href="#jadwal" onClick={() => setOpen(false)}>Jadwal</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a>
          </div>
        </div>
      )}
    </nav>
  );
}

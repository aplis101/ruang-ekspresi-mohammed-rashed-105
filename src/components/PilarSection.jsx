import React from "react";
import { 
  FaRegLightbulb, 
  FaPaintBrush, 
  FaUsers, 
  FaHandsHelping 
} from "react-icons/fa";

export default function PilarSection() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto">

        <h2 className="text-3xl font-bold text-center">
          Empat Pilar <span className="text-blue-600">Ruang Ekspresi</span>
        </h2>

        <p className="text-center text-gray-700 mt-2 max-w-2xl mx-auto">
          komprehensif yang dirancang untuk mengembangkan potensi kreatif mahasiswa melalui pendekatan holistik
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">

          <div className="p-6 rounded-xl bg-yellow-50 border border-yellow-200 shadow-sm">
            <FaRegLightbulb size={26} className="text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ideation</h3>
            <p className="text-gray-700 text-sm">
              Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop ideation yang terarah.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-green-50 border border-green-200 shadow-sm">
            <FaPaintBrush size={26} className="text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Creation</h3>
            <p className="text-gray-700 text-sm">
              Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 shadow-sm">
            <FaUsers size={26} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-gray-700 text-sm">
              Bekerja sama dalam tim multidisiplin untuk menciptakan solusi yang komprehensif.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-pink-50 border border-pink-200 shadow-sm">
            <FaHandsHelping size={26} className="text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Guidance & Support</h3>
            <p className="text-gray-700 text-sm">
              Mendapat bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

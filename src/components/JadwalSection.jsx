import React from "react";
import { 
  FiSun, 
  FiMoon, 
  FiCalendar,
  FiMessageCircle,
  FiBookOpen,
  FiCode,
  FiUsers
} from "react-icons/fi";

export default function JadwalSection() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto">

        <h2 className="text-3xl font-bold text-center">
          Jadwal & <span className="text-blue-600">Program Kegiatan</span>
        </h2>

        <p className="text-center text-gray-700 mt-2">
          Program terstruktur yang dirancang untuk mengoptimalkan pembelajaran dan pengembangan skill
        </p>

        <div className="bg-white p-8 rounded-xl shadow-md mt-10 border border-gray-200">

          <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold mb-8">
            <FiCalendar size={20} />
            <span>Setiap Sabtu</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center mb-4">
                <FiSun size={20} className="text-blue-700" />
              </div>

              <h3 className="text-lg font-semibold text-blue-700 mb-1">
                Sesi Pagi
              </h3>

              <p className="font-bold text-gray-800">09.00 – 12.00 WIB</p>
              <p className="text-gray-600 mt-2">
                Workshop, Career Talks, dan Extra Classes intensif
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center mb-4">
                <FiMoon size={20} className="text-green-700" />
              </div>

              <h3 className="text-lg font-semibold text-green-700 mb-1">
                Sesi Sore
              </h3>

              <p className="font-bold text-gray-800">16.00 – 19.00 WIB</p>
              <p className="text-gray-600 mt-2">
                Project Work, Mentoring, dan Collaboration Session
              </p>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">

          <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl shadow-sm">
            <FiMessageCircle size={24} className="text-yellow-600 mb-3" />
            <h3 className="font-semibold">Career Talks</h3>
            <p className="text-sm text-gray-600 mt-1">
              Sesi sharing dari praktisi industri dan alumni sukses
            </p>
          </div>

          <div className="p-6 bg-green-50 border border-green-200 rounded-xl shadow-sm">
            <FiBookOpen size={24} className="text-green-600 mb-3" />
            <h3 className="font-semibold">Extra Classes</h3>
            <p className="text-sm text-gray-600 mt-1">
              Kelas tambahan skill development dan workshop teknis
            </p>
          </div>

          <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl shadow-sm">
            <FiCode size={24} className="text-blue-600 mb-3" />
            <h3 className="font-semibold">Project Work</h3>
            <p className="text-sm text-gray-600 mt-1">
              Mengerjakan project nyata dengan bimbingan mentor
            </p>
          </div>

          <div className="p-6 bg-pink-50 border border-pink-200 rounded-xl shadow-sm">
            <FiUsers size={24} className="text-pink-600 mb-3" />
            <h3 className="font-semibold">Mentoring</h3>
            <p className="text-sm text-gray-600 mt-1">
              Sesi konsultasi personal dengan mentor berpengalaman
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

import React from "react";
import projectImg from "../assets/project1.jpg";
import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const projects = [
  {
    title: "Creative Portfolio Platform",
    badge: "UI/UX Design",
    description: "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas",
    members: [
      { name: "Ali Hassan", role: "UI/UX Designer", img: member1 },
      { name: "Sara Ahmed", role: "Frontend Developer", img: member2 },
      { name: "Omar Khalid", role: "Project Manager", img: member3 }
    ],
    image: projectImg
  },
  {
    title: "Mobile Learning App",
    badge: "Mobile Development",
    description: "Aplikasi pembelajaran interaktif untuk siswa SMA dengan modul smart quiz",
    members: [
      { name: "Faris Alami", role: "Flutter Developer", img: member1 },
      { name: "Rania Yusuf", role: "UI Designer", img: member2 },
      { name: "Ziad Omar", role: "Backend Engineer", img: member3 }
    ],
    image: projectImg
  },
  {
    title: "Career Guidance Tool",
    badge: "Web App",
    description: "Sistem rekomendasi karir berbasis minat dan analisis kepribadian siswa",
    members: [
      { name: "Mazen Khalid", role: "Data Analyst", img: member1 },
      { name: "Lana Sami", role: "Research Lead", img: member2 },
      { name: "Adnan Fathi", role: "Web Developer", img: member3 }
    ],
    image: projectImg
  }
];

export default function ProjectShowcase() {
  const [index, setIndex] = React.useState(0);
  const current = projects[index];

  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <section className="w-full py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          Showcase <span className="text-blue-600">Student Projects</span>
        </h2>

        <p className="text-center text-gray-600 mt-2">
          Karya-karya inovatif yang telah dihasilkan oleh mahasiswa dalam program Ruang Ekspresi
        </p>

        <div className="mt-12 bg-white p-10 rounded-2xl shadow-md border border-gray-200 grid grid-cols-1 lg:grid-cols-2 gap-10 transition-all duration-300">
          <div>
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {current.badge}
            </div>

            <h3 className="text-2xl font-bold mb-2">{current.title}</h3>

            <p className="text-gray-600 mb-6">{current.description}</p>

            <div className="space-y-4 mb-6">
              {current.members.map((m, i) => (
                <div key={i} className="flex items-center gap-3">
                  <img src={m.img} className="w-10 h-10 rounded-full border border-gray-300" />
                  <div>
                    <p className="font-semibold">{m.name}</p>
                    <p className="text-sm text-gray-600">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
              <span>Live Demo</span>
              <FiExternalLink size={18} />
            </button>
          </div>

          <div className="flex justify-center items-center">
            <img src={current.image} className="w-full rounded-xl border-2 border-pink-300 shadow-sm" />
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="flex absolute left-5 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-md items-center justify-center hover:bg-gray-100 transition"
      >
        <FiChevronLeft size={22} />
      </button>

      <button
        onClick={next}
        className="flex absolute right-5 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-md items-center justify-center hover:bg-gray-100 transition"
      >
        <FiChevronRight size={22} />
      </button>
    </section>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/* ===================== */
/* Marquee Data */
/* ===================== */
const contactFeatures = [
  {
    id: 1,
    title: "Direct Contact",
    description:
      "คุณสามารถติดต่อผมได้โดยตรงผ่านอีเมล ผมเป็นผู้ตอบกลับด้วยตนเอง",
  },
  {
    id: 2,
    title: "Open for Collaboration",
    description: "เปิดรับการร่วมงานทั้ง Full-time, Freelance และ Project-based",
  },
  {
    id: 3,
    title: "Fast Response",
    description: "พยายามตอบกลับข้อความและอีเมลภายใน 24 ชั่วโมง",
  },
  {
    id: 4,
    title: "Tech Friendly",
    description:
      "ยินดีพูดคุยและแลกเปลี่ยนความรู้ด้าน Web และ Mobile Development",
  },
];

const duplicatedFeatures = [...contactFeatures, ...contactFeatures];

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white/90 p-6 rounded-xl shadow-lg min-w-[280px]">
      <h4 className="text-lg font-semibold text-purple-600 mb-2">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

/* ===================== */
/* Page */
/* ===================== */
export default function ContactPage() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              CONTACT ME
            </span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
            หากคุณสนใจร่วมงาน มีไอเดียโปรเจกต์ใหม่
            หรืออยากพูดคุยแลกเปลี่ยนด้านเทคโนโลยี สามารถติดต่อผมได้โดยตรง
            ผมยินดีพูดคุยครับ
          </p>
        </div>

        <div
          data-aos="fade-left"
          className="flex justify-center md:justify-end"
        >
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80"
            alt="Developer workspace"
            className="rounded-2xl shadow-2xl w-full max-w-md object-cover aspect-[4/3]"
          />
        </div>
      </section>
      {/* Marquee */}
      <section className="py-16 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-10"
            data-aos="fade-up"
          >
            Why Contact Me
          </h2>

          <div
            className="relative bg-white/60 rounded-2xl p-4 overflow-hidden shadow-xl"
            data-aos="zoom-in"
          >
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-100 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-100 to-transparent z-10" />

            <div className="overflow-hidden">
              <div className="flex gap-6 animate-marqueeLeft">
                {duplicatedFeatures.map((item, index) => (
                  <FeatureCard
                    key={`${item.id}-${index}`}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Direct Contact */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <img
            src="https://cdn.pixabay.com/photo/2018/02/08/10/22/desk-3139127_1280.jpg"
            alt="Workspace"
            className="rounded-2xl shadow-2xl w-full max-w-md object-cover aspect-video"
          />
        </div>

        <div data-aos="fade-left">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Direct Contact
          </h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            ผมเป็น Front-End และ Mobile Developer ที่สนใจการพัฒนา Web และ Mobile
            Application หากคุณมีไอเดียหรืออยากร่วมงาน
            สามารถติดต่อผมได้ตามช่องทางด้านล่าง
          </p>

          <ul className="space-y-3 text-slate-300">
            <li>
              Email: <strong>kritdaowaset@gmail.com</strong>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/kidrunner1"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                github.com/kidrunner1
              </a>
            </li>
            <li>Available for Remote and On-site Collaboration</li>
          </ul>
        </div>
      </section>
      {/* Call to Action Section */}{" "}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 text-white">
        {" "}
        <div
          className="container mx-auto px-4 text-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          {" "}
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">
            {" "}
            พร้อมที่จะเชื่อมต่อกันแล้วหรือยัง?{" "}
          </h3>{" "}
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            {" "}
            กรอกแบบฟอร์มติดต่อของเรา หรือติดต่อเราโดยตรงผ่านทางอีเมลหรือโทรศัพท์
            เราหวังว่าจะได้เชื่อมต่อกับคุณและช่วยให้ธุรกิจของคุณเติบโต.{" "}
          </p>{" "}
          <form
            action="https://formspree.io/f/xvgrkarl" // 👉 เปลี่ยนตาม Form ID ที่คุณได้ method="POST"
            className="max-w-2xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left"
          >
            {" "}
            <input
              type="text"
              name="name"
              placeholder="ชื่อของคุณ"
              required
              className="p-3 rounded-lg bg-white/90 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            />{" "}
            <input
              type="email"
              name="email"
              placeholder="อีเมลของคุณ"
              required
              className="p-3 rounded-lg bg-white/90 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            />{" "}
            <textarea
              name="message"
              placeholder="ข้อความของคุณ..."
              rows={4}
              required
              className="sm:col-span-2 p-3 rounded-lg bg-white/90 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            ></textarea>{" "}
            <button
              type="submit"
              className="sm:col-span-2 py-3 px-6 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
            >
              {" "}
              ส่งข้อความ{" "}
            </button>{" "}
          </form>{" "}
        </div>{" "}
      </section>
      {/* Footer */}
      <footer className="py-8 text-center text-sm text-slate-400 bg-slate-900">
        © {year} Krit Daowaset. All rights reserved.
      </footer>
      {/* Marquee Animation */}
      <style jsx global>{`
        @keyframes marqueeLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marqueeLeft {
          animation: marqueeLeft 30s linear infinite;
        }
      `}</style>
    </main>
  );
}

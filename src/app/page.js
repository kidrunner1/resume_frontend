"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GlobeDemo } from "./components/GitHubGlobe";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex flex-col text-white dark">
      <section className="grid grid-cols-1 md:grid-cols-[45%_55%] items-center mt-10 gap-10 px-6 sm:px-12 py-10 max-w-7xl mx-auto">

        {/* Left */}
        <div data-aos="fade-right" className="space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            HI, I&apos;M KRIT DAOWASET
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
            Front-End Developer
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-xl">
            ผมเป็น Front-End Developer ที่เชี่ยวชาญการพัฒนา Web Application
            ด้วย <span className="text-white font-medium">Next.js, React และ Modern JavaScript</span>
            <br />
            โดยเน้นประสิทธิภาพ ประสบการณ์ผู้ใช้ (UX) และโครงสร้างโค้ดที่นำไปต่อยอดได้จริง
          </p>

          <p className="text-gray-400 max-w-xl">
            สนใจงานด้าน <span className="text-white">UI/UX</span>,
            <span className="text-white"> Performance Optimization</span> และ

            พร้อมเรียนรู้เทคโนโลยีใหม่ ๆ อย่างต่อเนื่อง
          </p>
        </div>

        {/* Right */}
        <div
          className="w-full h-[300px] sm:h-[450px] md:h-[550px]"
          data-aos="fade-left"
        >
          <GlobeDemo />
        </div>

      </section>

      {/* Features Section */}
      {/* Features Section */}
      <section className="w-full py-16 md:py-20 bg-slate-800/50 dark:bg-black/30 backdrop-blur-sm mt-20">
        <div className="max-w-6xl mx-auto text-center space-y-12 px-6">

          <h2
            className="text-2xl sm:text-3xl font-bold text-white"
            data-aos="fade-up"
          >
            สิ่งที่ผมให้ความสำคัญในการทำงาน
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">

            {/* Card 1 */}
            <div
              className="bg-gray-900 p-6 rounded-xl shadow-md hover:scale-[1.02] transition"
              data-aos="zoom-in-up"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                Clean & Maintainable Code
              </h3>
              <p className="text-gray-400 leading-relaxed">
                เขียนโค้ดให้อ่านง่าย แยกโครงสร้างชัดเจน
                เพื่อให้ดูแลต่อได้ในระยะยาว และลดปัญหาในอนาคต
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-gray-900 p-6 rounded-xl shadow-md hover:scale-[1.02] transition"
              data-aos="zoom-in-up"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-400">
                Performance & User Experience
              </h3>
              <p className="text-gray-400 leading-relaxed">
                ใส่ใจเรื่องความเร็วและประสบการณ์ผู้ใช้
                เลือกใช้เทคนิคที่เหมาะสมกับแต่ละโปรเจกต์
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-gray-900 p-6 rounded-xl shadow-md hover:scale-[1.02] transition"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold mb-2 text-pink-400">
                เรียนรู้และพัฒนาอย่างต่อเนื่อง
              </h3>
              <p className="text-gray-400 leading-relaxed">
                เปิดรับเทคโนโลยีใหม่ ๆ และพัฒนาทักษะอยู่เสมอ
                เพื่อให้งานที่ออกมามีคุณภาพและทันสมัย
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

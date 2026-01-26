"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import projects from "../data/projects"

/* Image Carousel */
function ProjectImageCarousel({ images }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full max-w-[900px] aspect-[3/2] flex items-center justify-center
                      rounded-2xl bg-slate-800 text-slate-400">
        No image available
      </div>
    );
  }

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative group w-full max-w-[900px]">
      {/* Image */}
      <div className="aspect-[3/2] overflow-hidden rounded-2xl shadow-2xl">
        <img
          src={images[index]}
          alt="Project preview"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2
                       bg-black/50 text-white px-3 py-2 rounded-full
                       opacity-0 group-hover:opacity-100 transition"
            aria-label="Previous image"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2
                       bg-black/50 text-white px-3 py-2 rounded-full
                       opacity-0 group-hover:opacity-100 transition"
            aria-label="Next image"
          >
            ›
          </button>
        </>
      )}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* Project Item */
function ProjectItem({ project, reverse }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div
        className={reverse ? "md:order-2" : "md:order-1"}
        data-aos={reverse ? "fade-left" : "fade-right"}
      >
        <ProjectImageCarousel images={project.images} />
      </div>

      {/* Content */}
      <div
        className={`space-y-4 ${reverse ? "md:order-1" : "md:order-2"}`}
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <span className="text-sm uppercase tracking-wider text-purple-400 font-semibold">
          {project.category}
        </span>

        <h3 className="text-2xl sm:text-3xl font-bold">
          {project.title}
        </h3>

        <p className="text-slate-300 leading-relaxed">
          {project.description}
        </p>

        <ul className="list-disc list-inside text-slate-400 space-y-1">
          {project.details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition"
            >
              🌐 View Project
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-white/20 rounded-lg
                         text-slate-300 hover:bg-white/10 transition"
            >
              🧑‍💻 GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* Page */
export default function PortfolioPage() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white px-6 md:px-12 py-24">
      <h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-24"
        data-aos="fade-up"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          My Projects
        </span>
      </h1>

      <div className="max-w-6xl mx-auto space-y-28">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            project={project}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </main>
  );
}

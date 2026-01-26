"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const MenuIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { href: "/About", label: "ABOUT ME" },
    { href: "/Portfolio", label: "PROJECTS" },
    { href: "/Contact", label: "CONTACT" },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
      w-[92%] max-w-4xl
      rounded-full
      bg-slate-900/70 dark:bg-black/70 backdrop-blur-xl
      border border-white/10
      shadow-lg
      px-6 py-2
      transition-all duration-500
      ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
    >
      <nav className="flex items-center justify-between h-12">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg sm:text-xl font-semibold text-white tracking-tight
          hover:text-pink-400 transition"
        >
          KRIT DAOWASET
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300
              hover:text-white transition relative"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-200 hover:text-white transition"
          aria-label="Toggle menu"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${open ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-white text-sm py-1 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

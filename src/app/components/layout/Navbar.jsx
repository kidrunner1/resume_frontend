"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
      w-[94%] max-w-4xl
      rounded-full
      bg-slate-900/80 backdrop-blur-xl
      border border-white/10
      shadow-xl
      px-5 py-2
      transition-all duration-500
      ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
    >
      <nav className="flex items-center justify-between h-12">
        {/* Logo */}
        <Link
          href="/"
          className="text-base sm:text-lg font-semibold text-white tracking-tight"
        >
          KRIT DAOWASET
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-200 hover:text-white transition p-2"
          aria-label="Toggle menu"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-0 right-0 mt-3 px-4 transition-all duration-300
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-4">
          <div className="flex flex-col divide-y divide-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-center text-sm font-medium text-slate-200 hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

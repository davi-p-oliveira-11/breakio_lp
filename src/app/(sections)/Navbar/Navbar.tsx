"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navbarData } from "./navbarData"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#ffffff] text-black">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="shrink-0 cursor-pointer">
          <Image
            src={navbarData.logo.src}
            alt={navbarData.logo.alt}
            width={74}
            height={24}
            className="w-[74px] h-6"
            priority
          />
        </Link>

        {/* Center Links */}
        <ul className="hidden md:flex space-x-10">
          {navbarData.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-900 font-medium text-sm md:text-base"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href={navbarData.cta.href || "#"}
            className="bg-[#C026D3] text-white font-medium px-6 py-3 rounded-4xl hover:opacity-90"
          >
            {navbarData.cta.text}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#C026D3]"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-[#ffffff] md:hidden">
          <ul className="flex flex-col items-center gap-4 py-6 text-sm">
            {navbarData.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-[#1668E8] transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <Link
              href={navbarData.cta.href || "#"}
              className="block bg-[#C026D3] text-white font-semibold px-6 py-3 rounded-4xl transition duration-200 hover:opacity-90"
              onClick={() => setMenuOpen(false)}
            >
              {navbarData.cta.text}
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}

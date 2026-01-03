import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { trackEvent } from "../analytics/analytics";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* --------------------------------------------------
     IMPORTANT FIX:
     Always route to "/" before scrolling to section
  -------------------------------------------------- */
  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Brand */}
        <a
          href="/"
          className="text-2xl font-bold"
          onClick={() =>
            trackEvent("brand_click", { location: "navbar" })
          }
        >
          Harshan MV
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 hover:text-primary font-medium transition-colors"
              onClick={() =>
                trackEvent("nav_click", {
                  label: link.name,
                  type: "section"
                })
              }
            >
              {link.name}
            </a>
          ))}

          {/* Analytics Lab (NO highlight, as requested) */}
          <a
            href="/analytics"
            className="text-slate-600 hover:text-primary font-medium transition-colors"
            onClick={() =>
              trackEvent("nav_click", {
                label: "Analytics Lab",
                type: "external_page"
              })
            }
          >
            Analytics Lab
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-primary font-medium text-lg"
                onClick={() => {
                  trackEvent("nav_click", {
                    label: link.name,
                    type: "section",
                    device: "mobile"
                  });
                  setIsOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}

            {/* Analytics Lab (Mobile) */}
            <a
              href="/analytics"
              className="text-slate-600 hover:text-primary font-medium text-lg"
              onClick={() => {
                trackEvent("nav_click", {
                  label: "Analytics Lab",
                  type: "external_page",
                  device: "mobile"
                });
                setIsOpen(false);
              }}
            >
              Analytics Lab
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

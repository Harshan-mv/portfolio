import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExperienceEducation from "./components/ExperienceEducation";
import ContactFooter from "./components/ContactFooter";

import AnalyticsLab from "./pages/AnalyticsLab";
import Privacy from "./pages/Privacy";

export default function App() {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-slate-50">
      <Navbar />

      <Routes>
        {/* Main Portfolio */}
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <ExperienceEducation />
              <ContactFooter />
            </main>
          }
        />

        {/* Analytics System */}
        <Route path="/analytics" element={<AnalyticsLab />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </div>
  );
}

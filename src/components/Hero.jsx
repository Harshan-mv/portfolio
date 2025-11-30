import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';
import SkillSphere from "./SkillSphere";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">

          {/* LEFT - Text (2/3 area) */}
          <div className="md:col-span-2">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-medium text-sm mb-6">
              👋 Hello, I'm
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
              {PERSONAL_DETAILS.name}
            </h1>

            <h2 className="text-2xl md:text-3xl text-slate-600 mb-8 font-light">
              Full-Stack Developer & Research Enthusiast
            </h2>

            <p className="text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed">
              {PERSONAL_DETAILS.aboutHeadline}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition flex items-center shadow-lg">
                View My Work <ArrowRight className="ml-2 w-4 h-4" />
              </a>

              <a 
                href="/resume.pdf"
                download
                className="px-8 py-3 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition flex items-center shadow-sm"
              >
                Download Resume 
                <Download className="ml-2 w-4 h-4" />
              </a>

              <div className="flex items-center gap-4 ml-2">
                <a href={PERSONAL_DETAILS.github} target="_blank" className="p-3 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-primary">
                  <Github className="w-5 h-5" />
                </a>
                <a href={PERSONAL_DETAILS.linkedin} target="_blank" className="p-3 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-primary">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={`mailto:${PERSONAL_DETAILS.emails[0]}`} className="p-3 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-primary">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — Skill Sphere (1/3 area) */}
          <div className="w-full max-w-[480px] h-[420px]">

            <SkillSphere />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useEffect } from 'react';
import { PERSONAL_DETAILS } from '../constants';
import { BookOpen, Code, Server, Database, Atom, Terminal } from 'lucide-react';
import { trackEvent } from "../analytics/analytics";

const About = () => {

  useEffect(() => {
    trackEvent("section_view", {
      section: "about"
    });
  }, []);

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-wide uppercase mb-4">
              About Me
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Tech Meets{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Research
              </span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {PERSONAL_DETAILS.aboutText}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code className="w-5 h-5 text-secondary" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Full-Stack Dev</h4>
                <p className="text-sm text-slate-500">
                  MERN, REST APIs, Auth Systems
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Server className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Backend & Ops</h4>
                <p className="text-sm text-slate-500">
                  Node.js, MongoDB, CI/CD
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl shadow-sm border border-slate-100 sm:col-span-2 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5 text-pink-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Research</h4>
                <p className="text-sm text-slate-500">
                  Malware Detection, Data Analytics & Academic Writing
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative w-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-100/50 via-purple-100/50 to-blue-100/50 rounded-full blur-3xl -z-10"></div>
            <div className="grid grid-cols-2 gap-6 relative z-10 p-4">
              <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl shadow-xl shadow-green-200/50 transform translate-y-8 hover:-translate-y-2 transition-all duration-300">
                <Database className="w-12 h-12 text-white mb-3" />
                <h3 className="font-bold text-white text-xl">MongoDB</h3>
                <p className="text-emerald-100 text-xs font-medium uppercase tracking-wider">
                  Database
                </p>
              </div>

              <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl shadow-xl shadow-slate-300/50 hover:-translate-y-2 transition-all duration-300">
                <Server className="w-12 h-12 text-white mb-3" />
                <h3 className="font-bold text-white text-xl">Express</h3>
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                  Backend
                </p>
              </div>

              <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-xl shadow-blue-200/50 transform translate-y-8 hover:-translate-y-2 transition-all duration-300">
                <Atom className="w-12 h-12 text-white mb-3 animate-pulse" />
                <h3 className="font-bold text-white text-xl">React</h3>
                <p className="text-blue-100 text-xs font-medium uppercase tracking-wider">
                  Frontend
                </p>
              </div>

              <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-lime-500 to-green-600 rounded-2xl shadow-xl shadow-lime-200/50 hover:-translate-y-2 transition-all duration-300">
                <Terminal className="w-12 h-12 text-white mb-3" />
                <h3 className="font-bold text-white text-xl">Node.js</h3>
                <p className="text-lime-100 text-xs font-medium uppercase tracking-wider">
                  Runtime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

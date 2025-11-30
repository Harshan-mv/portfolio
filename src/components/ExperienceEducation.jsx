import React from 'react';
import { EDUCATION, CERTIFICATIONS, PUBLICATIONS } from '../constants';
import { Award, GraduationCap, FileText, ExternalLink } from 'lucide-react';

const ExperienceEducation = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Education Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Education</h3>
            </div>

            <div className="space-y-8 relative pl-8 border-l-2 border-slate-200">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-white border-4 border-primary"></span>
                  <h4 className="text-lg font-bold text-slate-800">{edu.degree}</h4>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <p className="text-slate-500 text-sm mt-1">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Publications + Certifications */}
          <div>

            {/* Publications */}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                <FileText size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Publications</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-12">
              {PUBLICATIONS.map((pub, idx) => (
                <div key={idx} className="border-l-4 border-secondary pl-4 py-2 mb-3">
                  <p className="text-slate-700 italic">{pub.title}</p>

                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-secondary font-medium text-sm mt-2 hover:underline"
                  >
                    View Details <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-teal-500/10 rounded-lg text-teal-600">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Certifications</h3>
            </div>

            <div className="grid gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex justify-between items-center hover:border-teal-500/30 transition-colors"
                >
                  <span className="font-medium text-slate-800">{cert.name}</span>
                  {cert.issuer && (
                    <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">
                      {cert.issuer}
                    </span>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;

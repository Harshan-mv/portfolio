import React from "react";
import { PERSONAL_DETAILS } from "../constants";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const ContactFooter = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Let's Work Together</h2>
          <p className="text-slate-300 mt-3 max-w-xl mx-auto">
            Feel free to reach out for opportunities, collaborations, or just a friendly chat.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          <a
            href={`mailto:${PERSONAL_DETAILS.emails[0]}`}
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition flex flex-col items-center text-center"
          >
            <Mail className="w-8 h-8 mb-3 text-indigo-400" />
            <p className="text-sm text-slate-300">Email</p>
            <p className="font-semibold">{PERSONAL_DETAILS.emails[0]}</p>
          </a>

          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex flex-col items-center text-center">
            <Phone className="w-8 h-8 mb-3 text-emerald-400" />
            <p className="text-sm text-slate-300">Phone</p>
            <p className="font-semibold">{PERSONAL_DETAILS.phone}</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex flex-col items-center text-center">
            <MapPin className="w-8 h-8 mb-3 text-pink-400" />
            <p className="text-sm text-slate-300">Location</p>
            <p className="font-semibold">{PERSONAL_DETAILS.location}</p>
          </div>

        </div>

        {/* Say Hello Button → Now Goes to LinkedIn */}
        <div className="text-center mb-12">
          <a
            href={PERSONAL_DETAILS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition"
          >
            Say Hello <Send className="ml-2 w-4 h-4" />
          </a>
        </div>

        {/* Social + Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-center gap-4">

          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_DETAILS.github}
              target="_blank"
              className="text-slate-300 hover:text-white transition"
            >
              <Github size={22} />
            </a>

            <a
              href={PERSONAL_DETAILS.linkedin}
              target="_blank"
              className="text-slate-300 hover:text-white transition"
            >
              <Linkedin size={22} />
            </a>

            <a
              href={PERSONAL_DETAILS.portfolio}
              target="_blank"
              className="text-slate-300 hover:text-white transition text-sm font-medium"
            >
              Portfolio
            </a>
          </div>

          <p className="text-sm text-slate-400 mt-2">
            © {new Date().getFullYear()} {PERSONAL_DETAILS.name}. All rights reserved.
          </p>

        </div>

      </div>
    </section>
  );
};

export default ContactFooter;

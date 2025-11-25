import React from "react";
import { FadeLeft, FadeRight, FadeUp } from "../animations/MotionComponents";
const About = () => {
  return (
    <div className=" About md:grid md:grid-cols-3 w-full min-h-screen bg-[#242734] text-white flex flex-col md:flex-row pt-10 md:pt-0">
      <div className="hidden md:flex justify-center items-center">
        <FadeLeft delay={0.3}>
          <div className="relative w-72 h-96 rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg shadow-black/40">
            <img
              src="Kathirvel.webp"
              alt="Kathirvel"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-60 h-60 bg-neonblue/20 blur-[120px] -z-10"></div>
          </div>
        </FadeLeft>
      </div>

      <div className="px-8 md:px-32 py-10 md:py-24 flex flex-col col-span-2">
        <FadeUp delay={0.3}>
          <h1 className="text-4xl md:text-5xl font-bold text-cream text-center md:text-left">
            About <span className="text-neonblue">Me</span>
          </h1>
        </FadeUp>

        <div className="flex justify-center mt-10 md:hidden">
          <div className="relative w-44 h-64 rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg shadow-black/40">
            <FadeUp delay={0.3}>
              <img
                src="Kathirvel.webp"
                alt="Kathirvel"
                className="w-full h-full object-cover"
              />
            </FadeUp>
            <div className="absolute w-40 h-40 bg-neonblue/20 blur-[100px] -z-10"></div>
          </div>
        </div>

        <FadeUp delay={0.3}>
          <p className="mt-10 text-white/60 leading-7 tracking-wide text-sm md:text-lg md:w-[75%] text-center md:text-left">
            Hi, I’m{" "}
            <span className="text-neonblue font-semibold">Kathirvel</span>, a
            passionate Frontend Developer with a deep love for crafting
            beautiful, responsive and purpose-driven digital experiences.
            <br />
            <br />I transform ideas into interactive interfaces where design
            meets clean, scalable code. I focus on delivering smooth user
            experiences using 
            <span className="text-cream font-semibold">
              React, Tailwind CSS, JavaScript, Node.js 
            </span>
             and more.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="mt-10 italic text-white/40 border-l-4 border-neonblue pl-4 md:w-[75%] text-center md:text-left">
            “Code is not just logic — it’s how I turn imagination into
            experience.”
          </p>
        </FadeUp>

        <div className="mt-10 grid grid-cols-2 gap-6 md:w-[75%] mx-auto md:mx-0">
          <FadeUp delay={0.3}>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
              <h3 className="text-xl font-bold text-neonblue">1+ Years</h3>
              <p className="text-white/50 text-xs md:text-sm">
                Learning & Building
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
              <h3 className="text-xl font-bold text-neonblue">5+ Projects</h3>
              <p className="text-white/50 text-xs md:text-sm">
                Learning & Building
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
              <h3 className="text-xl font-bold text-neonblue">Frontend</h3>
              <p className="text-white/50 text-xs md:text-sm">React & UI</p>
            </div>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
              <h3 className="text-xl font-bold text-neonblue">Full-Stack</h3>
              <p className="text-white/50 text-xs md:text-sm">
                End-to-end apps
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Resume Button */}
        <FadeUp delay={0.3}>
          <div className="mt-10 flex justify-center md:justify-start">
            <a
              href="/kathirvel_resume.pdf"
              className="bg-neonblue text-black font-semibold text-lg px-6 py-3 rounded-xl hover:opacity-75 w-fit"
              download
            >
              Download Resume →
            </a>
          </div>
        </FadeUp>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { video } from "framer-motion/client";
import { Link } from "react-router-dom";
const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  // If project doesn't exist
  if (!project) {
    return <div className="text-white p-20 text-3xl">Project not found ❌</div>;
  }

  return (
    <div className="w-full min-h-screen bg-[#1a1c24] text-white">
      {/* MAIN IMAGE + TITLE */}
      <div className="w-full lg:h-[70vh] relative">
        {project.mainImage && (
          <img src={project.mainImage} className="w-full h-full object-fill" />
        )}

        <div className=" inset-0 flex flex-col items-center justify-center py-5 px-5">
          <h1 className="lg:text-4xl  font-bold text-neonblue/70">
            {project.title}
          </h1>
          <p className="lg:text-lg text-xs mt-3 text-white/20">
            {project.shortDesc || "No description available."}
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <section className="lg:px-20 px-10 lg:mt-20 lg:py-16 lg:w-[60%]">
          <h2 className="lg:text-3xl font-bold text-center">Overview</h2>
          <p className="mt-4 text-white/60 leading-4 lg:leading-7 text-center text-xs lg:text-lg">
            {project.fullDesc || "Overview not provided."}
          </p>
        </section>
      </div>

      <section className="px-20 lg:py-10 py-5 flex flex-col justify-center items-center">
        <h2 className="lg:text-3xl  font-bold">Features</h2>
        <ul className="mt-4  text-white flex gap-4 ">
          {project.features?.length > 0 ? (
            project.features.map((f, index) => (
              <li key={index} className="featureslist">
                {f}
              </li>
            ))
          ) : (
            <p>No features listed.</p>
          )}
        </ul>
      </section>

      {/* TECH STACK */}
      <section className="px-20 py-10 flex flex-col justify-center items-center">
        <h2 className="lg:text-3xl font-bold">Tech Stack</h2>
        <div className="flex gap-4 mt-4 text-white/60  flex-wrap">
          {project.tech?.length > 0 ? (
            project.tech.map((t, i) => (
              <span
                key={i}
                className="bg-white/10 text-[5px] lg:text-lg lg:px-4 lg:py-2 px-2 py-1 rounded-lg hover:bg-neonblue/10"
              >
                {t}
              </span>
            ))
          ) : (
            <p>No tech stack added.</p>
          )}
        </div>
      </section>

      {/* DEMO */}
      <section className="px-20 lg:py-10 flex flex-col justify-center items-center">
        <h2 className="lg:text-3xl font-bold">Demo</h2>
        {project.videoDemo ? (
          <video controls className="mt-6 lg:w-[70%] lg:rounded-xl rounded">
            <source src={project.videoDemo} type="video/mp4" />
          </video>
        ):(
        project.liveDemo && (
          <a
            href={project.liveDemo}
            className="mt-6 inline-block bg-neonblue px-6 py-3 rounded-xl text-black font-semibold text-[5px] lg:text-lg "
          >
            Live Demo →
          </a>
        )
        )}

        {project.github && (
          <a
            href={project.github}
            className="mt-3 inline-block underline text-neonblue text-[5px] lg:text-lg "
          >
            GitHub Repository
          </a>
        )}
      </section>

      {/* SCREENSHOTS */}
      <section className="px-20 lg:py-16 flex flex-col justify-center items-center">
        <h2 className="lg:text-3xl font-bold">Screenshots</h2>

        <div className="card-selection flex  justify-center lg:mt-20 mt-10 relative w-full ">
          
          <div className="lg:w-[40%] lg:h-80 w-36 h-24 border border-white/20 rounded-xl  bg-white/5 backdrop-blur-sm z-20 overflow-hidden hover:z-20 hover:scale-105 transition-all duration-500"> 
          <img src={project.mainImage} alt={project.title} className="w-full h-full object-cover lg:p-3 p-1  rounded-3xl"/>
          </div>
          <div className="lg:w-full absolute flex lg:justify-evenly lg:px-10 ">
            
            <div className="lg:w-[40%] lg:h-80 w-36 h-24 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm lg:translate-y-20 translate-y-6 -rotate-12 overflow-hidden hover:z-20 hover:scale-105 transition-all duration-500">
            <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover lg:p-3 p-1 rounded-3xl"/>
            </div>
            <div className="lg:w-[40%] lg:h-80 w-36 h-24 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm  lg:-translate-y-5 -translate-y-2 rotate-6 overflow-hidden hover:z-20 hover:scale-105 transition-all duration-500">
            <img src={project.images[1]} alt={project.title} className="w-full h-full object-cover p-1 lg:p-3 rounded-3xl"/>
            </div>
          </div>
          
        </div>
      </section>

      <div className="px-20 py-10 flex flex-col justify-center items-center">
        <Link to={`/#projects`} className="underline text-neonblue lg:text-xl text-xs">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;

import React from "react";
import { VscVscodeInsiders } from "react-icons/vsc";
import { DiResponsive } from "react-icons/di";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaDatabase,
  FaGithub,
  FaNodeJs,
  FaPhp,
  FaCloud,
  FaFigma,
} from "react-icons/fa";
import {
  SiVsco,
  SiPostman,
  SiVercel,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  Si1001Tracklists,
  SiGithub,
  SiGit,
} from "react-icons/si";
import autoprefixer from "autoprefixer";
const Skill = () => {
  return (
    <div className="relative bg-[#242734] w-full min-h-screen  font-display flex flex-col items-center ">
      <div className=" w-full flex pt-20 flex-col items-center">
        <h1 className="md:text-6xl text-2xl text-white font-bold">
          My <span className="text-[#00c9cf] font-playful">Skills</span> & Tools
        </h1>

        <p className="md:text-sm text-[8px] text-white/40 md:pt-5 pt-2 px-5 md:px-auto text-center">
          A blend of creativity and code — bringing user interfaces to life with
          precision and passion.
        </p>
      </div>
      <div className=" w-full flex items-end justify-end gap-6 mt-2 md:mt-0 px-20">
        <div className="flex items-center gap-2 text-[8px] md:text-sm font-light mt-2">
          <span className="w-2 h-2 md:w-3 md:h-3 rounded bg-neonblue/90 shadow-lg shadow-neonblue"></span>
          <span className="text-white/60">Advance</span>
        </div>

        <div className="flex items-center gap-2 text-[8px] md:text-sm font-light">
          <span className="w-2 h-2 md:w-3 md:h-3 rounded bg-green-500 shadow-lg shadow-green-600"></span>
          <span className="text-white/60">Intermediate</span>
        </div>
      </div>

      <div className=" relative box-container w-auto grid md:grid-cols-5 grid-cols-3 md:gap-10 gap-2 gap-x-5 md:gap-x-14 mt-14   font-playful">
        <div className="boxes ">
          <FaHtml5 className="skill-icons html-icon  text-[#e34c26] " />
          <h1 className="skillname">Html5</h1>
        </div>
        <div className="boxes">
          <FaCss3 className="skill-icons css-icon fill-[#264de4]" />
          <h1 className="skillname">CSS3</h1>
          {SiMongodb}
        </div>

        <div className="boxes">
          <SiTailwindcss className="skill-icons tailwind-icon text-[#38bdf8] " />
          <h1 className="skillname">Tailwind CSS</h1>
        </div>
        <div className="boxes ">
          <FaReact className="skill-icons react-icon text-[#00d8ff]" />
          <h1 className="skillname">React.js </h1>
        </div>
        <div className="boxes hover:bg-green-500/10">
          <FaJs className="skill-icons js-icon text-[#f7df1e]" />
          <h1 className="skillname">JavaScript</h1>
        </div>
        <div className="boxes hover:bg-green-500/10">
          <FaNodeJs className="skill-icons node-icon text-[#83cd29]" />
          <h1 className="skillname">Node.js</h1>
        </div>
        <div className="boxes hover:bg-green-500/10 ">
          <SiMongodb className="skill-icons mongo-icon text-[#4db33d]" />
          <h1 className="skillname">MongoDB</h1>
        </div>
        <div className="boxes hover:bg-green-500/10">
          <SiMysql className="skill-icons mysql-icon text-[#00758f] " />
          <h1 className="skillname">MySQL</h1>
        </div>
        <div className="boxes group hover:bg-green-500/10">
          <FaCloud className="skill-icons api-icon group-hover:scale-125 group-hover:rotate-6 duration-300 text-[#4fd1c5] " />
          <h1 className="skillname">API</h1>
        </div>
      </div>

      <div className="w-[90%] h-36 items-center mt-10 grid grid-cols-4 md:flex md:flex-row justify-center md:gap-10 gap-5 md:text-lg text-[5px] text-white/60  ">
        <div className="toolbox  ">
          <SiGit className="tool-icon text-[#e34c26] " />
          <h1>Git</h1>
        </div>
        <div className="toolbox  ">
          <SiGithub className="tool-icon text-gray-400" />
          <h1>GitHub</h1>
        </div>
        <div className="toolbox  ">
          <VscVscodeInsiders className="tool-icon fill-blue-500" />
          <h1>VS Code</h1>
        </div>
        <div className="toolbox  ">
          <svg className="tool-icon" width="38" height="57" viewBox="0 0 38 57">
            <path
              d="M19 28.5c0-5.247 4.253-9.5 9.5-9.5 5.247 0 9.5 4.253 9.5 9.5 0 5.247-4.253 9.5-9.5 9.5-5.247 0-9.5-4.253-9.5-9.5z"
              fill-rule="nonzero"
              fill-opacity="1"
              fill="#1abcfe"
              stroke="none"
            ></path>
            <path
              d="M0 47.5C0 42.253 4.253 38 9.5 38H19v9.5c0 5.247-4.253 9.5-9.5 9.5C4.253 57 0 52.747 0 47.5z"
              fill-rule="nonzero"
              fill-opacity="1"
              fill="#0acf83"
              stroke="none"
            ></path>
            <path
              d="M19 0v19h9.5c5.247 0 9.5-4.253 9.5-9.5C38 4.253 33.747 0 28.5 0H19z"
              fill-rule="nonzero"
              fill-opacity="1"
              fill="#ff7262"
              stroke="none"
            ></path>
            <path
              d="M0 9.5C0 14.747 4.253 19 9.5 19H19V0H9.5C4.253 0 0 4.253 0 9.5z"
              fill-rule="nonzero"
              fill-opacity="1"
              fill="#f24e1e"
              stroke="none"
            ></path>
            <path
              d="M0 28.5C0 33.747 4.253 38 9.5 38H19V19H9.5C4.253 19 0 23.253 0 28.5z"
              fill-rule="nonzero"
              fill-opacity="1"
              fill="#a259ff"
              stroke="none"
            ></path>
          </svg>
          <h1>Figma</h1>
        </div>
        <div className="toolbox flex flex-col items-center">
          <span
            className="group relative flex items-center justify-center w-6 h-6 md:w-14 md:h-14 rounded-full bg-black hover:scale-110 transition-all duration-500"
          >
            <SiVercel
              className="vercel-icon fill-white group-hover:rotate-6 transition-all duration-500"
              size={32} // responsive icon size
            />
          </span>
          <h1 className="text-[5px] font-normal md:text-sm text-white/80">Vercel</h1>
        </div>

        <div className="toolbox  ">
          <SiPostman className="tool-icon fill-orange-500 " />
          <h1>Postman</h1>
        </div>
        <div className="toolbox  ">
          <DiResponsive className="tool-icon fill-white " />
          <h1>Responsive Design</h1>
        </div>
      </div>
    </div>
  );
};

export default Skill;

import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FadeUp } from "../animations/MotionComponents";
import { Link } from "react-scroll";
const About = () => {
  return (
    <footer className="Contact w-full bg-[#1a1c24] text-white py-10 px-10 md:px-20">
      <div className="grid md:grid-cols-3 gap-10">
        <div className="flex flex-col gap-3">
          <FadeUp delay={0.3}>
            <img src="logo.png" alt="" className="w-14 h-14" />
          </FadeUp>
          <FadeUp delay={0.3}>
            <a
              href="mailto:kathir.dev2321@gmail.com"
              className="text-neonblue flex hover:opacity-70 underline"
            >
              Contact Me
            </a>
          </FadeUp>
        </div>

        <div>
          <FadeUp delay={0.3}>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          </FadeUp>
          <FadeUp delay={0.3}>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>
                <Link
                to="Hero"
                smooth={true}
                duration={800}
                className=" cursor-pointer hover:text-neonblue">
                  Home
                </Link>
              </li>
              <li>
                <Link
                to="Skill"
                smooth={true}
                duration={600} 
                className="hover:text-neonblue">
                  Skills
                </Link>
              </li>
              <li>
                <Link
                to="Project"
                smooth={true}
                duration={600}
                 className="cursor-pointer hover:text-neonblue">
                  Projects
                </Link>
              </li>
              <li>
                <Link
                to="About"
                smooth={true}
                duration={600}
                className="cursor-pointer hover:text-neonblue">
                  About 
                </Link>
              </li>
            </ul>
          </FadeUp>
        </div>

        {/* Social Links */}
        <div>
          <FadeUp delay={0.3}>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="flex gap-5 text-2xl">
              <a href="https://github.com/Kathirvel2321" target="_blank">
                <FaGithub className="hover:text-neonblue" />
              </a>
              <a href="https://www.instagram.com/kathir.dev23/" target="_blank">
                <FaInstagram className="hover:text-neonblue" />
              </a>
              <a href="https://www.linkedin.com/in/kathir2321" target="_blank">
                <FaLinkedin className="hover:text-neonblue" />
              </a>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Bottom Section */}
      <FadeUp delay={0.3}>
        <div className="text-center mt-10 text-white/30 text-sm">
          © 2025 Kathirvel Crafted with passion & creativity
        </div>
      </FadeUp>
    </footer>
  );
};

export default About;

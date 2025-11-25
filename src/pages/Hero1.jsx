import { useEffect } from "react";
import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FadeUp,
  FadeLeft,
  FadeRight,
  ScaleIn,
  FadeInUp,
} from "../animations/MotionComponents";

const Hero1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Speed of animation
      once: false, // Animate only once
      easing: "ease-out",
      offset: 120,
    });
  }, []);
  return (
    <>
      <div className="Hero bg-[#323647] w-screen h-screen relative overflow-hidden font-display">
        <div className="  nav relative w-full flex justify-between md:px-32 md:pt-14 px-5  py-10 text-white">
          <div>
            <FadeRight delay={0.5}>
              <img
                src="/logo.png"
                alt=""
                className="sm:w-20 sm:h-20 w-10 h-10"
              />
            </FadeRight>
          </div>
          <div className=" flex lg:gap-9 md:text-2xl text-sm font-bold font-display items-center text-cream/40">
            <FadeLeft delay={0.2}>
              <Link
                to="Skill"
                smooth={true}
                duration={600}
                className="relative cursor-pointer border-b-4 rounded-sm border-transparent hover:border-[#00cacf] hover:text-cream p-2 m-0 "
              >
                Skills
              </Link>
            </FadeLeft>
            <FadeLeft delay={0.3}>
              <Link
                to="Project"
                smooth={true}
                duration={600}
                className="relative cursor-pointer border-b-4 rounded-sm border-transparent hover:border-[#00cacf] hover:text-cream p-2 m-0"
              >
                Projects
              </Link>
            </FadeLeft>
            <FadeLeft delay={0.4}>
              <Link
                to="Contact"
                smooth={true}
                duration={600}
                className="relative cursor-pointer border-b-4 rounded-sm border-transparent hover:border-[#00cacf] hover:text-cream p-2 m-0"
              >
                Contact
              </Link>
            </FadeLeft>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col w-full h-[80%] justify-center items-center">
          <div className="flex-1 lg:px-36 gap-2 lg:gap-4 flex-col lg:h-full lg:w-full flex lg:py-28 z-20  justify-end lg:justify-start ">
            <FadeRight delay={0.4}>
              <h1 className=" md:text-7xl sm:text-4xl text-sm text-cream font-bold tracking-wider  ">
                Kathirvel Paramasivan.
              </h1>
            </FadeRight>
            <span className="bar md:w-20 w-10 md:border-4 border-2 border-[#00cacf]  "></span>
            <span className="svg md:absolute lg:mt-72 flex lg:gap-4 gap-2 ">
              <FadeRight delay={0.4}>
                <a href="https://www.linkedin.com/in/kathir2321" target="_blank">
                <svg
                  className="h-4 lg:h-7 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  color={"#00c9cf"}
                  fill={"none"}
                >
                  <path
                    d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.4531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  ></path>
                </svg></a>
              </FadeRight>
              <FadeRight delay={0.4}>
                <a href="https://github.com/Kathirvel2321" target="_blank"> 
                <FaGithub className="lg:text-2xl lg:my-1 text-neonblue"></FaGithub>
                </a>
              </FadeRight>
            </span>
          </div>
          <div className="frame ">
            <div className="hidden md:block">
              <ScaleIn delay={0.3}>
                <img src="/profileimage.webp" className="profile-photo" />
              </ScaleIn>
            </div>

            <div className="block md:hidden">
              <FadeInUp delay={0.3}>
                <img src="/profileimage.webp" className="profile-photo" />
              </FadeInUp>
            </div>
          </div>
          <div className=" lg:relative h-[50%] lg:h-full flex flex-col w-full py-2 px-[73px] lg:py-5">
            <div className=" lg:absolute lg:p-20  left-[150px]">
              <FadeRight delay={0.4}>
                <p className="text-cream/40 font-serif md:text-lg text-xs ">
                  - Introduction
                </p>
              </FadeRight>
              <FadeRight delay={0.2}>
                <p className="md:text-3xl font-bold text-sm pt-5 text-cream/90">
                  Frontend Developer & Creative Web Developer
                </p>
              </FadeRight>
              <FadeRight delay={0.3}>
                <p className="md:text-sm text-xs pt-5 md:pt-12 pb-5 lg:leading-7 tracking-widest text-cream/70">
                  I’m a passionate 
                  <span className=" font-semibold">
                    Frontend Developer
                  </span>
                   and creative designer who crafts responsive, user-friendly web
                  experiences.
                </p>
              </FadeRight>
              <FadeRight delay={0.4}>
                <Link
                  to="About"
                  smooth={true}
                  duration={600}
                  className="cursor-pointer text-neonblue text-xs md:text-lg underline  font-semibold "
                >
                  My story →
                </Link>
              </FadeRight>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero1;

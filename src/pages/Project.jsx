import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import TotalProject from "./TotalProject";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FadeUp } from "../animations/MotionComponents";
const Project = () => {
  useEffect(() => {
     AOS.init({ 
      duration: 800,
      once: false, 
      easing: "ease-out", 
      offset:120, }); 
    }, []);
  return (
    <div className="Project w-full lg:h-[750px] h-[450px] bg-background-light flex flex-col items-center justify-center font-display">
      <div data-aos="fade-up" className=" text-cream">
        <h1 className="lg:text-5xl text-2xl font-bold text-center">My Projects</h1>
        <p className="lg:mt-5 mt-2 text-center lg:text-lg text-xs text-cream/50 w-96"> A collection of work crafted with creativity and precision</p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"2"}
        speed={800}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-full mt-14"
      >
        {projects.map((p) => (
          <SwiperSlide
            key={p.id}
            className="swiper"
            style={{ width: "450px", height: "450px", borderRadius:"20px"  }}
          >
            <FadeUp><div  className="lg:p-4 p-2 bg-white/5 backdrop-blur-sm border border-white/10  h-[55%] lg:h-full rounded-xl flex flex-col gap-2 cursor-pointer">
              <img
                src={p.mainImage}
                alt={p.title}
                className="project-images h-[70%] w-full rounded-xl object-fill "
              />
              <h1 className="text-cream font-bold text-[10px] lg:text-xl">{p.title}</h1>
              <div className="flex w-full lg:justify-between flex-row items-end lg:items-start"><p className="text-cream/40 text-[8px] lg:text-sm w-[60%]">{p.shortDesc}</p>
              <Link to={`/projects/${p.id}`} className="bg-neonblue flex text-[8px] text-black rounded-[9px]  lg:h-6 flex-wrap lg:px-2 transition-all duration-500 hover:scale-105 lg:text-[16px] justify-center h-3 ">View Project <span className="text-white font-bold lg:text-lg px-1 items-center lg:h-full flex">→</span></Link></div>
            </div></FadeUp>
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <Link to={`/AllProjects`} className="text-neonblue underline flex mt-4 ">
        See all projects
        </Link>
      </div>
    </div>
    
  );
};

export default Project;

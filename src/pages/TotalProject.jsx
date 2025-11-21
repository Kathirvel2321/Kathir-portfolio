import React from 'react'
import { projects } from '../data/projects'
import { div } from 'framer-motion/client'
import { Link } from 'react-router-dom'
const TotalProject = () => {
  return (
    
    <div className='relative h-full min-h-screen w-screen bg-[#242734] lg:px-10 overflow-visible '>
        <Link to={`/`}><span className='lg:text-lg font-normal text-neonblue underline '>← home</span> </Link> 
        <h1 className=' w-full flex justify-center text-white lg:text-5xl font-bold '>Projects</h1>
    <div className='relative h-full w-full grid grid-cols-2 lg:grid-cols-3 px-10 lg:gap-10 gap-4 lg:mt-10 '>
      {projects.map((p)=>(
        <div className="lg:p-4 p-1 h-[85%] mt-5 bg-white/5 backdrop-blur-sm border border-white/10  lg:h-[90%] lg:rounded-xl rounded flex flex-col gap-2 cursor-pointer">
                      <img
                        src={p.mainImage}
                        alt={p.title}
                        className="project-images h-[70%] w-full lg:rounded-xl rounded-sm object-fill "
                      />
                      <h1 className="text-cream font-bold text-[8px] lg:text-xl">{p.title}</h1>
                      <div className="flex w-full lg:justify-between flex-row items-end lg:items-start"><p className="text-cream/40 text-[8px] lg:text-sm w-[60%]">{p.shortDesc}</p>
                      <Link to={`/projects/${p.id}`} className="bg-neonblue flex text-[8px] text-black rounded-[9px]  lg:h-6 flex-wrap lg:px-2 transition-all duration-500 hover:scale-105 lg:text-[16px] justify-center h-3 ">View Project <span className="text-white font-bold lg:text-lg px-1 items-center lg:h-full flex">→</span></Link></div>
                    </div>
      ))}
    </div>
    </div>
  )
}

export default TotalProject

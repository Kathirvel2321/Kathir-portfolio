import React, { lazy, Suspense } from "react";
import { Route,Routes } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import TotalProject from "./pages/TotalProject";
const Hero1 = lazy(()=> import("./pages/Hero1"));
const Skill = lazy(()=> import("./pages/Skill"));
const Projects = lazy(()=> import("./pages/Project"));
const About = lazy(()=> import("./pages/About"));
const Contact = lazy(()=> import("./pages/Contact"))
const App = () => {
  return (

      <div className="overflow-x-hidden">
        <Suspense fallback={<div className="text-white p-10">Loading...</div>}>
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero1 />
                  <Skill />
                  <Projects />
                  <About />
                  <Contact />
                </>
              }
            />

            {/* Project Details Page */}
            <Route path="/AllProjects" element ={<TotalProject/>} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </Suspense>
      </div>

    
    
  );
};

export default App;

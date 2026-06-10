import React from "react";
import ProjectCard from "./ProjectCard";
import farmtech from "../assets/farmtech.png";
import weatherapp from "../assets/weather.png";
import bluecosmix from "../assets/bluecosmix.png";


const projects = [
  {
    id: 1,
    title: "Fresh Mitra",
    description: "Built using React and Tailwind CSS",
    image:farmtech,
      
  },
  {
    id: 2,
    title: "Weather App",
    description: "Real-time weather information",
    image:weatherapp,
      
  },
  {
    id: 3,
    title: "Dashboard UI",
    description: "Analytics dashboard",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
    
];



const Projects = () => {
  return (
     
    <>
      <div id="projects"
      className="pt-30 bg-purple-100 flex items-center justify-center">
        <div className="flex items-center">
          <div><img src={bluecosmix} alt="" className="w-30"/></div>
          <h1 className="text-5xl font-poppins font-bold text-gray-900">
           MY PROJECTS
          </h1>
          <div><img src={bluecosmix} alt="" className="w-30"/></div>
        </div>
      </div>
     <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 p-10 bg-purple-100">
      
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
    </>
    
  );
};

export default Projects;
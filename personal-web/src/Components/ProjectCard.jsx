// import React from 'react'
// import aboutsection from "../assets/aboutsectionimage.jpg";
// const ProjectCard = () => {
//   return (
//     <div>
//         <div className='w-full absolute right-0 bottom-0 '>
//              <img src={aboutsection} alt=""  className='w-full p-10'/>
//         </div>
      
//     </div>
//   )
// }

// export default ProjectCard



import React from "react";
import ntblue from "../assets/ntblue.png";

const ProjectCard = ({ project }) => {
  return (

   
     
    <div className="w-full bg-white rounded-2xl ">
      
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-70 object-cover p-4 rounded-3xl"
      />

      <div className="p-4 flex items-center justify-between">
        <h3 className="text-lg text-gray-900 font-semibold">
          {project.title}
        </h3>

        <div className="w-10">
          <img src={ntblue} alt="" />
        </div>
      </div>
    </div>
  
  );
};

export default ProjectCard;
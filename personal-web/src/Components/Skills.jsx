import React from 'react'
import aboutsection from "../assets/aboutsectionimage.jpg";
import star from "../assets/bluestar.png";
import { Link } from "react-router-dom";
import Card from './Card';
import InfoCard from './InfoCard';
import figma from "../assets/figmaicon.jpg";
import coloricon from "../assets/coloricon2.png";
import { motion } from 'framer-motion';

const Skills = () => {
  return (
     <div 
      
     
     className="bg-purple-100 py-16 sm:py-20 md:py-28 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">

  {/* Heading */}
  <div className="flex items-center justify-center gap-2 sm:gap-4 mb-12 md:mb-20 flex-wrap">

    <img
      src={star}
      alt=""
      className="w-6 sm:w-8 md:w-12"
    />

    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 font-poppins text-center leading-tight">
      SKILLS & EDUCATION
    </h1>

    <img
      src={star}
      alt=""
      className="w-6 sm:w-8 md:w-12"
    />

  </div>

  {/* Main Grid */}
  <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">

    {/* LEFT SIDE */}
    <div className="w-full lg:w-1/3 flex flex-col gap-6">

      {/* Education */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl flex flex-col gap-6 h-full">

        <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4 font-poppins">
          Education
        </h2>

        <div className="flex flex-col gap-8">

          <div className="flex flex-col">
            <p className="text-gray-500 text-base sm:text-lg pt-2 font-semibold">
              Higher Secondary Education
            </p>

            <p className="text-gray-400 text-sm sm:text-lg pt-3 leading-relaxed">
              Sabitri Devi Higher Secondary School of Science
            </p>

            <p className="text-gray-500 text-sm sm:text-lg font-bold pt-3">
              2021 - 2023
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-gray-500 pt-3 font-semibold text-base sm:text-lg leading-relaxed">
              Bachelor's of Science in Information Technology and Management
            </p>

            <p className="text-gray-400 pt-3 text-sm sm:text-lg">
              Ravenshaw University
            </p>

            <p className="text-gray-500 font-bold pt-3 text-sm sm:text-lg">
              2023 - 2026
            </p>
          </div>

        </div>

      </div>

      {/* Tools */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 w-full">

        <h3 className="text-xl sm:text-2xl font-semibold text-pink-600 mb-6 font-poppins">
          Tools & Platforms
        </h3>

        <ul className="flex flex-col gap-3 sm:gap-4 list-disc list-inside text-gray-400 text-sm sm:text-lg">
          <li>Git</li>
          <li>GitHub</li>
          <li>VS Code</li>
          <li>IntelliJ IDEA</li>
          <li>Vercel</li>
          <li>Docker</li>
        </ul>

      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="w-full lg:w-2/3 flex flex-col gap-6 lg:gap-8">

      {/* Languages */}
      <div className="bg-white rounded-3xl">

        <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 p-6 sm:p-8 font-poppins">
          Languages Known
        </h2>

        <div className="flex flex-col gap-5 px-6 sm:px-8 pb-8">

          <div className="flex justify-between items-center border-b border-gray-100 pb-3 gap-4">
            <p className="text-gray-600 font-medium text-sm sm:text-base">
              English
            </p>

            <p className="text-gray-400 text-sm sm:text-base">
              Professional
            </p>
          </div>

          <div className="flex justify-between items-center border-b border-gray-100 pb-3 gap-4">
            <p className="text-gray-600 font-medium text-sm sm:text-base">
              Hindi
            </p>

            <p className="text-gray-400 text-sm sm:text-base">
              Native
            </p>
          </div>

          <div className="flex justify-between items-center gap-4">
            <p className="text-gray-600 font-medium text-sm sm:text-base">
              Odia
            </p>

            <p className="text-gray-400 text-sm sm:text-base">
              Native
            </p>
          </div>

        </div>

      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

        {/* Frontend */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 w-full">

          <h3 className="text-xl sm:text-2xl font-semibold text-purple-600 mb-6 font-poppins">
            Frontend Development
          </h3>

          <ul className="flex flex-col gap-3 sm:gap-4 list-disc list-inside text-gray-400 text-sm sm:text-lg">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>Responsive Web Design</li>
          </ul>

        </div>

        {/* Backend */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 w-full">

          <h3 className="text-xl sm:text-2xl font-semibold text-cyan-600 mb-6 font-poppins">
            Backend Development
          </h3>

          <ul className="flex flex-col gap-3 sm:gap-4 list-disc list-inside text-gray-400 text-sm sm:text-lg">
            <li>Spring Boot</li>
            <li>REST APIs</li>
            <li>SQL</li>
            <li>Authentication Basics</li>
            <li>Spring Security</li>
          </ul>

        </div>

        {/* Additional */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:col-span-2 w-full">

          <h3 className="text-xl sm:text-2xl font-semibold text-yellow-600 mb-6 font-poppins">
            Additional Skills
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 text-gray-400 text-xs sm:text-sm md:text-base">

            <p>• UI/UX</p>
            <p>• Problem Solving</p>
            <p>• Debugging</p>
            <p>• Team Collaboration</p>
            <p>• API Integration</p>

          </div>

        </div>

      </div>

    </div>

  </div>

  {/* Bottom Section */}
  <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mt-10">

    <div className="w-full lg:flex-1">
      <Card
        className="w-full"
        label="Blog"
        title="Gfonts"
        image={figma}
      />
    </div>

    <Link to="/contact" className="w-full lg:flex-[2]">
      <div className="w-full h-full">
        <InfoCard cardClassName="h-full w-full" />
      </div>
    </Link>

  </div>

</div>
  )
}

export default Skills




import React from 'react'
import  { useRef } from "react";
import emailjs from "@emailjs/browser";

import mail from "../assets/mailbluue.png";
import call from "../assets/bluecall.png";
import linkedin from "../assets/linkedinicon.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.jpg";
import camera from "../assets/camera.png";
import coloricon from "../assets/coloricon2.png";
import development from "../assets/development.png";
import bluecosmix from "../assets/bluecosmix.png";
import InfoCard from './InfoCard';
import Insights from './Insights';
import { Link } from 'react-router-dom';
import Card from './Card';
import figma from "../assets/figmaicon.jpg";
const Work = () => {
     const form = useRef();
    
    
  return (
    <div>
  <section className="w-full pt-24 sm:pt-28 lg:pt-30 bg-purple-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">

    <div className="max-w-7xl mx-auto rounded-3xl p-2 sm:p-6 lg:p-10">

      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/3 flex flex-col justify-between gap-10 sm:gap-16 lg:gap-32 bg-gray-50 rounded-3xl p-6 sm:p-8 shadow-lg">

          <div className="flex items-center gap-4">
            <img
              src={camera}
              alt="Camera Icon"
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
            />

            <h3 className="text-lg sm:text-xl lg:text-2xl text-gray-800 font-semibold break-words">
              PHOTOGRAPHY
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <img
              src={coloricon}
              alt="Color Icon"
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
            />

            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold break-words">
              WEB DESIGNING
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <img
              src={development}
              alt="Development Icon"
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
            />

            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold break-words">
              DEVELOPMENT
            </h3>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6 w-full lg:w-2/3">

          {/* TITLE */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">

            <img
              src={bluecosmix}
              alt=""
              className="w-12 sm:w-20 lg:w-28 object-contain"
            />

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 text-center leading-tight">
              MY OFFERINGS
            </h1>

            <img
              src={bluecosmix}
              alt=""
              className="w-12 sm:w-20 lg:w-28 object-contain"
            />

          </div>

          {/* OFFERING BOX */}
          <div className="w-full bg-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl">

            {/* CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

              <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-xl transition duration-300">
                <p className="text-gray-700 leading-6 sm:leading-7 text-sm sm:text-base">
                Through creative photography, I capture moments with emotion, clarity, and artistic perspective to create visually compelling stories.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-xl transition duration-300">
                <p className="text-gray-700 leading-6 sm:leading-7 text-sm sm:text-base">
                My web designing approach focuses on creating visually engaging interfaces with intuitive and seamless navigation.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-xl transition duration-300">
                <p className="text-gray-700 leading-6 sm:leading-7 text-sm sm:text-base">
                 From UI implementation to backend integration, I build applications that are both functional and visually refined.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-xl transition duration-300">
                <p className="text-gray-700 leading-6 sm:leading-7 text-sm sm:text-base">
                  My designs combine creativity and functionality to create
                  engaging digital experiences for users and businesses.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mt-10">

        <Card
          className="w-full lg:flex-1"
          label="Blog"
          title="Gfonts"
          image={figma}
        />
        <Link to="/contact" className="w-full lg:flex-[2]">
          <div className="w-full h-full">
            <InfoCard cardClassName="h-full w-full" />
          </div>
        </Link>

      </div>

    </div>
  </section>
</div>
  )
}

export default Work

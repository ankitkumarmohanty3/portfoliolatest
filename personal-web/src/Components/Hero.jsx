import React from "react";
import Card from "./Card";
import ProfileCard from "./ProfileCard";
import RollerCard from "./RollerCard";
import Computer from "../assets/removedbg-computer.png";
import ankit2 from "../assets/ankit1.png";
import profile from "../assets/actualank.jpg";
import blogicon from "../assets/blogic.jpg";
import DataCard from "./DataCard";
import coloricon from "../assets/coloricon2.png";
import globeicon from "../assets/globeicon2.png";
import penicon from "../assets/penicon2.png";
import rocketicon from "../assets/rocketicon.png";
import figma from "../assets/figmaicon.jpg";
import twitericon from "../assets/twittericon.png";
import linkedinicon from "../assets/linkedinicon.png";
import InfoCard from "./InfoCard";
import Insights from "./Insights";
import Contact from "./Contact";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div


      className="
        bg-purple-100
        pt-16
        sm:pt-20
        md:pt-24
        lg:pt-20
        xl:pt-20  
        overflow-hidden
      "
    >

      
      <div
        className="
          flex flex-col lg:flex-row items-stretch
          max-w-[1300px]
          mx-auto
          px-4 sm:px-6 md:px-8
          pt-6 sm:pt-8 md:pt-10 lg:pt-12
          gap-4
        "
      >

        {/* Left */}
        <div className="w-full lg:w-1/2 p-2 sm:p-4 lg:p-6 flex">
          <div className="flex-1">
            <ProfileCard
              url={profile}
              header="Ankit Kumar"
              properties="A Full-Stack Developer"
            />
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-1/2 p-2 sm:p-4 lg:p-6 flex flex-col gap-4">

          <RollerCard />

          <div className="flex flex-col sm:flex-row gap-4 flex-1">

           <Link to="/skills" className="flex-1 min-h-[220px]">
             <Card
              className="flex-1 min-h-[220px]"
              label="More About Me"
              title="Credentials"
              image={ankit2}
            />
            </Link>
       
            <Link to="/projects" className="flex-1 min-h-[220px]">
              <Card
              className="flex-1 min-h-[220px]"
              label="Showcase"
              title="Projects"
              image={Computer}
            />
            </Link>

          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div
        className="
          flex flex-col lg:flex-row
          items-stretch
          gap-4
          px-4 sm:px-6 md:px-8
          pb-5
          max-w-[1300px]
          mx-auto
        "
      >

        <Card
          className="w-full lg:flex-1"
          label="Blog"
          title="Gfonts"
          image={figma}
        />



  <Link to="/work" className="w-full lg:flex-2">
        <DataCard
          cardClassName="w-full lg:flex-[2]"
          imageClassname="w-14 h-16"
          label="Code. Design. Experience."
          title="Explore the work"
          images={[rocketicon, globeicon, coloricon, penicon]}
        />
        </Link>


        

        <Link to="/contact" className="w-full lg:flex-1">
        <DataCard
          cardClassName="w-full lg:flex-1"
          imageClassname="w-16 h-16 bg-gray-100 p-2 rounded-full"
          label="Social"
          title="Stay Connected"
          onClick={()=>{<Contact/>}}
          images={[linkedinicon, twitericon]}
        />
        </Link>

      </div>

      {/* Bottom Section */}
      <div
        className="
          flex flex-col lg:flex-row
          items-stretch
          gap-4
          px-4 sm:px-6 md:px-8
          pb-8
          max-w-[1300px]
          mx-auto
        "
      >

        <div className="w-full lg:flex-[1]">
          <Insights />
        </div>

        <Link to="/contact" className="w-full lg:flex-[2]">
            <div className="w-full lg:flex-1">
               <InfoCard cardClassName="h-full" />
             </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
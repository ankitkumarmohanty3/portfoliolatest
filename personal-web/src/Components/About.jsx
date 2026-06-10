import Description from "./Description";
import ankit from "../assets/actualank.jpg";
import star from "../assets/bluestar.png";
import blueCosmic from "../assets/ntblue.png";
import linkedinicon from "../assets/linkedinicon.png";
import twitericon from "../assets/twittericon.png";
import Card from "./Card";
import DataCard from "./DataCard";
import InfoCard from "./InfoCard";
import ankit2 from "../assets/ankit1.png";
import aboutsection from "../assets/aboutsectionimage.jpg";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const About = () => {
  return (
  <div className="bg-purple-100 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-20 min-h-screen overflow-hidden">

  {/* ===== TOP SECTION ===== */}
  <section className="text-gray-900 font-[Inter]">

    <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16 max-w-6xl mx-auto">

      {/* Left Image */}
      <div className="bg-white p-4 sm:p-6 rounded-xl  w-full sm:w-auto flex justify-center">

        <img
          src={aboutsection}
          alt="ankit"
          className="rounded-3xl w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[420px] object-cover"
        />

      </div>

      {/* Right Content */}
      <div className="relative w-full lg:w-1/2">

        {/* Heading */}
        <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4 mb-6 flex-wrap">

          <img
            src={star}
            alt=""
            className="w-8 sm:w-10 lg:w-16 object-contain"
          />

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-poppins text-center lg:text-left leading-tight">
            SELF-SUMMARY
          </h1>

          <img
            src={star}
            alt=""
            className="w-8 sm:w-10 lg:w-16 object-contain"
          />

        </div>

        {/* Text Card */}
        <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl flex flex-col justify-between relative h-full ">

          <div>

            <p className="text-lg sm:text-2xl font-poppins font-bold break-words">
              ANKIT KUMAR MOHANTY
            </p>

            <p className="pt-4 font-inter text-gray-600 leading-7 text-sm sm:text-base lg:text-lg">

              I am a full-stack developer focused on building modern,
              responsive web applications and seamless user experiences.
              I enjoy working across both frontend and backend, creating
              scalable solutions, and solving problems through debugging
              and optimization.

            </p>

          </div>

        </div>

      </div>

    </div>

  </section>

  {/* ===== DESCRIPTION SECTION ===== */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 mt-12 sm:mt-16 max-w-6xl mx-auto items-stretch">

    <div className="w-full min-w-0">
      <Description
        experience1={"EXPERIENCE"}
        year1={"May-June (2025)"}
        role1={"Frontend Developer"}
        company1={"ProdigyInfo Tech"}
        experience2={"Cipherbyte Technology"}
        year2={"Jan-Feb (2025)"}
        role2={"Web Developer"}
        company2={"Cipherbyte Technology"}
      />
    </div>

    <div className="w-full min-w-0">
      <Description
        className="flex-1"
        experience1={"EDUCATION"}
        year1={"2021-2023"}
        role1={"Higher Secondary Education"}
        company1={"Sabitri Devi Higher Secondary School"}
        experience2={"Bachelor of Science"}
        year2={"2023-2026"}
        role2={
          "Bachelor of Science in Information Technology and Management"
        }
        company2={"Ravenshaw University"}
      />
    </div>

  </div>

  {/* ===== CARDS SECTION ===== */}
  <div className="flex flex-col lg:flex-row items-stretch gap-6 pt-10 max-w-6xl mx-auto">

  </div>

  {/* ===== BOTTOM CARDS ===== */}
  <div className="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-10 px-0 sm:px-2 md:px-4 pb-5 pt-10 max-w-[1300px] mx-auto">

    <div className="w-full lg:flex-1 min-w-0">
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

   
     <Link to="/contact" className="w-full lg:flex-[2]">
            <div className="w-full lg:flex-2 min-w-0">
               <InfoCard cardClassName="h-full" />
             </div>
        </Link>
   

  </div>

</div>
  );
};

export default About; 





//  <Card
//             className="h-full flex-1"
//             label="More About Me"
//             title="Credentials"
//             image={ankit2}
//           />
      
 
        // {/* DataCard */}
        // <div className="flex-[1] h-full">
        //   <DataCard
        //     cardClassName="h-full"
        //     imageClassname="w-16 h-16 bg-gray-100 p-2 rounded-full flex items-center justify-center"
        //     label="Projects"
        //     title="Explore the work"
        //     images={[linkedinicon, twitericon]}
        //   />
        // </div>

        // {/* InfoCard (WIDER) */}
        // <div className="flex-[2] h-full">
        //   <InfoCard cardClassName="h-full" />
        // </div>

        // {/* Card */}
        // <div className="flex-[1] h-full">
        //   <Card
        //     className="h-full flex-1"
        //     label="More About Me"
        //     title="Credentials"
        //     image={ankit2}
        //   />
        // </div>
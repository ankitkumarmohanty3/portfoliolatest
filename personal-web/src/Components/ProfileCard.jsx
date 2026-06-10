import React from "react";
const ProfileCard = ({ url, header, properties, className }) => {
  return (
    <div
      className={`group col-span-1 sm:col-span-2 row-span-2 bg-white rounded-[30px] 
      p-5 sm:p-8 md:p-10 lg:p-10
      flex items-center justify-center overflow-hidden relative 
      ${className}`}
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 transition-all duration-500 pointer-events-none rounded-[30px]" />

      <div
        className="
        relative z-10 
        flex flex-col sm:flex-row 
        items-center 
        gap-4 sm:gap-8 md:gap-10 lg:gap-8
      "
      >
        {/* Image */}
        <div className="relative shrink-0">
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-purple-500 rounded-tr-2xl rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

          <img
            src={url}
            alt="profile"
            className="
            relative
            w-28 h-32
            sm:w-32 sm:h-36
            md:w-36 md:h-40
            lg:w-44 lg:h-52
            xl:w-52 xl:h-60
            object-cover
            rounded-tr-2xl
            rounded-bl-2xl
            border-2 border-gray-200
            group-hover:border-blue-300
            transition-all duration-300
            p-2
          "
          />
        </div>

        {/* Text */}
        <div
          className="
          flex flex-col justify-center 
          text-center sm:text-left 
          items-center sm:items-start 
          gap-2 sm:gap-3
        "
        >
          {/* Status badge */}
          <div className="flex items-center gap-2 w-fit">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>

              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>

            <span className="text-[11px] font-medium font-inter text-green-600 uppercase tracking-wider">
              Available for work
            </span>
          </div>

          {/* Properties */}
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
            {properties}
          </p>

          {/* Name */}
          <h1
            className="
            text-xl
            sm:text-2xl
            md:text-2xl
            lg:text-3xl
            xl:text-4xl
            font-extrabold
            text-gray-900
            leading-tight
          "
          >
            <span className="font-inter">Ankit Kumar</span>
            <span className="font-inter"> Mohanty</span>
          </h1>

          {/* Description */}
          <h4
            className="
            font-inter
            text-xs
            sm:text-sm
            md:text-sm
            lg:text-base
            text-gray-600
            leading-relaxed
          "
          >
            I am a Full-Stack Developer.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
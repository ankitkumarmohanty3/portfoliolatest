import React from "react";
import ntblue from "../assets/ntblue.png";
const InfoCard = ({ cardClassName }) => {
  return (
    <div
      className={`
        relative
        w-full
        min-h-[260px]
        bg-white
        rounded-[24px]
        p-4 sm:p-6
        flex flex-col
        justify-end
        items-start
        gap-2 sm:gap-3 md:gap-4
        ${cardClassName}
      `}
    >
      {/* Text Container with right padding to prevent overlap with arrow */}
      <div className="pr-12 sm:pr-14 md:pr-16 w-full">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
          Let's
        </h3>

        <p className="text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          Work <span>Together</span>
        </p>
      </div>

      {/* Arrow */}
      <div className="  absolute bottom-4 sm:bottom-5 md:bottom-5 right-4 sm:right-5 md:right-6 w-9 h-9 sm:w-10 sm:h-10 md:w-15 md:h-15 flex items-center justify-center ">
       <div className="w-15 ">
                  <img src={ntblue} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
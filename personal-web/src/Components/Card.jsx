import React from "react";
import ntblue from "../assets/ntblue.png";
const Card = ({
  label,
  title,
  className,
  image,
  imageClassName,
  imageWrapperClass,
  onClick
}) => {
  return (
    <div
     onClick={onClick} 
      className={`bg-white rounded-[24px]
      p-5
      flex flex-col justify-between
      h-[260px] ${className}`}
    >
      {/* Image */}
      <div className="flex justify-center flex-1">
        <div
          className={`w-full h-[120px] sm:h-[130px] md:h-[140px]
          overflow-hidden rounded-xl flex items-center justify-center
          ${imageWrapperClass || ""}`}
        >
          <img
            src={image}
            alt="card"
            className={`w-auto h-full object-contain object-center max-w-full
            ${imageClassName || ""}`}
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <p className="text-xs font-inter uppercase tracking-widest text-gray-400">
          {label}
        </p>

        <div className="flex items-center justify-between gap-3">
          <h3 className="text-sm font-inter sm:text-base font-semibold text-gray-900 line-clamp-2 flex-1">
            {title}
          </h3>

          <div className="w-10 h-10 flex items-center justify-center shrink-0">
            <img
              src={ntblue}
              alt="arrow"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
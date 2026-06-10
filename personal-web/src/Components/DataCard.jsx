import React from 'react';
import ntblue from "../assets/ntblue.png";
const DataCard = ({ label, title, images, cardClassName, imageClassname }) => {

  const gridCols =
    images.length === 1
      ? "grid-cols-1"
      : images.length === 2
      ? "grid-cols-2"
      : images.length === 3
      ? "grid-cols-2 sm:grid-cols-3"
      : "grid-cols-2 sm:grid-cols-4";  
  return (
    <div
      className={`bg-white rounded-[24px]
      p-4 sm:p-5
      flex flex-col justify-between
      h-[260px] ${cardClassName}`}
    >
      {/* Image Section */}
      <div className="flex justify-center">
        <div
          className={`w-full h-[120px] sm:h-[140px] 
          grid ${gridCols} 
          gap-1 sm:gap-3 
          place-items-center`}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={img}
                alt={`logo-${index}`}
                className={`object-contain
                h-6 sm:h-10 md:h-12   
                ${imageClassname || ""}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">
          {label}
        </p>

        <div className="flex items-center justify-between">
          <h3 className="text-sm sm:text-base font-semibold text-gray-900 leading-snug line-clamp-2">
            {title}
          </h3>

          <div className="w-8 h-8 sm:w-9 sm:h-9  flex items-center justify-center ">
             <div className="w-15 ">
                               <img src={ntblue} alt="" />
                     </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCard;


//  <div className="w-full h-[140px] overflow-hidden rounded-xl">
//   <img
//     src={image}
//     alt="card"
//     className="w-full h-full object-cover"
//   />

  
//         </div>
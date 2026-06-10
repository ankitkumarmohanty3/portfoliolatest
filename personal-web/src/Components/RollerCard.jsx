import React from "react";

const RollerCard = () => {
  return (
    <div className="w-full px-4 sm:px-0">
      <div className="h-10 sm:h-11 md:h-12 lg:h-13 w-full max-w-[1100px]   bg-white  rounded-3xl flex items-center mx-auto">
        {/* Left boundary */}
        <span className="opacity-0 px-2">|</span>

        {/* Moving text area */}
        <div className="overflow-hidden flex-1 whitespace-nowrap">
          <p className="animate-slideLeft inline-block font-300 text-sm text-gray-400">
            Latest Work <span className="text-blue-500">Featured</span> • Latest
            Work <span className="text-blue-500">Featured</span> • Latest Work{" "}
            <span className="text-blue-500">Featured</span> • Latest Work{" "}
            <span className="text-blue-500">Featured</span>
          </p>
        </div>

        {/* Right boundary */}
        <span className="opacity-0 px-2">|</span>
      </div>
    </div>
  );
};

export default RollerCard;


 
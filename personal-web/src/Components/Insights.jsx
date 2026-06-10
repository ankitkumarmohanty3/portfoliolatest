import React from 'react'

  const Insights = ({ cardClassName }) => {
  return (
    <div
      className={`
        relative
        w-full
        min-h-[220px] sm:min-h-[260px]
        bg-white
        rounded-[24px]
        p-4 sm:p-5 md:p-6
        flex
        flex-col md:flex-row
        items-center
        justify-center
        gap-4
        overflow-hidden
        ${cardClassName}
      `}
    >

      <div className='flex flex-col items-center rounded-2xl bg-gray-100 px-6 py-5 sm:px-8 sm:py-6 w-full md:w-auto'>
        
        <p className='text-blue-500 text-3xl sm:text-4xl font-bold'>
          00
        </p>

        <p className='text-gray-400 flex flex-col items-center text-sm sm:text-base text-center'>
          YEARS <span>EXPERIENCE</span>
        </p>
      </div>

      <div className='flex flex-col items-center rounded-2xl bg-gray-100 px-6 py-5 sm:px-8 sm:py-6 w-full md:w-auto'>
        
        <p className='text-blue-500 text-3xl sm:text-4xl font-bold'>
          +5
        </p>

        <p className='text-gray-400 flex flex-col items-center text-sm sm:text-base text-center'>
          CLIENTS <span>WORLDWIDE</span>
        </p>
      </div>

      <div className='flex flex-col items-center rounded-2xl bg-gray-100 px-6 py-5 sm:px-8 sm:py-6 w-full md:w-auto'>
        
        <p className='text-blue-500 text-3xl sm:text-4xl font-bold'>
          +10
        </p>

        <p className='text-gray-400 flex flex-col items-center text-sm sm:text-base text-center'>
          PROJECTS <span>COMPLETED</span>
        </p>
      </div>

    </div>
  );
};

export default Insights;
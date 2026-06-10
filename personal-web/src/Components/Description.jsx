import React from 'react'
import ankit from '../assets/ankit3.png'
const Description = ({experience1, year1, role1,company1, experience2, year2, role2, company2,className }) => {
  return (
    <div>
       <div className={`bg-white w-full  p-4 rounded-2xl ${className}`}>
       <h3 className='font-bold font-poppins'>{experience1}</h3>
       
       <div className='pt-5'> 
       <h4 className='text-gray-400 font-inter'>{year1}</h4>
       <p className='text-blue-600 pt-2 font-medium font-inter text-lg'>{role1}</p>
       <p className='text-gray-400 pt-2 font-poppins'>{company1}</p>
       </div>
       
       <div className='pt-5'>
         <h4 className='text-gray-400 font-inter'>{year2}</h4>
        <p className='text-blue-600 pt-2 font-medium font-inter text-lg'>{role2}</p>
       <p className='text-gray-400 pt-2 font-poppins'>{company2}</p>
       </div>
      
     </div>
    </div>
  )
}

export default Description

import React, { useEffect } from 'react'
import sunicon from "../assets/sun_icon.svg";
import moonicon from "../assets/moon_icon.svg";

const ThemeToggleBtn = ({theme,setTheme}) => {
  useEffect(()=>{
   const prefersDarkMode  =  window.matchMedia('(prefers-color-scheme: dark)').matches;
   setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
  },[])
    useEffect(()=>{
         if(theme ==='dark'){
            document.documentElement.classList.add('dark');
         }else{
             document.documentElement.classList.remove('dark');
         }

         localStorage.setItem('theme',theme);
    },[theme])
  return (
    <>
      <button className='ml-6 hidden lg:flex'>
        {theme === 'dark' ? (
            <img onClick={()=>setTheme('light')} src={sunicon} alt="" className='size-8 p-1.5 border border-gray-500 rounded-full' />
        ) : (
            <img onClick={()=>setTheme('dark')} src={moonicon} alt=''className='size-8 p-1.5 border border-gray-500 rounded-full'/>
        )}
      </button>
    </>
  )
}

export default ThemeToggleBtn   
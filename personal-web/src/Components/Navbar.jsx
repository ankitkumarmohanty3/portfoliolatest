  import React, { useState } from "react";
  import ThemeToggleBtn from "./ThemeToggleBtn";
  import { Link } from "react-router-dom";

  const Navbar = () => {

    const [theme, setTheme]  =  useState("light");
    const toggleTheme =  ()=>{
      setTheme(theme === "light" ? "dark" : "light");
    }
    return (
      <div >
        <div className="bg-gray-900">
          <header className="absolute inset-x-0 top-0 z-50 bg-purple-50 ">
            <nav
              aria-label="Global"
              className="flex items-center justify-between p-6 lg:px-8"
            >
              <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                  
                  <span className="text-black font-bold font-syne  text-3xl"> {"<Anki"}<span className="text-blue-500 ">T</span>
    {"/>"} </span>
                  
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  command="show-modal"
                  commandfor="mobile-menu"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-500 cursor-pointer"
                >
                
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-6"
                  >
                    <path
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="hidden lg:flex lg:gap-x-12 ">
                <Link to="/"  className="font-poppins font-600 text-gray-400 hover:text-blue-400 transition ease-in-out duration-300">Home</Link>
                <Link to="/about" className="font-poppins font-600 text-gray-400 hover:text-blue-400 transition ease-in-out duration-300">About</Link>
               
                <Link to="/projects" className="font-poppins font-600 text-gray-400 hover:text-blue-400 transition ease-in-out duration-300">
                  Projects
                </Link>
                 <Link to="/contact" className="font-poppins font-600 text-gray-400 hover:text-blue-400 transition ease-in-out duration-300">
                  Contact us
                </Link>
                
              </div>

              {/* <ThemeToggleBtn theme={theme} setTheme={setTheme} /> */}
              
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
               
                <Link to="/contact" className=" font-poppins font-semibold lg:bg-gray-900 lg:text-white lg:px-4 lg:py-2 lg:rounded-xl lg:hover:bg-blue-400 transition ease-in-out duration-300">
                 Let's talk <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </nav>
            <el-dialog>
              <dialog
                id="mobile-menu"
                className="backdrop:bg-transparent lg:hidden"
              >
                <div tabIndex="0" className="fixed inset-0 focus:outline-none">
                  <el-dialog-panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                    <div className="flex items-center justify-between">
                      <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <span className=" text-gray-400 font-bold font-[Inter] ">{"<Anki"}<span className="text-blue-500 ">T</span>{`/>`}</span>
                      </a>
                      <button
                        type="button"
                        command="close"
                        commandfor="mobile-menu"
                        className="-m-2.5 rounded-md p-2.5 text-gray-200 cursor-pointer"
                      >
                        <span className="sr-only">Close menu</span>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          data-slot="icon"
                          aria-hidden="true"
                          className="size-6"
                        >
                          <path
                            d="M6 18 18 6M6 6l12 12"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="mt-6 flow-root">
                      <div className="-my-6 divide-y divide-white/10">
                        <div className="space-y-2 py-6">
                          <Link to="/"  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">
                            Home
                          </Link>
                         

                         <Link to="/about"  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">
                            About
                          </Link>
                          
                          <Link to="/projects"  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">
                            Projects
                          </Link>
                          
                          <Link to="/contact"  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">
                            Contact us
                          </Link>
                          
                        </div>
                        <div className="py-6">
                          <Link to="/contact"  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">
                            Let's talk 
                          </Link>
                        </div>
                      </div>
                    </div>
                  </el-dialog-panel>
                </div>
              </dialog>
            </el-dialog>
          </header>

        
        </div>
      </div>
    );
  };

  export default Navbar;
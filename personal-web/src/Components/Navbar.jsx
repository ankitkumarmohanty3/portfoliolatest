import React, { useState } from "react";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div>
      <div className="bg-gray-900">
        <header className="absolute inset-x-0 top-0 z-50 bg-purple-50 ">
          <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 lg:px-8"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-black font-bold font-syne  text-3xl">
                  {" "}
                  {"<Anki"}
                  <span className="text-blue-500 ">T</span>
                  {"/>"}{" "}
                </span>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
              <Link
                to="/"
                className="font-poppins font-600 text-gray-400 hover:text-blue-400 transition ease-in-out duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="font-poppins font-600 text-gray-400 hover:text-blue-400 transition ease-in-out duration-300"
              >
                About
              </Link>

              <Link
                to="/projects"
                className="font-poppins font-600 text-gray-400 hover:text-blue-400 transition ease-in-out duration-300"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="font-poppins font-600 text-gray-400 hover:text-blue-400 transition ease-in-out duration-300"
              >
                Contact us
              </Link>
            </div>

            {/* <ThemeToggleBtn theme={theme} setTheme={setTheme} /> */}

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link
                to="/contact"
                className=" font-poppins font-semibold lg:bg-gray-900 lg:text-white lg:px-4 lg:py-2 lg:rounded-xl lg:hover:bg-blue-400 transition ease-in-out duration-300"
              >
                Let's talk <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </nav>

          {/* Mobile Sidebar */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                  onClick={() => setMobileMenuOpen(false)}
                />

                {/* Sidebar Panel */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-gray-900 p-6 lg:hidden overflow-y-auto"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-400 font-bold font-[Inter] ">
                      {"<Anki"}
                      <span className="text-blue-500 ">T</span>
                      {`/>`}
                    </span>
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-m-2.5 rounded-md p-2.5 text-gray-200 cursor-pointer hover:bg-gray-800 transition ease-in-out duration-200"
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

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      to="/"
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/10 transition ease-in-out duration-300"
                    >
                      Home
                    </Link>

                    <Link
                      to="/about"
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/10 transition ease-in-out duration-300"
                    >
                      About
                    </Link>

                    <Link
                      to="/projects"
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/10 transition ease-in-out duration-300"
                    >
                      Projects
                    </Link>

                    <Link
                      to="/contact"
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/10 transition ease-in-out duration-300"
                    >
                      Contact us
                    </Link>
                  </motion.div>

                  <motion.div
                    className="mt-8 pt-6 border-t border-white/10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link
                      to="/contact"
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/10 transition ease-in-out duration-300"
                    >
                      Let's talk
                    </Link>
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </header>
      </div>
    </div>
  );
};

export default Navbar;

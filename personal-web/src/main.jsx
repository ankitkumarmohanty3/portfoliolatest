// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import "./index.css";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
// );


import { StrictMode } from "react";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Components/Layout';
import App from './App';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Work from './Components/Work';
import Skills from './Components/Skills';
import './index.css';
import ScrollToTop from './Components/ScrollTop';


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
       <Route path="/" element={<Layout />}>
         <Route index element={<App />} />
         <Route path="about" element={<About className="mt-60" />} />
         <Route path="projects" element={<Projects/>} />
         <Route path="contact" element={<Contact/>} />
         <Route path="work" element={<Work/>} />
         <Route path="skills" element={<Skills/>} />
       </Route>
      </Routes>
    </Router>
  </StrictMode>
);
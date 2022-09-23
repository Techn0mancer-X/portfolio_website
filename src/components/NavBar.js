import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
const NavBar = () => {
  return (
    <div>
      <header className="bg-slate-700 text-white ">
        <div className="container mx-auto flex justify-between">
          <nav className="flex ">
            <NavLink
              to="/"
              className="inline-flex items-center py-6 px-3 mr-4 text-white-100 focus:text-white hover:text-gray-300 font-bold font-type tracking-widest"
            >
              Techn0mancer_X
            </NavLink>
            <NavLink
              to="post"
              className="inline-flex items-center py-6 px-3 mr-4 text-white-100  focus:text-white hover:text-gray-300 font-bold font-type tracking-widest"
            >
              Blog Posts
            </NavLink>
            <NavLink
              to="projects"
              className="inline-flex items-center py-6 px-3 mr-4 text-white-100  focus:text-white hover:text-gray-300 font-bold font-type tracking-widest"
            >
              Projects
            </NavLink>
            <NavLink
              to="about"
              className="inline-flex items-center py-6 px-3 mr-4 text-black-100  focus:text-white hover:text-gray-300 font-bold font-type tracking-widest"
            >
              About Me
            </NavLink>
          </nav>
          <div className="inline-flex py-3 px-3 my-6">
            <SocialIcon
              className="mr-4 inline-flex items-center"
              url="https://www.linkedin.com/in/clayton-balzer-4701b98a/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 35, width: 35 }}
              fgColor="#fff"
            />
            <SocialIcon
              className="mr-4"
              url="https://twitter.com/Techn0mancer_X"
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 35, width: 35 }}
              fgColor="#fff"
            />
            <SocialIcon
              className="mr-4"
              url="https://github.com/Techn0mancer-X"
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 35, width: 35 }}
              fgColor="#fff"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;

import React from "react";
import logo from "../assets/logo.png";
import reports from "../assets/reports.svg";
import grid from "../assets/Grid.svg";
import settings from "../assets/Settings.svg";

const Sidebar = () => {
  return (
    <div className="absolute bg-white inset-y-0 w-44">
      <nav className="p-4">
        <ul className="text-[1rem] flex flex-col gap-4">
          <li className="mb-4 self-center">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </li>
          <li className="mb-4 flex justify-around">
            <img src={reports} alt="" />
            <a href="#" className="text-black hover:text-blue-400">
              Reports
            </a>
          </li>
          <li className="mb-4 flex justify-around">
            <img src={grid} alt="" />
            <a href="#" className="text-black hover:text-blue-400">
              Workspace
            </a>
          </li>
          <li className="mb-4 flex justify-around">
            <img src={settings} alt="" />
            <a href="#" className="text-black hover:text-blue-400">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

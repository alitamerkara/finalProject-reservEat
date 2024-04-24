import React from "react";
import Logo from "../../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TbCircleLetterC } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-amber-600 text-white w-full h-500px flex justify-center items-center text-center pt-5">
      <div className="mx-auto">
        <NavLink to="/" className="p-5">
          <img src={Logo} alt="Logo" className="h-8 w-auto mx-auto" />
        </NavLink>
        <div className="pt-5">Bizi sosyal medyada takip edin</div>
        <div className="flex justify-center p-5 text-3xl">
          <FaInstagram className="mr-2 cursor-pointer" />
          <FaFacebook className="mr-2 cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
        </div>
        <div className="pt-5  mb-4 flex items-center">
          <TbCircleLetterC />
          <span className="ml-2">All rights are reserved - 2024</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

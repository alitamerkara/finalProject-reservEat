import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { MainContext } from "./context/MainContext";

const Navbar = () => {
  const { setSecond, setSuccess } = useContext(MainContext);
  return (
    <nav className="navbar sticky top-0  p-4 bg-amber-600 text-white py-4 px-6 flex items-center justify-between z-10">
      <div className="flex items-center">
        <NavLink to="/">
          {" "}
          <img src={Logo} alt="Logo" className="h-8 w-auto mr-4" />
        </NavLink>

        {/* Nav links */}
        <ul className="flex">
          <li className="mr-4">
            <NavLink
              to="/"
              activeclassname="font-bold"
              className="font-bold text-l hover:text-yellow-400"
            >
              Anasayfa
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              onClick={() => {
                setSecond(false);
                setSuccess(false);
              }}
              to="/reservation"
              activeclassname="font-bold"
              className="font-bold text-l hover:text-yellow-400"
            >
              Rezervasyon Oluştur
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              to="/active"
              activeclassname="font-bold"
              className="font-bold text-l hover:text-yellow-400"
            >
              Aktif Rezervasyonlarım
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://aybu.edu.tr/mis/tr"
              target="_blank"
              activeclassname="font-bold"
              className="font-bold text-l hover:text-yellow-400"
            >
              Bize Ulaşın
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

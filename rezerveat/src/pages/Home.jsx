import React from "react";
import Background from "../../assets/background.jpg";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Home = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen flex flex-col justify-center items-center z-10"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="text-center p-5 max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-amber-600 text-white">
          <div className="p-8">
            <h4 className="mb-4">Şimdi kendinizi ödüllendirme vakti.</h4>
            <h1 className="text-center text-4xl font-bold mb-5">
              ReservEat tarzıyla bir masa ayırt.
            </h1>
            <NavLink
              to="/reservation"
              className="flex block items-center justify-center bg-white text-amber-600 py-2 px-4 rounded-lg text-center hover:bg-amber-700 hover:text-white"
            >
              <span className="ml-4 mr-4">Rezervasyon oluştur</span>
            </NavLink>
            <div className="mt-5 flex items-center justify-center">
              <img
                src={Logo}
                alt="Logo"
                className="h-8 w-auto mx-auto cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

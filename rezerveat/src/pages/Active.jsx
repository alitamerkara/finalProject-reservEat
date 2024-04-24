import React, { useContext, useEffect } from "react";
import Logo from "../../assets/logo.png";
import bg from "../../assets/active.jpg";
import axios from "axios";
import { MainContext } from "../context/MainContext";
import { NavLink } from "react-router-dom";

const Active = () => {
  useEffect(() => {
    data();
  }, []);
  const { active, setActive } = useContext(MainContext);
  const data = async () => {
    const response = await axios.get("http://localhost:3000/active");
    setActive(response.data);
    console.log(active);
  };
  const cancelReservation = async (e) => {
    e.preventDefault();
    const value = e.target.value;
    await axios.delete(`http://localhost:3000/active/${value}`);
    window.location.reload();
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div
        className="bg-cover bg-center w-full h-screen flex flex-col justify-center items-center z-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundColor: "rgba(0, 0, 0, 0.9)",
        }}
      >
        <div className=" text-white bg-amber-600 p-8 rounded-lg shadow-md mx-5 w-min-1/3">
          <div className="mb-5 flex items-center justify-center">
            <img
              src={Logo}
              alt="Logo"
              className="h-8 w-auto mx-auto cursor-pointer"
            />
          </div>
          {active.length > 0 ? (
            <h1 className="text-center text-xl mb-5 font-bold">
              Aktif Rezervasyonlar
            </h1>
          ) : (
            <div className="text-center p-5 max-w-md mx-auto rounded-lg overflow-hidden bg-amber-600 text-white">
              <h1 className="text-center text-xl mb-5 font-bold">
                Aktif Rezervasyon Bulunmamaktadır
              </h1>
              <NavLink
                to="/reservation"
                className="flex block items-center justify-center bg-white text-amber-600 py-2 px-4 rounded-lg text-center hover:bg-amber-700 hover:text-white"
              >
                <span className="ml-4 mr-4">Rezervasyon oluştur</span>
              </NavLink>
            </div>
          )}

          <div className="flex shadow-lg rounded-lg p-3">
            {active.map((item) => {
              return (
                <div
                  className="p-8 justify-between w-full text-center m-3 bg-amber rounded-lg "
                  key={item.id}
                >
                  <h2 className="text-lg font-semibold uppercase">
                    {item.name} {item.surname}
                  </h2>
                  <p className="text-white-600 text-m mb-2">
                    {item.restaurantValue} - {item.cityValue}
                  </p>
                  <p className="text-white-600 mb-2 text-m">
                    {item.dayValue} - {item.hourValue}
                  </p>
                  <p className="text-white-600 text-sm">
                    {item.people} Kişilik
                  </p>
                  <div className="mb-6 text-center">
                    <button
                      onClick={cancelReservation}
                      value={item.id}
                      className="text-amber-700 bg-red-800 font-semibold py-2 px-4 rounded-lg bg-amber text-white py-2 px-4 rounded-lg text-center hover:bg-amber hover:text-white mt-4"
                    >
                      İptal Et
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Active;

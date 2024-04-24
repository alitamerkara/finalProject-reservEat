import React, { useContext } from "react";
import successful from "../../assets/successful.jpg";
import { MainContext } from "../context/MainContext";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";

const SuccessfulReservation = () => {
  const {
    name,
    surname,
    setName,
    setSurname,
    setSecond,
    setSuccess,
    setMeals,
    setTotalPrice,
  } = useContext(MainContext);
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div
        className="bg-cover bg-center w-full h-screen flex flex-col justify-center items-center z-10"
        style={{
          backgroundImage: `url(${successful})`,
          backgroundColor: "rgba(0, 0, 0, 0.9)",
        }}
      >
        <div className=" text-white bg-amber-600 p-8 rounded-lg shadow-md mx-5  w-1/3 text-center">
          <div className="mb-5 flex items-center justify-center">
            <img
              src={Logo}
              alt="Logo"
              className="h-8 w-auto mx-auto cursor-pointer"
            />
          </div>
          <div className="text-xl mb-10">
            Sayın{" "}
            <span className="text-xl font-semibold uppercase underline">
              {name} {surname}
            </span>{" "}
            siparişiniz başarılı bir şekilde oluşmuştur. RezervEat'i tercih
            ettiğiniz için teşekkür ederiz.
          </div>
          <div className="mb-6 text-center">
            <button
              onClick={() => {
                navigate("/");
                setSecond(false);
                setSuccess(false);
                setMeals([]);
                setTotalPrice(0);
                setName("");
                setSurname("");
              }}
              className="text-amber-700 bg-white font-semibold py-2 px-4 rounded-lg bg-white text-amber-600 py-2 px-4 rounded-lg text-center hover:bg-amber-700 hover:text-white mt-4"
            >
              Anasayfaya Dön
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulReservation;

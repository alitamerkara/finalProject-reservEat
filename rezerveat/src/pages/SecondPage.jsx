import React, { useContext, useState } from "react";
import { MainContext } from "../context/MainContext";
import Second from "../../assets/reservation.jpg";
import "../App.css";
import Logo from "../../assets/logo.png";
import SuccessfulReservation from "./SuccessfulReservation";

const SecondPage = () => {
  const {
    decraseAmount,
    incraseAmount,
    totalPrice,
    listing,
    removeBasket,
    createReservation,
    success,
  } = useContext(MainContext);

  return (
    <div
      className="bg-cover bg-center w-full h-screen flex flex-col justify-center items-center z-10"
      style={{
        backgroundImage: `url(${Second})`,
        backgroundColor: "rgba(0, 0, 0, 0.9)",
      }}
    >
      {success ? (
        <SuccessfulReservation />
      ) : (
        <form className="font-semibold text-white bg-amber-600 p-8 rounded-lg shadow-md mx-5">
          <h1 className="text-center text-3xl mb-5 font-bold">Menü</h1>
          <div className="flex flex-wrap">
            {listing.map((item, index) => {
              const isLastItem = index === listing.length - 1;
              const nextItem = listing[index + 1];

              if (index % 4 === 0) {
                return (
                  <div key={index} className="flex w-full mb-4">
                    {/* 1. Kart */}
                    <div className="bg-amber shadow-lg rounded-lg flex w-1/4 p-3 mr-3">
                      <img
                        src={item.img}
                        alt="Resim"
                        className="w-24 h-24 m-4"
                      />
                      <div className="p-4 justify-between w-full text-center">
                        <h2 className="text-lg font-semibold mb-2">
                          {item.isim}
                        </h2>
                        <p className="text-white-600 text-sm">₺ {item.price}</p>
                        <div className="mt-3 flex justify-center items-center">
                          <button
                            className="bg-red-500 text-white py-1 px-3 rounded ml-4"
                            onClick={decraseAmount}
                            value={item.isim}
                          >
                            -
                          </button>
                          <span className="ml-3">{item.amount}</span>
                          <button
                            className="bg-red-500 text-white py-1 px-2 rounded ml-4"
                            onClick={incraseAmount}
                            value={item.isim}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* 2. Kart */}
                    {nextItem && (
                      <div className="bg-amber shadow-lg rounded-lg flex w-1/4 p-3 mr-3">
                        <img
                          src={nextItem.img}
                          alt="Resim"
                          className="w-24 h-24 m-4"
                        />
                        <div className="p-4 justify-between w-full text-center">
                          <h2 className="text-lg font-semibold mb-2">
                            {nextItem.isim}
                          </h2>
                          <p className="text-white-600 text-sm">
                            ₺ {nextItem.price}
                          </p>
                          <div className="mt-3 flex justify-center items-center">
                            <button
                              className="bg-red-500 text-white py-1 px-3 rounded ml-4"
                              onClick={decraseAmount}
                              value={nextItem.isim}
                            >
                              -
                            </button>
                            <span className="ml-3">{nextItem.amount}</span>
                            <button
                              className="bg-red-500 text-white py-1 px-2 rounded ml-4"
                              onClick={incraseAmount}
                              value={nextItem.isim}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 3. Kart */}
                    {index + 2 < listing.length && (
                      <div className="bg-amber shadow-lg rounded-lg flex w-1/4 p-3 mr-3">
                        <img
                          src={listing[index + 2].img}
                          alt="Resim"
                          className="w-24 h-24 m-4"
                        />
                        <div className="p-4 justify-between w-full text-center">
                          <h2 className="text-lg font-semibold mb-2">
                            {listing[index + 2].isim}
                          </h2>
                          <p className="text-white-600 text-sm">
                            ₺ {listing[index + 2].price}
                          </p>
                          <div className="mt-3 flex justify-center items-center">
                            <button
                              className="bg-red-500 text-white py-1 px-3 rounded ml-4"
                              onClick={decraseAmount}
                              value={listing[index + 2].isim}
                            >
                              -
                            </button>
                            <span className="ml-3">
                              {listing[index + 2].amount}
                            </span>
                            <button
                              className="bg-red-500 text-white py-1 px-2 rounded ml-4"
                              onClick={incraseAmount}
                              value={listing[index + 2].isim}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 4. Kart */}
                    {index + 3 < listing.length && (
                      <div className="bg-amber shadow-lg rounded-lg flex w-1/4 p-3">
                        <img
                          src={listing[index + 3].img}
                          alt="Resim"
                          className="w-24 h-24 m-4"
                        />
                        <div className="p-4 justify-between w-full text-center">
                          <h2 className="text-lg font-semibold mb-2">
                            {listing[index + 3].isim}
                          </h2>
                          <p className="text-white-600 text-sm">
                            ₺ {listing[index + 3].price}
                          </p>
                          <div className="mt-3 flex justify-center items-center">
                            <button
                              className="bg-red-500 text-white py-1 px-3 rounded ml-4"
                              onClick={decraseAmount}
                              value={listing[index + 3].isim}
                            >
                              -
                            </button>
                            <span className="ml-3">
                              {listing[index + 3].amount}
                            </span>
                            <button
                              className="bg-red-500 text-white py-1 px-2 rounded ml-4"
                              onClick={incraseAmount}
                              value={listing[index + 3].isim}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return null;
            })}
          </div>

          <h1 className="text-right text-xl mb-5 font-bold  mt-2">
            <span className="text-white bg-amber p-3 rounded-lg">
              Toplam: ₺ {totalPrice}
            </span>
          </h1>
          <div className="mb-5 flex items-center justify-center">
            <img
              src={Logo}
              alt="Logo"
              className="h-8 w-auto mx-auto cursor-pointer"
            />
          </div>
          <div className="mb-6 text-center">
            <button
              onClick={removeBasket}
              className="text-amber-700 bg-amber font-semibold py-2 px-4 rounded-lg bg-amber text-white py-2 px-4 rounded-lg text-center hover:bg-red-800 hover:text-white mt-4"
            >
              Sepeti Boşalt
            </button>
            <button
              onClick={createReservation}
              className="ml-5 text-amber-700 bg-white font-semibold py-2 px-4 rounded-lg bg-white text-amber-600 py-2 px-4 rounded-lg text-center hover:bg-amber-500 hover:text-white mt-4"
            >
              Rezervasyon Oluştur
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SecondPage;

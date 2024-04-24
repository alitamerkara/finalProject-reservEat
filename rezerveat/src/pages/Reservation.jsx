import React, { useState, useContext } from "react";
import background from "../../assets/background2.avif";
import Logo from "../../assets/logo.png";
import { IoPeopleOutline } from "react-icons/io5";
import { LiaCitySolid } from "react-icons/lia";
import { IoRestaurantOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { MainContext } from "../context/MainContext";
import SecondPage from "./SecondPage";

const Reservation = () => {
  const {
    cityValue,
    restaurts,
    handleClick,
    second,
    people,
    setPeople,
    data,
    setRestaurantValue,
    setHourValue,
    setDayValue,
    name,
    setName,
    surname,
    setSurname,
    phone,
    setPhone,
    email,
    setEmail,
  } = useContext(MainContext);
  const city = cityValue !== "" && cityValue !== "#";

  return (
    <div className="flex justify-center items-center w-full h-screen">
      {second ? (
        <SecondPage />
      ) : (
        <div
          className="bg-cover bg-center w-full h-screen flex flex-col justify-center items-center z-10"
          style={{
            backgroundImage: `url(${background})`,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          }}
        >
          <form className="font-semibold w-full max-w-lg text-white bg-amber-600 p-8 rounded-lg shadow-md">
            <div className="mb-5 flex items-center justify-center">
              <img
                src={Logo}
                alt="Logo"
                className="h-8 w-auto mx-auto cursor-pointer"
              />
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 pl-2">
                <label
                  htmlFor="options"
                  className="flex justify-flex-start items-center text-m font-semibold mb-2"
                >
                  <LiaCitySolid className="mr-3" />
                  Şehir
                </label>
                <select
                  id="options"
                  className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 text-center text-amber-600"
                  onChange={data}
                >
                  <option value="#">Seçiniz</option>
                  <option value="Ankara">Ankara</option>
                  <option value="İstanbul">İstanbul</option>
                  <option value="İzmir">İzmir</option>
                </select>
              </div>
              <div className="w-1/2 pl-2">
                <label
                  htmlFor="options"
                  className=" flex justify-flex-start items-center text-m font-semibold mb-2"
                >
                  <IoRestaurantOutline className="mr-3" />
                  Restoran
                </label>
                <select
                  {...(city ? null : { disabled: true })}
                  onChange={(e) => {
                    setRestaurantValue(e.target.value);
                  }}
                  id="options"
                  className=" text-center w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 text-amber-600"
                >
                  <option value="option1">Seçiniz</option>
                  {restaurts?.map((item, index) => {
                    return (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 pl-2">
                <label
                  htmlFor="options"
                  className="flex justify-flex-start items-center text-m font-semibold mb-2"
                >
                  <CiCalendarDate className="mr-3" />
                  Gün Seçiniz
                </label>
                <select
                  onChange={(e) => {
                    setDayValue(e.target.value);
                  }}
                  id="options"
                  className="text-center w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 text-amber-600"
                  {...(city ? null : { disabled: true })}
                >
                  <option value="#">Seçiniz</option>
                  <option value="Pazartesi">Pazartesi</option>
                  <option value="Salı">Salı</option>
                  <option value="Çarşamba">Çarşamba</option>
                  <option value="Perşembe">Perşembe</option>
                  <option value="Cuma">Cuma</option>
                  <option value="Cumartesi">Cumartesi</option>
                  <option value="Pazar">Pazar</option>
                </select>
              </div>
              <div className="w-1/2 pl-2">
                <label
                  htmlFor="options"
                  className="flex justify-flex-start items-center text-m font-semibold mb-2"
                >
                  <FaRegClock className="mr-3" />
                  Saat Seçiniz
                </label>
                <select
                  onChange={(e) => {
                    setHourValue(e.target.value);
                  }}
                  id="options"
                  className="text-center w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 text-amber-600"
                  {...(city ? null : { disabled: true })}
                >
                  <option value="#">Seçiniz</option>
                  <option value="09.00">09.00</option>
                  <option value="10.00">10.00</option>
                  <option value="11.00">11.00</option>
                  <option value="12.00">12.00</option>
                  <option value="13.00">13.00</option>
                  <option value="14.00">14.00</option>
                  <option value="15.00">15.00</option>
                  <option value="16.00">16.00</option>
                  <option value="17.00">17.00</option>
                  <option value="18.00">18.00</option>
                  <option value="19.00">19.00</option>
                  <option value="20.00">20.00</option>
                  <option value="21.00">21.00</option>
                  <option value="22.00">22.00</option>
                </select>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 pl-2">
                <label
                  htmlFor="options"
                  className="flex justify-flex-start items-center text-m font-semibold mb-2"
                >
                  <IoPeopleOutline className="mr-3" />
                  Kişi sayısı seçiniz
                </label>
                <input
                  value={people}
                  onChange={(e) => {
                    if (people <= 0) {
                      alert("Kişi sayısı 1 den küçük olamaz!");
                      setPeople(1);
                    } else {
                      setPeople(parseInt(e.target.value));
                    }
                  }}
                  id="number"
                  type="number"
                  placeholder="Kişi Sayısı Girin"
                  className="text-center w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 text-amber-600"
                  {...(city ? null : { disabled: true })}
                />
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 pl-2">
                <label
                  htmlFor="options"
                  className="flex justify-flex-start items-center text-m font-semibold mb-2"
                >
                  <MdDriveFileRenameOutline className="mr-3" />
                  Adınız
                </label>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Adınızı Girin"
                  id="text"
                  type="text"
                  className="text-center w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 text-amber-600"
                  {...(city ? null : { disabled: true })}
                />
              </div>
              <div className="w-1/2 pl-2">
                <label
                  htmlFor="options"
                  className="flex justify-flex-start items-center text-m font-semibold mb-2"
                >
                  <MdDriveFileRenameOutline className="mr-3" />
                  Soyadınız
                </label>
                <input
                  value={surname}
                  onChange={(e) => {
                    setSurname(e.target.value);
                  }}
                  id="text"
                  type="text"
                  placeholder="Soyadınızı Girin"
                  className="text-center w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 text-amber-600"
                  {...(city ? null : { disabled: true })}
                />
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 pl-2">
                <label
                  htmlFor="options"
                  className="flex justify-flex-start items-center text-m font-semibold mb-2"
                >
                  <MdOutlinePhone className="mr-3" />
                  Telefon Numaranız
                </label>
                <input
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  id="text"
                  type="tel"
                  placeholder="Telefon Numaranızı Girin"
                  className="text-center w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 text-amber-600"
                  {...(city ? null : { disabled: true })}
                />
              </div>
              <div className="w-1/2 pl-2">
                <label
                  htmlFor="options"
                  className="flex justify-flex-start items-center text-m font-semibold mb-2"
                >
                  <MdAlternateEmail className="mr-3" />
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="text"
                  type="email"
                  placeholder="Emailinizi Girin"
                  className="text-center w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 text-amber-600"
                  {...(city ? null : { disabled: true })}
                />
              </div>
            </div>
            <div className="mb-6 text-center">
              <button
                onClick={handleClick}
                className="text-amber-700 bg-white font-semibold py-2 px-4 rounded-lg bg-white text-amber-600 py-2 px-4 rounded-lg text-center hover:bg-amber-700 hover:text-white mt-4"
              >
                Menüye Git
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Reservation;

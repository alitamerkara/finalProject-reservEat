import React, { createContext, useState } from "react";
import ciger from "../../assets/meals/ciger.jpg";
import doner from "../../assets/meals/doner.webp";
import hamburger from "../../assets/meals/hamburger.webp";
import kebap from "../../assets/meals/kebap.jpg";
import pide from "../../assets/meals/pide.jpg";
import pizza from "../../assets/meals/pizza.jpg";
import ayran from "../../assets/meals/ayran.jpg";
import kola from "../../assets/meals/kola.jpg";
import { useNavigate } from "react-router-dom";
export const MainContext = createContext();
import axios from "axios";
export const ContextProvider = ({ children }) => {
  const [cityValue, setCityValue] = useState("");
  const [restaurantValue, setRestaurantValue] = useState("");
  const [hourValue, setHourValue] = useState("");
  const [dayValue, setDayValue] = useState("");
  const [people, setPeople] = useState(1);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [restaurts, setRestaurants] = useState([]);
  const [meals, setMeals] = useState([]);
  const [second, setSecond] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [success, setSuccess] = useState(false);
  const [active, setActive] = useState([]);
  const meal = [
    { isim: "Kebap", img: kebap, price: 220, updatedPrice: 220, amount: 0 },
    {
      isim: "Hamburger",
      img: hamburger,
      price: 200,
      updatedPrice: 200,
      amount: 0,
    },
    { isim: "Pizza", img: pizza, price: 150, updatedPrice: 150, amount: 0 },
    { isim: "Döner", img: doner, price: 120, updatedPrice: 120, amount: 0 },
    { isim: "Pide", img: pide, price: 150, updatedPrice: 150, amount: 0 },
    { isim: "Ciğer", img: ciger, price: 170, updatedPrice: 170, amount: 0 },
    { isim: "Kola", img: kola, price: 30, updatedPrice: 30, amount: 0 },
    { isim: "Ayran", img: ayran, price: 20, updatedPrice: 20, amount: 0 },
  ];
  const navigate = useNavigate();

  let listing = meals.length > 0 ? meals : meal;
  const handleClick = (e) => {
    e.preventDefault();
    if (
      cityValue == "" ||
      restaurts == [] ||
      dayValue == "" ||
      hourValue == "" ||
      people == "" ||
      name == "" ||
      surname == "" ||
      phone == "" ||
      email == ""
    ) {
      alert("Lütfen gerekli kısımları doldurunuz");
    } else {
      setSecond(true);
      navigate("/reservation/second");
    }
  };
  const data = (e) => {
    const value = e.target.value;
    if (value !== "#" && value !== "") {
      if (value === "Ankara") {
        setRestaurants(cities.Ankara.name);
        setCityValue("Ankara");
      } else if (value === "İstanbul") {
        setRestaurants(cities.İstanbul.name);
        setCityValue("İstanbul");
      } else if (value === "İzmir") {
        setRestaurants(cities.İzmir.name);
        setCityValue("İzmir");
      }
    }
  };
  const decraseAmount = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const newList = listing.map((item) => {
      if (item.isim == value && item.amount > 0) {
        setTotalPrice(totalPrice - item.price);
        return {
          ...item,
          amount: item.amount - 1,
        };
      } else {
        return {
          ...item,
        };
      }
    });
    setMeals(newList);
    console.log(totalPrice);
  };
  const incraseAmount = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const newList = listing.map((item) => {
      if (item.isim == value) {
        setTotalPrice(totalPrice + item.price);
        return {
          ...item,
          amount: item.amount + 1,
        };
      } else {
        return item;
      }
    });
    setMeals(newList);
    console.log(totalPrice);
  };
  const removeBasket = (e) => {
    e.preventDefault();
    setMeals([]);
    setTotalPrice(0);
  };
  const createReservation = async (e) => {
    e.preventDefault();
    if (listing == meal) {
      alert("Lütfen Sipariş Seçimi Yapın");
    } else if (listing != meal && totalPrice < 500) {
      alert("Sipariş tutarı minimum ₺ 500 olmalıdır");
    } else {
      const response = await axios.post("http://localhost:3000/active", {
        cityValue,
        restaurantValue,
        name,
        surname,
        people,
        dayValue,
        hourValue,
      });
      setSuccess(true);
      navigate("/reservation/success");
      setCityValue("");
      setPeople("");
      setPhone("");
      setEmail("");
    }
  };
  const cities = {
    Ankara: {
      name: ["Göksu restoran", "Masabaşı Kebap", "Ciğerci Usta"],
      meals: [
        "Kebap",
        "Hamburger",
        "Pizza",
        "Döner",
        "Pide",
        "Ciğer",
        "Lahmacun",
        "Şiş",
      ],
    },
    İstanbul: {
      name: ["Nusr-et", "Ev Yemekleri Restoran", "Müslüm Kebap"],
      meals: [
        "Pide",
        "Ciğer",
        "Kebap",
        "Döner",
        "Hamburger",
        "Lahmacun",
        "Şiş",
        "Pizza",
      ],
    },
    İzmir: {
      name: ["Kajun", "Nusr-et", "Köfteci Yusuf"],
      meals: [
        "Izgara",
        "Pide",
        "Ciğer",
        "Kebap",
        "Döner",
        "Çıtır Tavuk",
        "Hamburger",
        "Lahmacun",
        "Şiş",
        "Pizza",
      ],
    },
  };
  const values = {
    cities,
    cityValue,
    setCityValue,
    restaurts,
    setRestaurants,
    meals,
    setMeals,
    handleClick,
    second,
    setSecond,
    meal,
    decraseAmount,
    incraseAmount,
    data,
    totalPrice,
    listing,
    removeBasket,
    createReservation,
    restaurantValue,
    setRestaurantValue,
    hourValue,
    setHourValue,
    dayValue,
    setDayValue,
    people,
    setPeople,
    name,
    setName,
    surname,
    setSurname,
    phone,
    setPhone,
    email,
    setEmail,
    success,
    setSuccess,
    setTotalPrice,
    active,
    setActive,
  };
  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

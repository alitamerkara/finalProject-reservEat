import { useContext } from "react";
import { MainContext } from "./context/MainContext";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Navbar from "./Navbar";
import Footer from "./pages/Footer";
import SecondPage from "./pages/SecondPage";
import "./App.css";
import SuccessfulReservation from "./pages/SuccessfulReservation";
import Active from "./pages/Active";

function App() {
  const {} = useContext(MainContext);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/reservation/second" element={<SecondPage />} />
        <Route path="/active" element={<Active />} />
        <Route
          path="/reservation/success"
          element={<SuccessfulReservation />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

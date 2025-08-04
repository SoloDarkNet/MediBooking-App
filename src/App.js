import Header from "./Components/Header";
import Doctors from "./Components/Doctors";
import DoctorsCard from "./Components/DoctorsCard";
import BookingAppointments from "./Components/BookingAppointment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/" element={<Doctors />} />
        <Route path="/doctor" element={<DoctorsCard />} />
        <Route path="/booking" element={<BookingAppointments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { FaStethoscope } from "react-icons/fa";
import { Link } from "react-router-dom";
import Doctors from "../Doctors";
import "./index.css";

const Header = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <div className="App">
        <div className="logo-heading">
          <FaStethoscope color="#ADD8E6" size={50} className="logo-size" />
          <h1 className="heading pt-5" style={{ color: "black" }}>
            MediBook
          </h1>
        </div>
        <div className="des">
          <p>
            Your health, simplified. Find and book appointments with top
            doctors.
          </p>
        </div>
      </div>
      <Doctors />
    </Link>
  );
};

export default Header;

import React, { UseState, Redirect } from "react";
import DoctorsCard from "../DoctorsCard";
import DoctorDetails from "../../Context/DoctorDetailsContext";
import "bootstrap/dist/css/bootstrap.min.css";
import BookingAppointments from "../BookingAppointment";
import { Link } from "react-router-dom";
import "./index.css";

const Doctors = () => (
  <DoctorDetails.Consumer>
    {(value) => {
      const { doctorDetails } = value;
      return (
        <Link to="/" className="no-link-color">
          <div>
            <h1 style={{ color: "black" }}>
              Available Doctors({doctorDetails.length})
            </h1>
            <DoctorsCard key={doctorDetails.id} />
          </div>
        </Link>
      );
    }}
  </DoctorDetails.Consumer>
);

export default Doctors;

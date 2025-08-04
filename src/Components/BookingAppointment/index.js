import DoctorDetails from "../../Context/DoctorDetailsContext";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import Button from "react-bootstrap/Button";
import { GoClock } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { Link } from "react-router-dom";
import "./index.css";

const BookingAppointments = () => (
  <DoctorDetails.Consumer>
    {(value) => {
      const { times, availableDates, doctorDetails } = value;
      const photos = doctorDetails.map((doctor) => {
        return {
          name: doctor.name,
          avatar: doctor.avatar,
          speciality: doctor.specialty,
          id: doctor.id,
        };
      });

      return (
        <Link to="/booking" style={{ textDecoration: "none", color: "black" }}>
          <div className="doctors-card">
            {photos.map((doc) => (
              <div className="imgs">
                <div key={doc.id} className="head">
                  <img src={doc.avatar} className="imgs" />
                  <div className="details">
                    <h1 className="head-name">{doc.name}</h1>
                    <p className="para">{doc.speciality}</p>
                  </div>
                  <div className="x">
                    <IoCloseCircleOutline color="white" />
                  </div>
                </div>
                <div className="d-flex p-3">
                  <CiCalendar size={22} />
                  <h6 className="date">Select Date</h6>
                </div>
                <div>
                  {availableDates.map((d) => (
                    <Button id="secondary">
                      {new Date(d).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </Button>
                  ))}
                  {/*Selected Time*/}
                </div>
                <div className="d-flex flex-column p-3">
                  <div className="d-flex p-1">
                    <GoClock size={22} />
                    <h6 className="date">Select Time</h6>
                  </div>
                  <div>
                    {times.map((t) => (
                      <button id="secondary">{t}</button>
                    ))}
                  </div>
                </div>

                {/* Patient Information */}
                <form>
                  <div className="p-3">
                    <div className="d-flex p-2">
                      <GoPeople size={22} />
                      <h6 className="" id="people">
                        Patient Information
                      </h6>
                    </div>

                    <div className="p-3">
                      <div className="d-flex flex-column">
                        <div>
                          <h6 htmlFor="name">Full Name *</h6>
                        </div>
                        <div>
                          <input
                            className="input"
                            id="name"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>

                      <div>
                        <h6 htmlFor="phone">Phone Number *</h6>
                        <input
                          className="input"
                          id="phone"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div className="p-3">
                      <h6 htmlFor="email">Email Address</h6>
                      <input
                        className="input"
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div className="p-3">
                      <h6 htmlFor="reason">Reason for Visit</h6>
                      <textarea
                        className="text"
                        id="reason"
                        placeholder="Briefly describe your symptoms or reason for consultation"
                        rows={3}
                      />
                    </div>
                  </div>
                  <div className="btn-container p-3 d-flex flex-row justify-content-between">
                    <button className="cancel">Cancel</button>
                    <button className="cancel1">Confirm Appointments</button>
                  </div>
                </form>
              </div>
            ))}
          </div>
        </Link>
      );
    }}
  </DoctorDetails.Consumer>
);
export default BookingAppointments;

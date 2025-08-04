import img1 from "../../images/vecteezy_doctor-posing-portrait-photo_27298490.jpg";
import img2 from "../../images/vecteezy_young-female-doctor-with-stethoscope-over-white-background_6240044.jpg";
import img3 from "../../images/vecteezy_medical-background-with-doctor-illustration_24534378.jpg";
import img4 from "../../images/vecteezy_smart-woman-doctor-is-holding-stethoscope_5140371.jpg";
import { FaStar } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "General Physician",
    rating: 4.8,
    experience: 12,
    location: "Downtown Medical Center",
    avatar: img2,
    consultationFee: 150,
    nextAvailable: "Today, 2:30 PM",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Cardiologist",
    rating: 4.9,
    experience: 15,
    location: "Heart Care Institute",
    avatar: img1,
    consultationFee: 200,
    nextAvailable: "Tomorrow, 10:00 AM",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    rating: 4.7,
    experience: 8,
    location: "Children's Health Clinic",
    avatar: img4,
    consultationFee: 120,
    nextAvailable: "Today, 4:00 PM",
  },
  {
    id: 4,
    name: "Dr. David Thompson",
    specialty: "Orthopedic Surgeon",
    rating: 4.6,
    experience: 20,
    location: "Bone & Joint Center",
    avatar: img3,
    consultationFee: 250,
    nextAvailable: "Aug 5, 9:00 AM",
  },
];

const DoctorsCard = () => {
  const navigate = useNavigate();
  const handleBookingAppointment = () => {
    navigate("/booking");
  };
  const findDoctorDetails = doctors.map((doctor) => {
    return (
      <Link to="/doctor" style={{ textDecoration: "none" }}>
        <div className="display-cards">
          <div className="card m-4">
            <div>
              <div className="d-flex p-3">
                <div className="logo">
                  <img
                    src={doctor.avatar}
                    alt={doctor.name}
                    className="img-style"
                  />
                </div>
                <div className="details">
                  <h1 key={doctor.id} className="doctorsName">
                    {doctor.name}
                  </h1>
                  <p className="speciality">{doctor.specialty}</p>
                  <div className="rating-exp d-flex ">
                    <div className="star d-flex ">
                      <FaStar color="gold" size={20} />
                      <p>{doctor.rating}</p>
                    </div>

                    <p id="Badge">{doctor.experience}+ years</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="location d-flex">
              <SlLocationPin />
              <p className="location-place">{doctor.location}</p>
            </div>

            <div className="location d-flex">
              <FaRegClock color="gray" />
              <p className="location-place">
                Next available:{doctor.nextAvailable}
              </p>
            </div>
            <hr className="m-2" />

            <div className="consulting-bookAppointment d-flex justify-content-between p-2">
              <div>
                <p className="location-place">Consulation Fee</p>
                <h6 className="location-place1">${doctor.consultationFee}</h6>
              </div>
              <button onClick={handleBookingAppointment} id="bg-gradient">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </Link>
    );
  });
  return findDoctorDetails;
};
export default DoctorsCard;

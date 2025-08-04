import React from "react";
import img1 from "../images/vecteezy_smart-woman-doctor-is-holding-stethoscope_5140371.jpg";
import img2 from "../images/vecteezy_doctor-posing-portrait-photo_27298490.jpg";
import img3 from "../images/vecteezy_young-female-doctor-with-stethoscope-over-white-background_6240044.jpg";
import img4 from "../images/vecteezy_group-of-medical-staff-at-hospital-doctor-in-front-of-team_12432079.jpg";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "General Physician",
    rating: 4.8,
    experience: 12,
    location: "Downtown Medical Center",
    avatar: img1,
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
    avatar: img2,
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
    avatar: img3,
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
    avatar: img4,
    consultationFee: 250,
    nextAvailable: "Aug 5, 9:00 AM",
  },
];

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
];

const availableDates = [
  "2024-08-02",
  "2024-08-03",
  "2024-08-05",
  "2024-08-06",
  "2024-08-07",
];

const DoctorDetails = React.createContext({
  doctorDetails: doctors,
  times: timeSlots,
  availableDates: availableDates,
});
export default DoctorDetails;

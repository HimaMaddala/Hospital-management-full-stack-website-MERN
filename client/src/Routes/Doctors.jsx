import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Doctors.css';
import DatePicker from "react-datepicker";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import "react-datepicker/dist/react-datepicker.css";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const [genderFilter, setGenderFilter] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');
  const [hospitalFilter, setHospitalFilter] = useState('');
  const [uniqueSpecialties, setUniqueSpecialties] = useState([]);
  const [uniqueHospitals, setUniqueHospitals] = useState([]);

  const [showDatePicker, setShowDatePicker] = useState({});
  const [selectedDate, setSelectedDate] = useState({});
  const [selectedTimeSlot, setSelectedTimeSlot] = useState({});
  const [selectedSlot, setSelectedSlot] = useState({});
  const [status, setStatus] = useState("Pending");

  const [availability, setAvailability] = useState({});

  // Fetch doctors from the server on component mount
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:3001/doctors');
        const fetchedDoctors = response.data.map(doctor => ({
          ...doctor,
          formName: '',
          formPhone: ''
        }));
        setDoctors(fetchedDoctors);
        setFilteredDoctors(fetchedDoctors);
        extractFilters(fetchedDoctors);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };
    fetchDoctors();
  }, []);

  // Re-filter doctors whenever filter values change
  useEffect(() => {
    filterDoctors();
  }, [genderFilter, specialtyFilter, experienceFilter, hospitalFilter]);

  const extractFilters = (data) => {
    const specialties = Array.from(new Set(data.map(item => item.speciality)));
    const hospitals = Array.from(new Set(data.map(item => item.hospital)));
    setUniqueSpecialties(specialties);
    setUniqueHospitals(hospitals);
  };

  const filterDoctors = () => {
    let filtered = doctors;
    if (genderFilter) filtered = filtered.filter(doctor => doctor.gender === genderFilter);
    if (specialtyFilter) filtered = filtered.filter(doctor => doctor.speciality === specialtyFilter);
    if (experienceFilter) {
      const [minExp, maxExp] = experienceFilter.split('-').map(Number);
      filtered = filtered.filter(doctor => doctor.experience >= minExp && doctor.experience <= maxExp);
    }
    if (hospitalFilter) filtered = filtered.filter(doctor => doctor.hospital === hospitalFilter);
    setFilteredDoctors(filtered);
  };

  const handleBookAppointmentClick = (doctorId) => {
    setShowDatePicker(prev => ({ ...prev, [doctorId]: true }));
  };

  const handleDateChange = (doctorId, date) => {
    setSelectedDate(prev => ({ ...prev, [doctorId]: date }));
    setShowDatePicker(prev => ({ ...prev, [doctorId]: false }));
  };

  const handleTimeSlotChange = (doctorId, timeSlot) => {
    setSelectedSlot(prev => ({ ...prev, [doctorId]: timeSlot }));
    setSelectedTimeSlot(prev => ({ ...prev, [doctorId]: timeSlot }));
  };

  const handleCheckAvailability = async (doctorId) => {
    const date = selectedDate[doctorId];
    if (!date) {
      alert('Please select a date first.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3001/check_availability', { doctor_id: doctorId, date });
      setAvailability(prev => ({ ...prev, [doctorId]: response.data }));
    } catch (error) {
      console.error('Error checking availability:', error);
    }
  };

  const renderSlots = (doctorId) => {
    if (!availability[doctorId]) return null;
    return (
      <div>
        <div className="slots-grid">
          {availability[doctorId].map(slot => (
            <div
              key={slot.time}
              className={`slot ${slot.booked ? 'booked' : 'available'}`}
              onClick={() => !slot.booked && handleTimeSlotChange(doctorId, slot.time)}
              style={{ backgroundColor: slot.booked ? 'red' : 'green', cursor: slot.booked ? 'not-allowed' : 'pointer' }}
            >
              {slot.time}
            </div>
          ))}
        </div>
        {selectedSlot[doctorId] && <p>Selected Slot: {selectedSlot[doctorId]}</p>}
      </div>
    );
  };

  const handleNameChange = (e, doctorId) => {
    const updatedDoctors = filteredDoctors.map(doctor => {
      if (doctor._id === doctorId) return { ...doctor, formName: e.target.value };
      return doctor;
    });
    setFilteredDoctors(updatedDoctors);
  };

  const handlePhoneChange = (e, doctorId) => {
    const updatedDoctors = filteredDoctors.map(doctor => {
      if (doctor._id === doctorId) return { ...doctor, formPhone: e.target.value };
      return doctor;
    });
    setFilteredDoctors(updatedDoctors);
  };

  const handleSubmit = async (e, doctorId) => {
    e.preventDefault();
    const doctor = filteredDoctors.find(doctor => doctor._id === doctorId);
    const details = {
      doctor_id: doctorId,
      name: doctor.formName,
      phone: doctor.formPhone,
      date: selectedDate[doctorId],
      slot: selectedTimeSlot[doctorId],
      status
    };
    try {
      await axios.post('http://localhost:3001/book_appointment', details);
      console.log('Appointment booked successfully:', details);
      // Clear form fields after successful booking
      setFilteredDoctors(filteredDoctors.map(doc => {
        if (doc._id === doctorId) {
          return { ...doc, formName: '', formPhone: '' };
        }
        return doc;
      }));
      setSelectedDate(prev => ({ ...prev, [doctorId]: null }));
      setSelectedTimeSlot(prev => ({ ...prev, [doctorId]: null }));
      setSelectedSlot(prev => ({ ...prev, [doctorId]: null }));
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  return (
    <>
      <Header />
      <div>
        <h2 style={{ marginLeft: '90px', fontFamily: 'Poppins, sans-serif', fontSize: '38px', fontWeight: 'bold' }}>Choose your <span style={{ color: '#1A76D1', fontWeight: 'bold' }}>Doctor</span></h2>
        <div className="filterscard">
          <select onChange={(e) => setGenderFilter(e.target.value)} value={genderFilter}>
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <select onChange={(e) => setSpecialtyFilter(e.target.value)} value={specialtyFilter}>
            <option value="">All Specialties</option>
            {uniqueSpecialties.map(specialty => (
              <option key={specialty} value={specialty}>{specialty}</option>
            ))}
          </select>

          <select onChange={(e) => setExperienceFilter(e.target.value)} value={experienceFilter}>
            <option value="">All Experience Levels</option>
            <option value="1-3">1-3 years</option>
            <option value="3-6">3-6 years</option>
            <option value="6-10">6-10 years</option>
            <option value="10+">10+ years</option>
          </select>

          <select onChange={(e) => setHospitalFilter(e.target.value)} value={hospitalFilter}>
            <option value="">All Hospitals</option>
            {uniqueHospitals.map(hospital => (
              <option key={hospital} value={hospital}>{hospital}</option>
            ))}
          </select>
        </div>
        <div className='doctor-card'>
          <ul>
            {filteredDoctors.map((doctor) => (
              <li key={doctor._id} className='doctor-info'>
                <div className='doctor-image first-col'>
                  <img src={doctor.img_url} alt={`${doctor.name}'s profile`} />
                </div>
                <div className='second-col'>
                  <h2 style={{fontFamily:'sans-serif'}}>{doctor.name}</h2>
                  <p>Hospital: {doctor.hospital}</p>
                  <p>Specialty: {doctor.speciality}</p>
                  <p>Experience: {doctor.experience} years</p>
                  <p>Qualification: {doctor.qualification}</p>
                  <p>Gender: {doctor.gender}</p>
                </div>
                <div className='third-col'>
                  <div className='date_pick_input'>
                    <button className='button-54' onClick={() => handleBookAppointmentClick(doctor._id)}>Choose date</button>
                    {selectedDate[doctor._id] && <p>Selected Date: {new Date(selectedDate[doctor._id]).toLocaleDateString('en-GB')}</p>}
                    {showDatePicker[doctor._id] && (
                    <DatePicker
                      label="Select appointment date"
                      selected={selectedDate[doctor._id]}
                      onChange={(date) => handleDateChange(doctor._id, date)}
                    />
                  )}
                  </div>
                  <button className='button-54 check_availibility' onClick={() => handleCheckAvailability(doctor._id)}>Check Availability</button>
                  {renderSlots(doctor._id)}
                  <form onSubmit={(e) => handleSubmit(e, doctor._id)}>
                    <label>
                      Name:
                      <input type="text" value={doctor.formName} onChange={(e) => handleNameChange(e, doctor._id)} />
                    </label>
                    <br />
                    <label>
                      Phone:
                      <input type="text" value={doctor.formPhone} onChange={(e) => handlePhoneChange(e, doctor._id)} />
                    </label>
                    <br />
                    <button className='button-54'>Submit</button>
                  </form>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Doctors;


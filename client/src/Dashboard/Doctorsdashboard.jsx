import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Doctorsdashboard.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import LineChart from '../Charts/Linechart';
import Card from '../Components/Card';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomBarChart from '../Charts/Barchart';

const Doctordashboard = () => {
  const { doctorId } = useParams();
  const [appointments, setAppointments] = useState([]);
  const [doctor, setDoctor] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });
  const [startDate, setStartDate] = useState(new Date(2024, 4, 28)); // 28/5/24
  const [endDate, setEndDate] = useState(new Date(2024, 5, 3)); // 3/6/24
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 4, 30)); // 30/5/24
  const [barChartData, setBarChartData] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/fetch_appointments/${doctorId}`);
        setAppointments(response.data);
      } catch (error) {
        setError('Failed to fetch appointments');
      } finally {
        setLoading(false);
      }
    };

    const fetchDoctorDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3001/doctors');
        const doctorData = response.data.find(doctor => doctor._id === doctorId);
        setDoctor(doctorData || {});
      } catch (error) {
        setError('Failed to fetch doctor details');
      }
    };

    fetchAppointments();
    fetchDoctorDetails();
  }, [doctorId]);

  const sortAppointments = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedAppointments = [...appointments].sort((a, b) => {
      if (key === 'date') {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        if (dateA < dateB) {
          return direction === 'asc' ? -1 : 1;
        }
        if (dateA > dateB) {
          return direction === 'asc' ? 1 : -1;
        }
        if (dateA.getTime() === dateB.getTime()) {
          const parseTime = (timeStr) => {
            const [hours, minutes] = timeStr.split('-')[0].split(':');
            return new Date(0, 0, 0, parseInt(hours), parseInt(minutes));
          };
          const timeA = parseTime(a.slot);
          const timeB = parseTime(b.slot);
          return direction === 'asc' ? timeA - timeB : timeB - timeA;
        }
        return 0;
      } else if (key === 'slot') {
        const parseTime = (timeStr) => {
          const [hours, minutes] = timeStr.split('-')[0].split(':');
          return new Date(0, 0, 0, parseInt(hours), parseInt(minutes));
        };
        const timeA = parseTime(a.slot);
        const timeB = parseTime(b.slot);
        return direction === 'asc' ? timeA - timeB : timeB - timeA;
      }
      return 0;
    });
    setAppointments(sortedAppointments);
  };

  const updateStatus = async (appointmentId, newStatus) => {
    try {
      await axios.put(`http://localhost:3001/update_status/${appointmentId}`, { status: newStatus });

      setAppointments(prevAppointments =>
        prevAppointments.map(appointment =>
          appointment._id === appointmentId ? { ...appointment, status: newStatus } : appointment
        )
      );
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const filterAppointmentsByDateRange = (start, end) => {
    const filteredAppointments = appointments.filter(appointment => {
      const appointmentDate = new Date(appointment.date);
      return appointmentDate >= start && appointmentDate <= end;
    });
  
    const appointmentCounts = {};
    filteredAppointments.forEach(appointment => {
      const date = new Date(appointment.date).toLocaleDateString();
      appointmentCounts[date] = (appointmentCounts[date] || 0) + 1;
    });
  
    const data = [];
    for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
      const formattedDate = date.toLocaleDateString();
      const count = appointmentCounts[formattedDate] || 0;
      data.push({ date: formattedDate, count });
    }
  
    return data;
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSelectedDateChange = (date) => {
    setSelectedDate(date);
    updateBarChartData(date);
  };

  const updateBarChartData = (date) => {
    if (!date) return;
    const selectedDateStr = date.toLocaleDateString('en-GB');
    const slotCounts = {};

    appointments.forEach(appointment => {
      if (new Date(appointment.date).toLocaleDateString('en-GB') === selectedDateStr) {
        slotCounts[appointment.slot] = (slotCounts[appointment.slot] || 0) + 1;
      }
    });

    const data = [];
    const slots = ["09:00-10:00", "10:00-11:00", "11:00-12:00",
      "12:00-13:00", "13:00-14:00", "14:00-15:00", "15:00-16:00",
      "16:00-17:00", "17:00-18:00"
    ];

    slots.forEach(slot => {
      data.push({ slot, count: slotCounts[slot] || 0 });
    });

    setBarChartData(data);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Intl.DateTimeFormat('en-GB', options).format(new Date(dateString));
  };

  return (
    <>
      <Header />
      <div className='appointment_table'>
        <h1 style={{ marginLeft: '500px', fontFamily: 'Poppins, sans-serif', fontSize: '38px', fontWeight: '' }}>Doctor Dashboard</h1>
        <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '38px', fontWeight: 'bold' }}>Welcome <span style={{ color: '#1A76D1', fontWeight: 'bold' }}>{doctor.name}</span></h1>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '38px' }}>Your Appointments</h2>
      <div className='dashboard_d'>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <Card title="Completed" value={appointments.filter(appointment => appointment.status === 'Completed').length} className="card" />
  <Card title="Pending" value={appointments.filter(appointment => appointment.status === 'Pending').length} className="card" />
  <Card title="Rejected" value={appointments.filter(appointment => appointment.status === 'Reject').length} className="card" />
</div>

        <div className='charts_analysis'>
        <div className='linechart_analysis'>
        <div style={{ marginLeft: '145px' }}>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select start date"
          />
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select end date"
          />
        </div>
        <LineChart data={filterAppointmentsByDateRange(startDate, endDate)} />
        </div>
        <div className="barchart_analysis" style={{ marginTop: '20px',marginLeft:'' }}>
          <DatePicker
            selected={selectedDate}
            onChange={handleSelectedDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
          />
        <CustomBarChart data={barChartData} />
        </div>
        </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th onClick={() => sortAppointments('date')}>Date
                <i className={`bi ${sortConfig.key === 'date' ? (sortConfig.direction === 'asc' ? 'bi-sort-down' : 'bi-sort-up') : 'bi-sort'}`}></i>
              </th>
              <th onClick={() => sortAppointments('slot')}>Slot
                <i className={`bi ${sortConfig.key === 'slot' ? (sortConfig.direction === 'asc' ? 'bi-sort-down' : 'bi-sort-up') : 'bi-sort'}`}></i>
              </th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={appointment._id}>
                <td>{index + 1}</td>
                <td>{appointment.name}</td>
                <td>{formatDate(appointment.date)}</td>
                <td>{appointment.slot}</td>
                <td>
                  {appointment.status === "Completed" && <i className="bi bi-check-circle-fill text-success"></i>}
                  {appointment.status === "Reject" && <i className="bi bi-x-circle-fill text-danger"></i>}
                  {appointment.status === "Pending" && <i className="bi bi-clock-fill text-warning"></i>}
                  <select
                    value={appointment.status}
                    onChange={(e) => updateStatus(appointment._id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="Reject">Reject</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Doctordashboard;

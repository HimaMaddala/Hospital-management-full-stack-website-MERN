import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import DoctorsModel from './models/Doctors.js';
import LogindoctorsModel from './models/Logindoctors.js';
import AppointmentModel from './models/Appointments.js';

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));

mongoose.connect('mongodb://127.0.0.1:27017/hospital');

app.get('/doctors', async (req, res) => {
    try {
        const doctors = await DoctorsModel.find();
        res.json(doctors);
    } catch (error) {
        console.error("Error fetching doctors:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await LogindoctorsModel.findOne({ email });

        if (!user) {
            return res.json({ Login: false, Message: "No record found" });
        }

        if (user.password !== password) {
            return res.json({ Login: false, Message: "Incorrect password" });
        }

        return res.json({ Login: true, doctor_id: user.doctor_id });
    } catch (error) {
        console.error("Error during login:", error.message);
        res.status(500).json({ Login: false, Message: "Internal server error" });
    }
});

app.post('/book_appointment', async (req, res) => {
    try {
        const { doctor_id, name, phone, date, slot, status } = req.body;
        const isBooked = await AppointmentModel.findOne({ doctor_id, date, slot });

        if (isBooked) {
            return res.status(400).json({ error: 'This slot is already booked.' });
        }

        const appointment = new AppointmentModel({ doctor_id, name, phone, date, slot, status });
        const savedAppointment = await appointment.save();
        
        res.status(201).json(savedAppointment);
    } catch (error) {
        console.error("Error booking appointment:", error.message);
        res.status(500).json({ error: error.message });
    }
});

app.get('/fetch_appointments/:doctorId', async (req, res) => {
    try {
        const { doctorId } = req.params;
        const appointments = await AppointmentModel.find({ doctor_id: doctorId });
        res.json(appointments);
    } catch (error) {
        console.error("Error fetching appointments:", error.message);
        res.status(500).json({ error: error.message });
    }
});

app.post('/check_availability', async (req, res) => {
    try {
        const { doctor_id, date } = req.body;
        const appointments = await AppointmentModel.find({ doctor_id, date });
        const bookedSlots = appointments.map(appt => appt.slot);

        const timeSlots = Array.from({ length: 9 }, (_, i) => ({
            time: `${i + 9}:00-${i + 10}:00`,
            booked: bookedSlots.includes(`${i + 9}:00-${i + 10}:00`)
        }));

        res.json(timeSlots);
    } catch (error) {
        console.error("Error checking availability:", error.message);
        res.status(500).json({ error: error.message });
    }
});

app.put('/update_status/:id', async (req, res) =>
  {
    try {
        const appointmentId = req.params.id;
        const { status } = req.body;

        // Check if the provided status is valid
        const validStatuses = ["Pending", "Completed", "Reject"];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ message: "Invalid status provided" });
        }

        // Update the appointment status in the database
        await AppointmentModel.findByIdAndUpdate(appointmentId, { status });

        res.status(200).json({ message: "Appointment status updated successfully" });
    } catch (error) {
        console.error("Error updating appointment status:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(3001, () => {
    console.log("Server is Running");
});

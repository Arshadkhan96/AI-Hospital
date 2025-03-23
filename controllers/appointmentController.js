const Appointment = require("../models/Appointment");

// @desc    Create an appointment
// @route   POST /api/appointments
const createAppointment = async (req, res) => {
  try {
    const { patientName, doctorName, date, time } = req.body;

    if (!patientName || !doctorName || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const appointment = new Appointment({ patientName, doctorName, date, time });
    await appointment.save();

    res.status(201).json({ message: "Appointment created successfully", appointment });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Get all appointments
// @route   GET /api/appointments
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Update an appointment
// @route   PUT /api/appointments/:id
const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAppointment = await Appointment.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedAppointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({ message: "Appointment updated", updatedAppointment });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Delete an appointment
// @route   DELETE /api/appointments/:id
const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAppointment = await Appointment.findByIdAndDelete(id);

    if (!deletedAppointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { createAppointment, getAppointments, updateAppointment, deleteAppointment };

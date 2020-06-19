import React from 'react';

const Appointment = ({appointment, deleteAppointment}) => (

    <div className="appointment cita">
        <p>Pet: <span>{appointment.pet}</span></p>
        <p>Owner: <span>{appointment.owner}</span></p>
        <p>Date: <span>{appointment.date}</span></p>
        <p>Time: <span>{appointment.time}</span></p>
        <p>Details: <span>{appointment.details}</span></p>

        <button className="button eliminar u-full-width"
        onClick={() => deleteAppointment(appointment.id)}
        >
            Eliminar &times;
        </button>
    </div>
);

export default Appointment;

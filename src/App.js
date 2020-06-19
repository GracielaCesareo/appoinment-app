import React, {Fragment, useState} from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';



function App() {

  // Appointment list
  const [appointments, addAppointment] = useState([]);

  // Adding appointments to list
  const createAppointment = appointment => {
    addAppointment([
      ...appointments,
      appointment
    ])
  }

  // Deleting appointment by id
  const deleteAppointment = id =>{
    console.log(id)
    const newAppointments = appointments.filter(appointment => appointment.id !== id);
    addAppointment(newAppointments);

  }

  return (
    <Fragment>
      <h1>Pet Care</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Form
                createAppointment={createAppointment}
              />
          </div>
          <div className="one-half column">
            <h2>Edit your appointments</h2>
            {appointments.map(appointment => (
              <Appointment
                key={appointment.id}
                appointment={appointment }
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

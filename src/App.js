import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';



function App() {

  // Appointments in local storage
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if(!initialAppointments) {
    initialAppointments = [];
  }

  // Appointment list
  const [appointments, addAppointment] = useState(initialAppointments);

  // Adding appointments to list
  const createAppointment = appointment => {
    addAppointment([
      ...appointments,
      appointment
    ])
  }

  // Use Effect for state changes
  useEffect( () => {
    if(initialAppointments){
      localStorage.setItem('appointments', JSON.stringify(appointments))
    } else {
      localStorage.setItem('appointments', JSON.stringify([]))
    }
  }, [appointments, initialAppointments])

  // Deleting appointment by id
  const deleteAppointment = id =>{
    console.log(id)
    const newAppointments = appointments.filter(appointment => appointment.id !== id);
    addAppointment(newAppointments);

  }

  // Conditional message
  const title = appointments.length === 0 ? "Add an appointment" : 'Edit your appointments'

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
            <h2>{title}</h2>
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

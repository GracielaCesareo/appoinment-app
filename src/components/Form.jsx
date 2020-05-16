import React, {Fragment, useState} from 'react';

const Form = () => {
    // Create State for Appointments
    const [appointment, updateAppointment]=useState({
        pet: '',
        owner:'',
        date: '',
        time: '',
        details: ''
    });

    const [error, updateError] = useState(false)

    // Function listened on user write
    const updateState = (e) => {
        updateAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
        
    }

    // Get inputs values
    const {pet, owner, date, time, details} = appointment;

    // Submitting form
    const submitAppointment = e => {
        e.preventDefault();

        // Validate input
        if(pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || details.trim() === ''){
            updateError(true);
            return
        }

        // Set ID

        // Create Appointment

        // Clean form
        
    }

    return (
        <Fragment>
            <h1>Book an appointment</h1>

            {error ? <p className="alerta-error">All fields are required</p> : null}

            <form
            action=""
            onSubmit={submitAppointment}
            >
                <label htmlFor="pet">Pet Name</label>
                <input 
                type="text"
                name="pet"
                className="u-full-width"
                placeholder="Pet name"
                onChange={updateState}
                value={pet}
                />

                <label htmlFor="owner">Owner Name</label>
                <input 
                type="text"
                name="owner"
                className="u-full-width"
                placeholder="Owner Name"
                onChange={updateState}
                value={owner}
                />

                <label htmlFor="date">Appointment Date</label>
                <input 
                type="date"
                name="date"
                className="u-full-width"
                onChange={updateState}
                value={date}
                />

                <label htmlFor="date">Appointment Time</label>
                <input 
                type="time"
                name="time"
                className="u-full-width"
                onChange={updateState}
                value={time}
                />

                <label htmlFor="details">Details</label>
                <textarea
                className="u-full-width"
                name="details"
                onChange={updateState}
                value={details}
                >
                </textarea>

                <button 
                type="submit"
                className="u-full-width button-primary">
                Add Appointment
                </button>
            </form>
        </Fragment>
     );
}

export default Form;

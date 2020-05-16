import React, {Fragment} from 'react';

const Form = () => {
    return (
        <Fragment>
            <h1>Book an appointment</h1>

            <form action="">
                <label htmlFor="pet">Pet Name</label>
                <input 
                type="text"
                name="pet"
                className="u-full-width"
                placeholder="Pet name"
                />

                <label htmlFor="owner">Owner Name</label>
                <input 
                type="text"
                name="owner"
                className="u-full-width"
                placeholder="Owner Name"
                />

                <label htmlFor="date">Appointment Date</label>
                <input 
                type="date"
                name="date"
                className="u-full-width"
                />

                <label htmlFor="date">Appointment Time</label>
                <input 
                type="time"
                name="time"
                className="u-full-width"
                />

                <label htmlFor="details">Details</label>
                <textarea
                className="u-full-width"
                name="details">
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

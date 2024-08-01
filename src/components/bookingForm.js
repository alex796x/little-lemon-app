import React, { useState, useEffect } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    specialRequests: ''
  });
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    if (formData.date) {
      fetchAvailableTimes(formData.date);
    }
  }, [formData.date]);

  const fetchAvailableTimes = async (date) => {
    const times = await window.fetchAPI(date);
    setAvailableTimes(times);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await window.submitAPI(formData);
    if (success) {
      console.log('Booking successful!');
      // Handle successful booking (e.g., show a confirmation message)
    } else {
      console.log('Booking failed!');
      // Handle booking failure (e.g., show an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="time">Time</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
          min="1"
          max="10"
        />
      </div>
      <div>
        <label htmlFor="specialRequests">Special Requests</label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Book a Table</button>
    </form>
  );
};

export default BookingForm;

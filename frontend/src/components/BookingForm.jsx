import { useState } from 'react';
import axios from 'axios';

const events = ["Tech Expo 2026", "Fashion Week", "Food Festival", "Auto Show"];
const halls = ["Hall A", "Hall B", "Hall C", "Hall D"];

const BookingForm = ({ onBookingAdded }) => {
  const [form, setForm] = useState({
    exhibitorName: '', email: '', eventName: '', hallNumber: '', stallNumber: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/bookings', form);
      alert('Booking Successful!');
      setForm({ exhibitorName: '', email: '', eventName: '', hallNumber: '', stallNumber: '' });
      onBookingAdded();
    } catch (err) {
      alert(err.response?.data?.message || 'Error booking stall');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Book a Stall</h2>
      <input type="text" placeholder="Exhibitor Name" required
        className="w-full p-2 mb-3 border" value={form.exhibitorName}
        onChange={(e) => setForm({...form, exhibitorName: e.target.value})} />
      
      <input type="email" placeholder="Email" required
        className="w-full p-2 mb-3 border" value={form.email}
        onChange={(e) => setForm({...form, email: e.target.value})} />

      <select required className="w-full p-2 mb-3 border" value={form.eventName}
        onChange={(e) => setForm({...form, eventName: e.target.value})}>
        <option value="">Select Event</option>
        {events.map(ev => <option key={ev} value={ev}>{ev}</option>)}
      </select>

      <select required className="w-full p-2 mb-3 border" value={form.hallNumber}
        onChange={(e) => setForm({...form, hallNumber: e.target.value})}>
        <option value="">Select Hall</option>
        {halls.map(h => <option key={h} value={h}>{h}</option>)}
      </select>

      <input type="text" placeholder="Stall Number (e.g., S-101)" required
        className="w-full p-2 mb-3 border" value={form.stallNumber}
        onChange={(e) => setForm({...form, stallNumber: e.target.value})} />

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Book Stall
      </button>
    </form>
  );
};

export default BookingForm;
import { useState, useEffect } from 'react';
import axios from 'axios';

const BookingTable = () => {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState('');

  const FetchBookings = async () => {
    const res = await axios.get(`http://localhost:5000/api/bookings?search=${search}`);
    setBookings(res.data);
  };

  useEffect(() => { FetchBookings(); }, [search]);

  const handleDelete = async (id) => {
    if (window.confirm('Delete this booking?')) {
      await axios.delete(`http://localhost:5000/api/bookings/${id}`);
      FetchBookings();
    }
  };

  return (
    <div className="mt-8">
      <input
        type="text"
        placeholder="Search by Exhibitor or Event..."
        className="w-full p-3 border mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3">Exhibitor</th>
            <th className="border p-3">Event</th>
            <th className="border p-3">Hall</th>
            <th className="border p-3">Stall</th>
            <th className="border p-3">Date</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(b => (
            <tr key={b._id}>
              <td className="border p-3">{b.exhibitorName}</td>
              <td className="border p-3">{b.eventName}</td>
              <td className="border p-3">{b.hallNumber}</td>
              <td className="border p-3 font-medium">{b.stallNumber}</td>
              <td className="border p-3">{new Date(b.bookingDate).toLocaleDateString()}</td>
              <td className="border p-3">
                <button onClick={() => handleDelete(b._id)} className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
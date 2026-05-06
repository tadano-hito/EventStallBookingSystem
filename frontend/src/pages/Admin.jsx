import { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState('');

  const fetchBookings = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/bookings?search=${search}`);
      setBookings(res.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [search]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        await axios.delete(`http://localhost:5000/api/bookings/${id}`);
        fetchBookings();
      } catch (error) {
        alert('Failed to delete booking');
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard - All Bookings</h1>

      <input
        type="text"
        placeholder="Search by Exhibitor Name or Event..."
        className="w-full md:w-96 p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:border-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-4 text-left">Exhibitor Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Event</th>
              <th className="p-4 text-left">Hall</th>
              <th className="p-4 text-left">Stall No</th>
              <th className="p-4 text-left">Booking Date</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan="7" className="p-6 text-center text-gray-500">
                  No bookings found
                </td>
              </tr>
            ) : (
              bookings.map((booking) => (
                <tr key={booking._id} className="border-t hover:bg-gray-50">
                  <td className="p-4 font-medium">{booking.exhibitorName}</td>
                  <td className="p-4 text-gray-600">{booking.email}</td>
                  <td className="p-4">{booking.eventName}</td>
                  <td className="p-4">{booking.hallNumber}</td>
                  <td className="p-4 font-semibold text-blue-600">{booking.stallNumber}</td>
                  <td className="p-4 text-gray-600">
                    {new Date(booking.bookingDate).toLocaleDateString('en-GB')}
                  </td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
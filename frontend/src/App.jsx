import { useState } from 'react';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import BookingTable from './components/BookingTable';

function App() {
  const [refreshTable, setRefreshTable] = useState(false);

  const handleBookingAdded = () => {
    setRefreshTable(prev => !prev); // Trigger table refresh
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Event Stall Booking System
          </h1>
          <p className="text-gray-600">Book your stall easily and manage all bookings</p>
        </div>

        {/* Booking Form */}
        <BookingForm onBookingAdded={handleBookingAdded} />

        {/* Bookings Table */}
        <BookingTable key={refreshTable} />
      </div>
    </div>
  );
}

export default App;
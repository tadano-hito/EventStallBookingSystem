import BookingForm from '../components/BookingForm';
import BookingTable from '../components/BookingTable';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Welcome to Stall Booking
        </h1>
        <p className="text-lg text-gray-600">
          Reserve your stall for upcoming events
        </p>
      </div>

      <BookingForm />
      <BookingTable />
    </div>
  );
};

export default Home;
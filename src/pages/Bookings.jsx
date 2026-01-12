import { useEffect, useState } from "react";
import { getBookings } from "../api/bookingApi";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings().then(res => setBookings(res.data));
  }, []);

  return (
    <div>
      <h2>My Bookings</h2>
      {bookings.map(b => (
        <div key={b.id}>
          {b.date} - {b.time}
        </div>
      ))}
    </div>
  );
};

export default Bookings;

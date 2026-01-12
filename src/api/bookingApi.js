import api from "./axios";

export const getBookings = () =>
  api.get("/bookings");

export const createBooking = (data) =>
  api.post("/bookings", data);

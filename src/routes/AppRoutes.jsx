import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/Bookings";
// import CreateBooking from "../pages/CreateBooking";
import ProtectedRoute from "../auth/ProtectedRoute";

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />

    <Route
      path="/"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />

    <Route
      path="/bookings"
      element={
        <ProtectedRoute>
          <Bookings />
        </ProtectedRoute>
      }
    />

    {/* <Route
      path="/bookings/create"
      element={
        <ProtectedRoute>
          <CreateBooking />
        </ProtectedRoute>
      }
    /> */}
  </Routes>
);

export default AppRoutes;

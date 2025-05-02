"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import axiosInstance from "../../../utils/axiosInstance";
import { API_PATHS } from "../../../utils/store";
import { toast } from "react-toastify";

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalPages: 1,
    totalItems: 0,
  });
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  const fetchAppointments = async (
    page = pagination.page,
    limit = pagination.limit
  ) => {
    if (!token) return;
    setLoading(true);

    // Get all appointment
    try {
      const response = await axiosInstance.get(
        API_PATHS.APPOINTMENT.GET_ALL_APPOINTMENTS,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: { page, limit },
        }
      );

      if (response.data.success) {
        console.log("Appointments:", response.data.data);
        setAppointments(response.data.data);
        setPagination({
          page,
          limit,
          totalPages: response.data.meta.total_pages,
          totalItems: response.data.meta.total_items,
        });
      } else {
        toast.error(response.data.message || "Failed to fetch appointments.");
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
      toast.error(
        error.response?.data?.message || "Error fetching appointments."
      );
    } finally {
      setLoading(false);
    }
  };

  const addAppointment = (newAppointment) => {
    setAppointments((prev) => [newAppointment, ...prev]);
  };

  // update appointment
  const updateAppointment = async (_id, updatedData) => {
    try {
      const response = await axiosInstance.put(
        `http://localhost:8080/api/appointment/${_id}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        toast.success("Appointment updated!");
        setAppointments((prev) =>
          prev.map((appointment) =>
            appointment._id === _id
              ? { ...appointment, ...updatedData }
              : appointment
          )
        );
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update appointment.");
    }
  };

  // Cancel appointment

  const cancelAppointment = async (id) => {
    try {
      const response = await axiosInstance.patch(
        `http://localhost:8080/api/appointment/${id}/cancel`
      );

      if (response.data.success) {
        toast.success("Appointment cancelled!");
        setAppointments((prev) =>
          prev.map((appointment) =>
            appointment._id === id
              ? { ...appointment, status: "CANCELLED" }
              : appointment
          )
        );
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Failed to cancel appointment."
      );
    }
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        pagination,
        loading,
        fetchAppointments,
        addAppointment,
        updateAppointment,
        cancelAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = () => useContext(AppointmentContext);

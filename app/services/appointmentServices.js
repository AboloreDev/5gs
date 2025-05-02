import { toast } from "react-toastify";
import axiosInstance from "../../../utils/axiosInstance";
import { API_PATHS } from "../../../utils/store";

export const getAllAppointments = async (token, page = 1, limit = 10) => {
  try {
    const response = await axiosInstance.get(
      `${API_PATHS.APPOINTMENT.GET_ALL_APPOINTMENTS}?page=${page}&limit=${limit}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    toast.error(error);
    throw error;
  }
};

export const createAppointment = async (token, appointmentData) => {
  try {
    const response = await axiosInstance.post(
      API_PATHS.APPOINTMENT.CREATE_APPOINTMENT,
      appointmentData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    toast.error(error);
    throw error;
  }
};

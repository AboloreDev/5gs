export const BASE_URL = "http://localhost:8080";

export const API_PATHS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/register",
    FORGOT_PASSWORD: "/api/auth/request-password-reset",
    EMAIL_OTP_TOKEN: "/api/auth/check-reset-password",
    CREATE_NEW_PASSWORD: "/api/auth/reset-password",
    GOOGLE_LOGIN: "/api/auth/google",
  },

  USER: {
    GET_USER: "/api/user/profile",
  },

  APPOINTMENT: {
    GET_ALL_APPOINTMENTS: "/api/appointment/",
    CREATE_APPOINTMENT: "/api/appointment/",
  },
  RENTALS: {
    GET_ALL_ITEMS: "/api/items",
    CREATE_ITEM: "/api/rental-items/",
    UPDATE_ITEM: (id) => `/api/rental-items/${id}`,
    DELETE_ITEM: (id) => `/api/rental-items/${id}`,
  },
};

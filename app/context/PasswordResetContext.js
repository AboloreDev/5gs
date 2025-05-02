"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

const PasswordResetContext = createContext();

export const PasswordResetProvider = ({ children }) => {
  const [resetToken, setResetToken] = useState(null);

  const clearToken = () => {
    setResetToken(null);
  };

  return (
    <PasswordResetContext.Provider
      value={{ resetToken, setResetToken, clearToken }}
    >
      {children}
    </PasswordResetContext.Provider>
  );
};

export const usePasswordReset = () => useContext(PasswordResetContext);

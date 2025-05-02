import { AuthProvider } from "../context/AuthContext";
import { PasswordResetProvider } from "../context/PasswordResetContext";

export default function AuthLayout({ children }) {
  return (
    <AuthProvider>
      <PasswordResetProvider>{children}</PasswordResetProvider>
    </AuthProvider>
  );
}

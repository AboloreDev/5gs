import CreateNewPasswordPage from "./create-new-password/page";
import EmailVerification from "./email-otp-verification/page";
import ForgotPassword from "./forgot-password/page";
import AuthLayout from "./layout";
import Page from "./SignIn/page";
import SignUpPage from "./SignUp/page";

export default function AuthPage() {
  return (
    <AuthLayout>
      {/* Auth page content */}
      <Page />
      <SignUpPage />
      <ForgotPassword />
      <EmailVerification />
      <CreateNewPasswordPage />
    </AuthLayout>
  );
}

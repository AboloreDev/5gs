import "./globals.css";
import StoreProvider from "./context/StoreContext";

export const metadata = {
  title: "5GS Photography",
};

export default function RootLayout({ children }) {
  // Fixed typo here
  return (
    <html lang="en">
      <body className="font-manrope">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}

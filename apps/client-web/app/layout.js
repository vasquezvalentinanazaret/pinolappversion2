import "./globals.css";

export const metadata = {
  title: "PinolApp",
  description: "Delivery Nicaragüense"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

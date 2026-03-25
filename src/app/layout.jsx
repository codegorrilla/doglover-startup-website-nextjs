import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pawsitive Training | Dog Training Startup",
  description: "Monthly subscription-based dog training services including physical demonstration and online video consultation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

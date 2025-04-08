import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Underdog } from "next/font/google";
import { Roboto } from "next/font/google";

const underdog = Underdog({
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Next oefening",
  description: "Applicatie met Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 max-w-7xl mx-auto mt-10">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

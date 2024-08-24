import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MJ84EE21",
  description: "Made with love by Electrical Engineers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className="container mx-auto min-h-[85vh]">
        {children}
        </div>
       <Footer/>
      </body>
    </html>
  );
}

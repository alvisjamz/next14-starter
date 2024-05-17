import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        {/**Container design */}
        <div className="container w-10/12 mx-auto px-12 min-h-screen flex flex-col justify-between">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
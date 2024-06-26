import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AniBlog",
  description: "This is Blogging websites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className={inter.className}>
        <div className="container">
          <div className="wrapper">
            <Navbar/>
             {children} 
             <Footer/>
             </div>
         </div>
        
        </body>
    </html>
  );
}

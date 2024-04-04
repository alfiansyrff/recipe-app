import { Inter, Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import GoogleAnalytics from "@/components/googleanalytics/GoogleAnalytics";


// const inter = Inter({ subsets: ["latin"] });

const inter = Inter({ 
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: '--font-inter', //css variables name
})

const roboto = Roboto({ 
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: '--font-roboto',
})

const poppins = Poppins({ 
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: '--font-poppins',
})

export const metadata = {
  title: "Recipe App",
  description: "Aplikasi pencari resep",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={`${inter.variable} ${roboto.variable} ${poppins.variable}`}>
        <div className="container">
          <Navbar/>
          {children}
        </div>
      </body>
    </html>
  );
}

// app/layout.js

import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";

// Google Font
const hindSiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
});

export const metadata = {
  title: "ANON Leather Long Wallet LW104",
  description: "ANON Leather Long Wallet LW104",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body className={` ${hindSiliguri.variable} antialiased`}>
        <div>
          {/* <Header /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
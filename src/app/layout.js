"use client";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <Header />
          {children}
          <Footer/>
        </NextUIProvider>
      </body>
    </html>
  );
}

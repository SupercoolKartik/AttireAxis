import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AppWrapper } from "../context/globalContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AttireAxis",
  description: "Get you Attire of the Day here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const randFun = () => {
    console.log("Randon Function running");
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>
          <Navbar />
          {children}
          <Footer />
        </AppWrapper>
      </body>
    </html>
  );
}

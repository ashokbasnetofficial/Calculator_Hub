import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/Footer";
import ResponsiveMain from "@/components/ResponsiveMain";
const poppins = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calculator Hub",
  description: "Calculator hub is best app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-background`}>
        <Navbar />
        <ResponsiveMain>{children}</ResponsiveMain>
        <Footer />
      </body>
    </html>
  );
}

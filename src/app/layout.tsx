import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "../components/ui/Sidebar";

const ttNorms = localFont({
  src: "../../public/TTNormsProMonoVariable.ttf",
  variable: "--font-tt-norms",
});

export const metadata: Metadata = {
  title: "Parth Nikam",
  description: "Parth Nikam's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ttNorms.variable} font-sans antialiased`}
      >
        <div className="relative flex flex-row h-screen w-full overflow-hidden bg-white/[0.96] antialiased">
          <Sidebar />
          
          {children}
        </div>
      </body>
    </html>
  );
}

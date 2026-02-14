import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "../components/ui/Sidebar";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <div className="relative flex flex-col md:flex-row h-screen w-full overflow-hidden bg-white/[0.96] antialiased">
          <Sidebar />
          
          {children}
        </div>
      </body>
    </html>
  );
}

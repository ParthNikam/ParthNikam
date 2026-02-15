import type { Metadata } from "next";
import "./globals.css";

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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet"/>
      </head>
      <body className="font-sans antialiased" style={{ fontFamily: "'Titillium Web', sans-serif" }}>
        <div className="relative flex flex-col h-screen w-full overflow-hidden bg-white/[0.96] antialiased">
          {children}
        </div>
      </body>
    </html>
  );
}

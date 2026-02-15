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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <div className="relative flex flex-col h-screen w-full overflow-hidden bg-white/[0.96] antialiased">
          {children}
        </div>
      </body>
    </html>
  );
}

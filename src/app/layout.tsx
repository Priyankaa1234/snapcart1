import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Snapcart | 10mins grocery delivery app ",
  description: "10min Grocery delivery app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen bg-linear-to-b from-green-100 to-white">
        {children}
      </body>
    </html>
  );
}

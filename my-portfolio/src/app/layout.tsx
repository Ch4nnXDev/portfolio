import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/default/Footer";
import Header from "./components/default/Header";

export const metadata: Metadata = {
  title: "Channa Karawita Portfolio",
  description: "A showcase of my skills and projects.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Footer from "./my-components/default/Footer";
import Header from "./my-components/default/Header";
import { Playfair_Display } from "next/font/google";


const playfairDisplay = Playfair_Display({
   subsets: ['latin']});

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
    <html lang="en" className={playfairDisplay.className}>
      <body className="flex flex-col min-h-screen"
      >
        <Header />
          <main className="flex-1">
            {children}

          </main>
        
        <Footer />
      </body>
    </html>
  );
}

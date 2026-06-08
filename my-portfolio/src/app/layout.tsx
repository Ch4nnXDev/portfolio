import type { Metadata } from "next";
import "./globals.css";
import Footer from "./my-components/default/Footer";
import Header from "./my-components/default/Header";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

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
    <html lang="en" className={cn("font-mono", jetbrainsMono.variable)}>
      <body className="flex flex-col"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

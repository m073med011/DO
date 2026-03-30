import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import AOSInit from "@/components/shared/AOSInit";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Do",
  description: "Do",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased  text-white flex flex-col min-h-screen bg-[#0a0911]`}
      >
        <AOSInit />
        <div className="w-full">
          <Header />
        </div>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import { Inria_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import StarryBackground from "@/components/Header/StarryBackground";

const inriaSans = Inria_Sans({
  variable: "--font-inria-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "dushaDev",
  description: "This is my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inriaSans.variable} antialiased bg-background text-foreground`}
      >
        <StarryBackground />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

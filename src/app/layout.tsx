import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import TransitionProvider from "@/components/transitionProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kamlesh Kaparvena",
  description: "Made with Love By KK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider >
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}

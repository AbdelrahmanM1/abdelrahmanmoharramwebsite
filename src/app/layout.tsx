import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdelrahman Moharram - Full Stack Developer",
  description: "Full Stack Developer specializing in web development, Minecraft plugins, and Discord bots.",
  keywords: ["Full Stack Developer", "Minecraft Plugin Developer", "Discord Bot Developer", "Web Development"],
  authors: [{ name: "Abdelrahman Moharram" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 antialiased`}>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

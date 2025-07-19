import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdelrahman Moharram – Full Stack, Minecraft Plugin, and Discord Bot Developer",
  description:
    "Abdelrahman Moharram is a Full Stack Developer specializing in web development, Minecraft plugin development, and Discord bot creation. Explore high-quality, scalable digital solutions.",
  keywords: [
    "Full Stack Developer",
    "Minecraft Plugin Developer",
    "Discord Bot Developer",
    "Web Developer",
    "Abdelrahman Moharram",
    "Next.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Developer Portfolio"
  ],
  authors: [{ name: "Abdelrahman Moharram", url: "https://abdelrahmanmoharram.vercel.app" }],
  creator: "Abdelrahman Moharram",
  robots: "index, follow",
  applicationName: "Abdelrahman Moharram Portfolio",
  viewport: "width=device-width, initial-scale=1",
  metadataBase: new URL("https://abdelrahmanmoharram.vercel.app"),
  alternates: {
    canonical: "https://abdelrahmanmoharram.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data: JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abdelrahman Moharram",
              url: "https://abdelrahmanmoharram.vercel.app",
              sameAs: [ //this is a list of social profiles
                "https://github.com/AbdelrahmanM1",
                "https://www.linkedin.com/in/3bdoabk/"
              ],
              jobTitle: "Full Stack Developer",
              description:
                "Experienced developer specializing in full stack apps, Minecraft plugins, and Discord bots.",
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 antialiased`}
      >
        <Navbar />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

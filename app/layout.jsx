import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "XiviaSoft",
  description:
    "Plugging Great Ideas Into Your Brand - Specialists in turning visionary concepts into high-performing digital solutions",

  icons: {
    icon: "/favicon.ico",          
    shortcut: "/favicon.ico",      
    apple: "/favicon.ico",         
  },

  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="GiZUaO8maDfxcUtjFK2fItMf-uXEgAblnaxfULKOJ9c" />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

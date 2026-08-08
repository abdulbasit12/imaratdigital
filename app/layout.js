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
  title: "Imarat Digital",
  description: "Your Digital Building",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head><meta name="google-site-verification" content="dJvQYTqUcYP_MgmhGikdtMQ8Rux-fl8mBROiWBWu32A" /></head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

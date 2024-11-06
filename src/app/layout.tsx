import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SidebarMenu from '@/components/SidebarMenu'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Briefsea",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <SidebarMenu />
        <div className="h-screen w-full bg-neutral-700 relative p-6">
          {children}
        </div>
      </body>
    </html>
  );
}

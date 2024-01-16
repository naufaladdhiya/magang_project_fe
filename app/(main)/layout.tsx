"use client";

import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const noNavbar = ["/auth/login", "/auth/register"];

  return (
    <body className={inter.className}>
      {!noNavbar.includes(pathname) && <Navbar />}
      {children}
      <Toaster />
    </body>
  );
}

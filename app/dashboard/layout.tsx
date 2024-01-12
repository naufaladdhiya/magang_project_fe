"use client";

import NavbarDashboard from "@/components/navbar-dashboard";
import Navigation from "@/components/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="flex-1 min-h-screen p-1">
        <Navigation />
      </div>
      <div className="flex-[4] p-1">
        <NavbarDashboard />
        {children}
      </div>
    </div>
  );
}

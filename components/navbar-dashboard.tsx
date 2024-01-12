"use client";

import { CircleUserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import { Input } from "./ui/input";

const NavbarDashboard = () => {
  const pathname = usePathname();
  return (
    <div className="p-5 rounded-lg flex bg-soft items-center justify-between bg-gray-300/60">
      <div className="text-graysoft font-bold capitalize">
        <p>{pathname.replaceAll("-", " ").split("/").pop()?.toUpperCase()}</p>
      </div>
      <div className="flex items-center gap-5">
        <Input
          type="text"
          placeholder="Search..."
          className="bg-gray-300/60 rounded-lg"
        />
        <CircleUserRound size={40} />
      </div>
    </div>
  );
};

export default NavbarDashboard;

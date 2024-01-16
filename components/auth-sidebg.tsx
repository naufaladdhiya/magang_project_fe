import React, { FC } from "react";
import Image from "next/image";
import { Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface AuthSideBGProps {
  router: AppRouterInstance;
}

const AuthSideBG: FC<AuthSideBGProps> = ({ router }) => {
  return (
    <section className="relative">
      <Button
        size="icon"
        variant="outline"
        className="absolute z-50 top-5 left-5 rounded-full"
        onClick={() => router.push("/")}
      >
        <Home size={24} />
      </Button>
      <div className="w-full absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-5">
        <Image
          src="/images/logo.png"
          alt="logo-ppid"
          width={175}
          height={300}
        />
        <h1 className="text-5xl font-bold text-center text-white">
          PPID <br />
          KOTA SURAKARTA
        </h1>
      </div>
      <div className="relative bg-black/90 w-full h-full">
        <Image
          src="/images/bg-min.png"
          alt="background"
          layout="fill"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default AuthSideBG;

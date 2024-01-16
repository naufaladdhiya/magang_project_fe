"use client";

import CustomPathName from "@/components/custom-pathname";
import Image from "next/image";

const BadanOrganisasiPpidPage = () => {
  return (
    <div className="my-6 px-4 bg-slate-100">
      <CustomPathName />

      <div className="flex justify-center items-center">
        <Image
          src={`/badan-organisasi.png`}
          width={700}
          height={300}
          alt="badan-organisasi"
        />
      </div>
    </div>
  );
};

export default BadanOrganisasiPpidPage;

"use client";

import CustomPathName from "@/components/custom-pathname";
import Image from "next/image";

const ProfilePimpinanPage = () => {
  return (
    <div className="my-6 px-4 bg-slate-100">
      <CustomPathName />
      <p className="text-center text-2xl text-gray-600 font-bold mt-4">
        Daftar Pimpinan DPRD Provinsi Jawa Tengah
      </p>

      <div className="flex justify-center items-center mt-8 flex-col">
        <p className="text-center text-2xl text-gray-600 font-bold mt-4">
          Profile Walikota Surakarta
        </p>
        <Image
          src={`/gibran.png`}
          width={700}
          height={300}
          alt="profile-pimpinan"
        />
        <p className="text-center text-2xl text-gray-600 font-bold mt-4">
          Profile Wakil Walikota Surakarta
        </p>
        <Image
          src={`/walikota.png`}
          width={700}
          height={300}
          alt="profile-pimpinan"
        />
      </div>
    </div>
  );
};

export default ProfilePimpinanPage;

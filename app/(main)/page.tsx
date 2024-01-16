"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import {
  FormInput,
  Search,
  FileSearch,
  ScrollText,
  LineChart,
  BookText,
  ListChecks,
} from "lucide-react";

const Slider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        effect="fade"
        className="max-w-full"
      >
        <SwiperSlide>
          <Image
            src="/slider-1.png"
            width={2000}
            height={200}
            alt="logo"
            className="object-cover w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slider-1.png"
            width={2000}
            height={200}
            alt="logo"
            className="object-cover w-full"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center min-h-screen py-2 bg-slate-100">
        <div className="flex flex-wrap items-center justify-around max-w-full mt-6 sm:w-full">
          <Slider />
        </div>

        <div className="mt-7 gap-4 flex flex-col">
          <p className="font-semibold text-5xl text-center">
            PPID Kota Surakarta
          </p>
          <p className="font-normal text-2xl">
            Pejabat Pengelola Informasi dan Dokumentasi ( PPID ) Kota Surakarta
          </p>
          <p className="font-semibold text-5xl text-center">
            Cari <span className="text-[#FF0000]">Informasi</span> Setiap Saat?
          </p>
        </div>

        <div className="flex items-center bg-white rounded-full p-2 w-1/2 mt-14 mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none flex-grow"
          />
          <Search className="text-gray-500" />
        </div>

        <div className="flex gap-6 justify-center items-center mt-12">
          <div className="w-[400px]">
            <p className="text-2xl">
              Belum menemukan informasi yang Anda cari? Klik tombol disamping
              untuk permintaan informasi
            </p>
          </div>
          <div className="flex items-center justify-center bg-white rounded-full p-2 mx-4">
            <FileSearch className="text-gray-500 mr-6" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none flex-grow"
            />
          </div>
        </div>

        <div className="flex gap-16 mt-14">
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-full w-16 h-16 bg-slate-200 flex justify-center items-center shadow-xl">
              <ScrollText className="text-blue-600" width={40} height={40} />
            </div>
            <p className="mt-2 text-2xl">Daftar Informasi Publik</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-full w-16 h-16 bg-slate-200 flex justify-center items-center shadow-xl">
              <LineChart className="text-blue-600" width={40} height={40} />
            </div>
            <p className="mt-2 text-2xl">Daftar Informasi Publik</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-full w-16 h-16 bg-slate-200 flex justify-center items-center shadow-xl">
              <BookText className="text-blue-600" width={40} height={40} />
            </div>
            <p className="mt-2 text-2xl">Daftar Informasi Publik</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-full w-16 h-16 bg-slate-200 flex justify-center items-center shadow-xl">
              <ListChecks className="text-blue-600" width={40} height={40} />
            </div>
            <p className="mt-2 text-2xl">Daftar Informasi Publik</p>
          </div>
        </div>
      </div>
    </main>
  );
}

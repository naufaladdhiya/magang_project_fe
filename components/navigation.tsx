import Image from "next/image";

import React, { useState } from "react";
import { ChevronsUpDown, Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";

const menuOptions = [
  {
    label: "Beranda",
    url: "/",
    submenu: [],
  },
  {
    label: "Profile",
    url: "#",
    submenu: [
      {
        label: "Profile Pimpinan",
        url: "#",
      },
      {
        label: "Profile PPID",
        url: "/dashboard/profile/profile-ppid",
      },
      {
        label: "Badan Organisasi PPID",
        url: "#",
      },
      {
        label: "Visi dan Misi",
        url: "/dashboard/profile/visi-misi",
      },
      {
        label: "Dasar Hukum",
        url: "/dashboard/profile/dasar-hukum",
      },
      {
        label: "Maklumat Pelayanan",
        url: "#",
      },
      {
        label: "Mekanisme Pelayanan",
        url: "#",
      },
      {
        label: "Link PPID Pelaksana",
        url: "/dashboard/profile/link-ppid-pelaksana",
      },
    ],
  },
  {
    label: "Informasi Publik",
    url: "/latest-news",
    submenu: [
      {
        label: "Daftar Informasi Publik",
        url: "/latest-news",
      },
      {
        label: "Informasi Berkala",
        url: "/announcement",
      },
      {
        label: "Informasi Serta Merta",
        url: "/agenda",
      },
      {
        label: "Informasi Setiap Saat",
        url: "/gallery",
      },
      {
        label: "Informasi DiKecualikan",
        url: "/gallery",
      },
    ],
  },
  {
    label: "Berita",
    url: "/articles",
    submenu: [],
  },
  {
    label: "Open Data",
    url: "#",
    submenu: [
      {
        label: "Open Data Kota Surakarta",
        url: "/services/installation",
        submenu: [],
      },
      {
        label: "Open Data Provinsi Jawa Tengah",
        url: "/services/outpatient-care",
        submenu: [],
      },
    ],
  },
  // {
  //   label: "Laporan",
  //   url: "/contact",
  //   submenu: [
  //     {
  //       label: "Laporan Keuangan",
  //       url: "/contact",
  //     },
  //     {
  //       label: "Laporan Kekayaan",
  //       url: "/contact",
  //     },
  //     {
  //       label: "Laporan Aduan Masyarakat",
  //       url: "/contact",
  //     },
  //     {
  //       label: "Laporan Kinerja",
  //       url: "/contact",
  //     },
  //     {
  //       label: "Laporan Akses",
  //       url: "/contact",
  //     },
  //     {
  //       label: "Laporan PPID",
  //       url: "/contact",
  //     },
  //     {
  //       label: "Rencana Kerja Pemerintah Pemerintah Daerah",
  //       url: "/contact",
  //     },
  //   ],
  // },
  {
    label: "Covid-19",
    url: "#",
    submenu: [
      {
        label: "Covid-19 Jateng",
        url: "/information/doctor-data",
      },
      {
        label: "Informasi",
        url: "/information/clinic-schedule",
      },
      {
        label: "Vakninasi",
        url: "/information/ward-availability",
      },
      {
        label: "Berita",
        url: "/information/service-information",
      },
      {
        label: "Anggaran",
        url: "/information/payment-information",
      },
      {
        label: "Regulasi",
        url: "https://jdih.kalteng.go.id/",
      },
      {
        label: "Pbj Covid-19",
        url: "/information/public-service-spo",
      },
      {
        label: "Galeri Infografis",
        url: "/information/faq",
      },
      {
        label: "Galeri Video",
        url: "/information/faq",
      },
    ],
  },
  {
    label: "Kontak",
    url: "#",
    submenu: [
      {
        label: "Kontak Kami",
        url: "/kontak-kami",
      },
      {
        label: "Layanan Aduan",
        url: "/contact",
      },
      {
        label: "Forumlir Aduan",
        url: "/contact",
      },
    ],
  },
];

const isCollapseOpen = (index: number, chevron_id: number) => {
  if (chevron_id === index) {
    return true;
  }
  return false;
};

const Navigation = () => {
  return (
    <nav className="sticky top-10 bg-gray-300/60 h-full p-4 rounded-lg w-[375px]">
      <div className="flex items-center gap-5 mb-5">
        <Image
          src="/logo.png"
          alt="profile"
          width={300}
          height={100}
          className=""
        />
        <div></div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        {menuOptions.map((menu, index) => {
          let isOpen = false;

          return (
            <Collapsible key={index}>
              <CollapsibleTrigger className="w-full" asChild>
                <Button
                  onClick={() => (isOpen = !isOpen)}
                  variant={`secondary`}
                  className="flex items-center justify-between w-full text-left"
                >
                  {menu.label}
                  {menu.submenu.length > 0 && <ChevronsUpDown size={20} />}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                {menu.submenu?.map((submenu, index) => (
                  <div className="flex flex-col gap-2" key={index}>
                    <Link href={submenu.url} className="w-full">
                      <Button variant={"ghost"} className="w-full">
                        {submenu.label}
                      </Button>
                    </Link>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;

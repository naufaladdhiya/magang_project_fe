"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import * as NavigationMenuRadix from "@radix-ui/react-navigation-menu";

const NAVIGATION_ITEMS = [
  {
    name: "Profile",
    items: [
      {
        name: "PROFILE PIMPINAN PEMKOT SURAKARTA",
        href: "/bapenda-2",
      },
      {
        name: "PROFILE PPID",
        href: "/profile-ppid",
      },
      {
        name: "BAGAN ORGANISASI PPID",
        href: "/badan-organisasi-ppid",
      },
      {
        name: "VISI DAN MISI",
        href: "/visi-dan-misi",
      },
      {
        name: "DASAR HUKUM",
        href: "/dasar-hukum-ppid",
      },
      {
        name: "MAKLUMAT PELAYANAN",
        href: "aklumat-pelayanan-informasi-publik/",
      },
      {
        name: "MEKANISME PELAYANAN",
        href: "",
      },
      {
        name: "LINK PPID PELAKSANA",
        href: "link-dinas-ppid-pelaksana",
      },
    ],
  },
  {
    name: "INFORMASI PUBLIK",
    items: [
      {
        name: "DAFTAR INFORMASI PUBLIK",
        href: "/dip-2023",
      },
      {
        name: "INFORMASI BERKALA",
        href: "/info/informasi-berkala",
      },
      {
        name: "INFORMASI SERTA MERTA",
        href: "/info/informasi-serta-merta",
      },
      {
        name: "INFORMASI SETIAP SAAT",
        href: "/info/informasi-setiap-saat",
      },
      {
        name: "INFORMASI DIKECUALIKAN",
        href: "/informasi/daftar-informasi-publik-dikecualikan",
      },
    ],
  },
  {
    name: "BERITA",
    items: [
      {
        name: "SP Pelayanan",
        href: "/",
      },
      {
        name: "Cetak ESPPT",
        href: "/",
      },
      {
        name: "Kantor Pelayanan",
        href: "/",
      },
      {
        name: "Jenis Pajak",
        href: "/",
      },
      {
        name: "FAQ",
        href: "/",
      },
    ],
  },
  {
    name: "LAPORAN",
    items: [
      {
        name: "Perda",
        href: "/",
      },
      {
        name: "UU/PP",
        href: "/",
      },
      {
        name: "JDIH",
        href: "/",
      },
      {
        name: "Pajak Daerah",
        href: "/",
      },
    ],
  },
  {
    name: "OPEN DATA",
    items: [
      {
        name: "Bapenda",
        href: "/",
      },
      {
        name: "Kepala Bidan",
        href: "/",
      },
      {
        name: "Sekretariat",
        href: "/",
      },
      {
        name: "Tupoksi",
        href: "/",
      },
      {
        name: "Data Pegawai",
        href: "/",
      },
    ],
  },
  {
    name: "KONTAK",
    items: [
      {
        name: "Materi Bintek",
        href: "/",
      },
      {
        name: "Kepala Bidan",
        href: "/",
      },
    ],
  },
  {
    name: "COVID-19",
    items: [
      {
        name: "COVID-19-JATENG",
        href: "/",
      },
      {
        name: "INFORMASI COVID-19",
        href: "/",
      },
      {
        name: "VAKSINASI COVID-19",
        href: "/",
      },
      {
        name: "BERITA",
        href: "/",
      },
      {
        name: "ANGGARAN",
        href: "/",
      },
      {
        name: "REGULASI",
        href: "/",
      },
      {
        name: "PBJ COVID-19",
        href: "/",
      },
      {
        name: "BANTUAN SOSIAL",
        href: "/",
      },
      {
        name: "GALERI GEOGRAFIS",
        href: "/",
      },
      {
        name: "GALERI VIDEO",
        href: "/",
      },
    ],
  },
];

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between px-9 h-[200px]">
      <div className="flex items-center justify-between w-full py-4">
        <div className="flex items-center">
          <a href="/">
            <img src="/next.svg" alt="Logo" className="w-12 h-12 mr-2" />
          </a>
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-800">
              Bappeda Surakarta
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <NavigationMenuRadix.Root className="w-full flex justify-between">
            <NavigationMenuList className="flex items-center gap-12">
              {NAVIGATION_ITEMS.map((item, index) => (
                <NavigationMenuItem className="relative" key={`nav-${index}`}>
                  <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                  <NavigationMenuRadix.Content className="absolute top-0 left-0 w-full animate-enterFromLeft z-50">
                    <div className="flex flex-col items-center py-12 text-xs">
                      <div className="flex flex-col items-start gap-5 shadow-2xl w-36 p-6 bg-white">
                        {item.items.map((subItem, subIndex) => (
                          <a
                            key={`subitem-${subIndex}`}
                            href={subItem.href}
                            className="hover:text-blue-400 cursor-pointer"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuRadix.Content>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenuRadix.Root>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

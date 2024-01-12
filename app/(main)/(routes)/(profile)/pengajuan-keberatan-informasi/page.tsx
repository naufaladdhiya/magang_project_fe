"use client";

import CustomPathName from "@/components/custom-pathname";
import { DataTable } from "@/components/tables/data-table";
import { ColumnDef } from "@tanstack/react-table";

type InformasiData = {
  id: number;
  jenis: string;
  isi: string;
};

const dataHukum: InformasiData[] = [
  {
    id: 1,
    jenis: "Ringkasan Informasi",
    isi: "Berisi informasi tentang tata cara pengajuan keberatan",
  },
  {
    id: 2,
    jenis: "Pejabat yang Menguasai Informasi",
    isi: "PPID",
  },
  {
    id: 3,
    jenis: "Penanggungjawab Informasi",
    isi: "PPID",
  },
  {
    id: 4,
    jenis: "Waktu Pembuatan Informasi",
    isi: "2023",
  },
  {
    id: 4,
    jenis: "Jenis Media yang Memuat",
    isi: "http://ppid.surakarta.go.id/dasar-hukum-ppid/",
  },
  {
    id: 4,
    jenis: "Jangka Waktu Penyimpanan",
    isi: "Selama berlaku",
  },
  {
    id: 5,
    jenis: "Bentuk Informasi yang tersedia",
    isi: "Softfile",
  },
];

const columns: ColumnDef<InformasiData>[] = [
  {
    accessorKey: "jenis",
    header: "Jenis",
  },
  {
    accessorKey: "isi",
    header: "Isi",
  },
];

const PengajuanKeberatanInformasiPage = () => {
  return (
    <div className="py-6 px-4">
      <CustomPathName />

      <DataTable columns={columns} data={dataHukum} />

      <h1 className="text-2xl font-bold text-gray-800 mt-3">
        FORMULIR KEBERATAN
      </h1>
      <p className="mt-3">
        Pihak yang dapat Dihubungi PPID Kota Surakarta (Dinas Komunikasi,
        Informatika, Statistik, dan Persandian, Jl. Jenderal Sudirman No. 2
        Surakarta) Nomor Telepon 0271 2931667 Fax 0271 2931667 HP. 081329722660,
        email ppid@surakarta.go.id; website ppid.surakarta.go.id
      </p>
    </div>
  );
};

export default PengajuanKeberatanInformasiPage;

"use client";

import React, { useState } from "react";
import CustomPathName from "@/components/custom-pathname";
import { DataTable } from "@/components/tables/data-table";

import { ColumnDef } from "@tanstack/react-table";

type DataHukum = {
  id: number;
  jenis: string;
  isi: string;
};

const dataHukum: DataHukum[] = [
  {
    id: 1,
    jenis: "Waktu Pembuatan Informasi Publik",
    isi: "2023",
  },
  {
    id: 2,
    jenis: "Ringkasan Informasi",
    isi: "Berisi informasi tentang Dasar Hukum PPID Kota Surakarta",
  },
  {
    id: 3,
    jenis: "Penanggungjawab Informasi",
    isi: "PPID",
  },
  {
    id: 4,
    jenis: "Pejabat yang Menguasai Informasi",
    isi: "PPID",
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

const columns: ColumnDef<DataHukum>[] = [
  {
    accessorKey: "jenis",
    header: "Jenis",
  },
  {
    accessorKey: "isi",
    header: "Isi",
  },
];

const DasarHukumPpidPage = () => {
  return (
    <div className="mt-6 px-4">
      <CustomPathName />

      <DataTable columns={columns} data={dataHukum} />
    </div>
  );
};

export default DasarHukumPpidPage;

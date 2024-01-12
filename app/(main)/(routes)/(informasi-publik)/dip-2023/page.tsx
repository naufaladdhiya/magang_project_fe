"use client";

import React, { useState } from "react";
import CustomPathName from "@/components/custom-pathname";
import { DataTable } from "@/components/tables/data-table";

import { ColumnDef } from "@tanstack/react-table";

type DataDIP = {
  no: number;
  jenisInformasi: string;
  ringkasanInformasi: string;
  pejabatMenguasaiInformasi: string;
  penanggungJawabInformasi: string;
  waktuPembuatanInformasi: string;
  bentukInformasiYangTersedia: string;
  jangkaWaktuPenyimpanan: string;
  jenisMediaYangMemuat: string;
};

const dataDIP: DataDIP[] = [
  {
    no: 1,
    jenisInformasi: "Kedudukan/ domisili beserta alamat lengkap",
    ringkasanInformasi:
      "Berisi tentang kedudukan, domisili, alamat lengkap Pemerintah Kota Surakarta di Jalan Jenderal Sudirman no 2 Surakarta",
    pejabatMenguasaiInformasi: "PPID Kota Surakarta",
    penanggungJawabInformasi: "PPID",
    waktuPembuatanInformasi: "2023",
    bentukInformasiYangTersedia: "Softfile",
    jangkaWaktuPenyimpanan: "Selama berlaku",
    jenisMediaYangMemuat: "http://ppid.surakarta.go.id/dasar-hukum-ppid/",
  },
];

const columns: ColumnDef<DataDIP>[] = [
  {
    accessorKey: "no",
    header: "No",
  },
  {
    accessorKey: "jenisInformasi",
    header: "Jenis Informasi",
  },
  {
    accessorKey: "ringkasanInformasi",
    header: "RIngkasan Informasi",
  },
  {
    accessorKey: "pejabatMenguasaiInformasi",
    header: "Pejabat yang Menguasai Informasi",
  },
  {
    accessorKey: "penanggungJawabInformasi",
    header: "Penanggung Jawab Informasi",
  },
  {
    accessorKey: "waktuPembuatanInformasi",
    header: "Waktu Pembuatan Informasi",
  },
  {
    accessorKey: "bentukInformasiYangTersedia",
    header: "Bentuk Informasi yang Tersedia",
  },
  {
    accessorKey: "jangkaWaktuPenyimpanan",
    header: "Jangka Waktu Penyimpanan",
  },
  {
    accessorKey: "jenisMediaYangMemuat",
    header: "Jenis Media yang Memuat",
  },
];

const DaftarInfromasiPublikPage = () => {
  return (
    <div className="mt-6 px-4">
      <CustomPathName />

      <p className="text-xl text-blue-600 mt-8 font-bold">
        Download SK DIP Kota Surakarta Tahun 2023
      </p>
      <p className="text-lg text-blue-600 mt-4">
        Download Proses Penetapan DIP
      </p>

      <p className="text-blue-600 mt-5 text-center text-xl font-semibold">
        DAFTAR INFORMASI PUBLIK
        <br />
        PEMERINTAH KOTA SURAKARTA TAHUN 2023
      </p>

      <p className="text-gray-800 text-lg font-bold">
        A. INFORMASI WAJIB DIUMUMKAN SECARA BERKALA
      </p>

      <DataTable
        columns={columns}
        data={dataDIP}
        columnToFilter="jenisInformasi"
      />
    </div>
  );
};

export default DaftarInfromasiPublikPage;

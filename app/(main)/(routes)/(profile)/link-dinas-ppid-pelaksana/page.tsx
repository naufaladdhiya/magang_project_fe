"use client";
import CustomPathName from "@/components/custom-pathname";

const dataLinkDinas = [
  {
    name: "Sekretariat DPRD",
  },
  {
    name: "Badan Perencanaan Pembangunan Daerah",
  },
  {
    name: "Badan Kepegawaian Daerah",
  },
  {
    name: "Badan Pengelola Keuangan dan Aset Daerah",
  },
  {
    name: "Badan Pengelolaan Pendapatan, Keuangan dan Aset Daerah",
  },
  {
    name: "Badan Pengelolaan Pajak dan Retribusi Daerah",
  },
  {
    name: "Badan Pengelolaan Pendapatan, Keuangan dan Aset Daerah",
  },
  {
    name: "Badan Pengelolaan Pajak dan Retribusi Daerah",
  },
  {
    name: "Badan Penelitian & Pengembangan Daerah",
  },
  {
    name: "Badan Perencanaan Pembangunan Daerah",
  },
  {
    name: "Badan Penanggulangan Bencana Daerah",
  },
  {
    name: "Badan Kesatuan Bangsa & Politik",
  },
  {
    name: "Badan Kepegawaian dan Pengembangan SDM",
  },
  {
    name: "Dinas Komunikasi, Informatika, Statistik dan Persandian",
  },
  {
    name: "inas Koperasi, UKM & Perindustrian",
  },
];

const LinkDinasPage = () => {
  return (
    <div className="mt-6 px-4">
      <CustomPathName />

      <div className="mt-5 ml-5">
        <p className="text-center text-2xl text-gray-600 font-bold mt-4">
          Link Dinas
        </p>
        <div className="mt-4">
          <ul className="list-disc">
            {dataLinkDinas.map((data) => (
              <li key={data.name} className="mt-2">
                {data.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LinkDinasPage;

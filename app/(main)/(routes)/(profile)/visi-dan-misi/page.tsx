"use client";

import CustomPathName from "@/components/custom-pathname";
import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface VisiMisiData {
  id: number;
  name: string;
  content: string;
}

const VisiDanMisiPage = () => {
  const { data: visiMisi, isLoading } = useQuery({
    queryKey: ["profile-ppid"],
    queryFn: async () => {
      const res = await axiosInstance.get("/visi-dan-misi");
      const results = res.data;
      return results;
    },
  });

  return (
    <div className="mt-6 px-4">
      <CustomPathName />

      {visiMisi?.map((data: VisiMisiData) => (
        <div className="mt-5">
          <p className="text-center text-2xl text-gray-600 font-bold mt-4">
            {data.name}
          </p>
          <p key={data.id} className="mt-4">
            {data.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default VisiDanMisiPage;

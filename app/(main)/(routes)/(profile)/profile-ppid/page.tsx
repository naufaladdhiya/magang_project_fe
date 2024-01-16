"use client";

import CustomPathName from "@/components/custom-pathname";
import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface ProfileData {
  id: number;
  title: string;
  description: string;
}

const ProfilePPIDPage = () => {
  const { data: profileData, isLoading } = useQuery({
    queryKey: ["profile-ppid"],
    queryFn: async () => {
      const res = await axiosInstance.get("/profile/ppid");
      return res.data;
    },
  });

  return (
    <div className="mt-6 px-4">
      <CustomPathName />

      {profileData?.data?.map((data: ProfileData) => (
        <div className="mt-5" key={data.id}>
          <p className="text-center text-2xl text-gray-600 font-bold mt-4">
            {data.title}
          </p>
          <p key={data.id} className="mt-4">
            {data.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProfilePPIDPage;

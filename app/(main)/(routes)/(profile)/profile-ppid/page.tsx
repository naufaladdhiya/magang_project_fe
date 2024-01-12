"use client";

import CustomPathName from "@/components/custom-pathname";
import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface ProfileData {
  id: number;
  name: string;
  content: string;
}

const ProfilePPIDPage = () => {
  const { data: profileData, isLoading } = useQuery({
    queryKey: ["profile-ppid"],
    queryFn: async () => {
      const res = await axiosInstance.get("/profile-ppid");
      const results = res.data;
      return results;
    },
  });

  return (
    <div className="mt-6 px-4">
      <CustomPathName />

      {profileData?.map((data: ProfileData) => (
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

export default ProfilePPIDPage;

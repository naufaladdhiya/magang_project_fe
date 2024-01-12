import axiosInstance from "@/lib/axios";

export const getProfilePPID = async () => {
  const res = await axiosInstance.get("profile/ppid");
  return res.data;
};

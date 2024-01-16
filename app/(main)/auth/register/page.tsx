import React from "react";
import { Metadata } from "next";
import RegisterFeature from "@/features/Auth/Register";

export const metadata: Metadata = {
  title: "PPID Surakarta | Register",
};

const Register: React.FC = () => {
  return <RegisterFeature />;
};

export default Register;

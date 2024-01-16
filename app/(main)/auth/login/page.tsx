import React from "react";
import { Metadata } from "next";
import LoginFeature from "@/features/Auth/Login";

export const metadata: Metadata = {
  title: "PPID Surakarta | Login",
};

const Login: React.FC = () => {
  return <LoginFeature />;
};

export default Login;
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { authAxios } from "@/features/Auth/config";
import { toast } from "@/components/ui/use-toast";

export const useAuthLogin = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const formSchema = z.object({
    email: z.string().email({
      message: "Email must be a valid email.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const res = await authAxios.post("/auth/login", values);
      return res.data;
    },
    onSuccess: (data) => {
      toast({
        title: "Login berhasil",
      });
      localStorage.setItem("token", data.data.token);
      router.push("/");
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: error.response.data.message,
      });
    },
  });

  return {
    router,
    form,
    showPassword,
    setShowPassword,
    mutate,
    isPending,
  };
};

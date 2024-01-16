"use client";

import React from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

import AuthSideBG from "@/components/auth-sidebg";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuthRegister } from "./hook";

const RegisterFeature = () => {
  const { router, form, showPassword, setShowPassword, mutate, isPending } =
    useAuthRegister();

  return (
    <main className="grid grid-cols-2 w-full h-[100vh]">
      <AuthSideBG router={router} />
      <section className="p-16 w-full flex flex-col justify-center h-full">
        <div className="space-y-3 mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Registrasi</h1>
          <p className="text-gray-500 text-xl">
            Sudah punya akun?{" "}
            <Link href="/auth/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => {
              mutate(values);
            })}
            className="space-y-8 flex flex-col"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Alamat email anda</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Username anda</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Password anda</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="*********"
                        {...field}
                      />
                    </FormControl>
                    <Button
                      size="icon"
                      variant="outline"
                      className="absolute top-1/2 right-0 transform -translate-y-1/2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowPassword(!showPassword);
                      }}
                    >
                      {showPassword ? <Eye size={24} /> : <EyeOff size={24} />}
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              size="lg"
              className="self-center rounded-full bg-blue-700 hover:bg-blue-700/90 text-lg"
              disabled={isPending}
            >
              {isPending ? "Loading..." : "Buat Akun"}
            </Button>
          </form>
        </Form>
      </section>
    </main>
  );
};

export default RegisterFeature;

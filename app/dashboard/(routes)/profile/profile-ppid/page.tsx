"use client";

import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { getProfilePPID } from "@/service/profile-service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ProfilePPIDData {
  id: string;
  title: string;
  description: string;
}

const formProfileSchema = z.object({
  title: z.string().min(3).max(255),
  description: z.string().min(3).max(255),
});

function CardProfilePPID({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="w-full my-4" key={id}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-3">
        <Button className="w-[300px]" variant={`green`}>
          Edit Profile
        </Button>
        <Button className="w-[300px]" variant={`red`}>
          Hapus Profile
        </Button>
      </CardFooter>
    </Card>
  );
}

const ProfilePPIDFormPage = () => {
  const [openModal, setIsOpenModal] = useState(false);
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof formProfileSchema>>({
    resolver: zodResolver(formProfileSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formProfileSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    addProfilePPID(values);
    setIsOpenModal(false);
  }

  const { data: profilePPID } = useQuery({
    queryKey: ["profile-ppid"],
    queryFn: async () => {
      const response = await axiosInstance.get(`profile/ppid`);
      return response.data;
    },
  });

  const { mutate: addProfilePPID } = useMutation({
    mutationFn: async (values: z.infer<typeof formProfileSchema>) => {
      const response = await axiosInstance.post("profile/ppid", values);
      return response.data;
    },
    onSuccess: () => {
      console.log("success");
      alert("success");
      queryClient.invalidateQueries({ queryKey: ["profile-ppid"] });
    },
    onError: () => {
      throw new Error("An error occurred during add profile ppid");
    },
  });

  return (
    <div className="mt-4 w-full">
      <div className="mx-8">
        {profilePPID?.data?.map((profile: ProfilePPIDData) => (
          <CardProfilePPID
            key={profile.id}
            id={profile.id}
            title={profile.title}
            description={profile.description}
          />
        ))}

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">Tambah Data</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Tambah Data</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ProfilePPIDFormPage;

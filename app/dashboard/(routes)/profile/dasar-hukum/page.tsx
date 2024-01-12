"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { DataTable } from "@/components/tables/data-table";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";

import axiosInstance from "@/lib/axios";

type DataHukum = {
  id: string;
  jenis: string;
  isi: string;
};

const formDasarHukumSchema = z.object({
  jenis: z.string().min(3),
  isi: z.string().min(3),
});

const DasarHukumFormPage = () => {
  const queryClient = useQueryClient();
  const [openModal, setIsOpenModal] = useState(false);

  const form = useForm<z.infer<typeof formDasarHukumSchema>>({
    resolver: zodResolver(formDasarHukumSchema),
    defaultValues: {
      jenis: "",
      isi: "",
    },
  });

  function onSubmit(values: z.infer<typeof formDasarHukumSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    addDasarHukum(values);
    setIsOpenModal(false);
  }

  const { mutate: addDasarHukum } = useMutation({
    mutationFn: async (values: z.infer<typeof formDasarHukumSchema>) => {
      const response = await axiosInstance.post(
        "profile/dasar-hukum-table",
        values
      );
      return response;
    },
    onSuccess: () => {
      console.log("success");
      alert("success");
      queryClient.invalidateQueries({ queryKey: ["dasar-hukum"] });
    },
    onError: () => {
      throw new Error("An error occurred during add dasar hukum");
    },
  });

  const { data: dataHukum } = useQuery({
    queryKey: ["dasar-hukum"],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `profile/dasar-hukum-table?search=`
      );
      return response.data;
    },
  });

  const columns: ColumnDef<DataHukum>[] = [
    {
      accessorKey: "jenis",
      header: "Jenis",
    },
    {
      accessorKey: "isi",
      header: "Isi",
    },
    {
      id: "action",
      header: "Action",
    },
  ];

  return (
    <div className="mt-4 w-full">
      <div className="mx-8">
        <DataTable
          columns={columns}
          data={dataHukum?.data || []}
          columnToFilter="jenis"
        />

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">Tambah Data</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Tambahkan Data</DialogTitle>
              <DialogDescription>Tambahkan Data Dasar Hukum</DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="jenis"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jenis</FormLabel>
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
                  name="isi"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Isi</FormLabel>
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

export default DasarHukumFormPage;

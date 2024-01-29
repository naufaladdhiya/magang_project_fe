"use client";

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
import { useMutation, useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { useToast } from "@/components/ui/use-toast";

const formVisiMisiSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(3),
});

const VisiMisiFormPage = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formVisiMisiSchema>>({
    resolver: zodResolver(formVisiMisiSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formVisiMisiSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    addVisiMisi(values);
  }

  const { mutate: addVisiMisi } = useMutation({
    mutationFn: async (values: z.infer<typeof formVisiMisiSchema>) => {
      const response = await axiosInstance.post("profile/visi-misi", values);
      return response;
    },
    onSuccess: () => {
      console.log("success");
      toast({
        title: "Profile PPID",
        description: "Profile PPID berhasil ditambahkan",
      });
    },
    onError: () => {
      throw new Error("An error occurred during add visi misi");
    },
  });
  return (
    <div className="mt-4 w-full">
      <div className="mx-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
      </div>
    </div>
  );
};

export default VisiMisiFormPage;

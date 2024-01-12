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

const formLinkPPIDSchema = z.object({
  title: z.string().min(3),
  link: z.string().min(3),
});

const LinkPPIDFormPage = () => {
  const form = useForm<z.infer<typeof formLinkPPIDSchema>>({
    resolver: zodResolver(formLinkPPIDSchema),
    defaultValues: {
      title: "",
      link: "",
    },
  });

  function onSubmit(values: z.infer<typeof formLinkPPIDSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    addProfilePPID(values);
  }

  const { mutate: addProfilePPID } = useMutation({
    mutationFn: async (values: z.infer<typeof formLinkPPIDSchema>) => {
      const response = await axiosInstance.post(
        "profile/link-ppid-pelaksana",
        values
      );
      return response;
    },
    onSuccess: () => {
      console.log("success");
      alert("success");
    },
    onError: () => {
      throw new Error("An error occurred during add profile ppid");
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
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Link</FormLabel>
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

export default LinkPPIDFormPage;

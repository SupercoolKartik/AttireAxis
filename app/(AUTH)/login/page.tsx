"use client";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { loginSchema } from "@/schema"; //Schema is built somewhere else and is wxported here

//Exporting componenets to butis the form
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
//npx shadcn-ui@latest add input

//Card component
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const login = () => {
  // const form = useForm<z.infer<typeof loginSchema>>({
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (vals: z.infer<typeof loginSchema>) => {
    console.log(vals);
  };

  return (
    <div className="flex justify-center items-center my-5">
      <Card className=" w-80">
        <CardHeader>
          <CardTitle className="text-xl font-bold  text-gray-900">
            Login to AttireAxis
          </CardTitle>
          <CardDescription className="text-xs font-semibold text-black">
            don't have an account?{" "}
            <Link
              href={"/signup"}
              className=" text-red-700 hover:text-red-900 "
            >
              Sign Up
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <>
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="dohnjoe@gmail.com"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <>
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="**********"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />
              <Link href={"/forgot"} className="flex items-end justify-end">
                <p className="text-red-500 text-xs font-semibold hover:text-red-600 ">
                  Forgot Password?
                </p>
              </Link>
              <Button className="bg-gray-900 hover:bg-gray-950" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default login;

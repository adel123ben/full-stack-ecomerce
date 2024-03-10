"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { loginSchema } from "@/lib/validation"
import { Button } from "@/components/ui/button"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signIn } from "next-auth/react";
import Link from "next/link"
import toast from "react-hot-toast"

function Login() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

 
 
  // Define a submit handler.
 async function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: true,
      callbackUrl: "/",

    }).then(
      (res) => {
        if (res?.error) {
          toast.error(res.error)
        } else {
          toast.success("Login Successful")
        }
      },
    ).catch(
      (error) => toast.error(error.message),
    )
    console.log(values)
  }
  return (
    <>
   
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-64 md:h-72 w-auto"
            src="https://github.com/adel123ben/estore/blob/main/public/logo.png?raw=true"
            alt="Your Company"
          />
          <h2 className="-mt-16 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your ESTORE account
          </h2>
        </div>

        <div className="mt-10  sm:mx-auto sm:w-full sm:max-w-sm">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" action="#" method="POST">
            <div>
            <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="write your email please" {...field} />
              </FormControl>       
              <FormMessage />
            </FormItem>
          )}
        />
            </div>
            <div>
            <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input placeholder="enter your password" {...field} type='password' />
              </FormControl>
        
              <FormMessage />
            </FormItem>
          )}
        />
            </div>
           
            <div>
              <Button
            //  onClick={e => toast.success("You are logged in")}
                type="submit"
                className="flex bg-neutral-950  w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </Button>
            </div>
            
            <p className="text-center text-sm">You don&apos;t have an account ? 
            <Link href="/auth/register">
            <span className="text-blue-500 cursor-pointer ml-1">Register</span>
            </Link>
            </p>
          </form>
        </Form>
         

       
        </div>
      </div>
    </>
  )
}

export default Login;
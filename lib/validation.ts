"use client"

import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().email({ message: "You must provide a valid email" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }).max(15, { message: "Password must be at most 15 characters" }),
})

export const registerSchema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters" }).max(15, { message: "Name must be at most 15 characters" }),
    email: z.string().email({ message: "You must provide a valid email" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }).max(15, { message: "Password must be at most 15 characters" }),
})
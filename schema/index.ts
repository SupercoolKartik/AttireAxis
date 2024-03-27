"use client"
 
import { z } from "zod"
 
export const loginSchema = z.object({
  email: z.string().email().min(2, {
    message: "Please enter a valid email",
  }),
  password: z.string().min(6, {
    message: "Password must be of atleast 6 characters",
  }),
});

export const signupSchema = z.object({
  username: z.string().min(2,{
    message: "Please enter a valid email",
  }).max(50),
  email: z.string().email({
    message: "Please enter a valid email",
  }).max(50),
  password: z.string().min(6, {
    message: "Password must be of atleast 6 characters",
  }),
  confirmPassword: z.string().min(6, {
    message: "Password must be of atleast 6 characters",
  }),
})
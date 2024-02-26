import { z } from "zod";

export const signupValidation = z.object({
      name: z.string().min(2, "too short"),
      username: z.string().min(2, "too small"),
      email: z.string().email(),
      password: z.string().min(8, "Password must be at least 8 characters")
    })

    export const signinValidation = z.object({
      
      email: z.string().email(),
      password: z.string().min(8, "Password must be at least 8 characters")
    })


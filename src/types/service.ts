import { z } from "zod";

export const serviceFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.email().min(1, { message: "Email is required" }),
  service: z.enum(["Data and Analytics", "Cloud", "AI and Automation", "Managed Services", "Application Services"]),
  message: z.string().optional()
})

export type ServiceFormSchemaType = z.infer<typeof serviceFormSchema>

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.email().min(1, { message: "Email is required" }),
  companyName: z.string().min(1, { message: "Company Name is required" }),
  message: z.string().optional()
})

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>

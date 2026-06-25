"use server"

import { db } from "@/db";
import { contact } from "@/db/schema";
// import ContactFormEmail from "@/components/ContactFormEmail";
import { ContactFormSchemaType } from "@/types/service";
// import { Resend } from 'resend'

// import { config } from "dotenv";

// config({ path: ".env.local" });

// const resend = new Resend("insert-token-here")

export async function sendEmail(data: ContactFormSchemaType) {

  console.log(data)

  // const result = contactFormSchema.safeParse(data)

  // if (result.success) {
  //   try {
  //     const data = await resend.emails.send({
  //       from: "karan@datastunt.com",
  //       to: ["karan.sia24@gmail.com"],
  //       subject: 'Contact form submission',
  //       text: `Name: ${result.data.name}\nEmail: ${result.data.email}\nMessage: ${result.data.message}`,
  //       react: ContactFormEmail({ data: result.data })
  //     })
  //     return { success: true, data }
  //   } catch (error) {
  //     return { success: false, error }
  //   }
  // }

  // if (result.error) {
  //   return { success: false, error: result.error.format() }
  // }
}

export const submitContactFormAction = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const companyName = formData.get("companyName") as string;
  const message = formData.get("message") as string || undefined;

const sanitizedMessage = message?.replace(/\n/g, "\\n");

  const result = await db.insert(contact).values({
    name,
    email,
    companyName,
    message: sanitizedMessage,
    createdAt: new Date()
  }).returning({ insertedId: contact.id });

  return { success: true, id: result[0].insertedId };
}

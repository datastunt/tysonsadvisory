"use client";

import InputWithLabel from "@/components/inputs/InputWithLabel";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@/components/ui/card";
import TextareaWithLabel from "@/components/inputs/TextareaWithLabel";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ContactFormSchemaType, contactFormSchema } from "@/types/service";
import { submitContactFormAction } from "@/action/contact-action";

const ContactUsForm = () => {
  const form = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      companyName: "",
    },
  });

  const submitHandler = async (data: ContactFormSchemaType) => {
    console.log(data);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string);
    });
    submitContactFormAction(formData);
    toast("Details submitted", {
      description: "Our team with reach out shortly",
    });
    form.reset();
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="flex-1 flex flex-col gap-2 p-4 lg:px-8"
      >
        <Card className="flex flex-col gap-5 px-6 shadow-md shadow-gray-800">
          <InputWithLabel<ContactFormSchemaType>
            nameInSchema="name"
            fieldTitle="Full Name"
          />
          <InputWithLabel<ContactFormSchemaType>
            nameInSchema="email"
            fieldTitle="Email"
          />
          <InputWithLabel<ContactFormSchemaType>
            nameInSchema="companyName"
            fieldTitle="Company Name"
          />
          <TextareaWithLabel<ContactFormSchemaType>
            nameInSchema="message"
            rows={10}
            fieldTitle="Message"
            className="h-32"
          />
          <Button className="bg-primary py-5 hover:bg-blue-600 transition-all ease-in-out duration-700 cursor-pointer text-white font-medium font-content font-stretch-75%">
            Submit
          </Button>
        </Card>
      </form>
    </FormProvider>
  );
};

export default ContactUsForm;

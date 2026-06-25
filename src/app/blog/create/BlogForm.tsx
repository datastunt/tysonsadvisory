"use client";

// import { addPostAction, saveEditPostAction } from "@/actions/post-actions";
import InputWithLabel from "@/components/inputs/InputWithLabel";
import RichTextEditorInput from "@/components/inputs/RichTextEditorInput";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAction } from "next-safe-action/hooks";
import {
  insertPostSchema,
  InsertPostSchemaType,
  SelectPostSchemaType,
} from "@/schemas/posts-schema";
import { createPostAction } from "@/action/post-actions";

type Props = {
  blogData?: SelectPostSchemaType;
};

const BlogForm = ({ blogData }: Props) => {
  const isEditing = !!blogData;

  const defaultValues: InsertPostSchemaType = {
    id: blogData?.id || 0,
    title: blogData?.title || "",
    author: blogData?.author || "",
    category: blogData?.category || "",
    content: blogData?.content || "",
    headerImg: blogData?.headerImg || "",
    createdAt: blogData?.createdAt || new Date(),
  };

  const form = useForm<InsertPostSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertPostSchema),
    defaultValues,
  });

  const { execute: executeSave, isExecuting } = useAction(createPostAction, {
    onSuccess: () => {
      toast.message("Resource saved successfully");
    },
  });

  const hookSubmitHandler = (data: InsertPostSchemaType) => {
    console.log(data);
    executeSave(data);
  };

  return (
    // FormProvider replaces <Form {...form}> — gives useFormContext() access to child inputs
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(hookSubmitHandler)}
        className="space-y-4"
      >
        <InputWithLabel<InsertPostSchemaType>
          nameInSchema="title"
          fieldTitle="Title"
          containerClass="py-5"
        />

        <div className="flex items-center flex-col sm:flex-row gap-5 w-full">
          <InputWithLabel<InsertPostSchemaType>
            nameInSchema="author"
            fieldTitle="Author"
            containerClass="flex-1 w-full"
          />
          <InputWithLabel<InsertPostSchemaType>
            nameInSchema="category"
            fieldTitle="Category"
            containerClass="flex-1 w-full"
          />
          <InputWithLabel<InsertPostSchemaType>
            nameInSchema="headerImg"
            fieldTitle="Header Image"
            containerClass="flex-1 w-full"
            disabled={isEditing}
          />
        </div>

        <RichTextEditorInput<InsertPostSchemaType>
          nameInSchema="content"
          fieldTitle="Blog body"
        />

        <Button type="submit" disabled={isExecuting}>
          {isEditing ? "Save Changes" : "Publish"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default BlogForm;

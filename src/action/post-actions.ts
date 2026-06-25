"use server"

import { db } from "@/db";
import { posts } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { flattenValidationErrors } from "next-safe-action";
import { actionClient } from "@/lib/safe-action";
import { insertPostSchema, InsertPostSchemaType, updatePostSchema } from "@/schemas/posts-schema";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export type Errors = {
  title?: string;
  content?: string;
  header_img?: string;
  category?: string;
}

export type FormState = {
  errors: Errors
}

export const createPostAction = actionClient
  .metadata({ actionName: "createPostAction" })
  .inputSchema(insertPostSchema, {
    handleValidationErrorsShape: async (ve) => flattenValidationErrors(ve).fieldErrors
  })
  .action(async ({
    parsedInput: postData
  }: { parsedInput: InsertPostSchemaType }) => {

    const { isAuthenticated } = getKindeServerSession()

    const isAuth = await isAuthenticated()

    if (!isAuth) redirect('/')

    if (postData.id === 0) {
      // add to db
      await db.insert(posts).values({
        title: postData.title,
        content: postData.content,
        category: postData.category,
        headerImg: postData.headerImg,
        author: "Admin",
        createdAt: new Date()
      }).returning({ insertedId: posts.id })

      revalidatePath('/blog');
      redirect('/blog')
    }
    await db.update(posts)
      .set({
        title: postData.title,
        content: postData.content,
        category: postData.category,
        headerImg: postData.headerImg,
        author: "Admin",
      })
      .where(eq(posts.id, postData.id!))
      .returning({ updatedId: posts.id })

    revalidatePath('/blog');
    revalidatePath(`/blog/${postData.id}`)
    redirect(`/blog/${postData.id}`)

  })


export const addPostAction = async (formData: FormData) => {

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const header_img = formData.get("headerImg") as string;
  const category = formData.get("category") as string;


  await db.insert(posts).values({
    title: title,
    content: content,
    category: category,
    headerImg: header_img,
    author: "Admin",
    createdAt: new Date()
  }).returning({ insertedId: posts.id })

  revalidatePath(`/blog`)

  redirect('/blog')

}

export const saveEditPostAction = async (formData: FormData) => {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const headerImg = formData.get("headerImg") as string;
  const category = formData.get("category") as string;
  const author = formData.get("author") as string;

  if (!id) {
    return { errors: { id: "Post ID is required" } };
  }

  const parsedData = updatePostSchema.safeParse({
    title,
    content,
    category,
    author,
    headerImg,
  });

  // if (!parsedData.success) {
  //   return { errors: parsedData.error.flatten().fieldErrors };
  // }

  await db
    .update(posts)
    .set({
      ...parsedData.data,
    })
    .where(eq(posts.id, parseInt(id)));

  revalidatePath(`/blog/${id}`)

  redirect(`/blog/${id}`)
};

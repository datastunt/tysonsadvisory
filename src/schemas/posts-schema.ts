import { posts, contact } from "@/db/schema";
import { createInsertSchema, createSelectSchema, createUpdateSchema } from "drizzle-zod";
import { z } from "zod";

export const insertPostSchema = createInsertSchema(posts, {
  title: schema => schema.min(1, "Title is required"),
  author: schema => schema.min(1, "Author is required"),
  content: schema => schema.min(40, "Content is required"),
  category: schema => schema.min(1, "Category is required"),
  headerImg: schema => schema.min(1, "Header image link is required"),
});

export const selectPostSchema = createSelectSchema(posts);

export type InsertPostSchemaType = z.infer<typeof insertPostSchema>;
export type SelectPostSchemaType = z.infer<typeof selectPostSchema>;

export const updatePostSchema = createUpdateSchema(posts, {
  title: schema => schema.min(1, "Title is required"),
  content: schema => schema.min(1, "Content is required"),
  category: schema => schema.min(1, "Category is required"),
  author: schema => schema.min(1, "Author is required"),
});

export const insertContactFormSchema = createInsertSchema(contact, {
  name: schema => schema.min(1, "Name is required"),
  email: () => z.email({ message: "Invalid email format" }),
  companyName: schema => schema.min(1, "Company Name is required"),
  message: schema => schema.optional(),
});

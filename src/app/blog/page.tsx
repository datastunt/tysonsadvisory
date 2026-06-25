import { db } from "@/db";
import { posts } from "@/db/schema";
import BlogListClient from "./BlogListClient";
import { desc } from "drizzle-orm"

const BlogsList = async () => {
  // Fetch data on the server
  const blogList = await db.select().from(posts).orderBy(desc(posts.createdAt));
  const categories = await db.selectDistinct({ category: posts.category }).from(posts);
  
  // Pass data to client component
  return <BlogListClient initialBlogs={blogList} categories={categories} />;
};

export default BlogsList;

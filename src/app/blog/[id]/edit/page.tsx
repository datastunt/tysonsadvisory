import { posts } from "@/db/schema";
import BlogForm from "../../create/BlogForm";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>
}

const EditBlogPage = async ({ params }: Props) => {

  const { isAuthenticated } = getKindeServerSession()

  const isAuth = await isAuthenticated()

  if (!isAuth) {
    return notFound()
  }

  const { id } = await params
  const result = await db.select().from(posts).where(eq(posts.id, parseInt(id)));

  return <div className="flex flex-col gap-3 px-8 lg:px-2">
    <h1 className="text-4xl font-medium font-header py-10">Edit Resource</h1>
    <BlogForm blogData={result[0]} />
  </div>;
};

export default EditBlogPage;


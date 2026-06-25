import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import BlogForm from "./BlogForm";
import { notFound } from "next/navigation";

const CreateBlogPage = async () => {

  const { isAuthenticated } = getKindeServerSession()

  const isAuth = await isAuthenticated()

  if (!isAuth) {
    return notFound()
  }

  return <div className="flex flex-col gap-3 px-8 lg:px-2 w-full">
    <h1 className="text-4xl font-medium font-header py-10">Create a new Blog</h1>
    <BlogForm />
  </div>
};

export default CreateBlogPage;


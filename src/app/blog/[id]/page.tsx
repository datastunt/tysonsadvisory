import { Card } from "@/components/ui/card";
import { db } from "@/db";
import { posts } from "@/db/schema";
import { format } from "date-fns";
import { eq, ne } from "drizzle-orm";
import { notFound } from "next/navigation";
import DOMPurify from 'isomorphic-dompurify'
import Link from "next/link";
import EditRouteButton from "./EditRouteButton";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

type Props = {
  params: Promise<{ id: string }>
}

const BlogPage = async ({ params }: Props) => {

  const { isAuthenticated } = getKindeServerSession()

  const isAuth = await isAuthenticated()

  if (!isAuth) {
    return notFound()
  }

  const { id } = await params;

  const otherBlogs = await db.select().from(posts).where(ne(posts.id, parseInt(id)))

  const blogContent = await db.select().from(posts).where(eq(posts.id, parseInt(id)))
  if (blogContent.length === 0) {
    notFound()
  }

  return (
    <div className="p-0 bg-white text-black">
      <div
        className="w-full relative -mt-[8vh] pt-24 pb-4 flex flex-col gap-5 items-center justify-center bg-white min-h-[55vh] bg-fixed bg-cover"
        style={{
          backgroundImage: `url(${blogContent[0].headerImg ?? ""})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/10 to-black/50"></div>
        <h1 className="z-20 text-white w-full text-center text-3xl md:text-5xl px-5 font-header font-stretch-200% font-bold uppercase">
          {blogContent[0].title}
        </h1>
        <span className="z-20 flex items-center gap-5 w-full justify-center font-semibold">
          <p className="font-content text-sm text-gray-300 tracking-wider">
            {format(blogContent[0].createdAt, "MMM yyyy")}
          </p>
          <p className="font-content text-sm text-gray-300">|</p>
          <p className="font-content text-sm text-gray-300 tracking-wider">{blogContent[0].category}</p>
        </span>
      </div>
      <div className="w-full flex px-5 items-center justify-center">
        <section className="flex flex-col  items-start justify-between gap-4 max-w-5xl">
          <div className="flex flex-col gap-2 w-full py-10">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(blogContent[0].content),
              }}
            />
          </div>
          <EditRouteButton id={parseInt(id)} />
          <div className="w-full py-10 space-y-3">
            <p className="text-2xl font-semibold font-header uppercase w-full text-center py-5">More resources</p>
            <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherBlogs.map((blog) => (
                <Link key={blog.id} href={`/blog/${blog.id}`} >
                  <Card className="flex flex-col h-full justify-between gap-1 p-3">
                    <h3 className="text-lg font-semibold font-header font-stretch-200% line-clamp-2">{blog.title}</h3>
                    <span className="z-20 flex items-center gap-2 w-full font-semibold">
                      <p className="font-content text-xs text-gray-300 tracking-wider">
                        {format(blog.createdAt, "MMM yyyy")}
                      </p>
                      <p className="font-content text-sm text-gray-300">|</p>
                      <p className="font-content text-xs text-gray-300 tracking-wider">{blog.category}</p>
                    </span>
                  </Card>
                </Link>
              ))}
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;


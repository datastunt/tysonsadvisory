import { db } from "@/db";
import { posts } from "@/db/schema";
import Image from "next/image"
import Link from "next/link";

const BlogCards = async () => {

  const blogs = await db.select().from(posts)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {blogs.slice(0,3).map((blog) => (
        <Link href={`/blog/${blog.id}`} key={blog.id}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
            <div className="w-full h-full overflow-hidden">
              <Image
                src={blog.headerImg || "/placeholder.svg"}
                alt={blog.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="font-content text-sm font-medium text-gray-300 mb-2">{blog.category}</span>
              <h3 className="text-2xl font-medium font-header text-white leading-tight group-hover:text-blue-400 transition-colors">
                {blog.title}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default BlogCards;

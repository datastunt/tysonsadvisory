import { Card } from "@/components/ui/card"
import Link from "next/link"
import { format } from "date-fns"
import { SelectPostSchemaType } from "@/schemas/posts-schema"

type Props = {
  blogs: SelectPostSchemaType[]
}

export default function BlogGrid({ blogs }: Props) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
        {blogs.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}


function BlogCard({ post }: { post: SelectPostSchemaType }) {

  return (
    <Link href={`/blog/${post.id}`}>
      <Card
        className="relative h-[400px] overflow-hidden group cursor-pointer"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-linear transform scale-100 group-hover:scale-110"
          style={{
            backgroundImage: `url(${post.headerImg})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute bottom-0 left-0 p-6 z-10 w-full font-content text-white">
          <div className="text-sm font-medium mb-2">{post.category}</div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-header">{post.title}</h2>
          <div className="text-sm text-white">{format(post.createdAt,'PPP')}</div>
        </div>
      </Card>
    </Link>
  )
}


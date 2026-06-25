"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import BlogGrid from "./BlogGrid";
import { SelectPostSchemaType } from "@/schemas/posts-schema";
import Link from "next/link";

type Props = {
  initialBlogs: SelectPostSchemaType[],
  categories: {
    category: string
  }[]
}

const BlogListClient = ({ initialBlogs, categories }: Props) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredBlogs = activeCategory
    ? initialBlogs.filter(blog => blog.category === activeCategory)
    : initialBlogs;

  const handleCategoryClick = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };

  return (
    <div className="w-full pt-[8vh]">
      <div className="flex flex-col items-center justify-center w-full h-[25vh]">
        <h2 className="font-header font-stretch-200% tracking-wide text-3xl font-medium sm:text-4xl md:text-5xl py-3 uppercase">Resources</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-content">Case Studies, Thought Leadership, Events and News</p>
      </div>
      <section className="w-full flex items-center">
        <div className="max-w-3xl flex flex-wrap mx-auto items-center justify-center gap-7">
          {categories.map(cat => (
            <Button
              key={cat.category}
              variant={activeCategory === cat.category ? "secondary" : "link"}
              className="font-content uppercase text-neutral-100 cursor-pointer"
              onClick={() => handleCategoryClick(cat.category)}
            >
              {cat.category}
            </Button>
          ))}
        </div>
      </section>
      <BlogGrid blogs={filteredBlogs} />
      <section className="w-full flex items-center justify-center">
        <Link href="/blog/create">
          <Button className="text-base font-normala px-4 py-4 tracking-wide">+ Create New</Button>
        </Link>
      </section>
    </div>
  );
};

export default BlogListClient;

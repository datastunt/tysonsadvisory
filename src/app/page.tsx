import BlogCards from "@/components/BlogCards";
import BrandCarousel from "@/components/home/BrandCarousel";
import HeroCarousel from "@/components/home/HeroCarousel";
import HomeTimeline from "@/components/home/HomeTimeline";
import ServiceCards from "@/components/home/ServiceCards";
import TestimonialSection from "@/components/home/TestimonialSection";

export default function Home() {

  const brandLogos = [
    { src: "https://4uq7g3y1c9.ufs.sh/f/papAmzoxRga8bUfzfckNWXxPYazQ8b7mrwBFMSIOyspRkVij", alt: "Brand 7" },
    { src: "https://4uq7g3y1c9.ufs.sh/f/papAmzoxRga8xvzQyGbjJYQGzX6kH5rmdDwsZ7CyUaluBIOn", alt: "Brand 8" },
    { src: "https://4uq7g3y1c9.ufs.sh/f/papAmzoxRga8hGxtnWfwWpgs5kzXyaSCAmj7vlrI9oUKdJYc", alt: "Brand 4" },
    { src: "https://4uq7g3y1c9.ufs.sh/f/papAmzoxRga857gxV9J2TIsFOJMtjfWr4RVeoEUKqN91whln", alt: "Brand 4" },
    { src: "https://4uq7g3y1c9.ufs.sh/f/papAmzoxRga8mRSwSV1rSF0cpiIEa4TVlvwKWXZjRxsAtJdP", alt: "Brand 4" },
    { src: "https://4uq7g3y1c9.ufs.sh/f/papAmzoxRga8mNYzTE1rSF0cpiIEa4TVlvwKWXZjRxsAtJdP", alt: "Brand 1" },
    { src: "https://4uq7g3y1c9.ufs.sh/f/papAmzoxRga8lhOU8G5ugZjY7ecXoTLItUBWK6NG9bzwE4DP", alt: "Brand 2" },
    { src: "https://4uq7g3y1c9.ufs.sh/f/papAmzoxRga85YkbS1J2TIsFOJMtjfWr4RVeoEUKqN91whln", alt: "Brand 3" },
    { src: "https://4uq7g3y1c9.ufs.sh/f/papAmzoxRga8iGz5d9utIWfFXS20sazGBcORk7jPKv9VnywA", alt: "Brand 5" },
    { src: "https://4uq7g3y1c9.ufs.sh/f/papAmzoxRga88074L6l6bHPsW4yEjtCD2iZNK0AhLYw7OmJg", alt: "Brand 6" },
  ]

  return (
    <main className="font-content">
      <HeroCarousel />
      <ServiceCards />
      <HomeTimeline />
      <TestimonialSection />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="w-full text-center font-header font-stretch-200% text-xl md:text-3xl uppercase py-5">You&apos;re in good hands</h3>
          </div>

          <BrandCarousel logos={brandLogos} autoScrollInterval={3000} className="max-w-7xl mx-auto" />
        </div>
      </section>
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <h3 className="w-full text-center font-header font-stretch-200% text-xl md:text-3xl uppercase py-5">Featured Resources</h3>
          <BlogCards />
        </div>
      </section>
    </main>
  )
}


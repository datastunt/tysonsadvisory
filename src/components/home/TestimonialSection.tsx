import { Separator } from "@/components/ui/separator"
import TestimonialCard from "./TestimonialCard"


export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "Thrilled to partner with the Tysons Advisory team as they bring tremendous experience building and configuring AI tools for organizations across commercial real estate and multifamily housing. Excited to bring innovation into complex compliance and certification workflows to create 10X value for affordable housing.",
      name: "Anne Hollander",
      title: "Advisor",
      company: "The Strategic Edge ",
      avatarSrc: "/placeholder.svg?height=40&width=40",
      initials: "AH",
    },
    {
      quote:
        "We are proud to partner with Tysons Advisory to support innovative workflow automation and real-time edge solutions for mission-critical operations, driving efficiency and security where it matters most",
      name: "Brian Jacobs",
      title: "COO",
      company: "weElevateIT",
      avatarSrc: "/placeholder.svg?height=40&width=40",
      initials: "BJ",
    },
    {
      quote:
        "Mangodoc AI has unique features enabling practical AI use in the targeted professions. The more you learn about the platform, the more you will understand the brilliance of the approach. I was impressed by the Template Library, a feature that allows an accounting analyst to get starte",
      name: "Randy Johnston",
      title: "EVP",
      company: "MCS, MCP, K2 Enterprises",
      avatarSrc: "/placeholder.svg?height=40&width=40",
      initials: "RJ",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
        <h3 className="w-full text-center font-header font-stretch-200% text-xl md:text-3xl uppercase py-5">Vested in your Success</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto font-content tracking-wide">
            Discover how our IT consulting services have helped businesses across industries solve complex challenges
            and achieve their technology goals.
          </p>
          <Separator className="mt-8 max-w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}


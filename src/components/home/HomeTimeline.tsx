"use client"

import { useRef } from "react"
import { useInView } from "motion/react"
import Image from "next/image"
import TimelineItem from "./TimelineItem"
import Blob from "@/components/ui/blob"


const HomeTimeline = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const timelineItems = [
    {
      number: 1,
      title: "Trusted Advisor :",
      content:
        " Industry-leading SMEs deliver exceptional solutions as your trusted advisor, tackling complex challenges with unparalleled expertise. We're committed to your long-term success",
    },
    {
      number: 2,
      title: "Transformative Mission-Critical Projects :",
      content:
        "We modernize people, processes, and technology by overcoming key challenges: data access, skilled talent, and effective AI model training",
    },
    {
      number: 3,
      title: "Long-Term Partnership : ",
      content:
        "Beyond project delivery, we're invested in your sustained growth and dedicated to being your strategic partner in the evolving digital landscape.",
    },
  ]

  return (
    <section className=" relative overflow-hidden">
      <Blob color="#759dff" />

      <div className="absolute inset-0 -z-10 block md:hidden">
        <div className="absolute inset-0 bg-[#0a1428]/90" />
        <Image src="https://4uq7g3y1c9.ufs.sh/f/papAmzoxRga8fJhsfnUoUemiDPbkacx9GyYqX5Kj8lrOLg6H" alt="Canyon with starry sky" fill className="object-cover brightness-[0.3]" />
      </div>

      <div className="w-full mx-auto px-8 py-16 md:py-24">
        <div className="flex flex-col gap-2 py-5">
          <h3 className="font-header font-stretch-200% text-4xl font-semibold uppercase">Partner with Us</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 z-30">
          <div className="hidden md:block relative h-full min-h-[400px]">
            <Image src="https://4uq7g3y1c9.ufs.sh/f/papAmzoxRga8fJhsfnUoUemiDPbkacx9GyYqX5Kj8lrOLg6H" alt="Canyon with starry sky" fill className="object-cover rounded-lg" />
          </div>

          <div ref={ref} className="space-y-6 md:col-span-2">
            {timelineItems.map((item) => (
              <TimelineItem key={item.number} number={item.number} content={item.content} title={item.title} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeTimeline

"use client"

import Image from "next/image"
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { useInView } from "motion/react";
import Link from "next/link";

interface Card {
  id: string
  link: string,
  title: string
  description: string
  image: string
}

const cards: Card[] = [
  {
    id: "card-0",
    link: "/services/Strategy_and_Advisory",
    title: "Strategy and Advisory",
    description:
      "Our strategic consulting services help businesses identify opportunities, overcome challenges, and achieve sustainable growth in today's competitive landscape.",
    image: "https://4uq7g3y1c9.ufs.sh/f/papAmzoxRga8LNnTriY2w8qQ3dHk0I5vJUtAsiV4ajLBmK19",
  },
  {
    id: "card-1",
    link: "/services/Data_Cloud_and_Analytics",
    title: "Data, Cloud and Analytics",
    description:
      "We optimize, secure, and integrate your data and cloud infrastructure for actionable insights and compliance.",
    image: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9YQcJX01NMFK6AZWV9Qv1IGE4zy5CdbBeqfDP",
  },
  {
    id: "card-3",
    link: "/services/AI_and_Automation",
    title: "AI and Automation",
    description:
      "We accelerate automations with low-code/no-code COTS and build high precision AI/LLM models for enterprises",
    image: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9A1tMUcwuO4h9zUp1a6MJqneWdFYX87yo52wm",
  },
  {
    id: "card-4",
    link: "/services/Managed_and_Application_Services",
    title: "Application and Managed Services",
    description:
      "We modernize and maintain legacy platforms and provide managed IT services and solutions",
    image: "https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9HXTQE4NMor0Nh4Jfi5AVDOw6lmEq82F9dasj",
  },
]

export default function ServiceCards() {
  return (
    <section className="w-full py-12 md:py-24 relative">
      <div className="w-1/2 absolute top-0 left-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="20" />
            </filter>
          </defs>

          <path fill="#306bff" opacity="0.7" filter="url(#softBlur)"
            d="M47.5,-52.2C58.1,-47.7,60.8,-29.5,63.9,-11.3C67.1,6.8,70.7,24.9,65.2,40.7C59.7,56.6,45.1,70.3,29,73.4C12.9,76.4,-4.7,68.9,-22.3,62.1C-39.8,55.3,-57.4,49.3,-67.3,36.6C-77.2,24,-79.4,4.8,-69.1,-5C-58.8,-14.8,-36,-15.2,-22.3,-19.1C-8.7,-23,-4.4,-30.4,7.1,-38.8C18.5,-47.2,36.9,-56.6,47.5,-52.2Z"
            transform="translate(100 100)" />
        </svg>

      </div>
      <div className="w-full px-4 md:px-6 z-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <Link href={card.link} key={card.id}>
              <HoverCard card={card} index={index} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function HoverCard({ card, index }: { card: Card; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="relative h-[180px] sm:h-[300px] overflow-hidden rounded-lg shadow-lg shadow-gray-700 border border-gray-700"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ scale: hovered ? 1.1 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={card.image || "/placeholder.svg"} alt={card.title} fill className="object-cover" />
      </motion.div>

      <div id="overlay" className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>

      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-6"
        animate={{ y: hovered ? -20 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3
          className="font-header text-base lg:text-lg font-bold text-white md:text-2xl"
          animate={{ y: hovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {card.title}
        </motion.h3>

        <motion.div
          className="overflow-hidden"
          animate={{ height: hovered ? "auto" : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.p
            className="text-xs text-white/90 md:text-sm"
            animate={{ y: hovered ? 0 : 10, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {card.description}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoCarouselProps {
  logos: {
    src: string
    alt: string
  }[]
  className?: string
  autoScrollInterval?: number
}

export default function BrandCarousel({ logos, className, autoScrollInterval = 5000 }: LogoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const totalLogos = logos.length
  const visibleLogos = 5 // Number of logos visible at once
  const maxIndex = Math.max(0, totalLogos - visibleLogos)

  useEffect(() => {
    if (isPaused || maxIndex === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1
        return nextIndex > maxIndex ? 0 : nextIndex
      })
    }, autoScrollInterval)

    return () => clearInterval(interval)
  }, [isPaused, maxIndex, autoScrollInterval])

  return (
    <div
      className={cn("relative w-full overflow-hidden py-10", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={carouselRef}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / visibleLogos)}%)` }}
      >
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-1/5 px-6 flex items-center justify-center">
            <div className="relative h-40 w-full">
              <Image src={logo.src || "/placeholder.svg"} alt={logo.alt} fill className="object-contain" />
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              currentIndex === index ? "bg-primary" : "bg-gray-300",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

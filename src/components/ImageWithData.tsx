"use client"

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type Props = {
  image: string;
  header: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imgPosition?: "left" | "right"
}

const ImageWithData = ({
  image,
  header,
  description,
  ctaText,
  ctaLink,
  imgPosition = "right"
}: Props) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }
  };

  return (
    <section ref={sectionRef} className="w-full text-white overflow-hidden py-12 px-8 md:px-4">
      <motion.div
        className="container mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className={cn("flex flex-col items-center justify-between gap-8",
          imgPosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse")}>
          <div className="w-full lg:w-1/2 space-y-6">
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -top-8 -left-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full opacity-70"></div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight relative font-header">
                {header}
                <div className="absolute -bottom-2 w-full">
                  <svg height="10" width="100%">
                    <line x1="0" y1="5" x2="100%" y2="5" stroke="#639aff" strokeWidth="3" strokeLinecap="round" strokeDasharray="1, 15" />
                  </svg>
                </div>
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="md:text-lg text-muted-foreground font-content">
              {description}
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link href={ctaLink}>
                <Button
                  className="bg-primary  hover:bg-blue-600 transition-all ease-in-out duration-700 cursor-pointer text-lg  px-4 py-5 text-white tracking-wide font-content font-stretch-75%"
                >
                  {ctaText}
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div variants={imageVariants} className="w-full lg:w-1/2 relative">
            <Card className="border-0 bg-transparent overflow-hidden shadow-2xl size-full lg:min-h-72 sm:max-lg:-mt-24">
              <CardContent className="p-0 relative size-full flex items-center justify-end">
                <Image
                  src={image}
                  alt="tyson advisory image"
                  width="800"
                  height="800"
                  priority
                  className="object-cover rounded-lg w-full sm:w-1/3 lg:w-full"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ImageWithData


"use client"

import { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";

type Props = {
  icon: React.ReactNode;
  header: string;
  description: string;
  index: number;
};

const IconItem = ({ icon, header, description, index }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1 * index,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative"
    >
      {/* Icon */}
      <motion.div variants={itemVariants} className="flex-shrink-0">
        <div className="relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-lg">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-xl opacity-50" />
          {icon}
          <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-blue-500/30 to-transparent" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col justify-center space-y-6 max-w-3xl">
        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight font-header"
        >
          {header}
        </motion.h2>

        <motion.p variants={itemVariants} className="text-lg text-muted-foreground font-content">
          {description}
        </motion.p>

        <motion.div variants={itemVariants} className="pt-4">
          <div className="h-[2px] w-full bg-gradient-to-r from-blue-400 to-purple-500/50" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IconItem;

import { Check } from 'lucide-react';
import { motion } from 'motion/react'

type TimelineItemProps = {
  number: number;
  title: string;
  content: string;
  isInView: boolean;
}

const TimelineItem = ({ number, content, isInView, title }: TimelineItemProps) => {
  return (
    <div className="flex items-start gap-6 md:gap-10 relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 w-px bg-green-500/20 h-full -z-10" />

      {/* Number circle */}
      <motion.div
        className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-black font-semibold z-10"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: number * 0.2 }}
      >
        <Check color="white" size={15} strokeWidth="5" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="flex-1 pb-12 text-gray-200"
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{
          duration: 0.6,
          delay: number * 0.2,
          type: "spring",
          stiffness: 100,
        }}
      >
        <p className="md:text-lg text-muted-foreground font-content"><span className='font-semibold text-base md:text-lg pe-2'>{title}</span>{content}</p>
      </motion.div>
    </div>
  )
}

export default TimelineItem

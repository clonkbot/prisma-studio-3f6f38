import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  delay?: number;
}

export function WordsPullUp({ text, className = "", showAsterisk = false, delay = 0 }: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const words = text.split(" ");

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, index) => {
        const isLastWord = index === words.length - 1;

        return (
          <span key={index} className="overflow-hidden inline-block mr-[0.25em]">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                delay: delay + index * 0.08,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block relative"
            >
              {showAsterisk && isLastWord ? (
                <>
                  {word.slice(0, -1)}
                  <span className="relative inline-block">
                    {word.slice(-1)}
                    <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
                  </span>
                </>
              ) : (
                word
              )}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
}

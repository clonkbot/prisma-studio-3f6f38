import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  containerClassName?: string;
  delay?: number;
}

export function WordsPullUpMultiStyle({ segments, containerClassName = "", delay = 0 }: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  // Build array of words with their individual classNames
  const allWords: { word: string; className?: string }[] = [];
  segments.forEach((segment) => {
    const words = segment.text.split(" ");
    words.forEach((word) => {
      if (word.trim()) {
        allWords.push({ word, className: segment.className });
      }
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${containerClassName}`}>
      {allWords.map((item, index) => (
        <span key={index} className="overflow-hidden inline-block mr-[0.25em]">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              delay: delay + index * 0.08,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`inline-block ${item.className || ""}`}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

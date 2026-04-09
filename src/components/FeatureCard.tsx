import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";

interface FeatureCardProps {
  index: number;
  variant: "video" | "standard";
  videoUrl?: string;
  iconUrl?: string;
  number?: string;
  title: string;
  items?: string[];
}

export function FeatureCard({ index, variant, videoUrl, iconUrl, number, title, items }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{
        delay: index * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative rounded-xl md:rounded-2xl overflow-hidden ${
        variant === "video" ? "h-64 sm:h-80 lg:h-full" : "bg-[#212121] p-4 sm:p-6 h-auto lg:h-full"
      }`}
    >
      {variant === "video" ? (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
            <p className="text-sm sm:text-base" style={{ color: "#E1E0CC" }}>
              {title}
            </p>
          </div>
        </>
      ) : (
        <div className="flex flex-col h-full">
          {/* Icon */}
          {iconUrl && (
            <div className="mb-4 sm:mb-6">
              <img
                src={iconUrl}
                alt=""
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
              />
            </div>
          )}

          {/* Title with number */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg md:text-xl text-primary font-medium">
              {title}
              {number && (
                <span className="text-gray-500 text-xs sm:text-sm ml-2">({number})</span>
              )}
            </h3>
          </div>

          {/* Checklist */}
          {items && (
            <ul className="space-y-2 sm:space-y-3 flex-1">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-xs sm:text-sm">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Learn More */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary text-xs sm:text-sm mt-4 sm:mt-6 group"
          >
            <span>Learn more</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 -rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      )}
    </motion.div>
  );
}

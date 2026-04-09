import { WordsPullUpMultiStyle } from "./WordsPullUpMultiStyle";
import { AnimatedParagraph } from "./AnimatedLetter";

export function AboutSection() {
  const headingSegments = [
    { text: "I am Marcus Chen,", className: "font-normal" },
    { text: "a self-taught director.", className: "italic font-serif" },
    { text: "I have skills in color grading, visual effects, and narrative design.", className: "font-normal" },
  ];

  return (
    <section id="our-story" className="bg-black py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#101010] rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-16 text-center">
          {/* Label */}
          <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-6 sm:mb-8 block">
            Visual arts
          </span>

          {/* Multi-style Heading */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <WordsPullUpMultiStyle
              segments={headingSegments}
              containerClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9]"
            />
          </div>

          {/* Animated Paragraph */}
          <AnimatedParagraph
            text="Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals."
            className="text-[#DEDBC8] text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          />
        </div>
      </div>
    </section>
  );
}

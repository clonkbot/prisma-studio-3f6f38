import { WordsPullUpMultiStyle } from "./WordsPullUpMultiStyle";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    variant: "video" as const,
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4",
    title: "Your creative canvas.",
  },
  {
    variant: "standard" as const,
    iconUrl: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
    number: "01",
    title: "Project Storyboard.",
    items: [
      "Visual timeline organization",
      "Scene-by-scene breakdowns",
      "Collaborative editing tools",
      "Export to industry formats",
    ],
  },
  {
    variant: "standard" as const,
    iconUrl: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
    number: "02",
    title: "Smart Critiques.",
    items: [
      "AI-powered frame analysis",
      "Creative direction notes",
      "Integration with major tools",
    ],
  },
  {
    variant: "standard" as const,
    iconUrl: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
    number: "03",
    title: "Immersion Capsule.",
    items: [
      "Notification silencing mode",
      "Ambient soundscapes library",
      "Schedule syncing workflows",
    ],
  },
];

export function FeaturesSection() {
  const headingSegments = [
    { text: "Studio-grade workflows for visionary creators.", className: "text-primary" },
    { text: "Built for pure vision. Powered by art.", className: "text-gray-500" },
  ];

  return (
    <section className="min-h-screen bg-black relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8">
      {/* Noise Background */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-16 md:mb-20 text-center">
          <WordsPullUpMultiStyle
            segments={headingSegments}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              variant={feature.variant}
              videoUrl={feature.videoUrl}
              iconUrl={feature.iconUrl}
              number={feature.number}
              title={feature.title}
              items={feature.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

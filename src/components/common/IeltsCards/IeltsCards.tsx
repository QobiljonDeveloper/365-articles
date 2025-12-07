import { BookOpen, Headphones, PenTool, Mic, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const cards = [
  {
    title: "Reading",
    icon: <BookOpen className="text-[#d4af37]" size={22} />,
    duration: "60 minutes",
    format: "40 questions",
    description:
      "Full-length reading test with passages and question types matching real IELTS format",
    button: { text: "Take Free Test", premium: false, free: true },
  },
  {
    title: "Listening",
    icon: <Headphones className="text-[#d4af37]" size={22} />,
    duration: "30 minutes",
    format: "40 questions",
    description:
      "Complete listening test with audio recordings and variety of question formats",
    button: { text: "Take Free Test", premium: false, free: true },
  },
  {
    title: "Writing",
    icon: <PenTool className="text-[#d4af37]" size={22} />,
    duration: "60 minutes",
    format: "2 tasks",
    description:
      "Academic & General Writing tasks with expert evaluation and detailed feedback",
    button: { text: "Unlock with Premium", premium: true },
  },
  {
    title: "Speaking",
    icon: <Mic className="text-[#d4af37]" size={22} />,
    duration: "11–14 minutes",
    format: "3 parts",
    description:
      "One-on-one speaking mock with certified examiner and comprehensive feedback",
    button: { text: "Unlock with Premium", premium: true },
  },
];

export default function IeltsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 px-4 sm:px-6 lg:px-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className="relative bg-[#0b0f14] border border-[#d4af37]/30 rounded-2xl p-5 sm:p-6
          hover:border-accent transition shadow-lg flex flex-col justify-between"
        >
          {/* Badge */}
          {card.button.free && (
            <div className="absolute top-3 right-3 flex items-center gap-1 text-xs sm:text-sm text-accent bg-[#111827] px-2 py-1 rounded-md">
              Free
            </div>
          )}
          {card.button.premium && (
            <div className="absolute top-3 right-3 flex items-center gap-1 text-xs sm:text-sm text-gray-300 bg-[#111827] px-2 py-1 rounded-md">
              <Lock size={12} />
              Premium
            </div>
          )}

          {/* Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 border border-accent rounded-xl flex items-center justify-center mb-4">
            {card.icon}
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
            {card.title}
          </h3>

          {/* Duration & Format */}
          <div className="text-sm text-secondary space-y-1 mb-3">
            <div className="flex justify-between">
              <span>Duration:</span>
              <span className="text-white">{card.duration}</span>
            </div>
            <div className="flex justify-between">
              <span>Format:</span>
              <span className="text-white">{card.format}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-secondary leading-relaxed mb-6">
            {card.description}
          </p>

          {/* Button */}
          <Button
            className={`w-full rounded-full py-2 sm:py-3 ${
              card.button.premium
                ? "bg-transparent border border-accent text-accent hover:bg-accent hover:text-black"
                : "bg-accent text-black hover:bg-accent"
            }`}
          >
            {card.button.text}
          </Button>
        </div>
      ))}
    </div>
  );
}

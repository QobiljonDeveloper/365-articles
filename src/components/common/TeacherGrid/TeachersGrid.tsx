import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { BookOpenCheck } from "lucide-react";

import IlhomMuratovich from "@/assets/images/ilhom-muratovich.jpg";
import AbduqahhorErgashaliyev from "@/assets/images/abduqahhor-ergashaliyev.jpg";
import Jingale from "@/assets/images/jingale.jpg";
import ZorRasm from "@/assets/images/zorRasm.jpg";

const teachers = [
  {
    image: IlhomMuratovich,
    name: "Dr. Sarah Chen",
    subject: "Reading & Writing",
    icon: <BookOpenCheck className="w-5 h-5 text-accent" />,
    description:
      "12 years teaching experience. Former Cambridge examiner with expertise in academic writing and complex reading passages. Helped 1000+ students achieve 7.5+ scores.",
  },
  {
    image: AbduqahhorErgashaliyev,
    name: "Mr. Abdul Qahhor",
    subject: "Speaking Mastery",
    icon: <BookOpenCheck className="w-5 h-5 text-accent" />,
    description:
      "Expert in fluency, pronunciation and exam strategies. Trained over 900 students with consistent 7.0+ Speaking results.",
  },
  {
    image: Jingale,
    name: "Mr. Jonathan Price",
    subject: "Listening Skills",
    icon: <BookOpenCheck className="w-5 h-5 text-accent" />,
    description:
      "10+ years experience teaching ESL learners. Specializes in high-difficulty audio analysis and fast-pace exam techniques.",
  },
  {
    image: ZorRasm,
    name: "Emily Parker",
    subject: "Grammar & Vocabulary",
    icon: <BookOpenCheck className="w-5 h-5 text-accent" />,
    description:
      "Grammar analyst with deep expertise in complex structures, paraphrasing, and lexical resource boosting.",
  },
];

export default function TeachersGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 justify-items-center">
      {teachers.map((t, i) => (
        <Card
          key={i}
          className="w-full max-w-xs bg-bg-card rounded-2xl overflow-hidden shadow-md hover:border-accent border border-transparent transition-all duration-500 py-0 pb-5"
        >
          {/* IMAGE */}
          <img
            src={t.image}
            alt={t.name}
            className="w-full h-60 sm:h-64 md:h-56 lg:h-60 object-cover"
          />

          {/* TEXT */}
          <CardHeader>
            <CardTitle className="text-white text-xl font-bold">
              {t.name}
            </CardTitle>
            <CardDescription className="flex items-center gap-2 text-accent font-medium mt-1">
              {t.icon}
              {t.subject}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-secondary text-sm leading-5">{t.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

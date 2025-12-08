import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Headphones, PenTool, Mic } from "lucide-react";

export default function IeltsWizard() {
  const [step, setStep] = useState(1);
  const [focus, setFocus] = useState<string | null>(null);
  const [level, setLevel] = useState<string | null>(null);
  const [exam, setExam] = useState<string | null>(null);

  const next = () => setStep((s) => Math.min(4, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const canGoNext =
    (step === 1 && focus) || (step === 2 && level) || (step === 3 && exam);

  const resetAll = () => {
    setStep(1);
    setFocus(null);
    setLevel(null);
    setExam(null);
  };

  const handleDownload = () => {
    const blob = new Blob(["Your IELTS Plan"], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "IELTS_Study_Plan.txt";
    a.click();
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-white py-10 px-4 sm:px-6 lg:px-8">
      {/* ================= Progress Indicator ================= */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-12">
        {[1, 2, 3].map((num) => (
          <div key={num} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all 
              ${
                step >= num
                  ? "border-accent bg-accent text-[#0B0B0D]"
                  : "border-[#2A2A2E] text-gray-500"
              }`}
            >
              {num}
            </div>

            {num < 3 && (
              <div
                className={`w-16 h-0.5 mx-2 transition-all 
                ${step > num ? "bg-accent" : "bg-[#2A2A2E]"}`}
              />
            )}
          </div>
        ))}
      </div>

      {/* ================= Titles ================= */}
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
        {step === 1 && "Choose your primary focus"}
        {step === 2 && "What’s your current level?"}
        {step === 3 && "When is your exam?"}
        {step === 4 && "Your Personalized Study Plan"}
      </h2>

      {/* ================= STEP 1 ================= */}
      {step === 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {[
            { label: "Reading", icon: <BookOpen className="w-10 h-10 mb-3" /> },
            {
              label: "Listening",
              icon: <Headphones className="w-10 h-10 mb-3" />,
            },
            { label: "Writing", icon: <PenTool className="w-10 h-10 mb-3" /> },
            { label: "Speaking", icon: <Mic className="w-10 h-10 mb-3" /> },
          ].map((item) => (
            <Card
              key={item.label}
              onClick={() => setFocus(item.label)}
              className={`p-6 cursor-pointer transition border rounded-2xl flex flex-col items-center
                ${
                  focus === item.label
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-gray-700 hover:border-accent text-accent"
                }`}
            >
              {item.icon}
              <p className="text-xl sm:text-2xl font-semibold">{item.label}</p>
            </Card>
          ))}
        </div>
      )}

      {/* ================= STEP 2 ================= */}
      {step === 2 && (
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {[
            "Beginner (5.0–5.5)",
            "Intermediate (6.0–6.5)",
            "Advanced (7.0+)",
          ].map((lvl) => (
            <Card
              key={lvl}
              onClick={() => setLevel(lvl)}
              className={`p-6 cursor-pointer transition border rounded-2xl text-xl sm:text-2xl text-center
                ${
                  level === lvl
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-gray-700 hover:border-accent text-accent"
                }`}
            >
              {lvl}
            </Card>
          ))}
        </div>
      )}

      {/* ================= STEP 3 ================= */}
      {step === 3 && (
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {["Within 1 month", "1–3 months", "3–6 months", "6+ months"].map(
            (t) => (
              <Card
                key={t}
                onClick={() => setExam(t)}
                className={`p-6 cursor-pointer transition border rounded-2xl text-xl sm:text-2xl text-center
                  ${
                    exam === t
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-gray-700 hover:border-accent text-accent"
                  }`}
              >
                {t}
              </Card>
            )
          )}
        </div>
      )}

      {/* ================= STEP 4 ================= */}
      {step === 4 && (
        <div className="bg-[#111] border border-gray-700 rounded-2xl p-6 sm:p-8 text-base sm:text-lg lg:text-xl">
          <p>
            <span className="text-accent">Focus:</span> {focus}
          </p>
          <p>
            <span className="text-accent">Level:</span> {level}
          </p>
          <p>
            <span className="text-accent">Exam in:</span> {exam}
          </p>

          <div className="mt-4 sm:mt-6 text-base sm:text-lg opacity-80">
            🎯 Based on your inputs, here is your optimized IELTS study plan.
            You will get:
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Weekly structured study plan</li>
              <li>Daily tasks based on your focus</li>
              <li>Full mock tests and progress tracking</li>
              <li>Teacher recommendations</li>
            </ul>
          </div>

          <Button
            onClick={handleDownload}
            className="bg-accent text-black mt-6 sm:mt-8 w-full text-base sm:text-lg py-3 sm:py-4 rounded-xl cursor-pointer"
          >
            Download Study Plan
          </Button>

          <Button
            onClick={resetAll}
            variant="outline"
            className="mt-3 sm:mt-4 w-full text-base sm:text-lg py-3 sm:py-4 rounded-xl border-accent text-accent cursor-pointer hover:text-white"
          >
            Start Over
          </Button>
        </div>
      )}

      {/* ================= Back / Next buttons ================= */}
      {step < 4 && (
        <div className="flex flex-col sm:flex-row justify-between mt-6 sm:mt-10 gap-4 sm:gap-0">
          <Button
            onClick={back}
            variant="ghost"
            disabled={step === 1}
            className="cursor-pointer text-secondary w-full sm:w-auto"
          >
            Back
          </Button>

          <Button
            onClick={next}
            disabled={!canGoNext}
            className={`cursor-pointer bg-accent text-black w-full sm:w-auto ${
              !canGoNext ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { memo } from "react";

function TestimonialsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {/* Main Large Testimonial */}
      <Card className="sm:col-span-2 lg:col-span-4 bg-card-alt border-accent p-8 rounded-2xl relative flex flex-col justify-between">
        <CardContent className="p-0">
          <p className="text-2xl sm:text-3xl max-w-full lg:max-w-4xl leading-relaxed text-secondary">
            "The structured approach and personalized feedback helped me improve
            my writing score from 5.5 to 7.5 in just 3 months!"
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-6">
            <img
              src="https://i.ibb.co/64JqFvt/graduate-girl.jpg"
              alt="Priya Sharma"
              className="w-20 h-20 rounded-full object-cover border border-accent"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-white">Priya Sharma</h3>
              <p className="text-gray-400">India</p>
            </div>
          </div>
        </CardContent>

        {/* Only After Score */}
        <div className="absolute right-4 sm:right-8 bottom-4 sm:bottom-8 bg-primary border border-text-tertiary rounded-xl px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-4 sm:gap-6">
          <div className="text-center">
            <p className="text-secondary text-xs sm:text-sm">Score</p>
            <p className="text-2xl sm:text-3xl font-bold text-accent">7.5</p>
          </div>
        </div>
      </Card>

      {/* Other Testimonials */}
      {[
        {
          name: "Ahmed Hassan",
          country: "UAE",
          img: "https://i.ibb.co/hWcnZfF/students.jpg",
          score: "8.0",
          text: "Mock tests were incredibly helpful. The real exam felt easier after practicing with 365 Articles premium materials.",
        },
        {
          name: "Maria Santos",
          country: "Philippines",
          img: "https://i.ibb.co/64JqFvt/graduate-girl.jpg",
          score: "7.0",
          text: "Live sessions with expert teachers made all the difference. Highly recommend for anyone serious about IELTS.",
        },
        {
          name: "David Kim",
          country: "South Korea",
          img: "https://i.ibb.co/hWcnZfF/students.jpg",
          score: "8.5",
          text: "Achieved my target score for Canadian immigration. The speaking practice sessions were invaluable!",
        },
      ].map((t, i) => (
        <Card
          key={i}
          className="bg-card-alt p-6 border border-accent rounded-2xl flex flex-col justify-between"
        >
          <CardContent className="p-0">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover border border-accent"
              />
              <div>
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="text-secondary text-sm">{t.country}</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-secondary text-sm">Score</p>
                <p className="text-xl font-bold text-accent">{t.score}</p>
              </div>
            </div>
            <p className="text-secondary leading-relaxed text-sm">{t.text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default memo(TestimonialsGrid);

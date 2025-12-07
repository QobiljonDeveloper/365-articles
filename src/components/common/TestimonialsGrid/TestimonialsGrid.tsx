import { Card, CardContent } from "@/components/ui/card";
import { Quote, TrendingUp } from "lucide-react";
import { memo } from "react";

function TestimonialsGrid() {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8">
      {/* Desktop: Grid Layout */}
      <div className="hidden lg:grid grid-cols-6 grid-rows-5 gap-5 text-white">
        {/* Main Large Testimonial */}
        <Card className="col-span-6 row-span-3 bg-bg-card-alt border-accent p-8 rounded-2xl relative flex flex-col justify-between">
          <CardContent className="p-0">
            <Quote className="w-14 h-14 text-accent mb-4" />
            <p className="text-2xl max-w-4xl leading-relaxed text-[#9ba1ad]">
              "The structured approach and personalized feedback helped me
              improve my writing score from 5.5 to 7.5 in just 3 months!"
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                src="https://i.ibb.co/64JqFvt/graduate-girl.jpg"
                alt="Priya Sharma"
                className="w-20 h-20 rounded-full object-cover border border-accent"
              />
              <div>
                <h3 className="text-xl font-semibold text-accent">
                  Priya Sharma
                </h3>
                <p className="text-gray-400">India</p>
              </div>
            </div>
          </CardContent>

          <div className="absolute right-8 bottom-8  border bg-bg-primary rounded-xl px-6 py-4 flex items-center gap-6">
            <div>
              <p className="text-[#9ba1ad] text-sm">Before</p>
              <p className="text-3xl font-bold text-white">6.0</p>
            </div>
            <TrendingUp className="text-accent w-8 h-8" />
            <div>
              <p className="text-[#9ba1ad] text-sm">After</p>
              <p className="text-3xl font-bold text-accent">7.5</p>
            </div>
          </div>
        </Card>

        {/* Testimonial #2 */}
        <Card className="col-span-2 row-span-2 row-start-4 bg-bg-card-alt p-6 border border-accent rounded-2xl">
          <CardContent className="p-0">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.ibb.co/hWcnZfF/students.jpg"
                alt="Ahmed Hassan"
                className="w-16 h-16 rounded-full object-cover border border-accent"
              />
              <div>
                <h3 className="text-lg font-semibold text-accent">
                  Ahmed Hassan
                </h3>
                <p className="text-[#9ba1ad] text-sm">UAE</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-[#9ba1ad] text-sm">Score</p>
                <p className="text-xl font-bold text-accent">8.0</p>
              </div>
            </div>
            <p className="text-[#9ba1ad] leading-relaxed text-sm">
              "Mock tests were incredibly helpful. The real exam felt easier
              after practicing with 365 Articles premium materials."
            </p>
          </CardContent>
        </Card>

        {/* Testimonial #3 */}
        <Card className="col-span-2 row-span-2 col-start-3 row-start-4 bg-bg-card-alt p-6 border border-accent rounded-2xl">
          <CardContent className="p-0">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.ibb.co/64JqFvt/graduate-girl.jpg"
                alt="Maria Santos"
                className="w-16 h-16 rounded-full object-cover border border-accent"
              />
              <div>
                <h3 className="text-lg font-semibold text-accent">
                  Maria Santos
                </h3>
                <p className="text-[#9ba1ad] text-sm">Philippines</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-[#9ba1ad] text-sm">Score</p>
                <p className="text-xl font-bold text-accent">7.0</p>
              </div>
            </div>
            <p className="text-[#9ba1ad] leading-relaxed text-sm">
              "Live sessions with expert teachers made all the difference.
              Highly recommend for anyone serious about IELTS."
            </p>
          </CardContent>
        </Card>

        {/* Testimonial #4 */}
        <Card className="col-span-2 row-span-2 col-start-5 row-start-4 bg-bg-card-alt p-6 border border-accent rounded-2xl">
          <CardContent className="p-0">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.ibb.co/hWcnZfF/students.jpg"
                alt="David Kim"
                className="w-16 h-16 rounded-full object-cover border border-accent"
              />
              <div>
                <h3 className="text-lg font-semibold text-accent">David Kim</h3>
                <p className="text-[#9ba1ad] text-sm">South Korea</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-[#9ba1ad] text-sm">Score</p>
                <p className="text-xl font-bold text-accent">8.5</p>
              </div>
            </div>
            <p className="text-[#9ba1ad] leading-relaxed text-sm">
              "Achieved my target score for Canadian immigration. The speaking
              practice sessions were invaluable!"
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tablet: 2 Column Layout */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-5 text-white">
        {/* Main Large Testimonial */}
        <Card className="col-span-2 bg-bg-card-alt border-accent p-6 rounded-2xl relative">
          <CardContent className="p-0">
            <Quote className="w-12 h-12 text-accent mb-4" />
            <p className="text-xl leading-relaxed text-[#9ba1ad] mb-6">
              "The structured approach and personalized feedback helped me
              improve my writing score from 5.5 to 7.5 in just 3 months!"
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://i.ibb.co/64JqFvt/graduate-girl.jpg"
                  alt="Priya Sharma"
                  className="w-16 h-16 rounded-full object-cover border border-accent"
                />
                <div>
                  <h3 className="text-lg font-semibold text-accent">
                    Priya Sharma
                  </h3>
                  <p className="text-gray-400">India</p>
                </div>
              </div>

              <div className=" border bg-bg-primary rounded-xl px-4 py-3 flex items-center gap-4">
                <div>
                  <p className="text-[#9ba1ad] text-xs">Before</p>
                  <p className="text-2xl font-bold text-white">6.0</p>
                </div>
                <TrendingUp className="text-accent w-6 h-6" />
                <div>
                  <p className="text-[#9ba1ad] text-xs">After</p>
                  <p className="text-2xl font-bold text-accent">7.5</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Other Testimonials */}
        <Card className="bg-bg-card-alt p-5 border border-accent rounded-2xl">
          <CardContent className="p-0">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.ibb.co/hWcnZfF/students.jpg"
                alt="Ahmed Hassan"
                className="w-14 h-14 rounded-full object-cover border border-accent"
              />
              <div className="flex-1">
                <h3 className="text-base font-semibold text-accent">
                  Ahmed Hassan
                </h3>
                <p className="text-[#9ba1ad] text-sm">UAE</p>
              </div>
              <div className="text-right">
                <p className="text-[#9ba1ad] text-xs">Score</p>
                <p className="text-xl font-bold text-accent">8.0</p>
              </div>
            </div>
            <p className="text-[#9ba1ad] leading-relaxed text-sm">
              "Mock tests were incredibly helpful. The real exam felt easier
              after practicing with 365 Articles premium materials."
            </p>
          </CardContent>
        </Card>

        <Card className="bg-bg-card-alt p-5 border border-accent rounded-2xl">
          <CardContent className="p-0">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.ibb.co/64JqFvt/graduate-girl.jpg"
                alt="Maria Santos"
                className="w-14 h-14 rounded-full object-cover border border-accent"
              />
              <div className="flex-1">
                <h3 className="text-base font-semibold text-accent">
                  Maria Santos
                </h3>
                <p className="text-[#9ba1ad] text-sm">Philippines</p>
              </div>
              <div className="text-right">
                <p className="text-[#9ba1ad] text-xs">Score</p>
                <p className="text-xl font-bold text-accent">7.0</p>
              </div>
            </div>
            <p className="text-[#9ba1ad] leading-relaxed text-sm">
              "Live sessions with expert teachers made all the difference.
              Highly recommend for anyone serious about IELTS."
            </p>
          </CardContent>
        </Card>

        <Card className="col-span-2 bg-bg-card-alt p-5 border border-accent rounded-2xl">
          <CardContent className="p-0">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.ibb.co/hWcnZfF/students.jpg"
                alt="David Kim"
                className="w-14 h-14 rounded-full object-cover border border-accent"
              />
              <div className="flex-1">
                <h3 className="text-base font-semibold text-accent">
                  David Kim
                </h3>
                <p className="text-[#9ba1ad] text-sm">South Korea</p>
              </div>
              <div className="text-right">
                <p className="text-[#9ba1ad] text-xs">Score</p>
                <p className="text-xl font-bold text-accent">8.5</p>
              </div>
            </div>
            <p className="text-[#9ba1ad] leading-relaxed text-sm">
              "Achieved my target score for Canadian immigration. The speaking
              practice sessions were invaluable!"
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Mobile: Single Column Layout */}
      <div className="md:hidden flex flex-col gap-4 text-white">
        {/* Main Large Testimonial */}
        <Card className="bg-bg-card-alt border-accent p-5 rounded-2xl">
          <CardContent className="p-0">
            <Quote className="w-10 h-10 text-accent mb-3" />
            <p className="text-base leading-relaxed text-[#9ba1ad] mb-4">
              "The structured approach and personalized feedback helped me
              improve my writing score from 5.5 to 7.5 in just 3 months!"
            </p>

            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.ibb.co/64JqFvt/graduate-girl.jpg"
                alt="Priya Sharma"
                className="w-14 h-14 rounded-full object-cover border border-accent"
              />
              <div>
                <h3 className="text-base font-semibold text-accent">
                  Priya Sharma
                </h3>
                <p className="text-gray-400 text-sm">India</p>
              </div>
            </div>

            <div className=" border bg-bg-primary rounded-xl px-4 py-3 flex items-center justify-center gap-4">
              <div className="text-center">
                <p className="text-[#9ba1ad] text-xs">Before</p>
                <p className="text-xl font-bold text-white">6.0</p>
              </div>
              <TrendingUp className="text-accent w-5 h-5" />
              <div className="text-center">
                <p className="text-[#9ba1ad] text-xs">After</p>
                <p className="text-xl font-bold text-accent">7.5</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Other Testimonials */}
        <Card className="bg-bg-card-alt p-4 border border-accent rounded-2xl">
          <CardContent className="p-0">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://i.ibb.co/hWcnZfF/students.jpg"
                alt="Ahmed Hassan"
                className="w-12 h-12 rounded-full object-cover border border-accent"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-accent">
                  Ahmed Hassan
                </h3>
                <p className="text-[#9ba1ad] text-xs">UAE</p>
              </div>
              <div className="text-right">
                <p className="text-[#9ba1ad] text-xs">Score</p>
                <p className="text-lg font-bold text-accent">8.0</p>
              </div>
            </div>
            <p className="text-[#9ba1ad] leading-relaxed text-sm">
              "Mock tests were incredibly helpful. The real exam felt easier
              after practicing with 365 Articles premium materials."
            </p>
          </CardContent>
        </Card>

        <Card className="bg-bg-card-alt p-4 border border-accent rounded-2xl">
          <CardContent className="p-0">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://i.ibb.co/64JqFvt/graduate-girl.jpg"
                alt="Maria Santos"
                className="w-12 h-12 rounded-full object-cover border border-accent"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-accent">
                  Maria Santos
                </h3>
                <p className="text-[#9ba1ad] text-xs">Philippines</p>
              </div>
              <div className="text-right">
                <p className="text-[#9ba1ad] text-xs">Score</p>
                <p className="text-lg font-bold text-accent">7.0</p>
              </div>
            </div>
            <p className="text-[#9ba1ad] leading-relaxed text-sm">
              "Live sessions with expert teachers made all the difference.
              Highly recommend for anyone serious about IELTS."
            </p>
          </CardContent>
        </Card>

        <Card className="bg-bg-card-alt p-4 border border-accent rounded-2xl">
          <CardContent className="p-0">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://i.ibb.co/hWcnZfF/students.jpg"
                alt="David Kim"
                className="w-12 h-12 rounded-full object-cover border border-accent"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-accent">David Kim</h3>
                <p className="text-[#9ba1ad] text-xs">South Korea</p>
              </div>
              <div className="text-right">
                <p className="text-[#9ba1ad] text-xs">Score</p>
                <p className="text-lg font-bold text-accent">8.5</p>
              </div>
            </div>
            <p className="text-[#9ba1ad] leading-relaxed text-sm">
              "Achieved my target score for Canadian immigration. The speaking
              practice sessions were invaluable!"
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default memo(TestimonialsGrid);

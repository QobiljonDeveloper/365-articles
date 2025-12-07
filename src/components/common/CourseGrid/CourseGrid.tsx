import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  BookOpen,
  TrendingUp,
  Headphones,
  PenTool,
  Mic,
} from "lucide-react";

export default function CoursesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {/* Course 1 */}
      <Card className="bg-card-alt border border-bg-card p-6 rounded-2xl hover:border-accent duration-300 relative flex flex-col justify-between">
        <CardContent className="p-0 flex flex-col h-full justify-between">
          <div>
            <div className="w-20 h-20 bg-transparent border-accent border rounded-xl mb-4 flex items-center justify-center">
              <BookOpen className="text-accent" size={60} />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
              Reading Booster Course
            </h2>

            <div className="flex items-center gap-2 text-accent mb-3">
              <TrendingUp className="w-5 h-5" />
              <p className="text-sm font-medium">
                +0.5 to +2.0 guaranteed boost
              </p>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.ibb.co/hWcnZfF/students.jpg"
                alt="teacher"
                className="w-12 h-12 rounded-full border border-[#333] object-cover"
              />
              <div>
                <p className="text-sm text-secondary">Taught by</p>
                <p className="text-lg font-semibold text-white">Dr. Sarah Chen</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-secondary text-sm mb-1">
              <Clock className="w-5 h-5" /> Duration
              <span className="ml-auto">8 weeks</span>
            </div>

            <div className="flex items-center gap-3 text-secondary text-sm">
              <BookOpen className="w-5 h-5" /> Format
              <span className="ml-auto">24 video lessons + practice tests</span>
            </div>
          </div>

          <button className="w-full bg-accent text-black mt-5 py-3 rounded-xl font-semibold cursor-pointer text-lg">
            Start Free Trial
          </button>
        </CardContent>

        <div className="flex items-center gap-4 absolute top-4 right-4 sm:right-6">
          <span className="bg-accent text-black px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
            Free
          </span>
          <span className="bg-accent text-black px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
            Premium
          </span>
        </div>
      </Card>

      {/* Course 2 */}
      <Card className="bg-card-alt border border-bg-card p-6 rounded-2xl hover:border-accent duration-300 relative flex flex-col justify-between">
        <CardContent className="p-0 flex flex-col h-full justify-between">
          <div>
            <div className="w-20 h-20 bg-transparent border border-accent rounded-xl mb-4 flex items-center justify-center">
              <Headphones size={60} className="text-accent" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
              Listening Accelerator
            </h2>

            <div className="flex items-center gap-2 text-accent mb-3">
              <TrendingUp className="w-5 h-5" />
              <p className="text-sm font-medium">
                +0.5 to +1.5 guaranteed boost
              </p>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.ibb.co/64JqFvt/graduate-girl.jpg"
                alt="teacher"
                className="w-12 h-12 rounded-full border border-[#333] object-cover"
              />
              <div>
                <p className="text-sm text-secondary">Taught by</p>
                <p className="text-lg font-semibold text-white">James Wilson</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-secondary text-sm mb-1">
              <Clock className="w-5 h-5" /> Duration
              <span className="ml-auto">6 weeks</span>
            </div>

            <div className="flex items-center gap-3 text-secondary text-sm">
              <BookOpen className="w-5 h-5" /> Format
              <span className="ml-auto">36 audio sessions + transcripts</span>
            </div>
          </div>

          <button className="w-full bg-accent text-black mt-5 py-3 rounded-xl font-semibold cursor-pointer text-lg">
            Start Free Trial
          </button>
        </CardContent>

        <div className="flex items-center gap-4 absolute top-4 right-4 sm:right-6">
          <span className="bg-accent text-black px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
            Free
          </span>
          <span className="bg-accent text-black px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
            Premium
          </span>
        </div>
      </Card>

      {/* Course 3 */}
      <Card className="bg-card-alt border border-bg-card p-6 rounded-2xl hover:border-accent duration-300 relative flex flex-col justify-between">
        <CardContent className="p-0 flex flex-col h-full justify-between">
          <div>
            <div className="w-20 h-20 bg-transparent border border-accent rounded-xl mb-4 flex items-center justify-center">
              <PenTool className="text-accent" size={60} />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
              Writing Mastery Program
            </h2>

            <div className="flex items-center gap-2 text-accent mb-3">
              <TrendingUp className="w-5 h-5" />
              <p className="text-sm font-medium">
                +1.0 to +2.0 guaranteed boost
              </p>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.ibb.co/hWcnZfF/students.jpg"
                alt="teacher"
                className="w-12 h-12 rounded-full border border-[#333] object-cover"
              />
              <div>
                <p className="text-sm text-secondary">Taught by</p>
                <p className="text-lg font-semibold text-white">Michael Park</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-secondary text-sm mb-1">
              <Clock className="w-5 h-5" /> Duration
              <span className="ml-auto">10 weeks</span>
            </div>

            <div className="flex items-center gap-3 text-secondary text-sm">
              <BookOpen className="w-5 h-5" /> Format
              <span className="ml-auto">
                30 lessons + personalized feedback
              </span>
            </div>
          </div>

          <button className="w-full bg-accent text-black mt-5 py-3 rounded-xl font-semibold cursor-pointer text-lg">
            Unlock Premium
          </button>
        </CardContent>

        <span className="absolute right-4 top-4 bg-accent text-black px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
          Premium
        </span>
      </Card>

      {/* Course 4 */}
      <Card className="bg-card-alt border border-bg-card p-6 rounded-2xl hover:border-accent duration-300 relative flex flex-col justify-between">
        <CardContent className="p-0 flex flex-col h-full justify-between">
          <div>
            <div className="w-20 h-20 bg-transparent border border-accent rounded-xl mb-4 flex items-center justify-center">
              <Mic className="text-accent" size={60} />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
              Speaking Fluency Labs
            </h2>

            <div className="flex items-center gap-2 text-accent mb-3">
              <TrendingUp className="w-5 h-5" />
              <p className="text-sm font-medium">
                +1.0 to +2.5 guaranteed boost
              </p>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.ibb.co/64JqFvt/graduate-girl.jpg"
                alt="teacher"
                className="w-12 h-12 rounded-full border border-[#333] object-cover"
              />
              <div>
                <p className="text-sm text-secondary">Taught by</p>
                <p className="text-lg font-semibold text-white">Emma Rodriguez</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-secondary text-sm mb-1">
              <Clock className="w-5 h-5" /> Duration
              <span className="ml-auto">8 weeks</span>
            </div>

            <div className="flex items-center gap-3 text-secondary text-sm">
              <BookOpen className="w-5 h-5" /> Format
              <span className="ml-auto">Live sessions + speaking practice</span>
            </div>
          </div>

          <button className="w-full bg-accent text-black mt-5 py-3 rounded-xl font-semibold cursor-pointer text-lg">
            Unlock Premium
          </button>
        </CardContent>

        <span className="absolute right-4 top-4 bg-accent text-black px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
          Premium
        </span>
      </Card>
    </div>
  );
}

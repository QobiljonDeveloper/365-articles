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
  const courses = [
    {
      icon: BookOpen,
      title: "Reading Booster Course",
      boost: "+0.5 to +2.0 guaranteed boost",
      teacher: "Dr. Sarah Chen",
      teacherImg: "https://i.ibb.co/hWcnZfF/students.jpg",
      duration: "8 weeks",
      format: "24 video lessons + practice tests",
      buttonText: "Start Free Trial",
      badges: ["Free", "Premium"],
    },
    {
      icon: Headphones,
      title: "Listening Accelerator",
      boost: "+0.5 to +1.5 guaranteed boost",
      teacher: "James Wilson",
      teacherImg: "https://i.ibb.co/64JqFvt/graduate-girl.jpg",
      duration: "6 weeks",
      format: "36 audio sessions + transcripts",
      buttonText: "Start Free Trial",
      badges: ["Free", "Premium"],
    },
    {
      icon: PenTool,
      title: "Writing Mastery Program",
      boost: "+1.0 to +2.0 guaranteed boost",
      teacher: "Michael Park",
      teacherImg: "https://i.ibb.co/hWcnZfF/students.jpg",
      duration: "10 weeks",
      format: "30 lessons + personalized feedback",
      buttonText: "Unlock Premium",
      badges: ["Premium"],
    },
    {
      icon: Mic,
      title: "Speaking Fluency Labs",
      boost: "+1.0 to +2.5 guaranteed boost",
      teacher: "Emma Rodriguez",
      teacherImg: "https://i.ibb.co/64JqFvt/graduate-girl.jpg",
      duration: "8 weeks",
      format: "Live sessions + speaking practice",
      buttonText: "Unlock Premium",
      badges: ["Premium"],
    },
  ];

  return (
    <div className="w-full px-4 md:px-6 lg:px-8">
      {/* Desktop: 2x2 Grid */}
      <div className="hidden lg:grid grid-cols-4 grid-rows-6 gap-5 text-white">
        {/* Course 1 */}
        <Card className="col-span-2 row-span-3 bg-bg-card-alt border border-bg-card p-6 rounded-2xl hover:border-accent transition-all duration-300 relative">
          <CardContent className="p-0 flex flex-col h-full justify-between">
            <div>
              <div className="w-20 h-20 bg-transparent border-accent border rounded-xl mb-4 flex items-center justify-center">
                <BookOpen className="text-accent" size={60} />
              </div>

              <h2 className="text-3xl font-bold mb-2 text-white">
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
                  <p className="text-sm text-[#9ba1ad]">Taught by</p>
                  <p className="text-lg font-semibold text-white">
                    Dr. Sarah Chen
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[#9ba1ad] text-sm mb-1">
                <Clock className="w-5 h-5" /> Duration
                <span className="ml-auto">8 weeks</span>
              </div>

              <div className="flex items-center gap-3 text-[#9ba1ad] text-sm">
                <BookOpen className="w-5 h-5" /> Format
                <span className="ml-auto">
                  24 video lessons + practice tests
                </span>
              </div>
            </div>

            <button className="w-full bg-accent text-black mt-5 py-3 rounded-xl font-semibold hover:bg-[#b8994d] transition-colors text-lg">
              Start Free Trial
            </button>
          </CardContent>

          <div className="flex items-center gap-4">
            <span className="absolute right-28 top-4 bg-accent text-black px-4 py-1 rounded-full text-sm font-semibold">
              Free
            </span>
            <span className="absolute right-4 top-4 bg-accent text-black px-4 py-1 rounded-full text-sm font-semibold">
              Premium
            </span>
          </div>
        </Card>

        {/* Course 2 */}
        <Card className="col-span-2 row-span-3 col-start-3 bg-bg-card-alt border border-bg-card p-6 rounded-2xl hover:border-accent transition-all duration-300 relative">
          <CardContent className="p-0 flex flex-col h-full justify-between">
            <div>
              <div className="w-20 h-20 bg-transparent border border-accent rounded-xl mb-4 flex items-center justify-center">
                <Headphones size={60} className="text-accent" />
              </div>

              <h2 className="text-3xl font-bold mb-2 text-white">
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
                  <p className="text-sm text-[#9ba1ad]">Taught by</p>
                  <p className="text-lg font-semibold text-white">
                    James Wilson
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[#9ba1ad] text-sm mb-1">
                <Clock className="w-5 h-5" /> Duration
                <span className="ml-auto">6 weeks</span>
              </div>

              <div className="flex items-center gap-3 text-[#9ba1ad] text-sm">
                <BookOpen className="w-5 h-5" /> Format
                <span className="ml-auto">36 audio sessions + transcripts</span>
              </div>
            </div>

            <button className="w-full bg-accent text-black mt-5 py-3 rounded-xl font-semibold hover:bg-[#b8994d] transition-colors text-lg">
              Start Free Trial
            </button>
          </CardContent>

          <div className="flex items-center gap-4">
            <span className="absolute right-28 top-4 bg-accent text-black px-4 py-1 rounded-full text-sm font-semibold">
              Free
            </span>
            <span className="absolute right-4 top-4 bg-accent text-black px-4 py-1 rounded-full text-sm font-semibold">
              Premium
            </span>
          </div>
        </Card>

        {/* Course 3 */}
        <Card className="col-span-2 row-span-3 row-start-4 bg-bg-card-alt border border-bg-card p-6 rounded-2xl hover:border-accent transition-all duration-300 relative">
          <CardContent className="p-0 flex flex-col h-full justify-between">
            <div>
              <div className="w-20 h-20 bg-transparent border border-accent rounded-xl mb-4 flex items-center justify-center">
                <PenTool className="text-accent" size={60} />
              </div>

              <h2 className="text-3xl font-bold mb-2 text-white">
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
                  <p className="text-sm text-[#9ba1ad]">Taught by</p>
                  <p className="text-lg font-semibold text-white">
                    Michael Park
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[#9ba1ad] text-sm mb-1">
                <Clock className="w-5 h-5" /> Duration
                <span className="ml-auto">10 weeks</span>
              </div>

              <div className="flex items-center gap-3 text-[#9ba1ad] text-sm">
                <BookOpen className="w-5 h-5" /> Format
                <span className="ml-auto">
                  30 lessons + personalized feedback
                </span>
              </div>
            </div>

            <button className="w-full bg-accent text-black mt-5 py-3 rounded-xl font-semibold hover:bg-[#b8994d] transition-colors text-lg">
              Unlock Premium
            </button>
          </CardContent>

          <span className="absolute right-4 top-4 bg-accent text-black px-4 py-1 rounded-full text-sm font-semibold">
            Premium
          </span>
        </Card>

        {/* Course 4 */}
        <Card className="col-span-2 row-span-3 col-start-3 row-start-4 bg-bg-card-alt border border-bg-card p-6 hover:border-accent transition-all duration-300 rounded-2xl relative">
          <CardContent className="p-0 flex flex-col h-full justify-between">
            <div>
              <div className="w-20 h-20 bg-transparent border border-accent rounded-xl mb-4 flex items-center justify-center">
                <Mic className="text-accent" size={60} />
              </div>

              <h2 className="text-3xl font-bold mb-2 text-white">
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
                  <p className="text-sm text-[#9ba1ad]">Taught by</p>
                  <p className="text-lg font-semibold text-white">
                    Emma Rodriguez
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[#9ba1ad] text-sm mb-1">
                <Clock className="w-5 h-5" /> Duration
                <span className="ml-auto">8 weeks</span>
              </div>

              <div className="flex items-center gap-3 text-[#9ba1ad] text-sm">
                <BookOpen className="w-5 h-5" /> Format
                <span className="ml-auto">
                  Live sessions + speaking practice
                </span>
              </div>
            </div>

            <button className="w-full bg-accent text-black mt-5 py-3 rounded-xl font-semibold hover:bg-[#b8994d] transition-colors text-lg">
              Unlock Premium
            </button>
          </CardContent>

          <span className="absolute right-4 top-4 bg-accent text-black px-4 py-1 rounded-full text-sm font-semibold">
            Premium
          </span>
        </Card>
      </div>

      {/* Tablet: 2 Column Grid */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-5 text-white">
        {courses.map((course, idx) => {
          const Icon = course.icon;
          return (
            <Card
              key={idx}
              className="bg-bg-card-alt border border-bg-card p-5 rounded-2xl hover:border-accent transition-all duration-300 relative"
            >
              <CardContent className="p-0 flex flex-col h-full justify-between">
                <div>
                  <div className="w-16 h-16 bg-transparent border border-accent rounded-xl mb-3 flex items-center justify-center">
                    <Icon className="text-accent" size={48} />
                  </div>

                  <h2 className="text-xl font-bold mb-2 text-white">
                    {course.title}
                  </h2>

                  <div className="flex items-center gap-2 text-accent mb-3">
                    <TrendingUp className="w-4 h-4" />
                    <p className="text-xs font-medium">{course.boost}</p>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={course.teacherImg}
                      alt="teacher"
                      className="w-10 h-10 rounded-full border border-[#333] object-cover"
                    />
                    <div>
                      <p className="text-xs text-[#9ba1ad]">Taught by</p>
                      <p className="text-sm font-semibold text-white">
                        {course.teacher}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[#9ba1ad] text-xs mb-1">
                    <Clock className="w-4 h-4" /> Duration
                    <span className="ml-auto">{course.duration}</span>
                  </div>

                  <div className="flex items-center gap-2 text-[#9ba1ad] text-xs">
                    <BookOpen className="w-4 h-4" /> Format
                    <span className="ml-auto text-right">{course.format}</span>
                  </div>
                </div>

                <button className="w-full bg-accent text-black mt-4 py-2.5 rounded-xl font-semibold hover:bg-[#b8994d] transition-colors text-base">
                  {course.buttonText}
                </button>
              </CardContent>

              <div className="absolute top-4 right-4 flex items-center gap-2">
                {course.badges.map((badge, i) => (
                  <span
                    key={i}
                    className="bg-accent text-black px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Mobile: Single Column */}
      <div className="md:hidden flex flex-col gap-4 text-white">
        {courses.map((course, idx) => {
          const Icon = course.icon;
          return (
            <Card
              key={idx}
              className="bg-bg-card-alt border border-bg-card p-5 rounded-2xl hover:border-accent transition-all duration-300 relative"
            >
              <CardContent className="p-0">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-14 h-14 bg-transparent border border-accent rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="text-accent" size={40} />
                  </div>
                  <div className="flex items-center gap-2">
                    {course.badges.map((badge, i) => (
                      <span
                        key={i}
                        className="bg-accent text-black px-2.5 py-0.5 rounded-full text-xs font-semibold"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="text-lg font-bold mb-2 text-white">
                  {course.title}
                </h2>

                <div className="flex items-center gap-2 text-accent mb-3">
                  <TrendingUp className="w-4 h-4" />
                  <p className="text-xs font-medium">{course.boost}</p>
                </div>

                <div className="flex items-center gap-2.5 mb-3">
                  <img
                    src={course.teacherImg}
                    alt="teacher"
                    className="w-9 h-9 rounded-full border border-[#333] object-cover"
                  />
                  <div>
                    <p className="text-xs text-[#9ba1ad]">Taught by</p>
                    <p className="text-sm font-semibold text-white">
                      {course.teacher}
                    </p>
                  </div>
                </div>

                <div className="space-y-1 mb-4">
                  <div className="flex items-center gap-2 text-[#9ba1ad] text-xs">
                    <Clock className="w-4 h-4" />
                    <span>Duration:</span>
                    <span className="ml-auto font-medium">
                      {course.duration}
                    </span>
                  </div>

                  <div className="flex items-start gap-2 text-[#9ba1ad] text-xs">
                    <BookOpen className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>Format:</span>
                    <span className="ml-auto text-right font-medium">
                      {course.format}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-accent text-black py-2.5 rounded-xl font-semibold hover:bg-[#b8994d] transition-colors text-sm">
                  {course.buttonText}
                </button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

import { memo } from "react";
import { Button } from "@/components/ui/button";
import IlhomMuratovich from "@/assets/images/ilhom-muratovich.jpg";
import AbduqahhorErgashaliyev from "@/assets/images/abduqahhor-ergashaliyev.jpg";
import Jingale from "@/assets/images/jingale.jpg";
import ZorRasm from "@/assets/images/zorRasm.jpg";

const Hero = () => {
  return (
    <section className="mt-10 mb-10 px-4 sm:px-6 lg:px-10">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10">
        {/* Left Side */}
        <div className="flex flex-col lg:w-6/12 gap-5">
          <p className="w-56 sm:w-64 px-4 py-1 rounded-3xl bg-accent text-black text-center lg:text-left">
            Premium IELTS Training Platform
          </p>

          <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl leading-snug sm:leading-tight lg:leading-[1.1]">
            Achieve Your Dream IELTS Score with 8.5+ Expert Teachers
          </h1>

          <p className="text-secondary max-w-full sm:max-w-[90%] lg:max-w-[80%]">
            Premium courses in Reading, Listening, Writing, Speaking. Proven
            methods. Real results.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-3">
            <Button className="bg-accent text-black font-medium text-lg w-full sm:w-auto">
              Start Free Course
            </Button>
            <Button className="bg-transparent border border-accent text-accent w-full sm:w-auto">
              Explore Premium
            </Button>
          </div>

          {/* Stats */}
          <div className="border-t border-text-tertiary mt-6 pt-4 flex flex-col sm:flex-row justify-between gap-4 sm:gap-10 max-w-full sm:max-w-[80%]">
            <div className="text-center sm:text-left">
              <p className="text-accent font-bold text-lg sm:text-xl">5000+</p>
              <p className="text-secondary text-sm sm:text-base">
                Active Students
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-accent font-bold text-lg sm:text-xl">8.5+</p>
              <p className="text-secondary text-sm sm:text-base">
                Expert Score
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-accent font-bold text-lg sm:text-xl">95%</p>
              <p className="text-secondary text-sm sm:text-base">
                Success Rate
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:w-5/12">
          {[IlhomMuratovich, AbduqahhorErgashaliyev, Jingale, ZorRasm].map(
            (img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Hero Image ${idx}`}
                className="w-full h-48 sm:h-56 lg:h-60 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);

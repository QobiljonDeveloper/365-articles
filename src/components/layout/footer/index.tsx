import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#05070b] border-t border-[#1f2937] pt-16 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Column 1 */}
        <div className="space-y-5">
          <h3 className="text-2xl font-bold">365 Articles</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your trusted partner for IELTS success with expert teachers and
            proven results.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              <Facebook key="fb" size={18} />,
              <Twitter key="tw" size={18} />,
              <Instagram key="ig" size={18} />,
              <Youtube key="yt" size={18} />,
            ].map((icon, i) => (
              <Button
                key={i}
                variant="ghost"
                size="icon"
                className="w-10 h-10 border border-[#1f2937] rounded-xl text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37]"
              >
                {icon}
              </Button>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold">Courses</h4>
          {[
            "Reading Course",
            "Writing Course",
            "Listening Course",
            "Speaking Course",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-gray-400 hover:text-[#d4af37] transition text-sm"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Column 3 */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold">Resources</h4>
          {["Mock Tests", "Study Materials", "Blog", "Success Stories"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="block text-gray-400 hover:text-[#d4af37] transition text-sm"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Column 4 */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold">Company</h4>
          {["About Us", "Our Teachers", "Contact", "Careers"].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-gray-400 hover:text-[#d4af37] transition text-sm"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Column 5 */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold">Legal</h4>
          {[
            "Privacy Policy",
            "Terms of Service",
            "Cookie Policy",
            "Refund Policy",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-gray-400 hover:text-[#d4af37] transition text-sm"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-[#1f2937] pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} IELTS Platform. All rights reserved.
      </div>
    </footer>
  );
}

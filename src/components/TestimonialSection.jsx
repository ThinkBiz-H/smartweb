import { Star, Quote } from "lucide-react";
import testimonialImg from "../assets/crypto-raw1.svg";

function TestimonialSection() {
  const testimonials = [
    {
      text: `"I thought my funds were gone forever after my device malfunctioned. The recovery team had my wallet access restored in under 48 hours. Absolutely professional and transparent throughout the entire process."`,
      name: "Marcus T.",
      role: "Hardware Device User",
      color: "bg-cyan-500/10 text-cyan-400",
    },

    {
      text: `"After a phishing attack compromised my online account, I was desperate. Their security team helped me secure my remaining assets and guided me through the entire recovery process. Could not recommend them more highly."`,
      name: "Sarah L.",
      role: "Account Recovery",
      color: "bg-green-500/10 text-green-400",
    },

    {
      text: `"Lost access to my mobile wallet with a significant amount in stored funds. The team recovered everything and even helped me improve my security setup. Their 24/7 support made all the difference during a stressful time."`,
      name: "David K.",
      role: "Mobile Platform User",
      color: "bg-pink-500/10 text-pink-400",
    },
  ];

  return (
    <section className="relative bg-[#06152b] py-28 overflow-hidden">
      {/* BG GLOW */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[700px] bg-cyan-500/10 blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* TOP CONTENT */}
        <div className="text-center">
          {/* BADGE */}
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm mb-7">
            TESTIMONIALS
          </div>

          {/* HEADING */}
          <h2 className="text-white text-6xl font-bold leading-tight">
            Trusted by Users Worldwide
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[#8b98b7] text-lg leading-9 mt-8 max-w-3xl mx-auto">
            Real stories from real users who successfully recovered their
            digital assets with our expert assistance.
          </p>

          {/* IMAGE */}
          <div className="flex justify-center mt-12">
            <img
              src={testimonialImg}
              alt="testimonial"
              className="w-full max-w-[220px]"
            />
          </div>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#111f3b] border border-[#223454] rounded-3xl p-8"
            >
              {/* QUOTE ICON */}
              <Quote className="text-[#4c5b79] w-10 h-10" />

              {/* STARS */}
              <div className="flex gap-1 mt-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* TEXT */}
              <p className="text-[#8b98b7] leading-8 mt-6 text-lg">
                {item.text}
              </p>

              {/* BORDER */}
              <div className="border-t border-[#223454] my-8"></div>

              {/* USER */}
              <div className="flex items-center gap-4">
                {/* AVATAR */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-semibold ${item.color}`}
                >
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                {/* INFO */}
                <div>
                  <h4 className="text-white text-lg font-semibold">
                    {item.name}
                  </h4>

                  <p className="text-[#7d8aa8] text-sm mt-1">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;

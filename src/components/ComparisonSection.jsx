import { Check, X } from "lucide-react";

function ComparisonSection() {
  const features = [
    {
      title: "Certified Recovery Specialists",
      us: true,
      others: false,
    },
    {
      title: "24/7 Live Expert Support",
      us: true,
      others: false,
    },
    {
      title: "100+ Platform Compatibility",
      us: true,
      others: false,
    },
    {
      title: "Military-Grade Encryption (AES-256)",
      us: true,
      others: false,
    },
    {
      title: "Zero-Knowledge Privacy Architecture",
      us: true,
      others: false,
    },
    {
      title: "No Recovery, No Fee Policy",
      us: true,
      others: false,
    },
    {
      title: "Recovery in 24–72 Hours",
      us: true,
      others: false,
    },
    {
      title: "Free Initial Case Assessment",
      us: true,
      others: true,
    },
    {
      title: "Basic Account Support",
      us: true,
      others: true,
    },
    {
      title: "Transparent Pricing",
      us: true,
      others: false,
    },
  ];

  return (
    <section className="relative bg-[#06152b] py-28 overflow-hidden">
      {/* BG GLOW */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[700px] bg-cyan-500/10 blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* TOP CONTENT */}
        <div className="text-center">
          {/* BADGE */}
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm mb-7">
            WHY CHOOSE US
          </div>

          {/* HEADING */}
          <h2 className="text-white text-6xl font-bold leading-tight">
            How We Compare to the <br />
            Competition
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[#8b98b7] text-lg leading-9 mt-8">
            See why thousands of users trust us over other recovery services.
          </p>
        </div>

        {/* TABLE */}
        <div className="mt-20 overflow-hidden rounded-3xl border border-[#223454] bg-[#111f3b]">
          {/* TABLE HEADER */}
          <div className="grid grid-cols-3 border-b border-[#223454] px-8 py-6 text-[#7d8aa8] font-semibold text-lg">
            <div>Feature</div>

            <div className="text-center text-cyan-400">Us</div>

            <div className="text-center">Others</div>
          </div>

          {/* TABLE BODY */}
          {features.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 items-center px-8 py-6 border-b border-[#1d2b47]"
            >
              {/* FEATURE */}
              <div className="text-[#d6deee] text-lg">{item.title}</div>

              {/* US */}
              <div className="flex justify-center">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
              </div>

              {/* OTHERS */}
              <div className="flex justify-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    item.others ? "bg-green-500/10" : "bg-[#1b2a4a]"
                  }`}
                >
                  {item.others ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <X className="w-5 h-5 text-[#5f6d89]" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComparisonSection;

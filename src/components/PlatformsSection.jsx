import { Folder } from "lucide-react";
import platformImg from "../assets/four.jpg";

function PlatformsSection() {
  const platforms = [
    "Cloud Accounts",
    "Multi-Factor Systems",
    "Cold Storage",
    "Hot Storage",
    "Browser Extensions",
    "Hardware Devices",
    "Software Wallets",
    "Web Platforms",
    "Mobile Apps",
    "Backup Systems",
    "Recovery Tools",
    "Account Managers",
    "Password Managers",
    "Digital Safes",
    "Payment Platforms",
    "Digital Vaults",
    "Security Keys",
    "Authentication Apps",
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
            SUPPORTED PLATFORMS
          </div>

          {/* HEADING */}
          <h2 className="text-white text-6xl font-bold leading-tight">
            Compatible with 100+ Leading <br />
            Digital Platforms
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[#8b98b7] text-lg leading-9 mt-8 max-w-3xl mx-auto">
            From hardware wallets to browser extensions and mobile apps, we
            support recovery across all major digital wallet platforms.
          </p>

          {/* IMAGE */}
          <div className="flex justify-center mt-16">
            <img
              src={platformImg}
              alt="platform"
              className="w-full max-w-[420px]"
            />
          </div>
        </div>

        {/* MOVING TAGS */}
        <div className="mt-20 space-y-6">
          {/* FIRST ROW */}
          <div className="ticker-wrapper">
            <div className="ticker-track">
              {[...platforms, ...platforms].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-[#111f3b] border border-[#223454] rounded-xl px-6 py-4 min-w-max"
                >
                  <Folder className="w-5 h-5 text-cyan-400" />

                  <span className="text-[#c7d2e4]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SECOND ROW */}
          <div className="ticker-wrapper">
            <div className="ticker-track reverse">
              {[...platforms, ...platforms].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-[#111f3b] border border-[#223454] rounded-xl px-6 py-4 min-w-max"
                >
                  <Folder className="w-5 h-5 text-cyan-400" />

                  <span className="text-[#c7d2e4]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlatformsSection;

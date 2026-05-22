import { FileText, ShieldCheck, Settings, CheckCircle2 } from "lucide-react";

import stepImg from "../assets/crypto-raw2.svg";

function ProcessSection() {
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
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm mb-6">
            HOW IT WORKS
          </div>

          {/* HEADING */}
          <h2 className="text-white text-6xl font-bold leading-tight">
            Your Recovery Journey in 4 Simple <br />
            Steps
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[#8b98b7] text-lg mt-6 max-w-3xl mx-auto leading-8">
            From initial contact to full wallet restoration, our streamlined
            process ensures a secure and transparent recovery experience.
          </p>

          {/* IMAGE */}
          <div className="flex justify-center mt-14">
            <img src={stepImg} alt="steps" className="w-[220px]" />
          </div>
        </div>

        {/* STEPS */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {/* STEP 1 */}
          <div className="bg-[#101d38] border border-cyan-500/30 rounded-3xl p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-[#1b2a4a] border border-[#33435f] flex items-center justify-center text-cyan-400 font-bold mx-auto">
              01
            </div>

            <FileText className="w-9 h-9 text-cyan-400 mx-auto mt-8" />

            <h3 className="text-white text-2xl font-semibold mt-6">
              Submit Your Case
            </h3>

            <p className="text-[#8b98b7] leading-8 mt-5 text-lg">
              Provide details about your wallet issue through our secure intake
              form.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="bg-[#101d38] border border-green-500/30 rounded-3xl p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-[#1b2a4a] border border-[#33435f] flex items-center justify-center text-green-400 font-bold mx-auto">
              02
            </div>

            <ShieldCheck className="w-9 h-9 text-green-400 mx-auto mt-8" />

            <h3 className="text-white text-2xl font-semibold mt-6">
              Expert Assessment
            </h3>

            <p className="text-[#8b98b7] leading-8 mt-5 text-lg">
              Recovery specialists review your case and prepare a secure
              strategy.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="bg-[#101d38] border border-pink-500/30 rounded-3xl p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-[#1b2a4a] border border-[#33435f] flex items-center justify-center text-pink-500 font-bold mx-auto">
              03
            </div>

            <Settings className="w-9 h-9 text-pink-500 mx-auto mt-8" />

            <h3 className="text-white text-2xl font-semibold mt-6">
              Secure Recovery
            </h3>

            <p className="text-[#8b98b7] leading-8 mt-5 text-lg">
              Advanced encrypted protocols restore access while keeping you
              informed.
            </p>
          </div>

          {/* STEP 4 */}
          <div className="bg-[#101d38] border border-blue-500/30 rounded-3xl p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-[#1b2a4a] border border-[#33435f] flex items-center justify-center text-blue-400 font-bold mx-auto">
              04
            </div>

            <CheckCircle2 className="w-9 h-9 text-blue-400 mx-auto mt-8" />

            <h3 className="text-white text-2xl font-semibold mt-6">
              Access Restored
            </h3>

            <p className="text-[#8b98b7] leading-8 mt-5 text-lg">
              Full access to your wallet and assets is securely restored.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;

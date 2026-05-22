import { Users, CalendarDays, FileCheck2 } from "lucide-react";

function StatsSection() {
  return (
    <section className="bg-[#07152d] text-white">
      {/* TOP CARDS */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="bg-[#0f1f3d] border border-[#223454] rounded-3xl py-14 flex flex-col items-center justify-center text-center hover:border-cyan-400 transition-all duration-300">
            <Users className="text-purple-500 w-12 h-12 mb-6" />

            <h2 className="text-[56px] font-bold text-cyan-400 leading-none">
              14M+
            </h2>

            <p className="text-[#8f9bb7] mt-4 text-lg">
              Trusted Users Worldwide
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#0f1f3d] border border-[#223454] rounded-3xl py-14 flex flex-col items-center justify-center text-center hover:border-cyan-400 transition-all duration-300">
            <CalendarDays className="text-fuchsia-500 w-12 h-12 mb-6" />

            <h2 className="text-[56px] font-bold text-[#22d3a6] leading-none">
              2016
            </h2>

            <p className="text-[#8f9bb7] mt-4 text-lg">
              Established & Verified
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#0f1f3d] border border-[#223454] rounded-3xl py-14 flex flex-col items-center justify-center text-center hover:border-cyan-400 transition-all duration-300">
            <FileCheck2 className="text-pink-500 w-12 h-12 mb-6" />

            <h2 className="text-[56px] font-bold text-[#3b82f6] leading-none">
              100%
            </h2>

            <p className="text-[#8f9bb7] mt-4 text-lg">
              Third-Party Security Audited
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM STATS */}
      <div className="relative border-t border-[#162742] overflow-hidden">
        {/* BG GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,174,255,0.15),transparent_65%)]"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="grid md:grid-cols-3 items-center">
            {/* STAT 1 */}
            <div className="text-center">
              <h2 className="text-[80px] font-bold leading-none">10M+</h2>

              <p className="text-[#8f9bb7] mt-3 tracking-wide uppercase">
                Digital Assets Managed
              </p>
            </div>

            {/* STAT 2 */}
            <div className="text-center">
              <h2 className="text-[80px] font-bold leading-none">$600M+</h2>

              <p className="text-[#8f9bb7] mt-3 tracking-wide uppercase">
                In Recovered Funds
              </p>
            </div>

            {/* STAT 3 */}
            <div className="text-center">
              <h2 className="text-[80px] font-bold leading-none">100+</h2>

              <p className="text-[#8f9bb7] mt-3 tracking-wide uppercase">
                Supported Wallets
              </p>
            </div>

            {/* IMAGE */}
            {/* <div className="flex justify-center mt-10 md:mt-0">
              <img
                src="https://smartwalletmanagement.com/assets/img/about/about-3.png"
                alt="wallet"
                className="w-[220px]"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;

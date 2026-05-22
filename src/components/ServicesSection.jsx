import { Shield, ShieldCheck, Grid2x2, Headphones } from "lucide-react";

import serviceImg from "../assets/swap-exchange.png";

function ServicesSection() {
  return (
    <section className="bg-[#06152b] py-28 overflow-hidden relative">
      {/* BG GLOW */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[700px] bg-cyan-500/10 blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* TOP TITLE */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm mb-6">
            OUR SERVICES
          </div>

          <h2 className="text-white text-6xl font-bold leading-tight">
            A Unified Platform for Countless <br />
            Assets
          </h2>

          <p className="text-[#8b98b7] text-lg mt-6 max-w-3xl mx-auto leading-8">
            From account recovery to security audits, our comprehensive suite of
            services covers every aspect of digital account management.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CARDS */}
          <div className="grid grid-cols-2 gap-6">
            {/* CARD 1 */}
            <div className="bg-[#101d38] border border-cyan-500/30 rounded-3xl p-8">
              <Shield className="text-cyan-400 w-10 h-10 mb-6" />

              <h3 className="text-white text-2xl font-semibold leading-10">
                Regain Control of Your Digital Accounts
              </h3>

              <p className="text-[#8b98b7] mt-5 leading-8 text-lg">
                Recover access to your digital wallet using our advanced
                recovery protocols.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#101d38] border border-green-500/30 rounded-3xl p-8 mt-10">
              <ShieldCheck className="text-green-400 w-10 h-10 mb-6" />

              <h3 className="text-white text-2xl font-semibold leading-10">
                Advanced Account Protection
              </h3>

              <p className="text-[#8b98b7] mt-5 leading-8 text-lg">
                Real-time alerts and security monitoring keep your accounts
                protected.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#101d38] border border-pink-500/30 rounded-3xl p-8">
              <Grid2x2 className="text-pink-500 w-10 h-10 mb-6" />

              <h3 className="text-white text-2xl font-semibold leading-10">
                Multi-Platform Compatibility
              </h3>

              <p className="text-[#8b98b7] mt-5 leading-8 text-lg">
                Works seamlessly across wallets, devices, and web platforms.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-[#101d38] border border-blue-500/30 rounded-3xl p-8 mt-10">
              <Headphones className="text-blue-400 w-10 h-10 mb-6" />

              <h3 className="text-white text-2xl font-semibold leading-10">
                24/7 Expert Technical Support
              </h3>

              <p className="text-[#8b98b7] mt-5 leading-8 text-lg">
                Connect with certified specialists anytime for secure support.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            {/* IMAGE GLOW */}
            <div className="absolute w-[420px] h-[420px] bg-cyan-400/20 blur-[120px] rounded-full"></div>

            <img
              src={serviceImg}
              alt="service"
              className="relative z-10 w-full max-w-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

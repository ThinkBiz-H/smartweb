import { CheckCircle2 } from "lucide-react";
import walletImg from "../assets/hero.png";

function WalletRecoverySection() {
  return (
    <section className="relative bg-[#06152b] py-28 overflow-hidden">
      {/* BG GLOW */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[700px] bg-cyan-500/10 blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT IMAGE */}
          <div className="relative flex justify-center">
            {/* IMAGE GLOW */}
            <div className="absolute w-[450px] h-[450px] bg-cyan-400/20 blur-[120px] rounded-full"></div>

            <img
              src={walletImg}
              alt="wallet"
              className="relative z-10 w-full max-w-[420px]"
            />

            {/* FLOAT CARD */}
            <div className="absolute bottom-10 right-8 bg-[#162742] border border-cyan-500/20 rounded-2xl px-8 py-5 z-20 shadow-2xl">
              <h3 className="text-cyan-400 text-4xl font-bold">100+</h3>

              <p className="text-[#8b98b7] text-sm mt-1">Wallets Supported</p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* BADGE */}
            <div className="inline-flex items-center px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm mb-7">
              WALLET RECOVERY
            </div>

            {/* HEADING */}
            <h2 className="text-white text-6xl font-bold leading-tight">
              Quickly and Safely Recover <br />
              Access to Your Digital Wallet
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[#8b98b7] text-lg leading-9 mt-8">
              Take full control of your wallet recovery process. Our team of
              certified specialists works directly with you to restore access to
              locked, compromised, or inaccessible wallets from all major
              platforms.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-green-400 w-7 h-7" />

                <p className="text-[#c7d2e4] text-lg">
                  Direct support from certified recovery experts
                </p>
              </div>

              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-green-400 w-7 h-7" />

                <p className="text-[#c7d2e4] text-lg">
                  Compatible with 100+ major wallet platforms
                </p>
              </div>

              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-green-400 w-7 h-7" />

                <p className="text-[#c7d2e4] text-lg">
                  End-to-end encrypted recovery process
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <button className="mt-12 bg-[#ffb300] hover:bg-yellow-400 transition-all duration-300 text-black font-semibold text-lg px-10 py-5 rounded-xl">
              Start Recovery →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WalletRecoverySection;

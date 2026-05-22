import { ShieldCheck, EyeOff, BellRing } from "lucide-react";

import securityImg from "../assets/security-shield.png";

function SecuritySection() {
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
            SECURITY FIRST
          </div>

          {/* HEADING */}
          <h2 className="text-white text-6xl font-bold leading-tight">
            Complete Ownership and Control <br />
            of Your Wallet Assets
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[#8b98b7] text-lg leading-9 mt-8 max-w-4xl mx-auto">
            Your wallet is secured with state-of-the-art protection, but only
            you possess the security credentials and recovery information. They
            stay completely out of our reach at all times.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mt-24">
          {/* LEFT IMAGE */}
          <div className="relative flex justify-center">
            {/* IMAGE GLOW */}
            <div className="absolute w-[450px] h-[450px] bg-cyan-400/20 blur-[120px] rounded-full"></div>

            <img
              src={securityImg}
              alt="security"
              className="relative z-10 w-full max-w-[420px]"
            />
          </div>

          {/* RIGHT CARDS */}
          <div className="space-y-8">
            {/* CARD 1 */}
            <div className="bg-[#111f3b] border border-[#223454] rounded-3xl p-8 flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-9 h-9 text-purple-500" />
              </div>

              <div>
                <h3 className="text-white text-3xl font-semibold">
                  Advanced Encryption
                </h3>

                <p className="text-[#8b98b7] leading-8 mt-4 text-lg">
                  Protect your wallet using military-grade AES-256 encryption
                  ensuring complete recovery data security.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#111f3b] border border-[#223454] rounded-3xl p-8 flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                <EyeOff className="w-9 h-9 text-pink-500" />
              </div>

              <div>
                <h3 className="text-white text-3xl font-semibold">
                  Zero-Knowledge Privacy
                </h3>

                <p className="text-[#8b98b7] leading-8 mt-4 text-lg">
                  We never collect or monitor your wallet balances, browsing
                  activity, or private account information.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#111f3b] border border-[#223454] rounded-3xl p-8 flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-fuchsia-500/10 flex items-center justify-center flex-shrink-0">
                <BellRing className="w-9 h-9 text-fuchsia-500" />
              </div>

              <div>
                <h3 className="text-white text-3xl font-semibold">
                  Real-Time Threat Alerts
                </h3>

                <p className="text-[#8b98b7] leading-8 mt-4 text-lg">
                  Get instant notifications for suspicious wallet activity,
                  unauthorized access attempts, and transaction risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecuritySection;

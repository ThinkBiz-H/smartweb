import { Phone, Clock3 } from "lucide-react";
import logo from "../assets/hero.png";

function Footer() {
  return (
    <footer className="relative bg-[#06152b] overflow-hidden border-t border-[#1b2a45]">
      {/* GRID BG */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:70px_70px]"></div>
      </div>

      {/* GLOW */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[700px] bg-cyan-500/10 blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-16 py-24">
          {/* LEFT */}
          <div>
            <img src={logo} alt="logo" className="w-[180px]" />

            <p className="text-[#8b98b7] text-lg leading-9 mt-10 max-w-[400px]">
              Your trusted partner in digital asset security and recovery.
              Protecting millions of wallets worldwide since 2016.
            </p>
          </div>

          {/* CENTER */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-10">
              QUICK LINKS
            </h3>

            <div className="flex flex-col gap-6">
              <a
                href="#"
                className="text-[#8b98b7] hover:text-cyan-400 transition-all duration-300 text-lg"
              >
                Home
              </a>

              <a
                href="#"
                className="text-[#8b98b7] hover:text-cyan-400 transition-all duration-300 text-lg"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-[#8b98b7] hover:text-cyan-400 transition-all duration-300 text-lg"
              >
                Terms & Conditions
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-10">CONTACT</h3>

            <div className="space-y-7">
              {/* PHONE */}
              <div className="flex items-center gap-4 text-[#8b98b7] text-lg">
                <Phone className="w-5 h-5 text-cyan-400" />

                <span>+(888)769—0872</span>
              </div>

              {/* SUPPORT */}
              <div className="flex items-center gap-4 text-[#8b98b7] text-lg">
                <Clock3 className="w-5 h-5 text-cyan-400" />

                <span>24/7 Expert Support Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-[#223454] py-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-[#6f7d99] text-sm">
            © 2026 Smart Wallet Management. All rights reserved.
          </p>

          <p className="text-[#6f7d99] text-sm">
            Securing digital assets with confidence.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

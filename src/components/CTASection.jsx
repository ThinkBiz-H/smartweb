import heroImg from "../assets/cta-illustration.png";

function CTASection() {
  return (
    <section className="relative bg-[#06152b] overflow-hidden py-32">
      {/* GRID BG */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:70px_70px]"></div>
      </div>

      {/* CENTER GLOW */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[700px] h-[700px] bg-cyan-500/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-white text-7xl font-bold leading-[1.1] max-w-[700px]">
              One Wallet Platform
              <br />
              to Power Your Entire
              <br />
              <span className="text-[#f5b544]">Digital</span>{" "}
              <span className="text-[#4fd1c5]">Experience</span>
            </h2>

            <p className="text-[#8b98b7] text-2xl leading-10 mt-10 max-w-[700px]">
              Effortlessly recover assets, secure your accounts, and benefit
              from advanced digital wallet integration — all in one secure,
              trusted platform.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-5 mt-12">
              <button className="bg-[#f5b544] hover:bg-yellow-400 transition-all duration-300 text-black font-semibold text-xl px-10 py-5 rounded-xl">
                Contact Support →
              </button>

              <button className="border border-[#33435f] hover:border-cyan-400 transition-all duration-300 text-white text-xl px-10 py-5 rounded-xl">
                Talk to Experts
              </button>
            </div>

            {/* BOTTOM INFO */}
            <div className="flex flex-wrap gap-8 mt-14 text-[#7d8aa8] text-lg">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                Available 24/7
              </div>

              <div className="text-cyan-400">◆</div>

              <div>Trusted by 14M+ Users</div>

              <div className="text-cyan-400">◆</div>

              <div>Established 2016</div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            {/* IMAGE GLOW */}
            <div className="absolute w-[420px] h-[420px] bg-cyan-400/20 blur-[120px] rounded-full"></div>

            <img
              src={heroImg}
              alt="wallet"
              className="relative z-10 w-full max-w-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;

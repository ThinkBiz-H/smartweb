import heroImg from "../assets/hero-main.png";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#06152b] min-h-screen flex items-center">
      {/* CENTER GLOW */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[700px] h-[700px] bg-cyan-500/10 blur-[140px] rounded-full"></div>
      </div>

      {/* GRID LINES */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:90px_90px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-14 w-full relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          {/* LEFT SIDE */}
          <div className="max-w-[620px]">
            {/* TOP BADGE */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm tracking-wide mb-8">
              <span>◈</span>
              <span>DIGITAL ASSETS RECOVERY</span>
            </div>

            {/* HEADING */}
            <h1 className="text-white font-bold leading-[1.05] text-[62px]">
              Secure, Restore, <br />
              and <span className="text-[#00cfff]">Recover</span> Your <br />
              <span className="text-[#ffb300]">Digital Assets</span> with <br />
              Confidence
            </h1>

            {/* DESCRIPTION */}
            <p className="text-[#8b98b7] text-[22px] leading-9 mt-8 max-w-[580px]">
              Want to verify the security status of your digital wallet and
              assets?
            </p>

            {/* BUTTONS */}
            <div className="flex gap-5 mt-10">
              <button className="bg-[#ffb300] hover:bg-yellow-400 transition-all duration-300 text-black font-semibold text-lg px-10 py-5 rounded-xl">
                Start Recovery →
              </button>

              <button className="border border-[#33435f] hover:border-cyan-400 transition-all duration-300 text-white text-lg px-10 py-5 rounded-xl">
                Talk to Experts
              </button>
            </div>

            {/* BOTTOM INFO */}
            <div className="flex gap-8 mt-14 text-[#7d8aa8] text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                Available 24/7
              </div>

              <div>Trusted by 14M+ Users</div>

              <div>Established 2016</div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center items-center">
            {/* IMAGE GLOW */}
            <div className="absolute w-[500px] h-[500px] bg-cyan-400/20 blur-[120px] rounded-full"></div>

            <img
              src={heroImg}
              alt="hero"
              className="relative z-10 w-full max-w-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

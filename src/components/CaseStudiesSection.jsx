import { Clock3, Shield, BadgeCheck } from "lucide-react";

function CaseStudiesSection() {
  const cases = [
    {
      badge: "HARDWARE DEVICE RECOVERY",
      title: "Locked Hardware Wallet with $120K in Assets",
      challenge:
        "A long-time user was locked out of their hardware device after a firmware update corrupted the access credentials.",
      solution:
        "Our certified specialists used proprietary recovery protocols to safely extract and restore the access credentials.",
      outcome:
        "Full access restored within 36 hours. All assets recovered intact.",
      border: "border-cyan-500/40",
      time: "36 Hours",
      stat1: "100%",
      stat2: "2",
      label1: "Assets Secured",
      label2: "Platforms Involved",
    },

    {
      badge: "COMPROMISED ACCOUNT",
      title: "Phishing Attack on Multi-Platform Portfolio",
      challenge:
        "A user fell victim to a sophisticated phishing campaign that compromised access to three interconnected accounts.",
      solution:
        "Our security team immediately froze further unauthorized activity and recovered control of all affected accounts.",
      outcome:
        "All accounts secured within 48 hours. Remaining assets fully protected.",
      border: "border-green-500/40",
      time: "48 Hours",
      stat1: "3",
      stat2: "Yes",
      label1: "Accounts Secured",
      label2: "Threat Neutralized",
    },

    {
      badge: "LOST ACCESS CREDENTIALS",
      title: "Forgotten Password with No Backup Recovery",
      challenge:
        "A user lost access to their primary wallet after losing both password and backup recovery phrase.",
      solution:
        "Using advanced credential reconstruction techniques, our team rebuilt the access pathway securely.",
      outcome:
        "Access fully restored in 5 business days. Security setup improved post-recovery.",
      border: "border-pink-500/40",
      time: "5 Days",
      stat1: "100%",
      stat2: "Yes",
      label1: "Data Recovered",
      label2: "Security Upgraded",
    },
  ];

  return (
    <section className="relative bg-[#06152b] py-28 overflow-hidden">
      {/* BG GLOW */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[700px] bg-cyan-500/10 blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* TOP */}
        <div className="text-center">
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm mb-7">
            CASE STUDIES
          </div>

          <h2 className="text-white text-6xl font-bold leading-tight">
            Real Recovery Stories
          </h2>

          <p className="text-[#8b98b7] text-lg leading-9 mt-8 max-w-3xl mx-auto">
            Explore detailed accounts of how we've helped users overcome complex
            digital asset challenges.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {cases.map((item, index) => (
            <div
              key={index}
              className={`bg-[#111f3b] border ${item.border} rounded-3xl p-8`}
            >
              {/* BADGE */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-xs mb-7">
                {item.badge}
              </div>

              {/* TITLE */}
              <h3 className="text-white text-3xl font-bold leading-10">
                {item.title}
              </h3>

              {/* CHALLENGE */}
              <div className="mt-8">
                <h4 className="text-[#7d8aa8] uppercase text-sm tracking-wider">
                  Challenge
                </h4>

                <p className="text-[#8b98b7] leading-8 mt-3 text-lg">
                  {item.challenge}
                </p>
              </div>

              {/* SOLUTION */}
              <div className="mt-8">
                <h4 className="text-[#7d8aa8] uppercase text-sm tracking-wider">
                  Solution
                </h4>

                <p className="text-[#8b98b7] leading-8 mt-3 text-lg">
                  {item.solution}
                </p>
              </div>

              {/* OUTCOME */}
              <div className="mt-8">
                <h4 className="text-green-400 uppercase text-sm tracking-wider">
                  Outcome
                </h4>

                <p className="text-[#d7e0ef] leading-8 mt-3 text-lg">
                  {item.outcome}
                </p>
              </div>

              {/* BOTTOM */}
              <div className="border-t border-[#223454] mt-10 pt-8 grid grid-cols-3 text-center">
                {/* ITEM */}
                <div>
                  <Clock3 className="w-5 h-5 text-[#7d8aa8] mx-auto mb-3" />

                  <h5 className="text-white font-semibold">{item.time}</h5>

                  <p className="text-[#7d8aa8] text-xs mt-1">Recovery Time</p>
                </div>

                {/* ITEM */}
                <div>
                  <Shield className="w-5 h-5 text-[#7d8aa8] mx-auto mb-3" />

                  <h5 className="text-white font-semibold">{item.stat1}</h5>

                  <p className="text-[#7d8aa8] text-xs mt-1">{item.label1}</p>
                </div>

                {/* ITEM */}
                <div>
                  <BadgeCheck className="w-5 h-5 text-[#7d8aa8] mx-auto mb-3" />

                  <h5 className="text-white font-semibold">{item.stat2}</h5>

                  <p className="text-[#7d8aa8] text-xs mt-1">{item.label2}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-16">
          <button className="border border-[#33435f] hover:border-cyan-400 transition-all duration-300 text-white text-lg px-10 py-5 rounded-xl">
            Discuss Your Case →
          </button>
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesSection;

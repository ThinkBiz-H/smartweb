import { useState } from "react";
import { ChevronDown } from "lucide-react";
import faqImg from "../assets/hero.png";

function FAQSection() {
  const faqs = [
    {
      question: "What types of wallets do you support for recovery?",
      answer:
        "We support hardware wallets, browser wallets, exchange accounts, mobile wallets, and multi-platform recovery systems.",
    },

    {
      question: "How long does the recovery process typically take?",
      answer:
        "Most recoveries are completed within 24–72 hours depending on the complexity and security verification process.",
    },

    {
      question: "Is my personal and wallet data kept secure during recovery?",
      answer:
        "Yes. We use military-grade encryption and zero-knowledge privacy systems to keep your data fully protected.",
    },

    {
      question: "What if my wallet has been compromised or hacked?",
      answer:
        "Our specialists immediately secure remaining assets, freeze suspicious activity, and recover account access safely.",
    },

    {
      question: "Do you charge upfront fees for recovery services?",
      answer:
        "No. We follow a no-recovery, no-fee policy for most recovery cases.",
    },

    {
      question: "Can you recover assets from lost security credentials?",
      answer:
        "Yes. Our advanced credential reconstruction systems help restore access securely.",
    },

    {
      question: "How do I get started with the recovery process?",
      answer:
        "Simply contact our experts and submit your recovery request through our secure process.",
    },
  ];

  const [active, setActive] = useState(0);

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
            FAQ
          </div>

          <h2 className="text-white text-6xl font-bold leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-[#8b98b7] text-lg leading-9 mt-8 max-w-3xl mx-auto">
            Find answers to common questions about our digital wallet recovery
            services.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mt-20">
          {/* FAQ LEFT */}
          <div className="space-y-5">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-[#111f3b] border border-[#223454] rounded-2xl overflow-hidden"
              >
                {/* QUESTION */}
                <button
                  onClick={() => setActive(active === index ? null : index)}
                  className="w-full flex items-center justify-between text-left px-7 py-6"
                >
                  <span className="text-white text-lg font-medium">
                    {item.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 transition-all duration-300 ${
                      active === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ANSWER */}
                {active === index && (
                  <div className="px-7 pb-7">
                    <p className="text-[#8b98b7] leading-8 text-lg">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <div className="absolute w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

            <img
              src={faqImg}
              alt="faq"
              className="relative z-10 w-full max-w-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

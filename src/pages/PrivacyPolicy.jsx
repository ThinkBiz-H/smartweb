import { Shield } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PrivacyPolicy() {
  return (
    <div className="bg-[#06152b] min-h-screen overflow-hidden relative">
      {/* BG GRID */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* GLOW */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[900px] h-[900px] bg-cyan-500/10 blur-[160px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* HERO */}
        <section className="pt-28 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center mx-auto mb-8">
              <Shield className="text-cyan-400 w-8 h-8" />
            </div>

            <h1 className="text-white text-5xl md:text-6xl font-bold">
              Privacy Policy
            </h1>

            <p className="text-[#93a4c3] text-xl mt-5">
              Smart Wallet Management
            </p>

            <p className="text-[#7282a0] mt-3">Last Updated: February 2026</p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            {/* TABLE */}
            <div className="bg-[#0d1d38] border border-[#243552] rounded-3xl p-10 mb-12">
              <h3 className="text-white font-semibold text-lg mb-8">
                TABLE OF CONTENTS
              </h3>

              <div className="grid md:grid-cols-2 gap-y-5 text-[#8d9dbc]">
                <a href="#s1" className="hover:text-cyan-400">
                  1. Introduction
                </a>
                <a href="#s2" className="hover:text-cyan-400">
                  2. Information We Collect
                </a>
                <a href="#s3" className="hover:text-cyan-400">
                  3. How We Use Your Information
                </a>
                <a href="#s4" className="hover:text-cyan-400">
                  4. Data Security and Protection
                </a>
                <a href="#s5" className="hover:text-cyan-400">
                  5. Sharing and Disclosure
                </a>
                <a href="#s6" className="hover:text-cyan-400">
                  6. Third-Party Services and Links
                </a>
                <a href="#s7" className="hover:text-cyan-400">
                  7. Cookies and Tracking Technologies
                </a>
                <a href="#s8" className="hover:text-cyan-400">
                  8. Your Privacy Choices
                </a>
                <a href="#s9" className="hover:text-cyan-400">
                  9. Children’s Privacy
                </a>
                <a href="#s10" className="hover:text-cyan-400">
                  10. International Data Transfers
                </a>
                <a href="#s11" className="hover:text-cyan-400">
                  11. Updates to This Policy
                </a>
                <a href="#s12" className="hover:text-cyan-400">
                  12. Contact Us
                </a>
              </div>
            </div>

            {/* CARD */}
            {sections.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="bg-[#0d1d38] border border-[#243552] rounded-3xl p-10 mb-10"
              >
                <h2 className="text-white text-4xl font-bold mb-8">
                  <span className="text-cyan-400 mr-4">{item.number}.</span>
                  {item.title}
                </h2>

                <div className="text-[#9aa9c4] text-lg leading-10 space-y-6">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

const sections = [
  {
    id: "s1",
    number: "1",
    title: "Introduction",
    content: (
      <>
        <p>
          At Smart Wallet Management, we are committed to safeguarding the
          privacy and security of our users.
        </p>

        <p>
          This Privacy Policy explains how we collect, use, store, and protect
          your information when you interact with our platform, services, and
          website.
        </p>
      </>
    ),
  },

  {
    id: "s2",
    number: "2",
    title: "Information We Collect",
    content: (
      <ul className="list-disc pl-6 space-y-4">
        <li>
          Technical Information including browser type, operating system, and
          device information.
        </li>

        <li>
          Service Information such as support requests and communication
          records.
        </li>

        <li>Usage analytics to improve performance and user experience.</li>
      </ul>
    ),
  },

  {
    id: "s3",
    number: "3",
    title: "How We Use Your Information",
    content: (
      <ul className="list-disc pl-6 space-y-4">
        <li>To provide and improve our services.</li>
        <li>To communicate updates and support responses.</li>
        <li>To detect fraud and suspicious activity.</li>
        <li>To optimize website functionality and security.</li>
      </ul>
    ),
  },

  {
    id: "s4",
    number: "4",
    title: "Data Security and Protection",
    content: (
      <ul className="list-disc pl-6 space-y-4">
        <li>End-to-End Encryption using AES-256 protocols.</li>
        <li>Real-time threat monitoring systems.</li>
        <li>Strict access controls and secure infrastructure.</li>
        <li>Encrypted cloud backup options.</li>
      </ul>
    ),
  },

  {
    id: "s5",
    number: "5",
    title: "Sharing and Disclosure",
    content: (
      <ul className="list-disc pl-6 space-y-4">
        <li>We never sell your personal data.</li>
        <li>
          Limited sharing may occur with trusted partners for operational
          purposes.
        </li>
        <li>Information may be disclosed when legally required.</li>
      </ul>
    ),
  },

  {
    id: "s6",
    number: "6",
    title: "Third-Party Services and Links",
    content: (
      <p>
        Our platform may contain links to external services. We are not
        responsible for third-party privacy practices or policies.
      </p>
    ),
  },

  {
    id: "s7",
    number: "7",
    title: "Cookies and Tracking Technologies",
    content: (
      <p>
        We use essential cookies to improve functionality, security, and user
        experience across our platform.
      </p>
    ),
  },

  {
    id: "s8",
    number: "8",
    title: "Your Privacy Choices",
    content: (
      <ul className="list-disc pl-6 space-y-4">
        <li>You may opt out of non-essential communications.</li>
        <li>You can request deletion of personal data.</li>
        <li>You may configure additional security preferences.</li>
      </ul>
    ),
  },

  {
    id: "s9",
    number: "9",
    title: "Children’s Privacy",
    content: (
      <p>Our services are not intended for individuals under the age of 18.</p>
    ),
  },

  {
    id: "s10",
    number: "10",
    title: "International Data Transfers",
    content: (
      <p>
        Information may be processed in different countries where our
        infrastructure and services operate.
      </p>
    ),
  },

  {
    id: "s11",
    number: "11",
    title: "Updates to This Policy",
    content: (
      <p>
        We may update this Privacy Policy periodically to reflect operational or
        legal changes.
      </p>
    ),
  },

  {
    id: "s12",
    number: "12",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have any questions regarding this Privacy Policy, please
          contact us.
        </p>

        <p className="text-cyan-400">Phone: +1(888)769—7852</p>

        <p>Response Time: We aim to respond within 48 hours.</p>
      </>
    ),
  },
];

export default PrivacyPolicy;

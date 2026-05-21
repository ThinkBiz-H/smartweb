// src/pages/TermsConditions.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FileText } from "lucide-react";

const sections = [
  {
    id: 1,
    title: "Acceptance of Terms",
    content:
      "By creating an account or using our services, you acknowledge that you have read, understood, and agreed to comply with these terms. If you do not agree with any part of these terms, you must discontinue use of our platform immediately.",
  },
  {
    id: 2,
    title: "User Eligibility",
    points: [
      "Minimum Age: Users must be at least 18 years old to access or use our services.",
      "Legal Eligibility: You must have the legal capacity to enter into binding contracts in your jurisdiction.",
      "Regional Limitations: Some services may be unavailable in particular locations due to regulatory restrictions or other limitations.",
    ],
  },
  {
    id: 3,
    title: "User Account Responsibilities",
    points: [
      "Maintaining the confidentiality of your account credentials, including passwords and security information.",
      "Providing accurate, current, and complete information during registration and while using our services.",
      "Accepting full responsibility for all activities that occur under your account.",
      "Immediately reporting any unauthorized access, security breaches, or suspicious activity related to your account.",
    ],
  },
  {
    id: 4,
    title: "Service Usage Guidelines",
    points: [
      "Engaging in any illegal, fraudulent, or deceptive actions using our services.",
      "Attempting to bypass, disable, or interfere with any security features or measures of our platform.",
      "Using our services for money laundering, terrorist financing, or any other unlawful financial activities.",
      "Interfering with, disrupting, or negatively impacting other users or the proper functioning of our platform.",
      "You must comply with all applicable local, state, national, and international laws and regulations while using our services.",
    ],
  },
  {
    id: 5,
    title: "Intellectual Property",
    content:
      "All content, software, design components, trademarks, logos, and other intellectual property displayed on our platform are solely owned by Smart Wallet Management or its licensors. Users may not copy, reproduce, distribute, share, or modify any materials from our platform without prior written consent.",
  },
  {
    id: 6,
    title: "Financial Transactions",
    points: [
      "Transaction fees and service charges are subject to change without prior notice. Current fees will always be displayed before you confirm any transaction.",
      "You bear full responsibility for your financial decisions and actions taken on our platform.",
      "We do not guarantee transaction results, recovery outcomes, or market performance. Past performance is not indicative of future results.",
    ],
  },
  {
    id: 7,
    title: "Limitation of Liability",
    points: [
      "Any financial losses, including but not limited to loss of funds, profits, or digital assets arising from the use of our services.",
      "Any indirect, incidental, special, consequential, or punitive damages, regardless of the cause of action.",
      "Any actions, errors, or omissions of third parties, including but not limited to service providers, partners, or other users.",
    ],
  },
  {
    id: 8,
    title: "Dispute Resolution",
    content:
      "Any disputes, claims, or controversies arising out of or relating to these terms or your use of our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. All arbitration proceedings shall be conducted in English. By agreeing to these terms, you waive your right to participate in class action lawsuits or class-wide arbitration.",
  },
  {
    id: 9,
    title: "Modifications to Terms",
    content:
      "We reserve the right to modify, update, or revise these terms at any time and at our sole discretion. When material changes are made, we will update the 'Last Updated' date at the top of this page. Continued use of our services after any modifications constitutes your acceptance of the updated terms.",
  },
  {
    id: 10,
    title: "Termination",
    content:
      "We hold the right to suspend or terminate your account at our sole discretion, with or without prior notice, in the event of any breach of these terms. Upon termination, your right to access and use our services will immediately cease.",
  },
];

function TermsConditions() {
  return (
    <div className="bg-[#06122b] text-white min-h-screen">
      <Navbar />

      <div className="relative overflow-hidden">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00c8ff 1px, transparent 1px),
              linear-gradient(to bottom, #00c8ff 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="w-16 h-16 mx-auto rounded-2xl border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center mb-6">
              <FileText className="text-cyan-400" size={30} />
            </div>

            <h1 className="text-5xl font-bold mb-4">Terms and Conditions</h1>

            <p className="text-gray-300 text-lg">Smart Wallet Management</p>

            <p className="text-gray-500 mt-2">Last Updated: March 2026</p>
          </div>

          {/* Intro */}
          <div className="bg-[#0c1b3d]/90 border border-white/10 rounded-3xl p-8 mb-10">
            <p className="text-gray-300 leading-8 text-lg">
              Welcome to{" "}
              <span className="font-semibold text-white">
                Smart Wallet Management
              </span>
              . By accessing or using our services, you agree to these Terms and
              Conditions that govern your use of our platform. Please read them
              carefully before proceeding.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-[#0c1b3d]/90 border border-white/10 rounded-3xl p-8 mb-12">
            <h2 className="text-xl font-semibold mb-8 uppercase tracking-wider text-gray-300">
              Table of Contents
            </h2>

            <div className="grid md:grid-cols-2 gap-5 text-gray-400">
              {sections.map((item) => (
                <a
                  key={item.id}
                  href={`#section-${item.id}`}
                  className="hover:text-cyan-400 transition"
                >
                  {item.id}. {item.title}
                </a>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <div
                key={section.id}
                id={`section-${section.id}`}
                className="bg-[#0c1b3d]/90 border border-white/10 rounded-3xl p-8"
              >
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-cyan-400 mr-3">{section.id}.</span>
                  {section.title}
                </h2>

                {section.content && (
                  <p className="text-gray-300 leading-9 text-lg">
                    {section.content}
                  </p>
                )}

                {section.points && (
                  <ul className="space-y-5 text-gray-300">
                    {section.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-4 leading-8 text-lg"
                      >
                        <span className="w-2 h-2 rounded-full bg-cyan-400 mt-3" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Contact */}
            <div className="bg-[#0c1b3d]/90 border border-white/10 rounded-3xl p-8">
              <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

              <p className="text-gray-300 leading-8 text-lg mb-6">
                If you have any questions or concerns regarding these Terms and
                Conditions, please contact us:
              </p>

              <div className="space-y-3 text-lg text-gray-300">
                <p>Phone: +1(888) 769–0872</p>
                <p>Availability: 24/7 Expert Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default TermsConditions;

import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import toast from "react-hot-toast";

import { db } from "../firebase";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function ConsultationPopup() {
  const [showPopup, setShowPopup] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
  });

  useEffect(() => {
    setShowPopup(true);

    const interval = setInterval(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.reason) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "inquiries"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      toast.success("Inquiry Submitted Successfully");

      setFormData({
        name: "",
        email: "",
        phone: "",
        reason: "",
      });
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (!showPopup) return null;

  return (
    <>
      {/* BACKGROUND BLUR */}
      <div className="fixed inset-0 z-[80] backdrop-blur-xl bg-black/10" />

      {/* POPUP */}
      <div className="fixed inset-0 z-[90] flex items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl overflow-hidden border border-white/10 bg-[#1a2742] shadow-2xl animate-[popup_0.4s_ease]">
          {/* HEADER */}
          <div className="bg-[#08b8e8] px-6 py-4 flex items-center justify-between">
            <h2 className="text-white text-2xl font-bold">
              Get Free Consultation
            </h2>

            <button
              onClick={() => setShowPopup(false)}
              className="text-white text-3xl leading-none hover:scale-110 transition"
            >
              ×
            </button>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* NAME */}
            <div>
              <label className="block text-white mb-2 text-sm font-medium">
                Name <span className="text-red-400">*</span>
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full bg-[#263553] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-white mb-2 text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full bg-[#263553] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-white mb-2 text-sm font-medium">
                Phone Number <span className="text-red-400">*</span>
              </label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (___) ___-____"
                className="w-full bg-[#263553] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400"
              />
            </div>

            {/* REASON */}
            <div>
              <label className="block text-white mb-2 text-sm font-medium">
                Reason <span className="text-red-400">*</span>
              </label>

              <textarea
                rows="4"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Briefly describe your issue..."
                className="w-full bg-[#263553] border border-white/10 rounded-lg px-4 py-3 text-white outline-none resize-none focus:border-cyan-400"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#f5ab0c] hover:bg-[#ffbb28] transition text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send size={18} />

              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ConsultationPopup;

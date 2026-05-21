import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase";

import { signInWithEmailAndPassword } from "firebase/auth";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, email, password);

      navigate("/admin/dashboard");
    } catch (error) {
      console.log(error);

      alert("Invalid Email or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* TOP */}
        <div className="bg-[#0f172a] px-8 py-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-600 mx-auto flex items-center justify-center">
            <ShieldCheck className="text-white" size={34} />
          </div>

          <h2 className="text-white text-3xl font-bold mt-5">Admin Login</h2>

          <p className="text-gray-300 mt-2">Smart Wallet Management</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleLogin} className="p-8 space-y-5">
          {/* EMAIL */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="admin@smartwallet.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-black"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-black"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* DEMO */}
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;

import { Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-[#07142d]/95 backdrop-blur-md border-b border-[#13284a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-[90px]">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://smartwalletmanagement.com/assets/img/logo/logo.png"
              alt="logo"
              className="h-[55px] object-contain"
            />
          </div>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-10 text-[16px] font-medium">
            {/* HOME */}
            <Link
              to="/"
              className={`pb-1 transition ${
                isActive("/")
                  ? "text-[#00c8ff] border-b-2 border-[#00c8ff]"
                  : "text-white hover:text-[#00c8ff]"
              }`}
            >
              Home
            </Link>

            {/* PRIVACY */}
            <Link
              to="/privacy-policy"
              className={`pb-1 transition ${
                isActive("/privacy-policy")
                  ? "text-[#00c8ff] border-b-2 border-[#00c8ff]"
                  : "text-white hover:text-[#00c8ff]"
              }`}
            >
              Privacy Policy
            </Link>

            {/* TERMS */}
            <Link
              to="/terms-and-conditions"
              className={`pb-1 transition ${
                isActive("/terms-and-conditions")
                  ? "text-[#00c8ff] border-b-2 border-[#00c8ff]"
                  : "text-white hover:text-[#00c8ff]"
              }`}
            >
              Terms & Conditions
            </Link>
          </nav>

          {/* Phone Button */}
          <button className="bg-[#f8b319] hover:bg-yellow-400 transition text-black px-8 py-4 rounded-xl font-semibold flex items-center gap-3 shadow-lg">
            <Phone size={20} />
            <span className="text-[18px]">+1(888)769–0872</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

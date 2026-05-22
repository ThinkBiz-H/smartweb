import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-[#07142d]/95 backdrop-blur-md border-b border-[#13284a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[80px] md:h-[90px]">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo1.png"
              alt="logo"
              className="h-[70px] md:h-[95px] object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10 text-[16px] font-medium">
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
          {/* Phone Button */}
          <button className="bg-[#f8b319] hover:bg-yellow-400 transition text-black px-3 sm:px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg whitespace-nowrap">
            <Phone size={18} className="shrink-0" />

            {/* Full Number Always */}
            <span className="text-[14px] sm:text-[17px] leading-none">
              +1(888)769–0872
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white ml-3"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#07142d] border-t border-[#13284a] px-6 py-5 flex flex-col gap-5">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className={`transition ${
              isActive("/")
                ? "text-[#00c8ff]"
                : "text-white hover:text-[#00c8ff]"
            }`}
          >
            Home
          </Link>

          <Link
            to="/privacy-policy"
            onClick={() => setOpen(false)}
            className={`transition ${
              isActive("/privacy-policy")
                ? "text-[#00c8ff]"
                : "text-white hover:text-[#00c8ff]"
            }`}
          >
            Privacy Policy
          </Link>

          <Link
            to="/terms-and-conditions"
            onClick={() => setOpen(false)}
            className={`transition ${
              isActive("/terms-and-conditions")
                ? "text-[#00c8ff]"
                : "text-white hover:text-[#00c8ff]"
            }`}
          >
            Terms & Conditions
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;

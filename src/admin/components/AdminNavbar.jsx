import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AdminNavbar() {
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[80px] flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
              SW
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                SmartWallet Admin
              </h2>

              <p className="text-sm text-gray-500">Inquiry Management Panel</p>
            </div>
          </div>

          {/* RIGHT */}
          <button
            onClick={() => navigate("/admin")}
            className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default AdminNavbar;
